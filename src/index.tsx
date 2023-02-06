import { BrowserRouter as Router } from "react-router-dom";

import ReactDOM from 'react-dom/client';
import { App } from "./components/App";
import {RoutesComponent} from "./components/routes";


ReactDOM
    .createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <Router>
            <RoutesComponent />
        </Router>
    );
