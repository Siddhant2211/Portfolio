



import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Code2, Globe } from "lucide-react";

// import images
import financeImg from "@/assets/finance.jpg";
import ecommerceImg from "@/assets/eCommerce.webp";
import codeEditorImg from "@/assets/codeEditor.jpg";
import medilinkerImg from "@/assets/dAppoint.jpg"
import portfolioImg from "@/assets/portfolio.jpg";

const projects = [
  {
    title: "AI Finance Platform",
    description: [
      "Full-stack finance management platform built with Next.js and PostgreSQL.",
      "Integrated Gemini API for AI-driven budgeting and expense optimization.",
      "Implemented Clerk authentication and automated email reporting.",
      "Developed 10+ real-time analytics charts for spending visualization.",
      "Enabled receipt scanning with OCR for instant expense tracking.",
    ],
    image: financeImg,
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "Gemini API",
      "Clerk Auth",
      "Shadcn/UI",
    ],
    github: "https://github.com/Siddhant2211/Blue-Peak",
    live: "https://blue-peak-tau.vercel.app/",
    category: "AI & FinTech",
    year: "2025",
  },

  {
    title: "E-Commerce Website",
    description: [
      "Developed a responsive e-commerce platform with secure payments.",
      "Implemented user authentication, product filtering, and order tracking.",
      "Used MongoDB for product and order management with 99.9% availability.",
      "Achieved Lighthouse accessibility score of 95 across all devices.",
      "Deployed on Netlify with real-time product updates using React hooks.",
    ],
    image: ecommerceImg,
    tech: [
      "React.js",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "JWT Auth",
    ],
    github: "https://github.com/Siddhant2211/Ecommerce",
    live: "https://ecom-sid.netlify.app/",
    category: "Web Development",
    year: "2025",
  },
  {
    title: "Code Editor",
    description: [
      "Built a browser-based code editor with Monaco Editor featuring syntax highlighting and auto-completion.",
      "Integrated Judge0 API for secure, real-time execution and compilation in C++, Java, Python, and JavaScript.",
      "Implemented a responsive UI with multi-language support allowing seamless code switching and instant run.",
      "Optimized editor performance for faster execution and error detection in real time.",
    ],
    image: codeEditorImg,
    tech: ["React.js", "Monaco Editor", "Judge0 API", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Siddhant2211/Editor",
    live: "https://editor-xrnf.vercel.app/",
    category: "Web Development",
    year: "2024",
  },
  {
  title: "MediLinker",
  description: [
    "End-to-end telemedicine platform built with Next.js and PostgreSQL for secure and scalable healthcare delivery.",
    "Integrated Vonage API for real-time video consultations between patients and doctors.",
    "Implemented Clerk authentication with role-based dashboards for patients, doctors, and administrators.",
    "Enabled appointment booking, automated reminders, and medical history tracking for seamless virtual care.",
    "Designed a usage-based pricing model with high-performance backend architecture and strict data protection compliance.",
  ],
  image: medilinkerImg,
  tech: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma ORM",
    "Tailwind CSS",
    "Vonage API",
    "Clerk Auth",
    "Shadcn/UI",
  ],
  github: "https://github.com/Siddhant2211/dAppoint",
  live: "https://medi-linker.vercel.app/",
  category: "AI & HealthTech",
  year: "2025",
},

];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured</span>{" "}
            <span className="text-premium">Projects</span>
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            A selection of full-stack and AI-powered applications demonstrating
            scalability, design, and real-world functionality.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass hover-lift group overflow-hidden flex flex-col bg-gray-900 border border-gray-800 rounded-2xl shadow-lg hover:shadow-primary/20 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/60 to-transparent opacity-70 group-hover:opacity-90 transition duration-500" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-gradient-primary text-background shadow-md px-3 py-1 rounded-full text-xs">
                    {project.category}
                  </Badge>
                  <Badge className="bg-gradient-accent text-background shadow-md px-3 py-1 rounded-full text-xs">
                    {project.year}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-bold text-premium mb-4 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                {/* Bullet Points */}
                <ul className="text-sm text-gray-400 mb-6 space-y-2">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-primary/70"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="glass text-xs px-3 py-1 rounded-full border border-gray-700 hover:bg-primary/20 transition-all cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass border border-primary/40 hover:bg-primary/10 hover:border-primary transition-all duration-300 rounded-full px-4"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                      View Code
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="glass border border-accent/40 hover:bg-accent/10 hover:border-accent transition-all duration-300 rounded-full px-4"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="glass border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-glow group rounded-full px-6 py-3 text-lg"
            asChild
          >
            <a
              href="https://github.com/Siddhant2211"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
