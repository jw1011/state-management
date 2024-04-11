import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";
const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
