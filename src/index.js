import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // JS
import '@fortawesome/fontawesome-free/css/all.min.css' // FONTAWESOME
import './App.css'; // MY CSS

import * as data from './data/info'; // INFO, DATA OR ALL YOU NEED TO ADD IN DOM IN TEXT, IF U HAV LOCAL IMG, U NEED ADD IMG FOLDER IN >>"public FOLDER"<< AND PASTE THERE TO CALL THE IMAGES FROM THERE

import { Main } from './Main'; // PRINCIPAL COMPONENT

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Main {...data} />); // Spread operator