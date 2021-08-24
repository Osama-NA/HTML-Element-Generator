import React, { useRef, useContext } from "react";
import { ElementContext } from "../context/ElementContext";

export const GeneratedElement = () => {
  const textField = useRef();

  //Getting generated element from ElementContext using React Context API
  const { finalElement } = useContext(ElementContext);

  //Copying to clipboard the text in the div with the ref attribute textField
  const CopyText = () => {
    let text = textField.current.innerHTML;
    text = text.replaceAll('&lt;', '<').replaceAll('&gt;', '>');
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="generated-element">
      <h2>Generated Element</h2>
      <p className="view-box" ref={textField}>
        {finalElement}
      </p>
      <button className="copy-button" onClick={CopyText}>
        Copy element to clipboard
      </button>
    </div>
  );
}