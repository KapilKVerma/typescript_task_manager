import React, { Suspense, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import HomeRouter from "./components/router/homeRouter";
import AppRouter from "./components/router/appRouter";
import { UserContext, UserContextType } from "./context/user.context";

import "./App.css";

const App: React.FC = () => {
  const { signedIn } = useContext<UserContextType>(UserContext);

  const Loading: React.FC = () => <p>Loading ...</p>;

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        {!signedIn ? <HomeRouter /> : <AppRouter />}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
