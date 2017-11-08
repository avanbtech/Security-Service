import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import Link from '../../components/Link';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import Feedback from '../../components/Feedback';


import homebackground from '../../../test.jpg';




function Home() {
  return (
  	<div className="home">
	    <div className={s.root}>
          <div className={s.blur}>
          </div>
        <div className={s.container}>
          <Main className={s.main} />
        </div>
        <div className={s.footer}>
          <div className={s.footerContent}>
            <Feedback />
            <Footer />
          </div>
        </div>
	    </div>
    </div>
  );
}

export default withStyles(Home, s);
