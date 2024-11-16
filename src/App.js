import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
const Home = lazy(() => import("./Pages/Home/Home"));
const OneHouse = lazy(() => import("./Pages/Houses/id/oneHouse"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<>...</>}>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="one/:id"
          element={
            <Suspense fallback={<>...</>}>
              {" "}
              <OneHouse />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
