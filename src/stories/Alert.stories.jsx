import React from "react";

import { Alert } from "./Alert";

export default {
  title: "Alert",
  component: Alert,
};

export const Error = () => {
  return (
    <Alert type="error" title="It look like there was a problem">
      <p>
        please make sure to double check that the form below has all the correct
        information
      </p>
    </Alert>
  );
};
export const Success = () => {
    return (
      <Alert type="success" title="It look like there was a problem">
        <p>
          please make sure to double check that the form below has all the correct
          information
        </p>
      </Alert>
    );
  };
  export const Warning = () => {
    return (
      <Alert type="warning" title="It look like there was a problem">
        <p>
          please make sure to double check that the form below has all the correct
          information
        </p>
      </Alert>
    );
  };
  export const Info = () => {
    return (
      <Alert type="info" title="It look like there was a problem">
        <p>
          please make sure to double check that the form below has all the correct
          information
        </p>
      </Alert>
    );
  };

