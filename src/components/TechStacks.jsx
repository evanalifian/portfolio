import { techsAndTools } from "../constans/techs-and-tools";
import Badge from "./ui/Badge";

export function Techs() {
  return (
    <div className="flex gap-2 flex-wrap">
      {techsAndTools.techs.map((tech) => (
        <Badge key={tech.name} title={tech.name}>
          <img src={tech.icon} alt={tech.name} className="w-5" />
          {tech.name}
        </Badge>
      ))}
    </div>
  );
}

export function Tools() {
  return (
    <div className="flex gap-2 flex-wrap">
      {techsAndTools.tools.map((tool) => (
        <Badge key={tool.name} title={tool.name}>
          <img src={tool.icon} alt={tool.name} className="w-5" />
          {tool.name}
        </Badge>
      ))}
    </div>
  );
}
