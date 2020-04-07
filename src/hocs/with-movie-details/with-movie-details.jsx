import React, {PureComponent} from "react";

const withMovieDetails = (Component) => {
  class WithMovieDetails extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: `Overview`
      };

    }

    render() {

      const setActiveTab = (chosedTab)=> {
        this.setState({activeTab: chosedTab});
      };

      return (
        <Component
          {...this.props}
          setActiveTab={setActiveTab}
          activeTab={this.state.activeTab}
        />
      );

    }

  }

  return WithMovieDetails;

};

export default withMovieDetails;
