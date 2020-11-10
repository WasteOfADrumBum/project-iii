import React, { Component } from 'react';
import AddressInput from './addressInput';
import AddressCapture from './addressCapture';
import axios from 'axios';

const apiKey = 'NMNsDXKtlI-lu6Z4ro_kmLuRmJTxHhdzjN8emy08418';

class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    // User enters something in address bar
    this.onQuery = this.onQuery.bind(this);
    // User enters something in address field
    this.onAddressChange = this.onAddressChange.bind(this);
    // User clicks check button
    this.onCheck = this.onCheck.bind(this);
    // User clicks clear button
    this.onClear = this.onClear.bind(this);
  }

  onQuery(e) {
    const query = e.target.value;

    if (!query.length > 0) {
      this.setState(this.getInitialState());
      return;
    }

    const self = this;
    axios.get('https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json',
      {'params': {
        'apiKey': apiKey,
        'query': query,
        'maxresults': 1,
      }}).then(function (response) {
          if (response.data.suggestions.length > 0) {
            const id = response.data.suggestions[0].locationId;
            const address = response.data.suggestions[0].address;
            self.setState({
              'address' : address,
              'query' : query,
              'locationId': id
            })
          } else {
            const state = self.getInitialState();
            self.setState(state);
          }
      });
  }

  getInitialState() {
    return {
      'address': {
        'street': '',
        'city': '',
        'state': '',
        'zipCode': '',
        'country': ''
      },
      'query': '',
      'locationId': '',
      'isChecked': false,
      'coords': {}
    }
  }

  onClear(e) {
    const state = this.getInitialState();
    this.setState(state);
  }

  onAddressChange(e) {
    const id = e.target.id
    const val = e.target.value

    let state = this.state
    state.address[id] = val;
    this.setState(state);
  }

  onCheck(e) {
    let params = {
        'apiKey': apiKey,
    }

    if (this.state.locationId.length > 0) {
      params['locationId'] = this.state.locationId;
    } else {
      params['searchtext'] = this.state.address.street
        + this.state.address.city
        + this.state.address.state
        + this.state.address.postalCode
        + this.state.address.country;
    }

    const self = this;
    axios.get('https://geocoder.ls.hereapi.com/6.2/geocode.json',
      {'params': params }
      ).then(function (response) {
        const view = response.data.Response.View
        if (view.length > 0 && view[0].Result.length > 0) {
          const location = view[0].Result[0].Location;

          self.setState({
            'isChecked': 'true',
            'locationId': '',
            'query': location.Address.Label,
            'address': {
              'street': location.Address.HouseNumber + ' ' + location.Address.Street,
              'city': location.Address.City,
              'state': location.Address.State,
              'postalCode': location.Address.PostalCode,
              'country': location.Address.Country
            },
            'coords': {
              'lat': location.DisplayPosition.Latitude,
              'lon': location.DisplayPosition.Longitude
            }
          });
        } else {
          self.setState({
            'isChecked': true,
            'coords': null,
          })
        }

      })
      .catch(function (error) {
        console.log('caught failed query');
        self.setState({
          'isChecked': true,
          'coords': null,
        });
      });
  }

  alert() {
    if (!this.state.isChecked) {
      return;
    }

    if (this.state.coords === null) {
      return (
        <div className="alert alert-warning" role="alert">
          <b>Invalid.</b> The address is not recognized.
        </div>
      );
    } else {
      return (
        <div className="alert alert-success" role="alert">
          <b>Valid Address.</b>  Location is {this.state.coords.lat}, {this.state.coords.lon}.
        </div>
      );
    }
  }

  render() {
    let result = this.alert();
    return (
        <div className="container">
          <AddressInput
            query={this.state.query}
            onChange={this.onQuery}
            />
          <AddressCapture
            street={this.state.address.street}
            city={this.state.address.city}
            state={this.state.address.state}
            postalCode={this.state.address.postalCode}
            country={this.state.address.country}
            onChange={this.onAddressChange}
            />
          <br/>
          { result }
          <button type="submit" className="btn btn-primary" onClick={this.onCheck}>Check</button>
          <button type="submit" className="btn btn-outline-secondary" onClick={this.onClear}>Clear</button>
        </div>
      );
  }
}

export default AddressForm;