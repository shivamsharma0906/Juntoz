import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught:', error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center px-6 text-center">
          <p className="font-heading font-black text-white text-2xl uppercase mb-3">
            Something went wrong
          </p>
          <p className="font-body text-white/50 text-sm max-w-md mb-6">
            {this.props.message || 'This section failed to load. Please refresh the page or try again later.'}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-xl font-heading font-black uppercase text-xs tracking-widest text-[#050508] bg-[#00F5D4] hover:bg-[#00e1c2] transition-colors"
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
