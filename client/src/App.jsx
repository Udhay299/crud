import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Createuser from "./pages/Createuser";
import Updateuser from "./pages/Updateuser";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/create" element={<Createuser />} />
          <Route path="/update/:id" element={<Updateuser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
