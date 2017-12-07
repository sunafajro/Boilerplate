import React from 'react';
import { array } from 'prop-types';
import { Card } from 'antd';

export const InfoBlock = ({ contacts }) => {
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
    <Card title="Наши контакты">
      { information }
    </Card>
  );
}

InfoBlock.propTypes = {
  contacts: array.isRequired
};