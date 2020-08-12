import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 1.3521,
    longitude: 103.8198,
    width: "50vw",
    height: "50vh",
    zoom: 11,
  });
  const [selectedNode, setSelectedNode] = useState(null);
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/libingzi/ckd06dkpc0q4f1imqtkojn1hj"
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    >
      {props.nodes.map((node) => (
        <Marker
          key={node.station_name}
          latitude={node.lat}
          longitude={node.lng}
        >
          <button
            className="marker-btn"
            onClick={(e) => {
              e.preventDefault();
              setSelectedNode(node);
            }}
          >
            <img src="https://img.icons8.com/metro/26/000000/marker.png" />
          </button>
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default Map;
