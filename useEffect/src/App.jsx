import { useState, useEffect } from "react";

export default function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://jsonplaceholder.typicode.com/todos/" + (currentTab + 1)
    ).then(async (res) => {
      const json = await res.json();
      setTabData(json);
      setLoading(false);
    });
  }, [currentTab]);

  return (
    <div>
      <button
        onClick={() => {
          setCurrentTab(0);
        }}
        style={{ color: currentTab == 0 ? "red" : "black" }}
      >
        #Todo 1
      </button>
      <button
        onClick={() => {
          setCurrentTab(1);
        }}
        style={{ color: currentTab == 1 ? "red" : "black" }}
      >
        #Todo 2
      </button>
      <button
        onClick={() => {
          setCurrentTab(2);
        }}
        style={{ color: currentTab == 2 ? "red" : "black" }}
      >
        #Todo 3
      </button>
      <button
        onClick={() => {
          setCurrentTab(3);
        }}
        style={{ color: currentTab == 3 ? "red" : "black" }}
      >
        #Todo 4
      </button>
      <br />
      {loading ? <p>Loading ...</p> : <p>{tabData.title}</p>}
    </div>
  );
}

// step 1 : returned 4 buttons and did some conditional styling
// step 2 :  point to note : onclick requires a function signature so onClick={() => setCurrentTab(0)} will word but onClick={setCurrentTab(1)} wont work
