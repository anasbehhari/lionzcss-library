import React from "react";

import { Message } from "./Message";

export default {
  title: "Message",
  component: Message,
};

export const Error = () => {
  return (
    <Message type="error">
      <b>Note :</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Message>
  );
};
export const Success = () => {
  return (
    <Message type="success">
      <b>Note :</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Message>
  );
};
export const Warning = () => {
  return (
    <Message type="warning">
      <b>Note :</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Message>
  );
};
export const Info = () => {
  return (
    <Message type="info">
      <b>Note :</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Message>
  );
};
