import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class Card extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isCardMouseOvered: false,
      activePlayerId: -1,

    };

  }

  _onMoiveCardMouseOver() {
    this.setState({isCardMouseOvered: true});
  }

  _onMoiveCardMouseOut() {
    this.setState({isCardMouseOvered: false});
  }


  render() {

    const {title, preview, onMovieCardTitleClick, videoSrc, id} = this.props;

    const {activePlayerId, isCardMouseOvered} = this.state;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          this._onMoiveCardMouseOver();
        }}
        onMouseOut={() => {
          this._onMoiveCardMouseOut();
        }}
      >
        <div className="small-movie-card__image">
          {isCardMouseOvered ?
            <VideoPlayer
              previewMode={id === activePlayerId}
              isPlaying={id === activePlayerId}
              videoSrc={videoSrc}
              onPlayMouseOver={() => this.setState({
                activePlayerId: activePlayerId === id ? -1 : id
              })}
            />
            :
            <img
              src={preview}
              alt={title}
              width={280}
              height={175}
            />
          }
        </div>


        <h3 className="small-movie-card__title">
          <a
            onClick={(evt) => {
              onMovieCardTitleClick(evt, title);
            }}
            className="small-movie-card__link" href="movie-page.html"
          >
            {title}
          </a>
        </h3>
      </article>
    );
  }
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
  videoSrc: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};


