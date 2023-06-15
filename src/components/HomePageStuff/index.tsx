import React from 'react';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';

export function HomePageDown(): JSX.Element {
  return (
    <section className={styles.why}>
      <div className="container">
        <div className={'row ' + styles.row}>
          <div className='col col--12'>
            <h2>Why DoMini?</h2>
          </div>
          <div className='col col--12'></div>
          <div className="col col--6">
              <p>
                DoMini aims at using the latest <a href='https://exploringjs.com/es6/' target="_blank">ES6</a> features available for modern web browsers - reducing the output file size significantly.
                The subset of features suits projects where older browser compatibility is not an issue and some basic DOM features are sufficient.
              </p>
          </div>
          <div className="col col--6">
            <p>
                DoMini core syntax is <i>mostly</i> identical to jQuery with reduced featureset. Using the well known functions like <code>.each()</code> <code>.data()</code> <code>.css()</code> etc..
                are all present in DoMini as well, so migrating existing projects is less painful.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePageUp(): JSX.Element {
  const code1 =`// Find a node and change class & CSS
  $('div').find('button').addClass('myButton').css({
      "marginLeft": "10px",
      "opacity": 0.5
  });

  // Remove a node && add new
  if ( $('body').hasClass('rtl') ) {
    $('button').last().remove(); // remove last button
    $('body').append('<div>');   // add a new div to body
  };`

  const code2 =`$('button').on('click', function(){
    $.fn.ajax({ 
      url: "http://localhost:3000",
      data: {
        options: $('form').serialize();
      },
      success: function(response){
        console.log(response);
      }
    });
  });`

  return (
    <section className={styles.why}>
      <div className="container">
        <div className={'row ' + styles.row}>
          <div className="col col--6">
            <h2>Node Manipulation</h2>

            <CodeBlock language='javascript'>
              {code1}
            </CodeBlock>

          </div>
          <div className="col col--6">
             <h2>Ajax & Event listeners</h2>  

            <CodeBlock language='javascript'>
              {code2}
            </CodeBlock>

          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePageCompare(): JSX.Element {
  return (
    <section className={styles.why}>
      <div className="container">
        <div className={'row ' + styles.row}>
          <div className="col col--12">
            <h2>How does DoMini compare to jQuery?</h2>
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

