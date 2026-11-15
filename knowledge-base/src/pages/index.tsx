import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')} style={{ padding: '4rem 0', textAlign: 'center' }}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          <Link
            className="button button--secondary button--lg"
            to="/ARCHITECTURE">
            Explore Architecture
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Context bounded architecture integrating game and social network.">
      <HomepageHeader />
      <main>
        <div className="container padding-vert--xl" style={{ textAlign: 'center' }}>
          <h2>Welcome to Tessel</h2>
          <p>
            Tessel is a project demonstrating a highly integrated architecture where a game engine and a social network coexist in the same DOM/viewport.
          </p>
          <p>
            Explore the documentation to learn more about the <strong>@tessel/hub</strong>, <strong>@tessel/game</strong>, and the <strong>Context Bounded</strong> approach.
          </p>
        </div>
      </main>
    </Layout>
  );
}
