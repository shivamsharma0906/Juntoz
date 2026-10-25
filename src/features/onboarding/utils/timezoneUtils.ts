/**
 * Timezone and Slot Conversion Utilities
 * Handles timezone detection, IST slot window calculations, DST shifts, and dual IST/local formatting.
 */

export interface TimeSlotWindow {
  id: 'morning' | 'afternoon' | 'evening';
  label: string;
  istHours: string;
  startHourIst: number;
  startMinuteIst: number;
  endHourIst: number;
  endMinuteIst: number;
}

export const TIME_SLOT_WINDOWS: TimeSlotWindow[] = [
  {
    id: 'morning',
    label: 'Morning',
    istHours: '10:00 AM – 1:00 PM IST',
    startHourIst: 10,
    startMinuteIst: 0,
    endHourIst: 13,
    endMinuteIst: 0,
  },
  {
    id: 'afternoon',
    label: 'Afternoon',
    istHours: '2:00 PM – 5:00 PM IST',
    startHourIst: 14,
    startMinuteIst: 0,
    endHourIst: 17,
    endMinuteIst: 0,
  },
  {
    id: 'evening',
    label: 'Evening',
    istHours: '5:00 PM – 8:00 PM IST',
    startHourIst: 17,
    startMinuteIst: 0,
    endHourIst: 20,
    endMinuteIst: 0,
  },
];

export const POPULAR_TIMEZONES = [
  { value: 'Asia/Kolkata', label: 'India Standard Time (IST) · GMT+5:30' },
  { value: 'Asia/Dubai', label: 'Gulf Standard Time (GST) · Dubai · GMT+4' },
  { value: 'Asia/Singapore', label: 'Singapore Time (SGT) · GMT+8' },
  { value: 'Asia/Bangkok', label: 'Indochina Time (ICT) · Bangkok · GMT+7' },
  { value: 'Europe/London', label: 'UK (GMT / BST) · London' },
  { value: 'Europe/Paris', label: 'Central European Time (CET / CEST) · Paris' },
  { value: 'America/New_York', label: 'US Eastern (EST / EDT) · New York' },
  { value: 'America/Chicago', label: 'US Central (CST / CDT) · Chicago' },
  { value: 'America/Denver', label: 'US Mountain (MST / MDT) · Denver' },
  { value: 'America/Los_Angeles', label: 'US Pacific (PST / PDT) · Los Angeles' },
  { value: 'Australia/Sydney', label: 'Australian Eastern (AEST / AEDT) · Sydney' },
];

/**
 * Returns the user's detected system timezone or falls back to 'Asia/Kolkata'
 */
export function detectUserTimezone(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && typeof tz === 'string') {
      return tz;
    }
  } catch {
    // ignore
  }
  return 'Asia/Kolkata';
}

/**
 * Calculates tomorrow's date formatted as YYYY-MM-DD in the given timezone.
 */
export function getTomorrowDateInTimezone(timezone: string = 'Asia/Kolkata'): string {
  try {
    // Current date representation in specified timezone
    const now = new Date();
    const tzDateStr = now.toLocaleString('en-US', { timeZone: timezone });
    const localNow = new Date(tzDateStr);

    localNow.setDate(localNow.getDate() + 1);
    const yyyy = localNow.getFullYear();
    const mm = String(localNow.getMonth() + 1).padStart(2, '0');
    const dd = String(localNow.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  } catch {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }
}

/**
 * Validates whether a given YYYY-MM-DD date is strictly in the future (earliest tomorrow)
 * in the specified timezone.
 */
export function isDateTomorrowOrLater(dateStr: string, timezone: string = 'Asia/Kolkata'): boolean {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const tomorrow = getTomorrowDateInTimezone(timezone);
  return dateStr >= tomorrow;
}

/**
 * Formats a time window for display on chips or in summaries.
 * Shows local time and IST if timezone is not Asia/Kolkata.
 * Automatically accounts for DST via native Intl.DateTimeFormat on the given date.
 */
export function formatTimeWindowLabel(
  window: TimeSlotWindow,
  timezone: string = 'Asia/Kolkata',
  targetDateStr?: string
): { mainLabel: string; subLabel?: string } {
  if (timezone === 'Asia/Kolkata') {
    return {
      mainLabel: `${window.label}`,
      subLabel: window.istHours,
    };
  }

  try {
    // Use target date or tomorrow's date to compute DST-accurate offset
    const dateToUse = targetDateStr || getTomorrowDateInTimezone(timezone);
    const [year, month, day] = dateToUse.split('-').map(Number);

    // IST is UTC+05:30. Construct UTC date equivalent to IST start time
    const startUtcMinutes = (window.startHourIst * 60 + window.startMinuteIst) - (5 * 60 + 30);
    const startUtc = new Date(Date.UTC(year, month - 1, day, 0, startUtcMinutes, 0));

    // End time in UTC
    const endUtcMinutes = (window.endHourIst * 60 + window.endMinuteIst) - (5 * 60 + 30);
    const endUtc = new Date(Date.UTC(year, month - 1, day, 0, endUtcMinutes, 0));

    const timeFmt = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    const tzNameFmt = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      timeZoneName: 'short',
    });

    const localStart = timeFmt.format(startUtc);
    const localEnd = timeFmt.format(endUtc);

    // Extract timezone abbreviation (e.g. GST, EDT, GMT)
    const tzParts = tzNameFmt.formatToParts(startUtc);
    const tzAbbr = tzParts.find((p) => p.type === 'timeZoneName')?.value || timezone.split('/')[1] || timezone;

    const localTimeRange = `${localStart} – ${localEnd} ${tzAbbr}`;

    return {
      mainLabel: `${window.label}`,
      subLabel: `${localTimeRange} (${window.istHours})`,
    };
  } catch {
    return {
      mainLabel: window.label,
      subLabel: window.istHours,
    };
  }
}

/**
 * Returns formatted dual-timezone string for emails and confirmation screens:
 * e.g. "Morning: 10:00 AM – 1:00 PM IST (8:30 AM – 11:30 AM in Asia/Dubai)"
 */
export function formatSlotSummary(
  windowIds: string[],
  timezone: string = 'Asia/Kolkata',
  targetDateStr?: string
): string {
  if (!windowIds || windowIds.length === 0) return 'Any available slot';

  const selectedWindows = TIME_SLOT_WINDOWS.filter((w) => windowIds.includes(w.id));
  if (selectedWindows.length === 0) return windowIds.join(', ');

  return selectedWindows
    .map((win) => {
      const { mainLabel, subLabel } = formatTimeWindowLabel(win, timezone, targetDateStr);
      return `${mainLabel}: ${subLabel || win.istHours}`;
    })
    .join(' | ');
}
