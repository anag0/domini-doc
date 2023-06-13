import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';
import {HomePageDown, HomePageCompare} from '../components/HomePageDown';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary"
            to="/docs/intro">
            Documentation
          </Link>
          <Link
            className="button button--secondary"
            to="https://github.com/anag0/domini">
            GitHub
          </Link>
          
        </div>
        <div className="home__code">
          <p style={{display: 'inline-block', maxWidth: '70vw'}}>
            <CodeBlock language='bash'>npm install domini --save-dev</CodeBlock>
          </p>
          <p>..or directly:</p>
          <p style={{display: 'inline-block', maxWidth: '70vw'}}>
            <CodeBlock language='html'>&lt;script src=&quot;https://unpkg.com/domini@latest/dist/domini.js&quot;&gt;&lt;/script&gt;</CodeBlock>
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`jQuery alternative`}
      description="A minimalistic HTML document manipulation and traversal javascript tool">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomePageDown />
        <HomePageCompare />
      </main>
    </Layout>
  );
}
