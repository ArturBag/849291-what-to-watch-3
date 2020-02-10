import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const MovieHeader = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  ISSUED_DATE: 2014
};

ReactDOM.render(
    <App
      title={MovieHeader.TITLE}
      genre={MovieHeader.GENRE}
      issuedDate={MovieHeader.ISSUED_DATE}
    />,
    document.querySelector(`#root`)
);
