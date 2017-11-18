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
    <div className={s.root}>
			<link rel="stylesheet"
		              href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
		        />
      <div className={s.blur}>
      </div>
      <div className={s.container}>
        <Main className={s.main} />
      </div>
    </div>
  );
}

export default withStyles(Home, s);
