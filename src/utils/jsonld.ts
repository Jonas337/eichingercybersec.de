const SITE_URL = 'https://www.eichingercybersec.de';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eichinger Cybersec',
    description: 'Individuelle Cybersicherheitslösungen für kleine und mittelständische Unternehmen.',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/og-default.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'DE',
      availableLanguage: ['Deutsch', 'English'],
    },
    sameAs: [
      'https://www.linkedin.com/in/jonas337/',
    ],
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Eichinger Cybersec',
    description: 'Cybersicherheit für kleine und mittelständische Unternehmen – zuverlässig, effizient und kostengünstig.',
    url: `${SITE_URL}/`,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blog/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function serviceSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Eichinger Cybersec',
      url: `${SITE_URL}/`,
    },
    areaServed: 'DE',
  };
}

export function personSchema(name: string, role: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle: role,
    description,
    worksFor: {
      '@type': 'Organization',
      name: 'Eichinger Cybersec',
      url: `${SITE_URL}/`,
    },
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  author: string;
  slug: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/og-default.svg`,
    datePublished: post.pubDate.toISOString(),
    ...(post.updatedDate && { dateModified: post.updatedDate.toISOString() }),
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Eichinger Cybersec',
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
