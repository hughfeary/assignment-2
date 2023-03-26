import React from "react";
import Header from "./Components/Header/Header";
import NavigationBar from "./Components/NaivgationBar/NavigationBar";
import Main from "./Components/Main/Main";
import './App.css';
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header clubName="Chadstone Cobras FC" />
      <NavigationBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
