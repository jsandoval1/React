import React from 'react'
import { useState } from 'react'

const BoxForm = (props) => {
    // Set Empty Fields
    const [color, setColor] = useState("Red");
    const [height, setHeight] = useState(10);
    const [width, setWidth] = useState(10);

    // Set up for Errors
    const [colorError, setColorError] = useState("");
    const [heightError, setHeightError] = useState("");
    const [widthError, setWidthError] = useState("");

    const handleSubmit = (e) => {
        // Prevent Refresh
        e.preventDefault();

        // Create New Box
        //* 3.) BoxForm.jsx creates a new box object
        const newBox = { color, height, width };
        props.onNewBox(newBox);

    }

    const handleColor = (e) => {
        setColor(e.target.value);
        if (e.target.value.length < 3) {
            setColorError("Color must be at least 3 characters!");
        } else {
            setColorError("");
        }
    }

    const handleHeight = (e) => {
        // number cannot be more than 50
        setHeight(e.target.value);
        if (e.target.value > 50) {
            setHeightError("Height cannot be more than 50!");
        } else if (e.target.value < 1) {
            setHeightError("Height must be at least 1!");
        } else {
            setHeightError("");
        }
    }

    const handleWidth = (e) => {
        // number cannot be more than 50
        setWidth(e.target.value);
        if (e.target.value > 50) {
            setWidthError("Width cannot be more than 50!");
        } else if (e.target.value < 1) {
            setWidthError("Width must be at least 1!");
        } else {
            setWidthError("");
        }
    }

    return (
        <fieldset>
            <legend>BoxForm.jsx Component</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Color:</label>
                    <input
                        type="text"
                        onChange={handleColor}
                        value={color}
                    />
                    {colorError ? <p style={{ color: 'red' }}>{colorError}</p> : ''}
                </div>
                <div>
                    <label>Height:</label>
                    <input
                        type="number"
                        onChange={handleHeight}
                        value={height}
                    />
                    {heightError ? <p style={{ color: 'red' }}>{heightError}</p> : ''}
                </div>
                <div>
                    <label>Width:</label>
                    <input
                        type="number"
                        onChange={handleWidth}
                        value={width}
                    />
                    {widthError ? <p style={{ color: 'red' }}>{widthError}</p> : ''}
                </div>
                {
                    colorError || heightError || widthError
                        ?
                        <input type="submit" value="Create" disabled /> :
                        <input type="submit" value="Create" />
                }
            </form>
        </fieldset>
    )
}

export default BoxForm