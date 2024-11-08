"use client";

import { Moon, Sun } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Twitter, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "./ui/button";


const Switcher = () => {
  const { setTheme } = useTheme();

  return (
    <div className=" flex justify-between">
      <div className="flex gap-2 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="mt-1 bg-background">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline">Contact</Button>
      </div>
      <div>
        <ul className="flex gap-2 items-center">
          <li>
            <Button variant="outline" asChild size="icon">
              <a href="https://github.com/RaunakDiesFromCode" target="_blank">
                <Github />
              </a>
            </Button>
          </li>
          <li>
            <Button variant="outline" asChild size="icon">
              <a
                href="https://www.linkedin.com/in/raunak-manna/"
                target="_blank"
              >
                <Linkedin />
              </a>
            </Button>
          </li>
          <li>
            <Button variant="outline" asChild size="icon">
              <a href="https://x.com/RaunakM298742" target="_blank">
                <Twitter />
              </a>
            </Button>
          </li>
          <li>
            <Button variant="outline" asChild size="icon">
              <a
                href="https://www.instagram.com/raunakisannoying/"
                target="_blank"
              >
                <Instagram />
              </a>
            </Button>
          </li>
          <li>
            <Button variant="outline" asChild size="icon">
              <a
                href="mailto:raunakmanna43@gmail.com&subject=I%20saw%20your%20portfolio"
                target="_blank"
              >
                <Mail />
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Switcher;
