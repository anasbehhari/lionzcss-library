import React from "react";
import { storiesOf } from "@storybook/react";

import { Alert } from "../components/Alerts";

const stories = storiesOf("Alerts", module);

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
stories.add("warning", () => {
  return (
    <Alert type="warning" title="It look like there was a problem">
      <p>
        please make sure to double check that the form below has all the correct
        information
      </p>
    </Alert>
  );
});
