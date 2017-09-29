import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import Link from '../../components/Link';
import Main from '../../components/Main';

function Home({ news }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Security Request System</h1>
        <Main className={s.main} />
        // <ul className={s.news}>
        //   {news.map((item, index) => (
        //     <li key={index} className={s.newsItem}>
        //       <a href={item.link} className={s.newsTitle}>{item.title}</a>
        //       <span
        //         className={s.newsDesc}
        //         dangerouslySetInnerHTML={{ __html: item.contentSnippet }}
        //       />
        //     </li>
        //   ))}
        // </ul>
      </div>
    </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};

export default withStyles(Home, s);
