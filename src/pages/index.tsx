/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import '../components/App.css';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import queryString from 'query-string';

import SignupForm from '../components/SignupForm';
import Banner from '../components/Banner';

const baseClass = 'App';

// eslint-disable-next-line react/prefer-stateless-function
const App: React.FC = (location: any) => {
  console.log(
    'env vars',
    process.env.GATSBY_CONTEXT,
    process.env.GATSBY_DEPLOY_URL,
    process.env.ENV,
    process.env.CONTEXT,
    process.env.DEPLOY_URL,
    process.env.NETLIFY,
    process.env.GATSBY_NETLIFY
  );

  const data = useStaticQuery(graphql`
    query MyQuery {
      mario: file(relativePath: { eq: "mario-noir.jpg" }) {
        childImageSharp {
          fixed(height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      josh: file(relativePath: { eq: "josh-noir.jpg" }) {
        childImageSharp {
          fixed(height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dan: file(relativePath: { eq: "dan-noir.jpg" }) {
        childImageSharp {
          fixed(height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mike: file(relativePath: { eq: "mike-noir.jpg" }) {
        childImageSharp {
          fixed(height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logo: file(relativePath: { eq: "electric-neil-logo2.png" }) {
        childImageSharp {
          fixed(width: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fb: file(relativePath: { eq: "fb.png" }) {
        childImageSharp {
          fixed(height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twit: file(relativePath: { eq: "twit.png" }) {
        childImageSharp {
          fixed(height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      email: file(relativePath: { eq: "email.png" }) {
        childImageSharp {
          fixed(height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  // const res = queryString.parse(window.location.search);
  // console.log('window', res);
  const res2 = queryString.parse(location.location.search);
  const {
    unsubscribe: unsubscriberId,
    subscribe: subscriberId,
  } = queryString.parse(location.location.search);
  console.log('props', res2);
  console.log('props loc', location);
  console.log('sub', subscriberId);
  console.log('unSub', unsubscriberId);
  console.log('env vars', process.env);

  const [isClient, setClient] = useState(false);
  const key = isClient ? 'client' : 'server';

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div className="App">
      {/* <Router basepath="/"> */}
      {isClient && subscriberId && (
        <Banner key={key} path="/subscribe/:subscriberId" type="subscribe" />
      )}
      {isClient && unsubscriberId && (
        <Banner
          key={key}
          path="/unsubscribe/:subscriberId"
          type="unsubscribe"
        />
      )}
      {/* </Router> */}
      <a href="https://www.instagram.com/electric.neil/" target="_blank">
        <Img
          className={`${baseClass}__logo`}
          fixed={data.logo.childImageSharp.fixed}
        />
      </a>
      {/* <hr
        style={{
          borderTop: '1px solid grey',
          maxWidth: '75%',
          margin: '0 auto',
        }}
      /> */}
      <div className={`${baseClass}__band-pics`}>
        <div className={`${baseClass}__band-pics-closeup--landscape`}>
          <Img fixed={data.mario.childImageSharp.fixed} alt="The Homie" />
        </div>

        <div className={`${baseClass}__band-pics-closeup`}>
          <Img fixed={data.josh.childImageSharp.fixed} alt="The Homie" />
        </div>

        <div className={`${baseClass}__band-pics-closeup`}>
          <Img fixed={data.dan.childImageSharp.fixed} alt="The Homie" />
        </div>

        <div className={`${baseClass}__band-pics-closeup`}>
          <Img fixed={data.mike.childImageSharp.fixed} alt="The Homie" />
        </div>
      </div>
      <SignupForm />
      <div className={`${baseClass}__links`}>
        <div className={`${baseClass}__link-item`}>
          <a href="https://www.facebook.com/ElectricNeil/" target="_blank">
            <Img fixed={data.fb.childImageSharp.fixed} alt="The Twitter" />
          </a>
        </div>
        {/*
        <div className={`${baseClass}__link-item`}>
          <a href="https://twitter.com/electric_neils" target="_blank">
            <Img fixed={data.twit.childImageSharp.fixed} alt="The Twitter" />
          </a>
        </div> */}

        <div
          className={`${baseClass}__link-item, ${baseClass}__link-item--middle`}
        >
          {/* <a href="https://soundcloud.com/electric_neil" target="_blank">
              <img src="/sc.png" alt="Sound Cloud" height="64px" />
            </a>        */}
          <iframe
            title="soundcloud"
            style={{ maxWidth: '450px', minWidth: '300px' }}
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/327074774&color=%23ff5500&auto_play=false&sharing=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&show_artwork=false&buying=false&liking=false&download=false&show_comments=false&show_playcount=false&show_user=false"
          />
        </div>

        <div className={`${baseClass}__link-item`}>
          <a href="mailto:neil@electricneil.com">
            <Img fixed={data.email.childImageSharp.fixed} alt="The Email" />
          </a>
        </div>
      </div>
      <div className={`${baseClass}__footer`}>
        <div className={`${baseClass}__footer-item`}>
          <span>
            Logo by{' '}
            <a href="https://benjaminstillman.com/" target="_blank">
              Benjamin&nbsp;Stillman
            </a>
          </span>
        </div>

        <div className={`${baseClass}__footer-item`}>
          <span>
            Photos by{' '}
            <a href="http://topolino500.com/" target="_blank">
              Bernard&nbsp;Bluhm
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
