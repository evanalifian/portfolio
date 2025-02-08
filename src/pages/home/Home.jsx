import "./style.css";

export default function Home() {
  return (
    <div
      id="box"
      className="md:min-h-lvw relative flex min-h-screen flex-col justify-center gap-y-6 px-1 py-32 md:items-center lg:min-h-fit lg:items-start after:lg:absolute after:lg:right-10 after:lg:h-56 after:lg:w-56 after:lg:rounded-2xl after:lg:bg-cover after:lg:bg-center after:lg:bg-no-repeat after:lg:content-['']"
    >
      <h1 className="text-3xl font-medium md:text-5xl">Frontend Developer</h1>
      <p className="text-gray-700 md:w-[400px] md:text-center md:text-lg lg:text-start">
        Hi there, my name is Evan Alifian. Currently i work with <b>React</b>{" "}
        and <b>Tailwind</b> to build a website.
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        className="flex h-10 w-max items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-gray-100 transition-colors hover:bg-zinc-800"
      >
        See my resume
      </a>
    </div>
  );
}
