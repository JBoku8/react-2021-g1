import PropTypes from "prop-types";

const Navigation = ({ onPageChange, pages }) => {
  return (
    <header className="header pt-4">
      <h2 className="text-muted">Header</h2>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${pages.todoHome ? "active" : ""}`}
              onClick={() => onPageChange("todoHome")}
            >
              Todo Home
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${pages.counterHome ? "active" : ""}`}
              onClick={() => onPageChange("counterHome")}
            >
              Counter Home
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  pages: PropTypes.object.isRequired,
};

export default Navigation;
