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
const ends = [0, 0.4, 0.68, 1];
export function App() {
  const [curentId, setCurentId] = useState(0);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  return (
    <>
      {" "}
      <div className=" flex items-center h-screen  justify-center gap-5 flex-col md:flex-row">
        <button
          className=" bg-[#c8216f] text-white  absolute bottom-24 py-2 px-5 rounded-full"
          onClick={() => {
            setStart(ends[curentId]);
            setCurentId(0);
            setEnd(ends[0]);
          }}
        >
          rest
        </button>
        <Card
          items={cards}
          curentId={curentId}
          setCurentId={setCurentId}
          setEnd={setEnd}
          setStart={setStart}
          ends={ends}
        />
        <Transform
          start={start}
          end={end}
          setEnd={setEnd}
          setStart={setStart}
          ends={ends}
          curentId={curentId}
          setCurentId={setCurentId}
        />
      </div>
    </>
  );
}

export default App;
