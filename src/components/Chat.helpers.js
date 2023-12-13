const generateGPTResponse = async (user_question) => {
  const API_KEY = "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";
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      //gpt-3.5-turbo
      //ft:gpt-3.5-turbo-1106:personal::8KtCSryL
      model: "ft:gpt-3.5-turbo-1106:personal::8KtCSryL",
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
