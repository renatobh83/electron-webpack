import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createRoot } from "react-dom/client"



// const container = document.getElementById("root")
// const root = createRoot(container)




const Index = () => {
    return <div>Hello React!</div>;
};
 
ReactDOM.render(<Index />, document.getElementById('root'));