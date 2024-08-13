import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/data"; // Ensure the correct path to your data file

const ProjectDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const project = data.find((item) => item.id === parseInt(id));

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-[#0a192f] text-white pt-[80px] px-4 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0a192f] text-white pt-[80px] px-4 flex flex-col items-center">
      <div className="max-w-[800px] w-full text-center">
        <h1 className="text-4xl font-bold mb-8">{project.name}</h1>
        {project.video ? (
          <video controls className="w-full rounded-lg shadow-lg mb-8">
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={project.image}
            alt={project.name}
            className="w-full rounded-lg shadow-lg mb-8"
          />
        )}

        <h2 className="text-4xl font-bold">Description</h2>
        <p className="text-lg mb-8">{project.description}</p>

        <div className="mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            View on GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ml-4"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
