import React from "react";
import {createRoot} from "react-dom/client"
import App from './Apps';
import "./global.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById("root")).render(<App/>)