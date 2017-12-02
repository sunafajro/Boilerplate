import React from 'react';
import { array } from 'prop-types';

InfoBlock.propTypes = {
  contacts: array.isRequired
};

export function InfoBlock ({ contacts }) {
  let information = [];
  if (contacts.length) {
    information = contacts.map(item => {
      let offices = [];
      if (item.offices.length) {
        offices = item.offices.map(office => {
          return (
            <li key={ office.id }>
              { office.address }
              <br />Тел. { office.phone }
            </li>
          );
        });
      }
      return (
        <div key={ item.id }>
          <p><b>{ item.city }:</b></p>
          { offices.length ?
            <ul>
              { offices }
            </ul> : '' }
        </div>
      );
    })
  }

  return (
    <div className="card border-warning">
      <h5 className="card-header bg-warning text-white">Наши контакты</h5>
      <div className="card-body">
        { information }
      </div>
    </div>
  );
}