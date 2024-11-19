import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/Houses/Action"; 
import Navbar from "./Shared/Navbar/Navbar";
const Home = lazy(() => import("./Pages/Home/Home"));
const OneHouse = lazy(() => import("./Pages/Houses/id/oneHouse"));

function App() {
  const count = useSelector((state) => state.omda.count); // Access Redux state
  const dispatch = useDispatch(); // Dispatch actions
  return (
    // <BrowserRouter>
    //   <Navbar />

    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <Suspense fallback={<>...</>}>
    //           <Home />
    //         </Suspense>
    //       }
    //     ></Route>
    //     <Route
    //       path="one/:id"
    //       element={
    //         <Suspense fallback={<>...</>}>
    //           {" "}
    //           <OneHouse />
    //         </Suspense>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
    <>

<div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Redux Counter</h1>
      <h2>Count: {count}</h2>
      <button
        style={{
          margin: "5px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "lightgreen",
        }}
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        style={{
          margin: "5px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "lightcoral",
        }}
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>

    </>
  );
}

export default App;
