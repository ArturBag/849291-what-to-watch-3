import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Overview from "../overview/overview.jsx";
import Details from "../details/details.jsx";
import Reviews from "../reviews/reviews.jsx";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: `Overview`
    };
  }

  render() {

    const {movieDetailsData} = this.props;

    switch (this.state.activeTab) {
      case `Overview`:
        return (
          <Overview
            movieDetailsData={movieDetailsData}
            displayTab={(tab) => this.setState({activeTab: tab})}
          />
        );
      case `Details`:
        return (
          <Details
            movieDetailsData={movieDetailsData}
            displayTab={(tab) => this.setState({activeTab: tab})}
          />
        );
      case `Reviews`:
        return (
          <Reviews
            movieDetailsData={movieDetailsData}
            displayTab={(tab) => this.setState({activeTab: tab})}
          />
        );

    }

    return null;

  }

}

export default Tabs;

Tabs.propTypes = {
  movieDetailsData: PropTypes.object.isRequired,
};
