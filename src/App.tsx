import htmlIcon from "./icons/html5.svg";
import cssIcon from "./icons/css3-alt.svg";
import jsIcon from "./icons/square-js.svg";
import { useEffect, useState } from "react";

const defaultHtml =
`<h1>Welcome to my Dev Online Lab!!!</h1>
<p>Feel free to write your own HTML, CSS, Javascript here ~</p>

<div class="counter">
  <span id="count">0</span>
</div>

<button class="btn" onclick="incrementCounter()">Increment</button>

<div class="github-link">
  <a href="">Visit my GitHub account</a>
</div>
`

const defaultCss =
`body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  text-align: center;
  padding: 50px;
}

h1 {
  color: #333333;
}

.counter {
  margin-top: 30px;
  font-size: 24px;
}

.btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}

.github-link {
  margin-top: 50px;
}`

const defaultJs =
`let countElement = document.getElementById("count");
let count = 0;

const incrementCounter = () => {
  count++;
  countElement.textContent = count;
}`

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
    const generateIframeSrcDoc = () => {
      return `
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body>
            ${htmlCode}
            <script>${jsCode}</script>
          </body>
        </html>
      `;
    };

    setAllCode(() => generateIframeSrcDoc())

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
