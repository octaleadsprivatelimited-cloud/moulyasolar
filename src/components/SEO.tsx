import React from 'react';
import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  image?: string;
  robots?: string;
  keywords?: string[] | string;
};

const DEFAULT_SITE_NAME = 'Moulya solar energies';
const DEFAULT_BASE_URL = 'https://shiridisaisolars.com';
const DEFAULT_IMAGE = '/images/logo.webp';

function buildAbsoluteUrl(path?: string): string {
  if (!path) return DEFAULT_BASE_URL;
  if (path.startsWith('http')) return path;
  return `${DEFAULT_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

function buildAbsoluteImage(image?: string): string {
  const img = image || DEFAULT_IMAGE;
  return buildAbsoluteUrl(img);
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  type = 'website',
  image,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  keywords
}) => {
  const url = buildAbsoluteUrl(path);
  const imageUrl = buildAbsoluteImage(image);
  const pageTitle = title ? `${title}` : DEFAULT_SITE_NAME;
  const keywordString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="author" content={DEFAULT_SITE_NAME} />
      <meta name="language" content="English, Hindi, Telugu" />
      {keywordString ? <meta name="keywords" content={keywordString} /> : null}

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${DEFAULT_SITE_NAME} - Preview`} />
      <meta property="og:site_name" content={DEFAULT_SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="hi_IN" />
      <meta property="og:locale:alternate" content="te_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${DEFAULT_SITE_NAME} - Preview`} />
      <meta name="twitter:site" content="@moulyasolar" />
      <meta name="twitter:creator" content="@moulyasolar" />
    </Helmet>
  );
};

export default SEO;


