import { projects } from "@/data.json";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <header>
        <h1>Projects</h1>
        <p>Feel free to see my projects. And they are open source.</p>
      </header>
      <Projects />
    </>
  );
}

function Projects() {
  return (
    <div className="mt-12 grid gap-4 grid-cols-1 md:grid-cols-2">
      {projects.map((project) => (
        <figure
          key={project.name}
          className="relative bg-white border border-zinc-300 rounded-lg overflow-hidden"
        >
          <Image
            src={project.img}
            alt={project.name}
            width={1075}
            height={786}
            className="w-full"
          />
          <Link
            href={project.link}
            target="_blank"
            className="block absolute top-4 right-4 bg-zinc-500 p-2 rounded-full"
          >
            <Link2 size={18} className="stroke-zinc-50" />
          </Link>
          <figcaption className="bg-zinc-100 p-4">
            <span className="font-medium">{project.name}</span>
            <p>{project.desc}</p>
            <div className="flex gap-x-4">
              {project.techs.map((tech) => (
                <Image key={tech.name} src={tech.icon} alt={tech.name} width={20} height={20} title={tech.name} />
              ))}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
