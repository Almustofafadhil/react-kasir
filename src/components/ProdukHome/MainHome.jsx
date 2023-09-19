import React from 'react';

function MainHome() {
  return (
    <>
    <div className="flex mt-10 justify-center">
      <img
        src="https://via.placeholder.com/300"
        alt="Sample Image"
        className="w-[90%] h-64 object-cover rounded-md"
        />
    </div>

    <div className="flex mt-10 justify-center">
      <div className="grid grid-cols-5 gap-4">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src="https://via.placeholder.com/300"
            alt={`Sample Image ${index + 1}`}
            className="rounded-md w-40"
          />
        ))}
      </div>
    </div>
    
    </>
  );
}

export default MainHome;
