// Simple Google Analytics 4 configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

declare global {
  interface Window {
    gtag: (
      command: 'config',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
