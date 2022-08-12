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
                            <span>Make a cake</span>
                            <span>Time: 18.30</span>
                            <div className="buttons">
                                <button className="buttons_delete-btn">Delete</button>
                                <button className="buttons_done-btn">Done</button>
                            </div>
                        </li>
                        <li>
                            <h3>Task 2</h3>
                            <span>Make a pizza</span>
                            <span>Time: 20.30</span>
                            <div className="buttons">
                                <button className="buttons_delete-btn">Delete</button>
                                <button className="buttons_done-btn">Done</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
