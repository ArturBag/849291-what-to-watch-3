// import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
// import CardComponent from "../components/card/card.jsx";
// import GenresList from "../components/genres-list/genres-list.jsx";

// const withActiveItem = (Component) => {
//   class WithActiveItem extends PureComponent {
//     constructor(props) {
//       super(props);

//       this.state = {
//         isCardMouseOvered: false,
//         activePlayerId: -1,

//       };

//     }

//     render() {
//       const {title, preview, onMovieCardTitleClick, videoSrc,
//         id, moviesList, onGenreTypeClick} = this.props;

//       const {activePlayerId, isCardMouseOvered} = this.state;
//       if (Component === CardComponent) {
//         return (
//           <Component
//             title={title}
//             preview={preview}
//             videoSrc={videoSrc}
//             id={id}
//             moviesList={moviesList}
//             onMovieCardTitleClick={onMovieCardTitleClick}
//             onMouseEnter={() => {
//               this.setState({
//                 activePlayerId: activePlayerId === id ? -1 : id,
//                 isCardMouseOvered: !isCardMouseOvered
//               });
//             }}
//             onMouseLeave={() => {
//               this.setState({
//                 isCardMouseOvered: false,
//                 activePlayerId: -1});
//             }}
//             activePlayerId={activePlayerId}
//             isCardMouseOvered={isCardMouseOvered}
//           >
//             <video src="#" className="player__video" poster="img/player-poster.jpg"
//               ref={this._videoRef}
//             />
//           </Component>
//         );
//       } else if (Component === GenresList) {

//         return (
//           <Component>
//             onGenreTypeClick={onGenreTypeClick}
//           </Component>
//         );
//       }
//     }


//   }

//   WithActiveItem.propTypes = {
//     // title: PropTypes.string.isRequired,
//     // preview: PropTypes.string.isRequired,
//     // onMovieCardTitleClick: PropTypes.func.isRequired,
//     // videoSrc: PropTypes.string.isRequired,
//     // id: PropTypes.number.isRequired,
//     // moviesList: PropTypes.array.isRequired
//   };

//   return WithActiveItem;
// };


// export default withActiveItem;
