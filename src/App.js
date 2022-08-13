import PokeList from "./components/PokeList";
import PokeInfo from "./components/PokeInfo";
import Header from "./components/Header";
import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [pokeList, setPokeList] = useState([]);
  const [curURL, setCurURL] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");
  const [curPoke, setCurPoke] = useState({});
  const isMobile = window.innerWidth <= 900;

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
  };

  return (
    <div className="main-container">
      <Header></Header>
      {loading ? (
        <div className="pokeball">
          <div className="inner-ball"></div>
        </div>
      ) : (
        <div className="wrapper">
          <div className="container">
            <div>
              <PokeList
                pokeList={pokeList}
                onShow={showInfo}
                loading={loading}
                isMobile={isMobile}
              ></PokeList>
              <div className="btns-container">
                {prevURL && <button onClick={onPrev}>PREV</button>}
                {nextURL && <button onClick={onNext}>NEXT</button>}
              </div>
            </div>
            <PokeInfo pokemon={curPoke}></PokeInfo>
          </div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
}

export default App;
