import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {

  render() {
    const {previewMode, children} = this.props;

    return (

      <div className="player">
        {previewMode === true ?
          <Fragment>
            {children}
          </Fragment>
          :
          <Fragment>
            {children}
            <button type="button" className="player__exit">
              Exit
            </button>
            <div className="player__controls">
              <div className="player__controls-row">
                <div className="player__time">
                  <progress className="player__progress" value={30} max={100} />
                  <div className="player__toggler" style={{left: `30%`}}>
                    Toggler
                  </div>
                </div>
                <div className="player__time-value">1:30:29</div>
              </div>
              <div className="player__controls-row">
                <button type="button" className="player__play">
                  <svg viewBox="0 0 14 21" width={14} height={21}>
                    <use xlinkHref="#pause" />
                  </svg>
                  <span>Pause</span>
                </button>
                <div className="player__name">Transpotting</div>
                <button type="button" className="player__full-screen">
                  <svg viewBox="0 0 27 27" width={27} height={27}>
                    <use xlinkHref="#full-screen" />
                  </svg>
                  <span>Full screen</span>
                </button>
              </div>
            </div>
          </Fragment>
        }
      </div>
    );
  }

}

VideoPlayer.propTypes = {
  previewMode: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};
