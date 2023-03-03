import React, { useState } from 'react';

export default function Portfolio() {
    const projects = [
        {
            id: 0,
            name: "Movie Recommender",
            image: "./images/MovieRec.png",
            description: "A project where I worked with 3 other developers to create a small movie recommendation application for those struggling with something to watch",
            link: "https://hayni100.github.io/Movie-Recs/"
        },
        {
            id: 1,
            name: "newDND",
            image: "./images/newDND.png",
            description: "A turn-based web game that takes a logged-in user through a small dungeons using turn based logic, RNG, and allows for small fighting exchanges with monsters encountered in the dungeon",
            link: "https://new-dnd7.herokuapp.com/"
        },
    ];

    return (
        <div>
            <h1 className="text-center pt-3 pb-3">Projects</h1>
            <div className="pl-5 pr-5 cards mx-auto">
                {projects.map(project => (
                    <div className="card mx-auto cssCard" key={project.id}>
                    <img src={project.image} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p className="card-text">{project.description}</p>
                            <a href={project.link} className="btn btn-primary">Visit</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};