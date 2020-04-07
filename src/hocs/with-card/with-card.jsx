import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withCard = (Component) => {
  class WithCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isCardMouseOvered: false,
        activePlayerId: -1,

      };

    }


    render() {
      const {title, preview, onMovieCardTitleClick, id, videoSrc, moviesList,
        getActiveItem, activeItem} = this.props;


      const {activePlayerId, isCardMouseOvered} = this.state;
      let indexOfActiveItem = null;
      if (activeItem === null) {
        indexOfActiveItem = -1;
      } else {
        indexOfActiveItem = moviesList.findIndex((it)=> it === activeItem);
      }


      return (
        <Component
          title={title}
          preview={preview}
          videoSrc={videoSrc}
          id={id}
          moviesList={moviesList}
          onMovieCardTitleClick={onMovieCardTitleClick}
          onMouseEnter={() => {
            this.setState({
              activePlayerId: activePlayerId === indexOfActiveItem ? -1 : indexOfActiveItem,
              isCardMouseOvered: !isCardMouseOvered
            });
          }}
          onMouseLeave={() => {
            this.setState({
              isCardMouseOvered: false,
              activePlayerId: -1});
          }}
          activePlayerId={activePlayerId}
          isCardMouseOvered={isCardMouseOvered}
          getActiveItem={getActiveItem}
          activeItem={activeItem}
        >
          <video src="#" className="player__video" poster="img/player-poster.jpg"
            ref={this._videoRef}
          />
        </Component>
      );
    }


  }

  WithCard.propTypes = {
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    onMovieCardTitleClick: PropTypes.func.isRequired,
    videoSrc: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    moviesList: PropTypes.array.isRequired,
    activeItem: PropTypes.oneOfType([
      PropTypes.object.isRequired,
      PropTypes.oneOf([null]).isRequired,
    ]),
    getActiveItem: PropTypes.func.isRequired,
  };

  return WithCard;
};


export default withCard;
