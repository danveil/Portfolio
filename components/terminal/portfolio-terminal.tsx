"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/data/site";

type TerminalEntry = { command: string; output: string[] };

const commands: Record<string, string[]> = {
  help: ["Available: whoami, skills, projects, education, certifications, contact, github, linkedin, ping afiq, clear"],
  whoami: ["Muhammad Afiq Hakiki", "Computer Science Student", "Cybersecurity + Networking"],
  skills: ["Python · Java · C/C++", "Network security · Routing · Switching", "Docker · GNS3 · Cisco · Wireshark"],
  projects: [
    "Featured: CaptainOS · MCP Tool Security Inspector",
    "Subnet & VLSM Calculator · CyberPortScanner",
    "Run: open /projects",
  ],
  education: ["Universiti Malaya", "B.Comp.Sc. · Computer System & Networking", "Current CGPA: 3.26"],
  certifications: [
    "Cisco Networking Academy — ENSA · Completed",
    "Google Professional Cybersecurity Certificate · Completed",
  ],
  contact: [siteConfig.email, "Kuala Lumpur, Malaysia", "Available for internship opportunities"],
  github: [siteConfig.github],
  linkedin: [siteConfig.linkedin],
  "ping afiq": [
    "64 bytes from afiq@portfolio",
    "status: available for opportunities",
    "latency: curious + ready to learn",
  ],
  "sudo hire afiq": ["Permission granted.", "Routing to contact section..."],
};

export function PortfolioTerminal() {
  const router = useRouter();
  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      command: "status",
      output: ["secure profile loaded", "focus: cybersecurity + networking", "research: MCP tool security"],
    },
  ]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function submit(event: FormEvent) {
    event.preventDefault();
    const command = value.trim().toLowerCase();
    if (!command) return;
    setValue("");
    if (command === "clear") {
      setHistory([]);
      return;
    }
    if (command === "open /projects") {
      router.push("/projects");
      return;
    }
    const output = commands[command] ?? [`command not found: ${command}`, "type 'help' for available commands"];
    setHistory((items) => [...items.slice(-5), { command, output }]);
    if (command === "sudo hire afiq")
      setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 300);
  }

  return (
    <div className="portfolio-terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-bar">
        <span />
        <span />
        <span />
        <p>secure-shell — portfolio</p>
      </div>
      <div className="terminal-body" aria-live="polite">
        {history.map((entry, index) => (
          <div className="terminal-entry" key={`${entry.command}-${index}`}>
            <p>
              <b>afiq@portfolio:~$</b> {entry.command}
            </p>
            <div className="terminal-output">
              {entry.output.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
        <form onSubmit={submit} className="terminal-form">
          <label htmlFor="terminal-command" className="sr-only">
            Enter a safe portfolio terminal command
          </label>
          <b>afiq@portfolio:~$</b>
          <input
            ref={inputRef}
            id="terminal-command"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            autoComplete="off"
            spellCheck={false}
            aria-describedby="terminal-hint"
          />
          <span className="terminal-cursor" aria-hidden="true" />
        </form>
        <p id="terminal-hint" className="terminal-hint">
          Try “help” or “ping afiq”
        </p>
      </div>
      <div className="terminal-footer">
        <span>SAFE COMMANDS ONLY</span>
        <span>TCP 443</span>
        <span>SHA-256</span>
        <span>MCP</span>
      </div>
    </div>
  );
}
