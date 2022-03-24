import React from "react";
import PropTypes from "prop-types";

import "./Alert.css";

export const Alert = (props) => {
  const types = ["success", "error", "info", "warning"];
  const type = types.includes(props.type) ? props.type : "";
  const id = props.id ? props.id : "";
  const AllowClose = props.AllowClose;
  return (
    <div className={`Alert-lz ${type} ${id} ${AllowClose}`}>
      <div className="icon">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 294.995 294.995"
          xmlSpace="preserve"
          width={20}
          height={20}
        >
          <g>
            <path
              d="M291.874,248.279L165.605,26.526c-4.007-7.037-10.776-11.26-18.107-11.26s-14.101,4.202-18.107,11.239L3.121,248.238
		c-3.979,6.989-4.164,15.013-0.493,21.326c3.67,6.313,10.663,10.165,18.705,10.165h252.329c8.042,0,15.035-3.852,18.705-10.165
		C296.038,263.251,295.854,255.268,291.874,248.279z M146.665,86.229c9.665,0,17.5,7.835,17.5,17.5v63c0,9.665-7.835,17.5-17.5,17.5
		c-9.665,0-17.5-7.835-17.5-17.5v-63C129.165,94.064,137,86.229,146.665,86.229z M147.498,204.005c9.665,0,17.5,7.835,17.5,17.5
		c0,9.665-7.835,17.5-17.5,17.5c-9.665,0-17.5-7.835-17.5-17.5C129.998,211.84,137.833,204.005,147.498,204.005z"
            />
          </g>
        </svg>
      </div>
      <div className="Alert-content">
        <h3>{props.title}</h3>
        {props.children}
      </div>
      {AllowClose ? (
        <div className="close" onClick={AllowClose}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
          </svg>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  AllowClose:PropTypes.func
};
