import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { socials } from "@/data.json"
import os from "os"

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="main_wrapper py-4 mt-24">
        <p className="text-sm text-center">Built with 💓 by evanalifian</p>
        <div className="flex gap-x-4 justify-center">
          {socials.map(social => (
            <Link key={social.name} href={social.link} target="_blank" className="text_hover">
              <ConditionalIcons socialName={social.name} />
            </Link>
          ))}
        </div>
        <p>{os.homedir()}</p>
      </div>
    </footer>
  );
}

function ConditionalIcons({ socialName }) {
  switch (socialName.toLowerCase()) {
    case "instagram":
      return <Instagram strokeWidth={2.25} size={18} />
    case "x":
      return <Twitter strokeWidth={2.25} size={18} />
    case "github":
      return <Github strokeWidth={2.25} size={18} />
    default:
      break;
  }
}
