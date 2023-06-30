import React from "react";
import {createRoot} from 'react-dom/client';
import TorahMiniApp from "./TorahMiniApp.tsx";

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<TorahMiniApp/>)

