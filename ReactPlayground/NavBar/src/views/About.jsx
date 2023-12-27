import React, { useEffect, useState } from "react";

function About() {
    const [image, setImage] = useState("");

    useEffect(() => {
        fetch("https://source.unsplash.com/random/200x200")
            .then(response => response.url)
            .then(url => setImage(url))
            .catch(error => console.error(error));
    }, []);

    return (
        <fieldset>
            <legend>About View, About.jsx </legend>
            <h1>Welcome to the About Page!</h1>
            <p>Here is some information about us.</p>

            <p>Lorem ipsum dolor si amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

            <p>Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. N</p>

            {image && <img src={image} alt="Random Image" />}
        </fieldset>
    );
}

export default About;