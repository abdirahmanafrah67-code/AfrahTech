import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteSEO {
  title: string;
  description: string;
  keywords?: string;
}

const routeSEOMap: Record<string, RouteSEO> = {
  '/': {
    title: 'Afraino | #1 Software & Mobile App Development Company in Somalia',
    description: 'Afraino is Somalia\'s leading software company in Mogadishu. We specialize in iOS/Android Mobile App Development, Web Development, AI Solutions, and App Publishing in Somalia & worldwide.',
    keywords: 'Software Company in Somalia, Mobile App Development Somalia, Web Development Mogadishu, Software Development Mogadishu, Somali App Developers, Tech Company Somalia, Shirkad Software Somalia, Afraino'
  },
  '/home': {
    title: 'Afraino | #1 Software & Mobile App Development Company in Somalia',
    description: 'Afraino is Somalia\'s leading software company in Mogadishu. We specialize in iOS/Android Mobile App Development, Web Development, AI Solutions, and App Publishing in Somalia & worldwide.',
    keywords: 'Software Company in Somalia, Mobile App Development Somalia, Web Development Mogadishu, Software Development Mogadishu, Somali App Developers, Tech Company Somalia, Shirkad Software Somalia, Afraino'
  },
  '/services': {
    title: 'Software & Mobile App Services in Somalia | Afraino',
    description: 'Discover top software services in Somalia: Custom Mobile Apps (iOS/Android), Full-Stack Web Development, AI Automations, App Store Publishing, and Cloud Infrastructure.',
    keywords: 'Software Services Somalia, App Developers Mogadishu, Web Development Somalia, AI Solutions Somalia, App Publishing Somalia'
  },
  '/portfolio': {
    title: 'Featured Software Projects & Apps in Somalia | Afraino',
    description: 'Explore leading mobile apps, fintech systems, and web applications built by Afraino for businesses and startups in Somalia and internationally.',
    keywords: 'Somali Mobile Apps Portfolio, Software Projects Somalia, Published Apps Somalia, Afraino Portfolio'
  },
  '/about': {
    title: 'About Us | Leading Software Agency in Mogadishu, Somalia | Afraino',
    description: 'Meet our world-class engineering and AI development team headquartered in Mogadishu, Somalia, delivering top-tier global software standards.',
    keywords: 'About Afraino, Software Company Mogadishu, Tech Leaders Somalia, Somali Developers, Mogadishu Tech Agency'
  },
  '/contact': {
    title: 'Contact Somalia\'s Leading Software Company | Afraino Mogadishu',
    description: 'Ready to build your next mobile app or website in Somalia? Contact our engineering team in Mogadishu for a free consultation and project quote.',
    keywords: 'Contact Software Company Somalia, Hire Developers Mogadishu, App Development Quote Somalia'
  },
  '/book': {
    title: 'Book a Consultation | Tech & Software Strategy Somalia | Afraino',
    description: 'Schedule a 1-on-1 strategy meeting with our technical directors in Somalia to plan and architect your mobile app or digital platform.',
    keywords: 'Book Tech Consultation Somalia, Software Consultation Mogadishu, Mobile App Strategy'
  }
};

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const currentSEO = routeSEOMap[pathname] || routeSEOMap['/'];

    // Update title
    document.title = currentSEO.title;

    // Update meta description
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', currentSEO.description);
    }

    // Update OG title & description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', currentSEO.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', currentSEO.description);
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://afraino.com${pathname === '/' ? '' : pathname}`);
    }

    // Update Twitter title & description
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', currentSEO.title);
    }

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', currentSEO.description);
    }
  }, [pathname]);

  return null;
}
