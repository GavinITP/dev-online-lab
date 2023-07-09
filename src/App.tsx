const App = () => {
  return (
    <div className="flex">
      <div className="flex flex-col basis-1/2 min-h-screen px-10 py-4">
        <label>HTML</label>
        <textarea className="bg-gray-800 min-h-[25%] mb-10 mt-2 px-6 py-4" />

        <label>CSS</label>
        <textarea className="bg-gray-800 min-h-[25%] mb-10 mt-2 px-6 py-4" />

        <label>Javascript</label>
        <textarea className="bg-gray-800 min-h-[25%] mb-10 mt-2 px-6 py-4" />
      </div>

      <div className="basis-1/2 min-h-screen">
        <iframe className="bg-white w-full h-full" />
      </div>
    </div>
  );
};

export default App;
