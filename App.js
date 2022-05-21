import React, { useState } from "react";
import Context from './context/context';
import Decider from "./components/decider";




const App = () => {

  const [authenticated, setAuthenticated] = useState({});

    return (
      <Context.Provider value={[authenticated, setAuthenticated]}>
          <Decider />
      </Context.Provider>
    );
};

export default App;
