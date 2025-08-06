import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-5 md:py-10"
    >
      <div className="max-w-[1000px] mx-auto px-8">
        <h2 className="text-4xl font-bold inline border-b-4 border-pink-600 mb-8">
          Experience
        </h2>
        <div className="p-6">
          <h3 className="text-3xl font-semibold ">Prompt Engineer</h3>
          <p className="mt-2 font-semibold">Hachi AI</p>
          <p className="mt-2 font-semibold">Oct 2024 - present</p>
          <p className="mt-5 font-medium">
            As a Prompt Engineer and Team Lead, I specialize in designing,
            refining, and optimizing prompts to ensure accurate data extraction
            from complex documents and unstructured text using large language
            models. My responsibilities include iterative prompt development,
            contextual tuning for consistency, and conducting extensive testing
            to validate output accuracy against our database records. I also
            write and execute SQL queries to support data verification, cleanup,
            and tracking within our internal systems. In addition to hands-on
            engineering work, I lead a team of prompt engineers, providing
            strategic guidance, reviewing prompt logic, and coordinating
            workflows to ensure high-quality, scalable solutions across multiple
            use cases.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>
              Led the development of a scalable prompt refinement framework that
              improved document data extraction accuracy by over 80%, reducing
              reliance on manual validation.
            </li>
            <li>
              Successfully deployed prompt strategies that handled complex
              documents layouts and multilingual content, resulting in
              consistent and reliable data extraction across varied formats.
            </li>
            <li>
              Designed SQL-based validation scripts to automate accuracy checks
              between extracted outputs and database records, streamlining QA
              processes.
            </li>
            <li>
              Mentored a team of prompt engineers, implementing best practices
              for prompt design, version control, and performance testing across
              use cases.
            </li>
            <li>
              Spearheaded the integration of structured prompt testing
              workflows, enabling faster iterations and decreasing prompt
              development time by 30%.
            </li>
          </ul>
        </div>
        <div className="p-6">
          <h3 className="text-3xl font-semibold ">React JS Developer</h3>
          <p className="mt-2 font-semibold">IIFA Tech Software Company</p>
          <p className="mt-2 font-semibold">Feb 2024 - Sep 2024</p>
          <p className="mt-5 font-medium">
            As a Front-End Developer, I played a key role in designing,
            developing, and optimizing modern web applications using ReactJS. I
            was responsible for translating design wireframes into high-quality
            code, building reusable components, and ensuring seamless
            performance across all major browsers and devices. My role also
            involved close collaboration with UI/UX designers, back-end
            developers, and QA teams to deliver interactive, user-centric
            digital experiences.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>
              Developed and maintained responsive web applications using
              ReactJS, ensuring cross-browser compatibility and optimal
              performance.
            </li>
            <li>
              Collaborated with the team to implement UI/UX designs, focusing on
              enhancing user experience based on feedback.
            </li>
            <li>
              Integrated RESTful APIs for dynamic data interaction and optimized
              application performance, resulting in faster load times and
              improved user satisfaction.
            </li>
            <li>
              Implemented responsive design principles and CSS frameworks like
              Bootstrap and Tailwind CSS to ensure seamless user experiences
              across desktop, tablet, and mobile devices.
            </li>
            <li>
              Utilized statemanagement tools such as Redux and Context API to
              handle complex application state, improving scalability and
              maintainability of the codebase.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
