import { Download, Github, Linkedin, ExternalLink } from "lucide-react"
import ResumeSectionNav from "../components/ResumeSectionNav"

const RESUME_URL =
  "https://raw.githubusercontent.com/luxscious/git-cloud-storage/main/Gabriella_Gerges_Resume.pdf"

// ─── Data ─────────────────────────────────────────────────────────────────────

const workExperience = [
  {
    id: "dynatrace",
    title: "Software Engineer",
    company: "Dynatrace",
    location: "Toronto, ON, Canada",
    period: "Jan 2026 — Present",
    current: true,
    bullets: [
      "Joined the Feature Management team, working on Dynatrace's feature flag and experimentation platform.",
    ],
    skills: ["Feature Management", "Feature Flags", "TypeScript", "React"],
  },
  {
    id: "devcycle",
    title: "Software Engineer, Full Stack Developer",
    company: "DevCycle",
    location: "Toronto, ON, Canada",
    period: "Aug 2025 — Jan 2026",
    current: false,
    bullets: [
      "Drove dashboard design decisions defining UX, layout, and workflows for feature management and debugging tools.",
      "Delivered customer-facing features including bulk feature editing, variation status indicators, improved feature settings, and responsive UI fixes.",
      "Handled on-call responsibilities, communicating directly with customers to diagnose issues and ship fixes to production.",
      "Improved the feature flag lifecycle, including staleness detection, default variation behavior, and cleanup of legacy configurations.",
      "Developed and improved Point-in-Time simulation and historical debugging, increasing reliability and usability.",
      "Owned work end-to-end, regularly shipping into unfamiliar areas of the codebase with confidence.",
    ],
    skills: ["React", "TypeScript", "Feature Flags", "Dashboard UI"],
  },
  {
    id: "hyperpad",
    title: "Software Engineer, Full Stack Developer",
    company: "HyperPad",
    location: "London, ON, Canada",
    period: "Jun 2021 — Sept 2023",
    current: false,
    bullets: [
      "Onboarded and mentored new hires, teaching Git CLI workflows, pull request rebasing, and clean code practices.",
      "Collaborated with UI/UX designers to develop polished, user-focused frontend features.",
      "Developed backend services using GraphQL, Ruby on Rails, and Firebase to enhance performance and scalability.",
      "Automated grant workflows with Playwright bots, improving operational efficiency.",
      "Created robust E2E tests with Cypress, Detox, and Cucumber to ensure software quality.",
      "Delivered responsive frontend components with React.js, HTML/CSS, and Next.js in an Agile environment.",
    ],
    skills: ["React.js", "Next.js", "GraphQL", "Ruby on Rails", "Firebase", "Cypress", "Playwright"],
  },
  {
    id: "ta",
    title: "Teaching Assistant — Software Design, Web Technologies",
    company: "Western University",
    location: "London, ON, Canada",
    period: "Winter 2024, Fall 2023",
    current: false,
    bullets: [
      "Graded assignments on UML diagrams, JavaFX, and software design principles within tight 2–3 day deadlines.",
      "Facilitated in-person lab sessions, guiding students in applying practical software development skills.",
      "Led full-stack web development and AWS deployment labs, aiding students in application creation and cloud hosting.",
    ],
    skills: ["UML", "JavaFX", "AWS", "Full-Stack Web Development", "Mentorship"],
  },
]

const research = [
  {
    id: "thesis",
    title: "EV Charging Infrastructure — Penetration Testing",
    description:
      "Conducted penetration testing on open-source EV charging infrastructure, identifying critical vulnerabilities in MQTT-based network communication. Developed a Docker + VM-based virtual testbed, executed multi-threaded DoS attacks using Python and Bash, and used Kali Linux tools (Wireshark, tcpdump, nmap) for traffic sniffing and reconnaissance.",
    skills: ["Penetration Testing", "Docker", "Python", "Bash", "Kali Linux", "MQTT", "ML-IDS"],
    institution: "Western University — Dept. of Electrical & Computer Engineering",
    period: "2023 — 2025",
    demo: "https://scholar.google.ca/scholar?hl=en&as_sdt=0%2C5&q=gabriella+gerges&btnG=#:~:text=Securing%20Electric%20Vehicle%20Charging%20Infrastructure%3A%20A%20Penetration%20Testing%20Framework%20for%20Identifying%20and%20Mitigating%20Cybersecurity%20Threats",
  },
  {
    id: "ml-ids",
    title: "ML-based Intrusion Detection Systems",
    description:
      "Built and tested ML-based IDS models to detect anomalous network traffic using custom datasets derived from simulated attack scenarios. Analyzed OCPP, ISO 15118, and IEC 61850 communication protocols to uncover vulnerabilities in Charge Point–to–Backend communications.",
    skills: ["Machine Learning", "Python", "Network Security", "OCPP", "IEC 61850"],
    institution: "Western University — Dept. of Electrical & Computer Engineering",
    period: "2023 — 2025",
    demo: "https://github.com/luxscious/git-cloud-storage/blob/main/CS9636_Research_Project%20.pdf",
  },
]

const projects = [
  {
    id: "ai-chatbot",
    title: "AI Resume Chatbot",
    subtitle: "Personal Portfolio Project · 2025",
    description:
      "AI-powered chatbot that answers questions about my resume using a hybrid retrieval system combining Neo4j graph traversal and OpenAI vector embeddings. Go backend, React + TailwindCSS + shadcn/ui frontend, CI/CD via GitHub Actions to DigitalOcean.",
    image: `${import.meta.env.BASE_URL}chatbot.jpeg`,
    skills: ["Go", "Neo4j", "OpenAI", "React", "TailwindCSS", "Docker", "GitHub Actions"],
    demo: "https://luxscious.github.io/portfolio-chat-bot/",
    github: "https://github.com/luxscious",
  },
  {
    id: "task-management",
    title: "Task Management Web App",
    subtitle: "Personal Project · 2025",
    description:
      "Full-stack web app for task creation, categorization, and tracking built with ASP.NET Core MVC. RESTful CRUD operations, Entity Framework Core with SQLite, deployed to a cloud Linux server with reverse proxy and SSL.",
    image: null,
    skills: ["ASP.NET Core", "C#", "Entity Framework", "SQLite", "Tailwind CSS"],
    demo: null,
    github: "https://github.com/luxscious?tab=repositories#:~:text=Star-,kaban%2Dapp,-Public",
  },
  {
    id: "hive",
    title: "HIVE",
    subtitle: "SheHacks VI · 2022",
    description:
      "Full-stack web app built solo in a weekend hackathon. React frontend with Firebase auth, GitHub API integration, and Express backend.",
    image: `${import.meta.env.BASE_URL}hive.jpg`,
    skills: ["React.js", "Firebase", "GitHub API", "Node.js", "Express.js"],
    demo: "https://devpost.com/software/hive-thl07v",
    github: null,
  },
  {
    id: "risync",
    title: "RiSync",
    subtitle: "Hack Western 8 · 2021",
    description:
      "Designed UI/UX, built the frontend, deployed to Google Cloud, and integrated Google Places and Time Zone APIs — 23 hours straight.",
    image: `${import.meta.env.BASE_URL}risync.jpg`,
    skills: ["React", "Google Cloud", "Google Maps API", "JavaScript"],
    demo: "https://devpost.com/software/jet-lag-fixer",
    github: null,
  },
]

const education = [
  {
    id: "mesc",
    degree: "Masters of Engineering Science, Software Engineering (MEsc.)",
    institution: "Western University",
    period: "June 2025",
    notes: ["Ontario Graduate Scholarship (OGS) — 2023"],
  },
  {
    id: "besc",
    degree: "Bachelor of Engineering Science, Software Engineering with Distinction (BESc.)",
    institution: "Western University",
    period: "2023",
    notes: [
      "Dean's Honor List — 2021, 2022, 2023",
      "Western Scholarship of Excellence — 2019",
    ],
  },
]

const skills = [
  { label: "Expert", value: "JavaScript, Python, Java, TypeScript, HTML/CSS" },
  { label: "Familiar", value: "C#, Ruby, SQL, C++, Golang" },
  { label: "Frontend & UI", value: "React.js, Next.js, Tailwind CSS, Material UI, Figma" },
  { label: "Backend & APIs", value: "Node.js, Ruby on Rails, GraphQL, Firebase, REST APIs, MongoDB, Neo4J" },
  { label: "Cloud & DevOps", value: "Docker, AWS, Git, Unix/Linux, VM Environments" },
  { label: "Cybersecurity", value: "Penetration Testing, Network Traffic Analysis, DoS Simulation, IDS Dataset Creation" },
]

// ─── Section Heading ──────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-white text-2xl font-bold whitespace-nowrap">{children}</h2>
      <div className="h-px bg-slate-800 grow" />
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ResumePage() {
  return (
    <div className="min-h-dvh font-display text-slate-100 relative">
      <ResumeSectionNav />
      <main className="px-4 md:px-20 lg:px-40 pt-28 pb-10 flex justify-center">
        <div className="flex flex-col w-full max-w-[1000px] gap-16">

          {/* ── Hero ── */}
          <section className="flex flex-col md:flex-row items-center gap-8 py-10">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 bg-[#DB2777] rounded-full blur opacity-25" />
              <div className="relative size-40 rounded-full overflow-hidden border-4 border-[#DB2777]/30">
                <img src={`${import.meta.env.BASE_URL}pfp.jpeg`} alt="Gabriella Gerges" loading="eager" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter mb-2">
                Gabriella Gerges
              </h1>
              <p className="text-xs text-[#DB2777] mb-4 tracking-widest uppercase font-semibold">
                Full Stack Software Engineer
              </p>
              <p className="text-slate-400 text-base max-w-2xl leading-relaxed">
                Experienced in building clean, responsive interfaces with React and TypeScript. Skilled at collaborating
                with designers and backend teams to deliver{" "}
                <span className="text-slate-100 font-semibold">intuitive user experiences</span>. Committed to
                maintainable code and pixel-perfect interfaces.
              </p>
              <div className="flex gap-4 mt-6 flex-wrap">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Gabriella_Gerges_Resume.pdf"
                  className="flex items-center gap-2 px-5 py-2 bg-[#DB2777]/10 border border-[#DB2777]/50 text-[#DB2777] rounded-lg font-bold hover:bg-[#DB2777] hover:text-white transition-all duration-200 cursor-pointer text-sm"
                >
                  <Download size={14} />
                  Resumé
                </a>
                <a
                  href="https://github.com/luxscious"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-[#DB2777]/20 text-slate-400 hover:text-[#DB2777] transition-colors duration-150 cursor-pointer"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriella-gerges/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-[#DB2777]/20 text-slate-400 hover:text-[#DB2777] transition-colors duration-150 cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </section>

          {/* ── Stats ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Experience", value: "3+ Years" },
              { label: "Projects", value: "12+ Shipped" },
              { label: "Tech Stack", value: "Full Stack" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col gap-2 rounded-xl p-6 bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-[#DB2777]/50 transition-colors duration-200"
              >
                <p className="text-slate-400 text-sm font-medium">{label}</p>
                <p className="text-white text-2xl font-bold">{value}</p>
              </div>
            ))}
          </div>

          {/* ── Work Experience ── */}
          <section id="experience" className="space-y-8 scroll-mt-28">
            <SectionHeading>Work Experience</SectionHeading>
            <div className="space-y-0">
              {workExperience.map((job) => (
                <div key={job.id} className="relative pl-8 border-l-2 border-[#DB2777]/30 py-4 group">
                  <div
                    className={`absolute -left-[9px] top-6 size-4 rounded-full border-4 border-[#0a0a0f] transition-colors duration-200 ${
                      job.current ? "bg-[#DB2777]" : "bg-slate-700 group-hover:bg-[#DB2777]"
                    }`}
                  />
                  <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:bg-slate-900/60 transition-all duration-200">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                      <h3 className="text-white text-lg font-bold">{job.title}</h3>
                      {job.current ? (
                        <span className="text-[10px] font-bold text-[#DB2777] bg-[#DB2777]/10 px-2 py-1 rounded shrink-0 tracking-widest uppercase">
                          Present
                        </span>
                      ) : (
                        <span className="text-sm text-slate-500 font-medium shrink-0">{job.period}</span>
                      )}
                    </div>
                    <p className="text-[#DB2777] text-sm font-semibold mb-1">{job.company}</p>
                    <p className="text-slate-600 text-xs mb-4">{job.location}</p>
                    <ul className="space-y-1 mb-4">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-[#DB2777] mt-0.5 shrink-0">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((s) => (
                        <span key={s} className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Research ── */}
          <section id="research" className="space-y-6 scroll-mt-28">
            <SectionHeading>Research</SectionHeading>
            <div className="grid md:grid-cols-2 gap-6">
              {research.map((item) => (
                <div
                  key={item.id}
                  className="p-6 bg-[#DB2777]/5 border border-[#DB2777]/20 rounded-xl hover:border-[#DB2777]/50 transition-all duration-200 flex flex-col gap-3"
                >
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-xs">{item.institution} · {item.period}</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed grow">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((s) => (
                      <span key={s} className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                  {item.demo && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#DB2777] text-xs font-bold tracking-widest uppercase hover:underline cursor-pointer"
                    >
                      VIEW PAPER <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── Projects ── */}
          <section id="projects" className="space-y-8 scroll-mt-28">
            <SectionHeading>Selected Projects</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="group relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800 flex flex-col hover:border-[#DB2777]/40 transition-colors duration-200"
                >
                  {proj.image && (
                    <div className="aspect-video bg-slate-800 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className={`p-6 relative z-20 flex flex-col grow ${proj.image ? "-mt-10" : ""}`}>
                    <h3 className="text-white text-xl font-bold mb-1">{proj.title}</h3>
                    <p className="text-[#DB2777] text-[10px] font-semibold tracking-widest uppercase mb-3">{proj.subtitle}</p>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed grow">{proj.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.skills.map((s) => (
                        <span key={s} className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#DB2777] text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 hover:underline cursor-pointer"
                        >
                          VIEW DEMO <ExternalLink size={10} />
                        </a>
                      )}
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 hover:text-slate-300 cursor-pointer"
                        >
                          <Github size={10} /> GITHUB
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Education ── */}
          <section id="education" className="space-y-6 scroll-mt-28">
            <SectionHeading>Education</SectionHeading>
            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-[#DB2777]/30 transition-colors duration-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 bg-white rounded-lg flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0507" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <h3 className="text-white text-lg font-bold">Western University</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                    <div className="grow">
                      <p className="text-white font-semibold text-sm">{edu.degree}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {edu.notes.map((n) => (
                          <span key={n} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                            {n}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-slate-500 text-sm shrink-0">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Skills ── */}
          <section id="skills" className="space-y-6 scroll-mt-28">
            <SectionHeading>Skills</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map(({ label, value }) => (
                <div key={label} className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl">
                  <p className="text-[#DB2777] text-xs font-bold tracking-widest uppercase mb-2">{label}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </section>


        </div>
      </main>
    </div>
  )
}
