import React from 'react';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-auto p-4 md:p-12 lg:p-16 bg-blue-200">
            <div className="text-center w-full mx-0 md:mx-12 lg:mx-16 bg-white">
                <h1 className="text-2xl font-bold mb-2 text-blue-800">Welcome to our Fake Home Page!</h1>
                <p className="text-gray-800">This is just a placeholder for demonstration purposes.</p>
            </div>
        </div>
    );
}

export default Home;