import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import Link from '../../components/Link';
import Main from '../../components/Main';


import homebackground from '../../../test.jpg';
import homebackground1 from '../../../test1.jpg';
const homeImage = {
    backgroundSize: '100% 100%', //记得这里100%
    backgroundImage: 'url(' + homebackground + ')',
    //或者下面这种也行
    backgroundImage0: 'url(' + homebackground1 + ')'
}

function Home() {
  return (
  	<div className="home" style={ homeImage }>
	    <div className={s.root}>
	      <div className={s.container}>
	        <h1 className={s.title}></h1>
	        <Main className={s.main} />
	      </div>
	    </div>
    </div>
  );
}

export default withStyles(Home, s);
