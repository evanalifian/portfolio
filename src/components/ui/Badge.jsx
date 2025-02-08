export default function Badge({ children, title }) {
  return (
    <span
      className="flex w-max items-center gap-x-2 rounded-md border border-zinc-300 bg-zinc-100 px-2 py-1.5 text-sm font-medium"
      title={title}
    >
      {children}
    </span>
  );
}
