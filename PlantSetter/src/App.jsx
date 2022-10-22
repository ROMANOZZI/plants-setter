import reactLogo from "./assets/react.svg";
import React from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { ref as sRef, set, onValue, update } from "firebase/database";
import startFireBase from "./components/fb-config";
import hotIcon from "./assets/hot.png";
import humIcon from "./assets/humidity.png";
import Stats from "./components/Stats";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
Chart.register(ArcElement, Tooltip, Legend);

function App() {
  const HumidityRef = sRef(startFireBase(), "/HUMIDITY");
  const TempratureRef = sRef(startFireBase(), "/TEMPERATURE");
  const pumpRef = sRef(startFireBase(), "/state");
  const countRef = sRef(startFireBase(), "/count");
  const [cards, setCards] = React.useState([
    {
      data: 0,
      unit: "celisius",
      icon: hotIcon,
    },
    {
      data: 0,
      unit: "Percent",
      icon: humIcon,
    },
  ]);
  const [page, setPage] = React.useState("stats");
  const [pump, setPump] = React.useState(false);
  const [count, setCount] = React.useState();
  React.useEffect(() => {
    onValue(TempratureRef, (SnapShot) => {
      setCards((prev) =>
        prev.map((x) => {
          if (x.unit == "celisius") return { ...x, data: SnapShot.val() };
          else return x;
        })
      );
    });
    onValue(HumidityRef, (SnapShot) => {
      setCards((prev) =>
        prev.map((x) => {
          if (x.unit == "Percent") return { ...x, data: SnapShot.val() };
          else return x;
        })
      );
    });
    onValue(pumpRef, (SnapShot) => {
      setPump(SnapShot.val());
    });
    onValue(countRef, (SnapShot) => {
      setCount(SnapShot.val());
    });
  }, [startFireBase()]);
  const data = {
    datasets: [
      {
        label: "My First Dataset",
        data: [count, 50 - count],
        backgroundColor: ["#2cb67d", "#f8f8fb"],
        hoverOffset: 2,
        borderWidth: 2,
        borderRadius: 9,
        borderSkipped: false,
      },
      {
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route
          exact
          path="/Dashboard"
          element={
            <React.Fragment>
              <TopBar></TopBar>
              <SideBar page={page} setPage={setPage}></SideBar>
              <Stats
                cards={cards}
                data={data}
                count={count}
                pump={pump}
              ></Stats>
            </React.Fragment>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
