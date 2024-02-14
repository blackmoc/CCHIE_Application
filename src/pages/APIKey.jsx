import { useState } from 'react';
import '../styles/ApiKey.css'; 

function ApiKeyInput() {
  const [apiKey, setApiKey] = useState('');

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  const handleSaveApiKey = () => {
    if(!apiKey.trim() || !/^sk-[a-zA-Z0-9]{32}$/.test(apiKey)){    
        console.log(apiKey);                                                                        
        alert('Invalid API Key! Please enter a valid API key.');
        return;
    }
    localStorage.setItem('apiKey', apiKey);

    alert('API Key saved successfully!');

  };

  return (
    <div className="api-key-container"> 
      <h1>Enter API Key</h1>
      <p>Your API key is stored locally on your browser and never sent anywhere else.</p>
      
      <input
        type="text"
        placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        value={apiKey}
        onChange={handleApiKeyChange}
      />

      <button onClick={handleSaveApiKey}>Save</button>
    </div>
  );
}

export default ApiKeyInput;
