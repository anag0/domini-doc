import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Small & Simple',
    Svg: require('@site/static/img/rocket.svg').default,
    description: (
      <>
        DoMini is a tiny ES6 javascript library with the powerful <code>jQuery</code> syntax.
        Only <strong>~15kB</strong> in size, minimal overhead to your project.
      </>
    ),
  },
  {
    title: 'Many Features',
    Svg: require('@site/static/img/many-features.svg').default,
    description: (
      <>
        By default the <code>animate</code>, <code>highlight</code>, <code>xhttp (ajax)</code>, <code>serialize</code>, <code>viewport</code>
        modules are included.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/happy-heart.svg').default,
    description: (
      <>
        You can download, modify and even <a href='https://github.com/anag0/domini'>contribute</a> to the code if you want to!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
