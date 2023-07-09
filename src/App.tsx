import htmlIcon from "./icons/html5.svg";
import cssIcon from "./icons/css3-alt.svg";
import jsIcon from "./icons/square-js.svg";

const App = () => {
  return (
    <div className="flex">
      <div className="flex flex-col basis-1/2 min-h-screen px-10 py-4">
        <span className="flex items-center">
          <img className="inline-block mr-2" src={htmlIcon} alt="HTML Icon" width="16px"/>
          <label>HTML</label>
        </span>
        <textarea className="bg-gray-800 min-h-[25%] mb-10 mt-2 px-6 py-4" />

        <span className="flex items-center">
          <img className="inline-block mr-2" src={cssIcon} alt="HTML Icon" width="16px"/>
          <label>CSS</label>
        </span>
        <textarea className="bg-gray-800 min-h-[25%] mb-10 mt-2 px-6 py-4" />

        <span className="flex items-center">
          <img className="inline-block mr-2" src={jsIcon} alt="HTML Icon" width="16px"/>
          <label>Javascript</label>
        </span>
        <textarea className="bg-gray-800 min-h-[25%] mb-10 mt-2 px-6 py-4" />
      </div>

      <div className="basis-1/2 min-h-screen">
        <iframe className="bg-white w-full h-full" />
      </div>
    </div>
  );
};

export default App;
