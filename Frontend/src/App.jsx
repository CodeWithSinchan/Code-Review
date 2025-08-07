import "./App.css";
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import { useEffect, useState } from "react";
import axios from "axios";
import Markdown from "react-markdown";

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [response, setResponse] = useState(``);
  useEffect(() => {
    prism.highlightAll();
  });

  async function reviewCode() {
    const response = await axios.post("https://code-review-g16n.onrender.com/ai/get-review", {
      code,
    });
    setResponse(response.data);
  }

  return (
    <>
      <main>
        <section className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                color: "#fff",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </section>
        <section className="right">
          <Markdown>{response}</Markdown>
        </section>
      </main>
    </>
  );
}

export default App;
