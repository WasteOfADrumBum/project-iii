import React, { Component } from 'react';
import AddressItem from './addressItem';


class AddressInput extends Component {
  render() {
    return (
        <AddressItem
          label="Address"
          value={this.props.query}
          onChange={this.props.onChange}
          placeholder="type an address" />
    );
  }
}

export default AddressInput;