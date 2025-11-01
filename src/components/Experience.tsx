import { Card, CardContent } from "@/components/ui/card";

// Import logos from assets
import khetifyLogo from "@/assets/khetify.png";
import tdLogo from "@/assets/trulydesignfirm-logo.jpg";
import xurgeLogo from "@/assets/xurge-logo.jpg";

const experiences = [
  
  
  {
    company: "Khetify",
    role: "Full Stack Web Developer — Internship",
    duration: "Sep 2025 – Present",
    logo: khetifyLogo,
    description: [
      "Collaborating with the founding team to transform Khetify’s static website into a scalable full-stack application.",
      "Developing and integrating backend APIs with database systems for user data, roles, and authentication.",
      "Implementing deployment workflows, bug fixes, and performance optimizations for production-grade reliability.",
      "Contributing across frontend and backend layers using React, Node.js, and MySQL.",
    ],
    tech: ["React", "Node.js", "MySQL", "Express.js", "Tailwind CSS",],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gray-950 text-gray-100"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-premium">Professional</span>{" "}
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-lg text-subtle max-w-2xl mx-auto">
          Real-world development experience in backend and full-stack engineering — 
          delivering scalable systems, optimized APIs, and business-impacting solutions.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-gray-800 pl-6 space-y-20">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <span className="absolute -left-[14px] top-8 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 border-4 border-gray-950 shadow-md"></span>

            {/* Experience Card */}
            <Card className="rounded-2xl shadow-xl bg-gray-900 border border-gray-800 transition duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20">
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-16 h-16 object-contain rounded-full border border-gray-700 shadow-md bg-white p-1"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-100">{exp.role}</h3>
                    <p className="text-sm text-gray-400">
                      {exp.company} • {exp.duration}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 leading-relaxed">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-indigo-400 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
