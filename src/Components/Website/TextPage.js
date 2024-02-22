import React, { useState } from "react";

const TextPage = () => {
  const [text, setText] = useState("");
  const [ankit, setAnkit] = useState(false);

  const handleFunction = () => {
    navigator.clipboard.writeText(text);
  };
  
  const handleFunction1 = () => {
    setAnkit(!ankit);
  };

  return (
    <div style={{ padding: "20px" }}>
      copy your text
      {ankit && (
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleFunction}>Copy</button>
        </div>
      )}
      <button onClick={handleFunction1}>
        {ankit ? "read less" : "read add"}
      </button>
    </div>
  );
};

export default TextPage;
