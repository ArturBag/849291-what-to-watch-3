import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Overview from "../overview/overview.jsx";
import Details from "../details/details.jsx";
import Reviews from "../reviews/reviews.jsx";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const {movieDetailsData, activeTabInfo} = this.props;

    switch (activeTabInfo) {
      case `Overview`:
        return (
          <Overview
            movieDetailsData={movieDetailsData}
          />
        );
      case `Details`:
        return (
          <Details
            movieDetailsData={movieDetailsData}
          />
        );
      case `Reviews`:
        return (
          <Reviews
            movieDetailsData={movieDetailsData}
          />
        );

    }

    return null;

  }

}

export default Tabs;

Tabs.propTypes = {
  movieDetailsData: PropTypes.object.isRequired,
  activeTabInfo: PropTypes.string.isRequired
};
