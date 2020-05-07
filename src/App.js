import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import categories from './assets/categories.png';
import topbrands from './assets/topbrands.png';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="category_img_container">
          <img src={categories} />
        </div>
        <div className="topbrands_img_container">
          <img src={topbrands} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
