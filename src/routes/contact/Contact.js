import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.scss';

function Contact({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>

{/*ContactInfo Function is below this function*/}
    <ContactInfo/>

      </div>
    </div>
  );
}

{/*This part of the code can be encapsulated better by moving the function elsewhere. Storing our names and emails in a database would be even better to allow CSS styling of both email and names*/}
var ContactInfo = React.createClass({
    render: function() {

          {/*Add Pharah's real full name here:*/}
        var names = ['Raymond Huang: xiruih@sfu.ca', 'Junru Tao: junrut@sfu.ca', 'Alex Zhang: cwzhang@sfu.ca',
        'Angel Singh: asa179@sfu.ca', 'Lester Chee: lochee@sfu.ca', 'Sankait Kumar: sankaitk@sfu.ca', 'Jeff Yan: mingjiey@sfu.ca',
        'Pharah: fnobakht@sfu.ca', 'Contact Everyone: 373-gamma@sfu.ca'];

        var namesList = names.map(function(name){
                        return <li> <p><b>{name}</b></p> </li>;
                      })

        return  <ul>{ namesList }</ul>
    }
});

Contact.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Contact, s);
