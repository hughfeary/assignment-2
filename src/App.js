import React from "react";
import Header from "./Components/Header/Header";
import NavigationBar from "./Components/NaivgationBar/NavigationBar";
import Main from "./Components/Main/Main";
import './App.css';
import Footer from "./Components/Footer/Footer";
import ErrorBoundary from "./Components/ErrorBoundary";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Header clubName="Chadstone Cobras FC" />
        <Main />
        <Footer />
        <NavigationBar />
      </ErrorBoundary>
      
    </div>
  );
}

export default App;
