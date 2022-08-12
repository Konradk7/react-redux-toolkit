import React from 'react';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
        <div className="app_container">
          <h1 className="app_container--title">Todos tasks</h1>
          <div className="app_container--todos">
            <ul>
              <li>
                <h3>Task 1</h3>
                <div>Make a cake</div>
                <div>Time: 18.30</div>
              </li>
              <li>
                <h3>Task 2</h3>
                <div>Make a pizza</div>
                <div>Time: 20.30</div>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
