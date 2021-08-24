import React from 'react'

export const AddLink = (props) => {
    return (
        <div className="create-element">
            <h2>Create Element</h2>
            <div className="elements">
                <div className="add-link">
                    <h3>Enter the URL of the link :</h3>
                    <textarea
                        type="text"
                        value={props.text}
                        onChange={props.onTextChange}
                        placeholder="Type URL here"
                    />
                </div>
                <button onClick={props.setElementLink}>Next</button>
            </div>
        </div>
    );
}
