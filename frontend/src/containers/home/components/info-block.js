/* @flow */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getState } from '../../../modules/actions/auth';

type Props = {
  contacts: Array<{
    id: string,
    city: string,
    offices: Array<{
    id: string,
    address: string,
    phone: string
    }>
  }>
};

class InfoBlock extends React.Component<Props, {}> {
  render () {
    let props = this.props;
    return (
      <div className="card border-warning">
        <h5 className="card-header bg-warning text-white">Наши контакты</h5>
        <div className="card-body">
          { props.contacts.length ?
            props.contacts.map(item => {
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
            }): '' }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.auth.contacts
});
  
export default connect(mapStateToProps, null)(InfoBlock);