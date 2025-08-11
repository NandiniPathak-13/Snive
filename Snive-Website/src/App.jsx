// import "./App.css"

// const App = () =>{
//   return <h1>Hello Snive Users</h1>;
// }
// export default App;




// import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
<h1 className="text-4xl text-pink-500 font-bold">Hello jaanu, Tailwind chal gaya! 😘</h1>

export default App;