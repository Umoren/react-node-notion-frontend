import { useState } from "react"

interface ThingToLearn {
  label: string;
  url: string;
}

function App() {
  const [thingsToLearn, setThingsToLearn] = useState<ThingToLearn[]>([]);
  return (
    <div>
      <h1>Things to Learn</h1>

      <button
        type="button"
        onClick={() => {
          fetch("http://localhost:8000/")
            .then((response) => response.json())
            .then((payload) => {
              setThingsToLearn(payload)
            });
        }}
      >
        Fetch List
      </button>

      <ol>
        {thingsToLearn.map((thing, idx) => {
          return (
            <li key={idx}>

              <a href={thing.url} target="_blank" rel="noopener noreferrer">
                {thing.label}
              </a>
            </li>
          )
        })}
      </ol>
    </div>
  );
}

export default App;