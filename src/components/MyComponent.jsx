// src/MyComponent.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyComponent = () => {
    return (
        <div className="container">
            <header className="text-center bg-primary text-white py-5">
                <h1>My Portfolio</h1>
                <p>Welcome to my personal portfolio! Here are some of my projects.</p>
            </header>
            <main className="my-5">
                <h2>Projects</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Project 1</h5>
                                <p className="card-text">Description of Project 1.</p>
                                <a href="#" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Project 2</h5>
                                <p className="card-text">Description of Project 2.</p>
                                <a href="#" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Project 3</h5>
                                <p className="card-text">Description of Project 3.</p>
                                <a href="#" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="text-center bg-light py-4">
                <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MyComponent;
