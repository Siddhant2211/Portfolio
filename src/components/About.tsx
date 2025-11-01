import { Code2, GraduationCap, MapPin, Calendar, Server, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { number: "8.21", label: "Current CGPA (IIIT Ranchi)" },
  { number: "5+", label: "Full-Stack Projects Delivered" },
  { number: "800+", label: "DSA Problems Solved" },
  { number: "3★", label: "CodeChef Competitive Rating" },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Indian Institute of Information Technology, Ranchi",
    detail: "B.Tech in Computer Science and Engineering (2022–2026)",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Khelgaon, Ranchi, India",
    detail: "Open to remote & hybrid opportunities",
  },
  {
    icon: Code2,
    title: "Technical Skills",
    description: "Java • Python • JavaScript • TypeScript",
    detail: "Next.js • React.js • Node.js • Docker • MongoDB • MySQL",
  },
  {
    icon: Calendar,
    title: "Experience",
    description: "Full Stack Web Developer Intern — Khetify",
    detail: "Developing scalable, secure full-stack web applications",
  },
  {
    icon: Server,
    title: "Core Expertise",
    description: "Backend-Focused Engineering",
    detail: "API Design • Microservices • Cloud & Containerization",
  },
  {
    icon: Trophy,
    title: "Achievements",
    description: "Competitive Programming",
    detail: "CodeChef (3★) • LeetCode (1799) • Codeforces (Pupil)",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About</span>{" "}
            <span className="text-premium">Me</span>
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Passionate Full Stack Developer with hands-on experience in
            building production-grade web applications using modern
            technologies and clean architecture.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="w-44 h-44 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-transparent bg-gradient-to-r from-indigo-500 to-pink-500 p-1">
              <img
                src="/photo-modified.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold text-premium mb-4">
                Building Scalable & Impactful Digital Solutions
              </h3>

              <div className="space-y-5 text-secondary text-lg leading-relaxed">
                <p>
                  I’m a <span className="text-primary font-semibold">Full Stack Developer</span> currently
                  pursuing my B.Tech in Computer Science and Engineering at{" "}
                  <span className="gradient-accent-text font-semibold">
                    IIIT Ranchi
                  </span>.
                  My focus lies in designing robust systems that combine performance,
                  scalability, and clean code practices.
                </p>

                <p>
  I primarily focus on the{" "}
  <span className="gradient-accent-text font-semibold">
    Node.js and Express.js ecosystem
  </span>
  , building scalable and secure backend services integrated with MySQL,
  PostgreSQL, and MongoDB. On the frontend, I develop{" "}
  <span className="gradient-accent-text font-semibold">
    React.js and Next.js
  </span>{" "}
  applications styled with Tailwind CSS and Shadcn/UI to deliver seamless,
  user-friendly experiences. My work spans the full stack — from designing APIs
  and managing databases to deploying production-ready applications using
  Docker and GitHub Actions.
</p>


                <p>
                  At <span className="font-semibold text-primary">Khetify</span>, I’m contributing to
                  transforming static interfaces into scalable full-stack solutions.
                  Beyond that, I continuously explore advanced concepts in DSA,
                  microservices, and cloud-native architectures.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glass hover-lift p-6 group cursor-pointer hover:shadow-card bg-gray-900 border border-gray-800 rounded-2xl transition duration-300 hover:border-indigo-500 hover:shadow-indigo-500/20"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-gradient-primary rounded-full group-hover:shadow-glow transition-all duration-300">
                    <item.icon className="h-6 w-6 text-background" />
                  </div>

                  <div>
                    <h4 className="font-bold text-premium mb-1">{item.title}</h4>
                    <p className="text-secondary text-sm mb-2">{item.description}</p>
                    <p className="text-subtle text-xs">{item.detail}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-3">
                {stat.number}
              </div>
              <div className="text-subtle text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
