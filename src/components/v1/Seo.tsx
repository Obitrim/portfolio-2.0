import Head from 'next/head';
import { useRouter } from 'next/router';

const SITE_URL = 'https://paulobitrim.dev';
const SITE_NAME = 'Paul Obitrim — Software Engineer';
const DEFAULT_DESCRIPTION =
  'Paul Obitrim is a fullstack software engineer based in Accra, Ghana, specialising in React, Next.js, Vue.js, Node.js and TypeScript. Available for freelance, remote and full-time opportunities.';
const DEFAULT_IMAGE = `${SITE_URL}/og.jpg`;
const DEFAULT_KEYWORDS =
  'Paul Obitrim, Software Engineer, Fullstack Developer, React Developer, Next.js Developer, TypeScript, Vue.js, Node.js, Frontend Developer, Ghana, Accra';

const defaultMeta = {
  title: SITE_NAME,
  siteName: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  type: 'website',
  robots: 'follow, index',
  image: DEFAULT_IMAGE,
  keywords: DEFAULT_KEYWORDS,
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  keywords?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jsonLd?: Record<string, any> | Record<string, any>[];
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = { ...defaultMeta, ...props };

  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  const ogImage =
    meta.image && meta.image.length > 0 ? meta.image : DEFAULT_IMAGE;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta name='description' content={meta.description} />
      <meta name='keywords' content={meta.keywords} />
      <meta name='author' content='Paul Obitrim' />

      {/* Canonical */}
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />

      {/* ── Open Graph (Facebook, LinkedIn, WhatsApp, Slack, Discord) ── */}
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:image' content={ogImage} />
      {/* secure_url required by WhatsApp & LinkedIn */}
      <meta property='og:image:secure_url' content={ogImage} />
      <meta property='og:image:type' content='image/jpeg' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content={meta.title} />
      <meta property='og:locale' content='en_US' />

      {/* ── Twitter / X ── */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:image:alt' content={meta.title} />

      {/* ── LinkedIn-specific ── */}
      <meta property='linkedin:owner' content='paul-obitrim-52304b169' />

      {/* Article-specific */}
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='Paul Obitrim'
          />
        </>
      )}

      {/* JSON-LD structured data */}
      {props.jsonLd && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(props.jsonLd) }}
        />
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#0d0d0d' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#0d0d0d' />
    </Head>
  );
}

const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#f07020',
  },
  { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
];
