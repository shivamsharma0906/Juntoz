import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://juntoz.in';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export default function PageMeta({ title, description, path = '' }) {
  const fullTitle = title.includes('Juntoz')
    ? title
    : `${title} | Juntoz Digital Marketing Agency`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </Helmet>
  );
}
