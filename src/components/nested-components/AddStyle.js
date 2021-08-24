import React from 'react'

export const AddStyle = (props) => {
    return (
        <div className="add-style">
            <h3>Choose the style of the element :</h3>
            <label>
                <input type="radio" name="style" ref={props.normal} />
                Normal
            </label>
            <br />
            <label>
                <input type="radio" name="style" ref={props.bold} />
                Bold
            </label>
            <br />
            <label>
                <input type="radio" name="style" ref={props.italic} />
                Italic
            </label>
            <br />
            <label>
                <input type="radio" name="style" ref={props.strikethrough} />
                Strike-through
            </label>
            <br />
            <label>
                <input type="radio" name="style" ref={props.underline} />
                Underlined
            </label>
            <br />
            <label>
                <input type="radio" name="style" ref={props.subscript} />
                Subscript
            </label>
            <br />
            <label>
                <input type="radio" name="style" ref={props.superscript} />
                Superscript
            </label>
        </div>
    )
}
