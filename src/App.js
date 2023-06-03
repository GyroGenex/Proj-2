import Form from './components/Form';
import Table from './components/Table';
import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import DetailedRecipe from './components/DetailedRecipe';

function App() {
  const [main, setMain] = useState("");
  const [time, setTime] = useState("");


  return (
    <div className="App">
      <main>
        <Routes>
          <Route exact path="/" element={<Form setMain={setMain} setTime={setTime} time={time}></Form>} />
          <Route path="/recipes" element={<Table main={main} time={time} />} />

          <Route path="/recipes/:recipe" element={<DetailedRecipe />} />
        </Routes>


      </main>



    </div>
  );
}

export default App;
