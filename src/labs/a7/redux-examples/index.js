import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";   // import the component that consumes the data
import hello from "./reducers/hello";   // import reducer that calculates/generates the data
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";   // import Provider which will deliver the data
//import {createStore} from "redux";  // import createStore to store data from reducers
import { configureStore } from '@reduxjs/toolkit';
import Todos from "./todos-component";
//const store = createStore(hello);   // create data storage
const store = configureStore({
                                 reducer: {hello, todos}
                             });

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};

export default ReduxExamples;