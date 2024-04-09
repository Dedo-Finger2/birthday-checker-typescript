import { Instagram, Github, Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-500 p-2 rounded-md shadow-md text-zinc-50 font-bold flex flex-col justify-between items-center gap-4">
      <p>@Antonio Mauricio</p>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <a
          target="_blank"
          className="flex flex-row gap-2 items-center transition ease-in-out p-2 hover:text-blue-200"
          href="https://www.instagram.com/antonioalmeida2003/"
        >
          <Instagram />
          Instagram
        </a>
        <a
          target="_blank"
          className="flex flex-row gap-2 items-center transition ease-in-out p-2 hover:text-blue-200"
          href="https://www.linkedin.com/in/antonio-mauricio-4645832b3/"
        >
          <Linkedin />
          Linkedin
        </a>
        <a
          target="_blank"
          className="flex flex-row gap-2 items-center transition ease-in-out p-2 hover:text-blue-200"
          href="https://github.com/Dedo-Finger2"
        >
          <Github />
          Github
        </a>
        <a
          target="_blank"
          className="flex flex-row gap-2 items-center transition ease-in-out p-2 hover:text-blue-200"
          href="mailto:antonioimportant@gmail.com"
        >
          <Mail />
          Gmail
        </a>
      </div>
    </footer>
  );
}
