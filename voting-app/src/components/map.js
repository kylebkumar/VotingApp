import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
        lat:37.7749,
        lng:-122.4194
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAl1k1oyCgRPB8jOuB_GmABv1EBYEofAG4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.7749}
            lng={-122.4194}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;