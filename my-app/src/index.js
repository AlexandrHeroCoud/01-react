import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"
import store from "./redux/redux-store";
import Preloader  from"./components/common/Preloader/Preloader";
import c from './index.module.css'
const App =React.lazy(()=>import('./App'));


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Suspense fallback={<Preloader classString={c.preloaderRoot}/>}>
                <App />
            </Suspense>
        </Provider>
    </BrowserRouter>,

    document.getElementById('root')
);

serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

