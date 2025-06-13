import React, { useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaClock, FaRocket } from 'react-icons/fa';

const projectsData = [
    {
        id: 1,
        title: "Project Alpha",
        status: "completed",
        description: "A web app for task management A web app for task management A web app for task management A web app for task management A web app for task management",
        year: 2024,
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#"
    },
    {
        id: 2,
        title: "Project Beta",
        status: "in_progress",
        description: "Mobile app for fitness tracking Mobile app for fitness tracking Mobile app for fitness tracking Mobile app for fitness tracking Mobile app for fitness tracking",
        year: 2025,
        image: "https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#"
    },
    {
        id: 3,
        title: "Project Gamma",
        status: "upcoming",
        description: "AI-powered analytics platform AI-powered analytics platform AI-powered analytics platform AI-powered analytics platform AI-powered analytics platform ",
        year: 2025,
        image: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#"
    },
    {
        id: 4,
        title: "Project Delta",
        status: "completed",
        description: "E-commerce website redesign E-commerce website redesign E-commerce website redesign E-commerce website redesign E-commerce website redesign",
        year: 2023,
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#"
    },
    {
        id: 5,
        title: "Project Epsilon",
        status: "in_progress",
        description: "Cloud-based collaboration tool Cloud-based collaboration tool Cloud-based collaboration tool Cloud-based collaboration tool Cloud-based collaboration tool",
        year: 2025,
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#"
    },
];

const Projects = () => {
    const [filter, setFilter] = useState("all");

    const filteredProjects = projectsData.filter(project =>
        filter === "all" ? true : project.status === filter
    );

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return <FaCheckCircle className="text-green-500" />;
            case 'in_progress':
                return <FaClock className="text-yellow-500" />;
            case 'upcoming':
                return <FaRocket className="text-blue-500" />;
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto px-4 py-12 bg-gray-50">
            <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
                Our Projects
            </h1>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                {['all', 'in_progress', 'completed', 'upcoming'].map((status) => (
                    <button
                        key={status}
                        className={`cursor-pointer px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${filter === status
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                            }`}
                        onClick={() => setFilter(status)}
                    >
                        {status === 'all' ? 'All Projects' : status.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase())}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                    <div
                        key={project.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-gray-900 bg-opacity-60 rounded-full p-2">
                                {getStatusIcon(project.status)}
                            </div>
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h2>
                            <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-sm text-gray-500">Year: {project.year}</p>
                                <p className="text-sm capitalize text-gray-700 font-medium flex items-center gap-2">
                                    {getStatusIcon(project.status)}
                                    {project.status.replace('_', ' ')}
                                </p>
                            </div>
                            <a
                                href={project.link}
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                            >
                                View Project
                                <FaArrowRight className="ml-2" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <p className="text-center text-gray-500 mt-12 text-lg">No projects found for this category.</p>
            )}
        </div>
    );
};

export default Projects;