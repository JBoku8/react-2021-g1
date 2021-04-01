import PropTypes from "prop-types";

import "./theme.css";

function Theme({ children, page }) {
  return <div className={`theme-container ${page}`}>{children}</div>;
}

Theme.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Theme;
