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


  render() {

    const {title, preview, onMovieCardTitleClick, videoSrc, id, moviesList} = this.props;

    const {activePlayerId, isCardMouseOvered} = this.state;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          this.setState({
            activePlayerId: activePlayerId === id ? -1 : id,
            isCardMouseOvered: true
          });
        }}
        onMouseLeave={() => {
          this.setState({
            isCardMouseOvered: false,
            activePlayerId: -1});
        }}
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
  moviesList: PropTypes.array.isRequired
};


