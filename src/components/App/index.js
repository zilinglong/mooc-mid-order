import React from 'react';
import './style.css';
import Header from '../Header';
import OrderList from '../OrderList';
import HelloEvent from '../Test';
function App() {
  // test
  return (
    <div className="app">
      <Header />
      <OrderList />
      <HelloEvent />
    </div>
  );
}

export default App;
