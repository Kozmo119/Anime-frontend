import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import StoryCard from "./components/FirstPage/StoryCard";
import { Switch, router, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import HomeScreen from "./components/MainPage/HomeScreen";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <div className="main">
          <Navbar />
          <StoryCard />
        </div>
      </Route>

      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/homepage">
        <HomeScreen/>
      </Route>
    </Switch>
  );
}

export default App;

{
  /* <TextField
id="filled-basic"
label="Email address"
variant="filled"
style={{
  backgroundColor: "white",
  width: "45%",
}}
/>
<br />
<Button
size="large"
style={{
  backgroundColor: "#e81515",
  width: "10%",
  color: "white",
}}
>
Get Started
</Button> */
}
