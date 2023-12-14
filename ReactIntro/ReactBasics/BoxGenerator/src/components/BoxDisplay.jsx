import React from 'react'

const BoxDisplay = (props) => {

    // todo: Destructure boxes from props
    const boxes = props.boxes;

    // * 6.) BoxDisplay.jsx uses the boxes array to display all the boxes
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