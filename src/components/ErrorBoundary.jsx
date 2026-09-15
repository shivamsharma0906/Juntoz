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
        <div className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-12 text-center bg-[#F7F6F2]">
          <p className="font-heading font-black text-[#111111] text-2xl uppercase mb-3">
            Something went wrong
          </p>
          <p className="font-body text-[#5F5F5A] text-sm max-w-md mb-6">
            {this.props.message || 'This section failed to load. Please refresh the page or try again later.'}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-full font-heading font-bold uppercase text-xs tracking-widest text-white bg-[#111111] hover:bg-[#5D2E85] transition-colors shadow-sm"
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
