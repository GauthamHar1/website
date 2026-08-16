import Link from "next/link";

// Everything on the page comes from the data below.
// Edit these arrays and the page updates. Replace the # links.
//
// href  = external site for the project (or null)
// slug  = folder name under app/projects/, gives you the writeup page
//         set it to null and the "read more" link disappears



const projects = [

  {
    name: "Listing Labs",
    role: "founder",
    slug: "listing-labs",
    href: "https://listinglabs.io",
    blurb:
      "AI voice trainer, helps real estate agents perfect their listing presentations and get better at talking to clients.",
    stack: "Next.js · Hume EVI · GPT-4o-mini · Convex · Clerk · Vercel",
  },
  {
    name: "Drone attack risk classification platform",
    role: "personal project",
    slug: null,
    href: "https://www.youtube.com/watch?v=UCky_4lS718",
    blurb:
      "Scored 214,000 global energy facilities on how likely a drone attack is to succeed and how bad it would be if it did, fusing six public incident, infrastructure, and population datasets into a weighted two-part risk model. Shipped an interactive map and a natural-language chatbot for querying site-specific risk.",
    stack: "Palantir Foundry · Python · Spark",
  },
    {
    name: "Go Fish",
    role: "founder",
    slug: "go-fish",
    href: "https://www.youtube.com/watch?v=UfrSzwjrSCg",
    blurb:
      "Peer-to-peer fishing gear rental app",
    stack: "Next.js · Hume EVI · GPT-4o-mini · Convex · Clerk · Vercel",
  },
  {
    name: "AegisGrid",
  role: "co-founder, COO",    
    slug: null,
    href: "https://aegisgrid.net",
    blurb:
    "Drone defense for critical infrastructure (Oil refineries, Data centers, Power plants, etc.), built around a metal mesh net system. For more info contact gautham.hari@aegisgrid.net",
  },
   {
    name: "Dancify",
    slug: "dancify",
    href: null,
    blurb:
      "A dance learning app that uses pose estimation to compare your movement against a reference clip and tell you where you're off. Won $3,000 at Pitch Dingman.",
    stack: "Swift · VNHumanPoseDetect",
  },
  {
    name: "Continual learning for robotics",
    role: "research project",
    slug: null,
    href: null,
    blurb:
      "An orchestrator watches model uncertainty, notices when a task looks like a new domain, and spins up a specialist from a meta-learned prior. Old specialists get frozen so they don't get overwritten, and inputs route by cosine similarity. Currently testing the idea on Split-CIFAR-100 before it goes near a robot.",
    stack: "PyTorch · MAML (learn2learn) · MC Dropout · ResNet18",
  },
  {
    name: "Garbage collector, twice",
    role: "coursework",
    slug: null,
    href: null,
    blurb:
      "Reference counting, mark-and-sweep, and stop-and-copy, implemented once in Rust and once in OCaml. Writing the same collector in two languages is the most I've ever learned from one assignment.",
    stack: "Rust · OCaml",
  },
  {
    name: "Shell and memory allocator",
    role: "coursework",
    slug: null,
    href: null,
    blurb:
      "A Unix shell with piping and job control, plus a malloc implementation. Also an x86-64 battery meter simulator that reads memory-mapped device ports and unpacks bit fields by hand.",
    stack: "C · x86-64 assembly · mmap · pthreads",
  },
 
];

// dates and bullets are optional — older entries just have a blurb
type Experience = {
  name: string;
  role: string;
  blurb: string;
  dates?: string;
  bullets?: string[];
};

const experience: Experience[] = [
  // {
  //   name: "Cyber9",
  //   role: "security compliance engineer",
  //   dates: "June 2026 — present",
  //   blurb:
  //     "Cyber9 helps DoD supply chain manufacturers get to CMMC Level 2. I'm the sole technical owner of the security tooling stack.",
  //   bullets: [
  //     "Own the stack end to end: Huntress MDR/SIEM, SentinelOne EDR, Tenable Nessus, Microsoft Entra ID and Intune.",
  //     "Map deployed controls to NIST SP 800-171 requirements and maintain the evidence and status tracking used in client assessments.",
  //     "Own vendor evaluation and the written justification for why each product was chosen over its alternatives.",
  //     "Deploy and configure Tenable scanning agents through Intune, including scan scheduling and recurring client reporting.",
  //     "Built an internal portal that automates onboarding for new GCC High customers.",
  //   ],
  // },
  {
    name: "Montana Technological University",
    role: "computer vision research",
    blurb:
      "Feature detection and matching on drone spectral imagery using SIFT and SURF.",
  },
  {
    name: "Keller Williams Capital Properties",
    role: "licensed agent, DMV",
    blurb:
      "Active real estate license. Where the Listing Labs idea came from.",
  },
];

const skills = [
  { label: "Languages", value: "C, Rust, OCaml, x86-64 assembly, Python, TypeScript, JavaScript" },
  { label: "Web", value: "Next.js, React, Node, Express, MongoDB, Convex" },
  { label: "ML", value: "PyTorch, OpenCV, LLM APIs, RAG" },
  { label: "Coursework", value: "Programming languages, algorithms, systems programming, probability" },
];

export default function Home() {
  return (
    <main>
      <h1>Gautham</h1>
      <p className="subtitle">
        CS @ University of Maryland 3.9 GPA. Graduating May 2028.
      </p>
      <ul>
        <li>
            <a href="/files/transcript_july26.pdf" target="_blank" rel="noopener noreferrer">View or Download Transcript (PDF)</a>
        </li>
        <li>
            <a href="/files/res_general.pdf" target="_blank" rel="noopener noreferrer">View or Download Resume (PDF)</a>
        </li>
      </ul>
  


      <p className="lede">

      </p>

      

      <section className="section">
        <h2>Projects</h2>
        {projects.map((p) => (
          <div className="item" key={p.name}>
            <div className="item-head">
              <h3>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noreferrer">
                    {p.name}
                  </a>
                ) : (
                  p.name
                )}
              </h3>
              <span className="role">{p.role}</span>
            </div>
            <p>{p.blurb}</p>
            <div className="stack">{p.stack}</div>
            {p.slug && (
              <div className="more">
                <Link href={`/projects/${p.slug}`}>read more</Link>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Experience</h2>
        {experience.map((e) => (
          <div className="item" key={e.name}>
            <div className="item-head">
              <h3>{e.name}</h3>
              <span className="role">{e.role}</span>
              {e.dates && <span className="dates">{e.dates}</span>}
            </div>
            <p>{e.blurb}</p>
            {e.bullets && (
              <ul className="bullets">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Tools</h2>
        <dl className="skills-grid">
          {skills.map((s) => (
            <div key={s.label} style={{ display: "contents" }}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer>
        <p style={{ margin: 0 }}>
          Best way to reach me is email. Happy to talk about any of this.
        </p>
      </footer>
    </main>
  );
}
