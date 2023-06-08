import React from 'react';
import styles from './styles.module.css';

export default function HomePageDown(): JSX.Element {
  return (
    <section className={styles.why}>
      <div className="container">
        <div className={'row ' + styles.row}>
          <div className="col col--8">
              <h1>Why DoMini?</h1>
              <p>
                DoMini aims at using the latest <a href='https://exploringjs.com/es6/' target="_blank">ES6</a> features available for modern web browsers - reducing the output file size significantly.
                The subset of features aims at projects where older browser compatibility is not an issue and some basic DOM features are sufficient.
              </p>
              <p>
                DoMini core syntax is <i>mostly</i> identical to jQuery with reduced featureset. Using the well known functions like <code>.each()</code> <code>.data()</code> <code>.css()</code> etc..
                are all present in DoMini as well, so migrating existing projects is less painful.
              </p>
              <p>
                DoMini is <strong>not</strong> a replacement for jQuery by any means. jQuery is far superior in features and browser compatibility. DoMini only implements the most commonly used subset of functions
                to make DOM manipulation easier.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
}