import PropTypes from "prop-types";
import logosrc from "../assets/images/logo.png";

const Logo = ({ height }) => {
  return (
    <img
      alt="Carnegie Chatbot Logo"
      height={height}
      width={height}
      src={logosrc}
    />
  );
};

export { Logo };

Logo.propTypes = {
  height: PropTypes.number,
};
