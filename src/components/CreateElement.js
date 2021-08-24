import React, { useRef, useState, useContext, useEffect } from "react";
import { ElementContext } from "../context/ElementContext";

export const CreateElement = () => {
  const [text, setText] = useState(""); //To store text from textarea fields
  const [element, setElement] = useState(""); //To store created element
  const [styledElement, setStyledElement] = useState(""); //To store styled element
  const [link, setLink] = useState(""); //To store link
  const [next, setNext] = useState(""); //To set next element to render

  //Reference variables used to check if element is a link
  const isLink = useRef();

  //Reference variables for the radio buttons in addStyle
  const normal = useRef();
  const bold = useRef();
  const italic = useRef();
  const strikethrough = useRef();
  const underline = useRef();
  const subscript = useRef();
  const superscript = useRef();

  //Using Context API to set global state variable 'finalElement' to use in GeneratedElement component
  const { setFinalElement } = useContext(ElementContext);

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  //Called when innerText is set
  const setElementText = () => {
    setElement(text);
    setText("");
    const nextStep = isLink.current.checked ? "Add Link" : "Add Style";
    setNext(nextStep);
  };

  //Called when a link is set
  const setElementLink = () => {
    setLink(text);
    setText("");
    setNext("Add Style");
  };

  //Called when a style is selected
  const setElementStyle = () => {
    const text = element;
    let newElement = ``;
    if (bold.current.checked) {
      newElement = `<b>${text}</b>`;
    } else if (italic.current.checked) {
      newElement = `<i>${text}</i>`;
    } else if (underline.current.checked) {
      newElement = `<ins>${text}</ins>`;
    } else if (strikethrough.current.checked) {
      newElement = `<del>${text}</del>`;
    } else if (subscript.current.checked) {
      newElement = `<sub>${text}</sub>`;
    } else if (superscript.current.checked) {
      newElement = `<sup>${text}</sup>`;
    } else {
      newElement = `<p>${text}</p>`;
    }

    setStyledElement(newElement);
  };

  //When a styled element is set, useEffect is called to call setFinalElement and generate finalElement in GeneratedElement Component
  useEffect(() => {
    if (styledElement) {
      if (link !== "") {
        const linkElement = `<a href='${link}'>${styledElement}</a>`;
        setFinalElement(linkElement);
      } else {
        setFinalElement(styledElement);
      }
    } else {
      setFinalElement("Your Generated HTML Element Will Appear Here");
    }

    setElement("");
    setText("")
    setLink("");
    setNext(""); //Reset steps
  }, [styledElement]);

  //Rendered first
  const innerText = (
    <div className="inner-text">
      <h3>Enter the inner text of the element :</h3>
      <textarea
        type="text"
        value={text}
        onChange={onTextChange}
        placeholder="Type inner text here"
      />
      <label>
        <input type="checkbox" ref={isLink} />
        Link
      </label>
    </div>
  );

  //Rendered After innerText
  const addLink = (
    <div className="add-link">
      <h3>Enter the URL of the link :</h3>
      <textarea
        type="text"
        value={text}
        onChange={onTextChange}
        placeholder="Type URL here"
      />
    </div>
  );

  //Rendered After innerText or addLink
  const addStyle = (
    <div className="add-style">
      <h3>Choose the style of the element :</h3>
      <label>
        <input type="radio" name="style" ref={normal} />
        Normal
      </label>
      <br />
      <label>
        <input type="radio" name="style" ref={bold} />
        Bold
      </label>
      <br />
      <label>
        <input type="radio" name="style" ref={italic} />
        Italic
      </label>
      <br />
      <label>
        <input type="radio" name="style" ref={strikethrough} />
        Strike-through
      </label>
      <br />
      <label>
        <input type="radio" name="style" ref={underline} />
        Underlined
      </label>
      <br />
      <label>
        <input type="radio" name="style" ref={subscript} />
        Subscript
      </label>
      <br />
      <label>
        <input type="radio" name="style" ref={superscript} />
        Superscript
      </label>
    </div>
  );

  if (next === "") {
    return (
      <div className="create-element">
        <h2>Create Element</h2>
        <div className="elements">
          {innerText}
          <button onClick={setElementText}>Next</button>
        </div>
      </div>
    );
  } else if (next === "Add Link") {
    return (
      <div className="create-element">
        <h2>Create Element</h2>
        <div className="elements">
          {addLink}
          <button onClick={setElementLink}>Next</button>
        </div>
      </div>
    );
  } else if (next === "Add Style") {
    return (
      <div className="create-element">
        <h2>Create Element</h2>
        <div className="elements">
          {addStyle}
          <button onClick={setElementStyle}>Next</button>
        </div>
      </div>
    );
  }
};
