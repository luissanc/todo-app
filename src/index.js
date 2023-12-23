import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './bootstrap.min[Flatly].css';
import './fontawesome/css/fontawesome.min.css';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { 
  todoAdded, 
  todoToggled, 
  colorSelected, 
  todoDeleted, 
  allCompleted, 
  completedCleared
} from '../src/features/todos/todosSlice'

import {statusFilterChanged, colorFilterChanged } from '../src/features/filters/filtersSlice'

const container = document.getElementById('root');
const root = createRoot(container);

// const unsubscribe = store.subscribe(()=>{
//   console.log('state after dispatch: ' + store.getState())
// })

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
