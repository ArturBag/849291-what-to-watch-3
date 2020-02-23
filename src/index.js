import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import filmsList from "./mocks/films.js";

const MovieHeader = {
  TITLE: filmsList[0].title,
  GENRE: filmsList[0].genre,
  ISSUED_DATE: filmsList[0].issuedDate
};

ReactDOM.render(
    <App
      title={MovieHeader.TITLE}
      genre={MovieHeader.GENRE}
      issuedDate={MovieHeader.ISSUED_DATE}
      moviesList={filmsList}

    />,
    document.querySelector(`#root`)
);
