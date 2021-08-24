import React from 'react'

export const InnerText = (props) => {
    return (
        <div className="create-element">
            <h2>Create Element</h2>
            <div className="elements">
                <div div className="inner-text" >
                    <h3>Enter the inner text of the element :</h3>
                    <textarea
                        type="text"
                        value={props.text}
                        onChange={props.onTextChange}
                        placeholder="Type inner text here"
                    />
                    <label><input type="checkbox" ref={props.isLink} />Link</label>
                </div >
                <button onClick={props.setElementText}>Next</button>
            </div>
        </div>
    );
}
