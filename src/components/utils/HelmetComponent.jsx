import React from "react";
import { Helmet } from "react-helmet";

const HelmetComponent = ({ title }) => {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="description" content="Todo list web apllication" />
      <meta name="keywords" content="Reactjs, Redux RTK, Ant Design" />
      <meta name="author" content="Safayet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Helmet>
  );
};

export default HelmetComponent;
