import React from 'react'

const BoxDisplay = (props) => {
    // Destructure boxes from props
    const boxes = props.boxes;

    return (
        <div>
            <fieldset>
                <legend>BoxDisplay.jsx Component</legend>
                <div>
                    <h6 style={{ textDecoration: 'underline' }}>Box Display:</h6>
                    <div className="boxMap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        {
                            boxes.map((box, i) =>
                                <div key={i} className="box" style={{
                                    backgroundColor: box.color,
                                    height: box.height + "px",
                                    width: box.width + "px",
                                    margin: '10px'
                                }}></div>
                            )
                        }
                    </div>
                </div>
            </fieldset>
        </div>
    )
}

export default BoxDisplay