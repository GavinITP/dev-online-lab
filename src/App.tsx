import htmlIcon from "./icons/html5.svg";
import cssIcon from "./icons/css3-alt.svg";
import jsIcon from "./icons/square-js.svg";
import { useEffect, useState } from "react";
import { defaultCss, defaultHtml, defaultJs } from "./data/defaultStates";
import { generateIframeSrcDoc } from "./logics/editorLogic";

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
          <img className="inline-block mr-2" src={htmlIcon} alt="HTML Icon" width="16px"/>
          <label>HTML</label>
        </span>
        <textarea className="bg-gray-800 min-h-[25%] mb-10 px-6 py-4 font-mono text-sm" onChange={handleHtmlChange} value={htmlCode}/>

        <span className="flex items-center bg-black px-4 py-1">
          <img className="inline-block mr-2" src={cssIcon} alt="CSS Icon" width="16px"/>
          <label>CSS</label>
        </span>
        <textarea className="bg-gray-800 min-h-[25%] mb-10 px-6 py-4 font-mono text-sm" onChange={handleCssChange} value={cssCode}/>

        <span className="flex items-center bg-black px-4 py-1">
          <img className="inline-block mr-2" src={jsIcon} alt="Javascript Icon" width="16px"/>
          <label>Javascript</label>
        </span>
        <textarea className="bg-gray-800 min-h-[25%] mb-10 px-6 py-4 font-mono text-sm" onChange={handleJsChange} value={jsCode}/>
      </div>

      <div className="basis-1/2 min-h-screen">
        <iframe className="bg-white w-full h-full" srcDoc={allCode}/>
      </div>
    </div>
  );
};

export default App;
