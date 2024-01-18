import logosrc from "../assets/images/logo.png";

const UserQuestion = (props) => {
  return (
    <div className="user-container">
      <p className="user-question">{props.message}</p>
    </div>
  );
};

const BotResponse = (props) => {
  return (
    <div className="bot-container">
      <img alt="Carnegie Chatbot Logo" src={logosrc} height={"32px"} />
      <p className="bot-response">{props.message}</p>
    </div>
  );
};

const ErrorMessage = () => {
  <div className="error-container">
    <img alt="Carnegie Chatbot Logo" src={logosrc} height={"32px"} />
    <p className="error">
      Oops! Something went wrong.
      <br />
      Please try again!
    </p>
  </div>;
};

export { UserQuestion, BotResponse, ErrorMessage };
