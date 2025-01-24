import { useState } from "react";

import "./App.css";
import Card from "./components/Cards";
import Transform from "./components/Tranfom";

const cards = [
  {
    id: 1,
    text: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
  },
  {
    id: 2,
    text: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
  },
  {
    id: 3,
    text: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
  },
  {
    id: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
  },
];
export function App() {
  const [curentId, setCurentId] = useState(0);

  return (
    <>
      {" "}
      <div className=" flex items-center h-screen p-5 justify-center gap-5 flex-col md:flex-row">
        <button
          className=" bg-emerald-50 text-black  absolute top-12 py-2 px-5 rounded-full"
          onClick={() => setCurentId(0)}
        >
          rest
        </button>
        <Card items={cards} curentId={curentId} setCurentId={setCurentId} />
        <Transform
          items={cards}
          curentId={curentId}
          setCurentId={setCurentId}
        />
      </div>
    </>
  );
}

export default App;
