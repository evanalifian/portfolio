import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="main_wrapper py-4 mt-24">
        <p className="text-sm text-center">Built with 💓 by evanalifian</p>
        <div className="flex gap-x-4 justify-center">
          <Link href={"https://instagram.com/evanalifian"} target="_blank" className="text_hover">
            <Instagram strokeWidth={2.25} size={18} />
          </Link>
          <Link href={"https://x.com/evanalifian"} target="_blank" className="text_hover">
            <Twitter strokeWidth={2.25} size={18} />
          </Link>
          <Link href={"https://github.com/evanalifian"} target="_blank" className="text_hover">
            <Github strokeWidth={2.25} size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
