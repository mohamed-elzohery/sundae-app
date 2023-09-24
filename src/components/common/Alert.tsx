import React from "react";
import { Alert } from "react-bootstrap";

export interface AppAlertProps {
  message?: string;
  variant?: string;
}

const AppAlert: React.FC<AppAlertProps> = ({ message, variant }) => {
  return (
    <Alert variant={variant || "danger"}>
      {message || "An error has occured"}
    </Alert>
  );
};

export default AppAlert;
