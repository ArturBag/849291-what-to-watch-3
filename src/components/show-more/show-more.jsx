import React from "react";
import PropTypes from "prop-types";

const ShowMore = (props) => {

  const {onShowMoreButtonClick} = props;

  return (
    <button className="catalog__button" type="button"
      onClick={onShowMoreButtonClick}
    >
      Show more
    </button>
  );
};

ShowMore.propTypes = {
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

export {ShowMore};
