import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import HelmetComponent from "../../components/utils/HelmetComponent";

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <HelmetComponent title={"Error | Todo-App"} />
      <p className="error-code">404</p>
      <p className="error-message">Page Not Found</p>
      <Button type="primary" size="small">
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
