import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Player from "../video-player/video-player.jsx";
import withVideo from "../../hocs/with-video/with-video.jsx";

const VideoPlayer = withVideo(Player);

class Card extends PureComponent {

  render() {

    const {title, preview, videoSrc, id, moviesList, onMovieCardTitleClick,
      onMouseEnter, onMouseLeave, activePlayerId, isCardMouseOvered} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="small-movie-card__image">
          {isCardMouseOvered ?
            <VideoPlayer
              previewMode={id === activePlayerId}
              isPlaying={id === activePlayerId}
              videoSrc={videoSrc}
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
              onMovieCardTitleClick(evt, title, moviesList);
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
  moviesList: PropTypes.array.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  activePlayerId: PropTypes.number.isRequired,
  isCardMouseOvered: PropTypes.bool.isRequired
};


