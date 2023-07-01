import React, { Suspense, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import HomeRouter from "./components/router/homeRouter";
import AppRouter from "./components/router/appRouter";

import "./App.css";

const App: React.FC = () => {
  const [user, setUser] = useState(false);

  const Loading: React.FC = () => <p>Loading ...</p>;

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        {!user ? <HomeRouter /> : <AppRouter />}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
