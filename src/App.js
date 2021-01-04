import React from "react";
import './App.css';
import Container from '@material-ui/core/Container';
import LandPage from "./components/LandPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container maxWidth="lg" id='home'> 
      <LandPage />
      </Container> 
      </header>
    </div>
  );
}

export default App;
