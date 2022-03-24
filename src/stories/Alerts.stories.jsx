import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { Alert } from "../components/Alerts";
let anas   = () => {
  console.log("hello");
}
stories.add("success", () => {
  return (
    <Alert type="success" title="It look like there was a problem">
      <p>
        please make sure to double check that the form below has all the correct
        information
      </p>
    </Alert>
  );
});
stories.add("Error", () => {
  return (
    <Alert type="error" title="It look like there was a problem" AllowClose={}>
      <p>
        please make sure to double check that the form below has all the correct
        information
      </p>
    </Alert>
  );
});
