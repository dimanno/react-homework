import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {Theme} from "./Components/Theme/Theme";


const lightThem = {
    pageBackground: 'white',
    titleColor: "#dc658b",
    tagLineColor: "black"
}

const darkTheme = {
    pageBackground: "#0b0252",
    titleColor: "lightPink",
    tagLineColor: "lavender"
}

const themes = {
    light: lightThem,
    dark: darkTheme,
}

function App() {
   const [theme, setTheme] = useState("light")

  return (
      <ThemeProvider theme={themes[theme]}>
      <Router>
          <Theme theme={theme} setTheme={setTheme}/>
      </Router>
</ThemeProvider>

  );
}

export default App;