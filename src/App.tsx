import htmlIcon from "./icons/html5.svg";
import cssIcon from "./icons/css3-alt.svg";
import jsIcon from "./icons/square-js.svg";
import { useEffect, useState } from "react";
import { defaultCss, defaultHtml, defaultJs } from "./data/defaultStates";
import { generateIframeSrcDoc } from "./logics/editorLogic";
import CodeMirror from "@uiw/react-codemirror";
import { githubDark } from "@uiw/codemirror-theme-github";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

const App = () => {
  const [htmlCode, setHtmlCode] = useState<string>(defaultHtml);
  const [cssCode, setCssCode] = useState<string>(defaultCss);
  const [jsCode, setJsCode] = useState<string>(defaultJs);
  const [allCode, setAllCode] = useState<string>("");

  const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlCode(e.target.value);
  };

  const handleCssChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCssCode(e.target.value);
  };

  const handleJsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsCode(e.target.value);
  };

  useEffect(() => {
    const allCode = generateIframeSrcDoc(htmlCode, cssCode, jsCode);
    setAllCode(allCode);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="flex">
      <div className="flex flex-col basis-1/2 min-h-screen px-10 py-4">
        <span className="flex items-center bg-black px-4 py-1">
          <img
            className="inline-block mr-2"
            src={htmlIcon}
            alt="HTML Icon"
            width="16px"
          />
          <label className="text-sm">HTML</label>
        </span>
        <CodeMirror
          value={htmlCode}
          height="200px"
          onChange={handleHtmlChange}
          extensions={[loadLanguage("html")]}
          theme={githubDark}
        />

        <span className="flex items-center bg-black px-4 py-1 mt-2">
          <img
            className="inline-block mr-2"
            src={cssIcon}
            alt="CSS Icon"
            width="16px"
          />
          <label className="text-sm">CSS</label>
        </span>
        <CodeMirror
          value={cssCode}
          height="200px"
          onChange={handleCssChange}
          extensions={[loadLanguage("css")]}
          theme={githubDark}
        />

        <span className="flex items-center bg-black px-4 py-1 mt-2">
          <img
            className="inline-block mr-2"
            src={jsIcon}
            alt="Javascript Icon"
            width="16px"
          />
          <label className="text-sm">Javascript</label>
        </span>
        <CodeMirror
          value={jsCode}
          height="200px"
          onChange={handleJsChange}
          extensions={[loadLanguage("javascript")]}
          theme={githubDark}
        />
      </div>

      <div className="basis-1/2 min-h-screen">
        <iframe className="bg-white w-full h-full" srcDoc={allCode} />
      </div>
    </div>
  );
};

export default App;
