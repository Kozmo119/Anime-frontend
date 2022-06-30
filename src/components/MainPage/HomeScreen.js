import Banner from "./Banner";
import requests from "./Requests";
import Row from "./Row";
import { useState, useEffect } from "react";
import Nav from "./Nav";

const HomeScreen = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge//anime?filter[categories]=adventure", {
      method: "GET",
      headers: {
        "Accept": "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    
  }, []);

  return (
    <div className="homeScreen">
        <Nav/>
      <Banner />
      <br/><br/>
      <Row animes={animes} />
      <Row animes={animes} />
      <Row animes={animes} />
      <Row animes={animes} />
      <Row animes={animes} />
    </div>
  );
};

export default HomeScreen;
