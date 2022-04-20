import React from 'react';

function Details(props) {
    return (
        <div className="container mt-5 md:mt-10">
            <h1 className="text-3xl lg:text-4xl font-semibold text-secondary dark:text-blue-300">Pura Uluwatu</h1>
            <h6 className="text-sm md:text-base text-gray-500 dark:text-gray-300 mt-2">Denpasar, Bali</h6>
            <img src="/images/popular-2.jpg" alt="" className="mt-5 w-full object-cover h-72 md:h-96"/>
            <div className="mt-12 md:max-w-3xl">
                <h5 className="text-lg font-semibold">Lorem Ipsum</h5>
                <p className="mt-3 text-gray-700 dark:text-gray-200 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae consequatur delectus deserunt
                    dolor, doloremque dolores fugit ipsam maxime minima, nostrum praesentium provident reiciendis suscipit
                    velit voluptatibus voluptatum? Nobis, quis?</p>

                <p className="mt-3 text-gray-700 dark:text-gray-200 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae consequatur delectus deserunt
                    dolor, doloremque dolores fugit ipsam maxime minima, nostrum praesentium provident reiciendis suscipit
                    velit voluptatibus voluptatum? Nobis, quis?</p>

                <h5 className="mt-10 text-lg font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing.</h5>
                <p className="mt-3 text-gray-700 dark:text-gray-200 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae consequatur delectus deserunt
                    dolor, doloremque dolores fugit ipsam maxime minima.?</p>
            </div>
        </div>
    );
}

export default Details;