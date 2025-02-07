import React, { useState } from 'react';
import { PROJECTS } from '../constants/index.js';

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to open image in full-screen mode
    const openImage = (image) => {
        setSelectedImage(image);
    };

    // Function to close the enlarged image
    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <div className='border-b border-neutral-900 pb-20 '>
            <h1 className='my-20 text-center text-4xl font-bold'>Projects</h1>
            <div className="flex flex-col items-center gap-12 ">

                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className='flex flex-col md:flex-row items-start gap-8 lg:gap-12 w-full max-w-5xl'
                    >
                        {/* Image Section */}
                        <div className='w-full max-w-[250px] md:max-w-[300px] flex-shrink-0'>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full rounded-lg shadow-lg cursor-zoom-in transition-transform duration-300 hover:scale-105"
                                onClick={() => openImage(project.image)}
                            />
                        </div>

                        {selectedImage && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeImage}>
                                <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-full rounded-lg" />
                            </div>
                        )}

                        {/* Project Details */}
                        <div className="flex-1">
                            <h3 className="mb-3 text-4xl font-semibold text-black">
                                {project.title}
                            </h3>
                            <p className="mb-5 text-2xl text-gray-700">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-3 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded bg-purple-600 px-4 py-2 text-base font-semibold text-white"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons in one row */}
                            <div className="flex gap-4 mt-4">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block rounded bg-green-500 px-6 py-3 text-lg font-semibold text-white hover:bg-green-700"
                                    >
                                        Live Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block rounded bg-gray-800 px-6 py-3 text-lg font-semibold text-white hover:bg-gray-600"
                                    >
                                        GitHub Repo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
