import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/:id" index element={<Detail />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
