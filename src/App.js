import PokeList from "./components/PokeList";
import PokeInfo from "./components/PokeInfo";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [pokeList, setPokeList] = useState([]);
  const [curURL, setCurURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");
  const [curPoke, setCurPoke] = useState({});

  useEffect(() => {
    fetchData();
  }, [curURL]);

  const fetchData = async () => {
    setLoading(true);

    const data = await fetch(curURL).then((res) => res.json());
    const urls = data.results.map((p) => p.url);
    let infos = await Promise.all(
      urls.map((u) => fetch(u).then((res) => res.json()))
    );

    setPokeList(infos);
    setCurPoke(infos[0]);
    setNextURL(data.next);
    setPrevURL(data.previous);

    setLoading(false);
  };

  const onPrev = () => {
    setCurURL(prevURL);
  };

  const onNext = () => {
    setCurURL(nextURL);
  };

  const showInfo = (id) => {
    setCurPoke(pokeList.find((p) => p.id === id));
    // console.log(pokeList.find((p) => p.id === id).name);
  };

  if (loading) return "Loading...";
  return (
    <div className="container">
      <div>
        <PokeList pokeList={pokeList} onShow={showInfo}></PokeList>
        {prevURL && <button onClick={onPrev}>Prev</button>}
        {nextURL && <button onClick={onNext}>Next</button>}
      </div>
      <PokeInfo pokemon={curPoke}></PokeInfo>
    </div>
  );
}

export default App;
