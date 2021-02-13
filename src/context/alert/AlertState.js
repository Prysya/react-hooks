import React, { useReducer } from "react";

import AlertContext from "./alertContext";
import { alertReducer } from "./alertReducer";
import { HIDE_ALERT, SHOW_ALERT } from "../types";

const AlertState = ({ children }) => {
  //eslint-disable-next-line
  const [state, dispatch] = useReducer(alertReducer, null);

  //eslint-disable-next-line
  const hide = () => dispatch({ type: HIDE_ALERT });
  //eslint-disable-next-line
  const show = (text, type = "secondary") =>
    dispatch({ type: SHOW_ALERT, payload: { type, text } });

  return (
    <AlertContext.Provider value={{ hide, show, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
