import PropTypes from "prop-types";
import { Logo } from "./General";
import { timeResponse } from "../components/GeneralFunc";

const UserQuestion = (props) => {
  return (
    <div className="user-container">
      <p className="user-question">{props.message}</p>
    </div>
  );
};

const GeneralResponse = (props) => {
  return (
    <div className="bot-container">
      <Logo height={32} />
      <p className="bot-response">{props.message}</p>
    </div>
  );
};
// Add a case for known links and link text
const LinkResponse = (props) => {
  return (
    <div className="link-response">
      <Logo height={32} />
      <div className="bot-response">
        <p>{props.message}</p>
        <hr />
        <a href={props.link}>Visit This Link</a>
      </div>
    </div>
  );
};
const ErrorMessage = () => {
  return (
    <div className="error-container">
      <Logo height={32} />
      <p className="error">
        Oops! Something went wrong.
        <br />
        Please try again!
      </p>
    </div>
  );
};
// Soon will have "{Good Morning} {name}......."
const WelcomeMessage = ({ name }) => {
  const greeting = timeResponse();
  return (
    <div className="bot-container">
      <Logo height={32} />
      <p className="bot-response">
        {greeting} {name ? " " : null}
        and Welcome to Carnegie Classifications for Institutions for Higher
        Education.
      </p>
    </div>
  );
};
const FollowResponse = ({ name, category }) => {
  return (
    <div className="bot-container">
      <Logo height={32} />
      <p className="bot-response">
        Okay {name}. How can we assist you today with your question about{" "}
        {category}?
      </p>
    </div>
  );
};

//Will be the close out, save the conversation to a data file, hide the chat and then maybe rate the convversation
const ByeMessage = () => {
  <div className="bot-container">
    <Logo height={32} />
    <p className="bot-response">
      Thank you for spending time at Carnegie Classificaions! Talk again soon!
    </p>
  </div>;
};

export {
  ByeMessage,
  ErrorMessage,
  FollowResponse,
  GeneralResponse,
  LinkResponse,
  UserQuestion,
  WelcomeMessage,
};

UserQuestion.propTypes = {
  role: PropTypes.string,
  message: PropTypes.string,
};

GeneralResponse.propTypes = {
  role: PropTypes.string,
  message: PropTypes.string,
};

LinkResponse.propTypes = {
  role: PropTypes.string,
  message: PropTypes.string,
  link: PropTypes.string,
};

WelcomeMessage.propTypes = {
  role: PropTypes.string,
  greeting: PropTypes.string,
  name: PropTypes.string,
};
FollowResponse.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
};
