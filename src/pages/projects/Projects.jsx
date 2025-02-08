import { SquareArrowOutUpRight } from "lucide-react";
import { projects } from "../../constans/projects";

export default function Projects() {
  return (
    <div className="space-y-16 py-16">
      <div className="space-y-4">
        <h1 className="mb-4 text-3xl font-medium">Projects</h1>
        <p>Here are some projects that i made.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects
          .map((project) => (
            <a key={project.name} href={project.url} target="_blank">
              <div className="overflow-hidden rounded-md border border-zinc-300 bg-zinc-100">
                <img src={project.preview_img} alt={project.name} />
                <div className="space-y-4 p-4">
                  <p className="font-medium">{project.desc}</p>
                  <div className="flex justify-between">
                    <div className="flex gap-x-2">
                      {project.techs.map((tech) => (
                        <img
                          key={tech.name}
                          src={tech.icon}
                          alt={tech.name}
                          className="w-5"
                        />
                      ))}
                    </div>
                    <a href={project.url} target="_blank">
                      <SquareArrowOutUpRight
                        size={18}
                        className="stroke-gray-500 transition-colors hover:stroke-gray-900"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))
          .reverse()}
      </div>
    </div>
  );
}
