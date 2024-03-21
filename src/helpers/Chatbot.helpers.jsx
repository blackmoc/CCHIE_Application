const generateGPTResponse = async (user_question) => {
  const API_KEY = import.meta.env.OPENAI_API_KEY;
  // const API_KEY = "PLACE_YOUR_API_KEY_HERE"
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "This factual chatbot provides an exact response based solely on data with sources. Make sure that all responses fit within the max tokens and end as a full sentence.",
        },
        {
          role: "user",
          content: user_question,
        },
      ],
      temperature: 1,
      max_tokens: 100,
      top_p: 0.75,
      frequency_penalty: 0.1,
      presence_penalty: 0,
    }),
  };
  const response = await fetch(API_URL, requestOptions);
  const data = await response.json();
  return data["choices"][0]["message"]["content"];
};

const generateFineTuneResponse = async (user_question) => {
  // const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
  const API_KEY = "PLACE_YOUR_API_KEY_HERE";
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "ft:gpt-3.5-turbo-1106:personal::8KtCSryL",
      messages: [
        {
          role: "system",
          content:
            "Carnegie Classifications Chatbot is a factual and formal chatbot that provides an exact response based solely on data with sources.",
        },
        {
          role: "user",
          content: user_question,
        },
      ],
      temperature: 1,
      max_tokens: 100,
      top_p: 0.75,
      frequency_penalty: 0.1,
      presence_penalty: 0,
    }),
  };
  const response = await fetch(API_URL, requestOptions);
  const data = await response.json();
  return data["choices"][0]["message"]["content"];
};

export { generateGPTResponse, generateFineTuneResponse };
