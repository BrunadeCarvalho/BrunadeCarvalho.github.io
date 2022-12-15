import { GlobalState } from "./Global/GlobalState";
import { GlobalStyle } from "./Global/GlobalStyle";
import { Router } from "./Routes/Router";

function App() {
  return (
    <>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </>
  );
}

export default App;
