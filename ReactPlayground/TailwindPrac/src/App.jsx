import './App.css'

import React from 'react';

const App = () => {
  return (
    <>
      {/* text-3xl: Make the text 3xl (3 times the base font size) */}
      {/* font-bold: Make the text bold */}
      {/* underline: Underline the text */}
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      {/* px-4: Add padding on the left and right */}
      {/* py-2: Add padding on the top and bottom */}
      {/* rounded: Add rounded corners */}
      {/* bg-blue-500: Set the background color to blue-500 */}
      {/* text-white: Set the text color to white */}
      <button className="px-4 py-2 rounded bg-blue-500 text-white">
        Click me
      </button>

      {/* border: Add a border */}
      {/* p-4: Add padding */}
      {/* shadow-lg: Add a shadow */}
      <div className="border p-4 shadow-lg">
        This is a div with a border, padding, and a shadow.
      </div>

      {/* flex: Make the div a flex container */}
      {/* flex-col: Make the div a flex column */}
      {/* sm:flex-row: On screens wider than 640px, make the div a flex row */}
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/2 p-4">
          {/* sm:w-1/2: On screens wider than 640px, make the div half the width */}
          {/* p-4: Add padding */}
          This is the left column on screens wider than 640px.
        </div>
        <div className="sm:w-1/2 p-4">
          This is the right column on screens wider than 640px.
        </div>
      </div>

      {/* text-red-500: Set the text color to red-500 */}
      {/* text-lg: Make the text large */}
      {/* font-bold: Make the text bold */}
      <p className="text-red-500 text-lg font-bold">
        This is large, bold, red text.
      </p>

      {/* mx-auto: Center the div horizontally */}
      {/* max-w-xl: Set the maximum width to 36rem (xl) */}
      <div className="mx-auto max-w-xl">
        This container is centered and its maximum width is 36rem (xl).
      </div>

      <div className='font-extrabold bg-red-500 text-red-950'>
        John Sandoval
      </div>

      <div className='font first-letter:text-red-500 text-green-500'>
        John Sandoval
      </div>

    </>
  );
};

export default App;
