import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import data from "./data.md";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

const App = () => {
  const [postContent, setPostContent] = useState("_Hello,_ **Markdown**!");

  useEffect(() => {
    fetch(data)
      .then((res) => res.text())
      .then((text) => setPostContent(text));
  }, []);

  const body = document.querySelector("body");
  console.log(body);
  body.style.backgroundColor = "#0095B6 ";

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center text-white bg-warning w-50 mx-auto rounded-1 my-3">
          Markdown Previewer
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6 mx-auto d-flex flex-column shadow-lg ">
          <label
            htmlFor="marktext"
            className="text-center bg-warning p-2 fw-bold fs-6 text-white"
          >
            Editor
          </label>
          <textarea
            name="editor"
            id="editor"
            cols="30"
            rows="50"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className=" bg-warning-subtle"
          ></textarea>
        </div>
        <div className="col-md-6 mx-auto shadow-lg">
          <div className="card">
            <div className="card-header bg-warning text-white fw-bold text-center">
              Previewer
            </div>
            <div className="card-body bg-warning-subtle" id="preview">
              <ReactMarkdown
                children={postContent}
                remarkPlugins={[remarkGfm, remarkBreaks]}
                // className={{style.breaks: true }}
              ></ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-5 border-dark w-75 mx-auto" />
      <div className="row mt-3">
        {/* <div className="col-md-8 mx-auto shadow-lg">
          <div className="card">
            <div className="card-header bg-secondary text-white fw-bold text-center">
              Previewer
            </div>
            <div className="card-body bg-secondary-subtle" id="preview">
              <ReactMarkdown
                children={postContent}
                remarkPlugins={[remarkGfm, remarkBreaks]}
                // className={{style.breaks: true }}
              ></ReactMarkdown>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default App;
