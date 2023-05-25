import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import App from "./App";
import { store } from "./store";
import AuthRouter from "./router/authRouter";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <HashRouter>
    <Provider store={store}>
      <AuthRouter>
        <App />
      </AuthRouter>
    </Provider>
  </HashRouter>
)