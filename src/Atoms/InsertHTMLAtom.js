import React from 'react';
// import MathJax from 'react-mathjax-preview';
import { mathJaxPath } from "mathjax-electron";
import * as MathJax from "@nteract/mathjax";

const InsertHTMLAtom = ({ html, style }) => {
    // const text = String.raw`${html}`;
    return (
        <>
            <h1>HELLO FROM ELECTRON</h1>
            <MathJax.Provider 
            src={mathJaxPath} 
            input="tex">
                <MathJax.Node>{`x^2 + y^2 = z^2`}</MathJax.Node>
            </MathJax.Provider>
        </>
    );
}

export default InsertHTMLAtom;