import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.scss';

function Contact({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>

    <ContactInfo developerInfo={developerInfo} />

      </div>
    </div>
  );
}

function ContactInfo(props) {

  const content = props.developerInfo.map((developer) =>

    <div key={developer.id}>

    <li><p> <b>{developer.name}: </b>
    {developer.sfuid}@sfu.ca </p></li>

    </div>
  );
  return (
    <div>
    <ul> {content} </ul>
    </div>
  );
}

const developerInfo = [
  {id: 1, name: 'Raymond Huang', sfuid: 'xiruih'},
  {id: 2, name: 'Junru Tao', sfuid: 'junrut'},
  {id: 3, name: 'Alex Zhang', sfuid: 'cwzhang'},
  {id: 4, name: 'Angel Singh', sfuid: 'asa179'},
  {id: 5, name: 'Lester Chee', sfuid: 'lochee'},
  {id: 6, name: 'Sankait Kumar', sfuid: 'sankaitk'},
  {id: 7, name: 'Jeff Yan', sfuid: 'mingjiey'},
  {id: 8, name: 'Faranak Nobakhtian', sfuid: 'fnobakht'},
  {id: 9, name: 'Contact Everyone', sfuid: '373-gamma'},
];

Contact.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Contact, s);
