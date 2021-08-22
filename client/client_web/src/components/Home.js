import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container" style={divStyle}>
        <h3>test</h3>
    </div>
  );
};

export default Home;
