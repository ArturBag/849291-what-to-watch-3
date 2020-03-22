import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
// import filmsList from "./mocks/films.js";
import {reducer} from "./reducer.js";

// const MovieHeader = {
//   TITLE: filmsList[0].title,
//   GENRE: filmsList[0].genre,
//   ISSUED_DATE: filmsList[0].issuedDate
// };
 // title={MovieHeader.TITLE}
      // genre={MovieHeader.GENRE}
      // issuedDate={MovieHeader.ISSUED_DATE}
      // moviesList={filmsList}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
