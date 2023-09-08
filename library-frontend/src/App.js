import { Routes, Route } from "react-router-dom";

import { Authors, Books, NewBook, Menu } from "./components";

const App = () => {
  return (
    <div>
      <Menu />
      <h1>Library</h1>
      <Routes>
        <Route path='/' element={<Authors />} />
        <Route path='/books' element={<Books />} />
        <Route path='/add' element={<NewBook />} />
      </Routes>
    </div>
  );
};

export default App;
