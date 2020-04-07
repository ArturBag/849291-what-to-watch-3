import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null
      };

    }

    render() {


      const getActiveItem = (activeElement, elementsList)=> {
        const element = elementsList.find((it)=> it === activeElement);
        this.setState({activeItem: element});
      };

      return (
        <Component
          {...this.props}
          getActiveItem={getActiveItem}
          activeItem={this.state.activeItem}
        />
      );

    }

  }

  return WithActiveItem;

};

export default withActiveItem;
