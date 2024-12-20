import { FileUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { techs } from "@/data.json"

export default function Home() {
  return (
    <>
      <Welcome />
      <section className="pt-24 pb-12 space-y-24">
        <GetToKnowMe />
        <TechStacks />
      </section>
    </>
  );
}

function Welcome() {
  return (
    <header className="pt-24 pb-12 mt">
      <h1 className="text-[56px] leading-none font-bold md:text-7xl md:text-center">
        Frontend Developer
      </h1>
      <div className="mt-12 flex flex-col md:items-center">
        <p className="font-medium md:text-lg md:text-center">
          Hi! my name is Evan Alifian. Currently i work with JavaScript,
          React.js, TailwindCSS, and Next.js.
        </p>
        <div className="flex items-center gap-x-4">
          <Link href={"/evanalifian-resume.pdf"} className="button solid_button">
            <FileUser size={18} />
            Resume
          </Link>
          <Link href={"/projects"} className="button outline_button">
            See Projects
          </Link>
        </div>
      </div>
    </header>
  );
}

function GetToKnowMe() {
  return (
    <article>
      <h2>Get To Know With Me</h2>
      <p>
        My name is Evan Alifian. I'm a frontend developer from Bangkalan. I use
        HTML, CSS, JavaScript, React.js, and Tailwind CSS as my tech stacks.{" "}
        <Link href={"/about"} className="primary_link">
          Reed more.
        </Link>
      </p>
    </article>
  );
}

async function TechStacks() {
  return (
    <div>
      <h2>Tech Stacks I Usually Use</h2>
      <div className="flex gap-4 flex-wrap">
        {techs.map((tech) => (
          <Link
            key={tech.name}
            href={tech.link}
            target="_blank"
            className="flex items-center w-max gap-x-2 text-zinc-700 text-sm font-medium bg-zinc-200 p-1.5 border border-zinc-300 rounded-lg"
          >
            <Image src={tech.icon} alt={tech.name} width={20} height={20} />
            {tech.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
