import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
