import React, { Component } from 'react';
import AddressItem from './AddressItem';

class AddressCapture extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e);
  }

  render() {
    return (

      <div className="card"><div className="card-body">
      <AddressItem label="Street" id="street" value={this.props.street} onChange={this.handleChange} placeholder="" />
      <AddressItem label="City" id="city" value={this.props.city} onChange={this.handleChange} placeholder="" />
      <AddressItem label="State" id="state" value={this.props.state} onChange={this.handleChange} placeholder="" />
      <AddressItem label="ZIP Code" id="zipCode" value={this.props.postalCode} onChange={this.handleChange} placeholder="" />
      {/* Do we want to have country as an option or is this app only for US residents at this time? */}
      <AddressItem label="Country" id="country" value={this.props.country} onChange={this.handleChange} placeholder="" />
      </div></div>
    );
  }
}

export default AddressCapture;