import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import Link from '../../components/Link';
import Main from '../../components/Main';


import homebackground from '../../../test.jpg';
<<<<<<< 09ff345ed40aac4f6244c79b5e39e5427685949a
<<<<<<< 02971620e8a1fc650757ce1ad5de67d72f968d6a

const homeImage = {
    backgroundSize: '100% 100%', //记得这里100%
    background: `url(${ homeImage })`,
    //或者下面这种也行
    backgroundImage: 'url(' + homebackground + ')'
=======
import homebackground1 from '../../../test1.jpg';
=======

>>>>>>> add background and afjust button
const homeImage = {
    backgroundSize: '100% 100%', //记得这里100%
    background: `url(${ homeImage })`,
    //或者下面这种也行
<<<<<<< 09ff345ed40aac4f6244c79b5e39e5427685949a
    backgroundImage0: 'url(' + homebackground1 + ')'
>>>>>>> little design of main page
=======
    backgroundImage: 'url(' + homebackground + ')'
>>>>>>> add background and afjust button
}

function Home() {
  return (
<<<<<<< 02971620e8a1fc650757ce1ad5de67d72f968d6a
<<<<<<< 5aff6323e1f694aa8a740cea36c64f04e737dbc1
  	<div className="home" style={ homeImage }>
	    <div className={s.root}>
	      <div className={s.container}>
	        
	        <Main className={s.main} />
	      </div>
	    </div>
=======
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}></h1>
        <Main className={s.main} />
      </div>
>>>>>>> change the main part css
=======
  	<div className="home" style={ homeImage }>
	    <div className={s.root}>
	      <div className={s.container}>
	        
	        <Main className={s.main} />
	      </div>
	    </div>
>>>>>>> little design of main page
    </div>
  );
}

export default withStyles(Home, s);
