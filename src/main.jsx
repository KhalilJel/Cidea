import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDownRight, ArrowUpRight, Menu, Plus, X } from "lucide-react";
import "./styles.css";

const projects = [
  { name: "Cidea Studio", type: "Digital Experience", tag: "Our flagship", className: "project-studio", code: "CIDEA" },
  { name: "Aesthetic Clinic", type: "Healthcare / Beauty", tag: "Conversion", className: "project-clinic", code: "FORM" },
  { name: "Noir House", type: "Hospitality", tag: "Brand experience", className: "project-hospitality", code: "NOIR" },
  { name: "Northline", type: "Architecture / Construction", tag: "Lead generation", className: "project-architecture", code: "NORTH" }
];

const approach = [
  ["Strategy", "Find the signal. Position the brand. Define what the experience needs to achieve."],
  ["Design", "Create a visual language with enough character to be remembered and enough clarity to convert."],
  ["Development", "Turn the system into a fast, responsive and technically precise digital experience."],
  ["Growth", "Launch with intent. Learn from behavior. Keep improving what happens after the click."]
];

function App() {
  const cursor = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const [activeApproach, setActiveApproach] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const move = (e) => {
      if (cursor.current) cursor.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    const scroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max ? window.scrollY / max : 0);
      const rows = [...document.querySelectorAll(".approach-row")];
      let nearest = 0;
      rows.forEach((row, i) => {
        const distance = Math.abs(row.getBoundingClientRect().top - window.innerHeight * 0.48);
        if (distance < Math.abs(rows[nearest]?.getBoundingClientRect().top - window.innerHeight * 0.48 || Infinity)) nearest = i;
      });
      setActiveApproach(nearest);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const cursorProps = (label) => ({
    onMouseEnter: () => setCursorLabel(label),
    onMouseLeave: () => setCursorLabel("")
  });

  return (
    <div className="site" style={{ "--scroll": scrollProgress }}>
      <div className={`cursor ${cursorLabel ? "cursor-active" : ""}`} ref={cursor}>
        {cursorLabel && <span>{cursorLabel}</span>}
      </div>
      <div className="progress-line" />

      <header className="nav">
        <a className="brand" href="#">CIDEA<span>®</span></a>
        <div className="nav-center">DIGITAL EXPERIENCE STUDIO</div>
        <nav>
          <button onClick={() => scrollTo("work")}>Work</button>
          <button onClick={() => scrollTo("approach")}>Approach</button>
          <button onClick={() => scrollTo("lab")}>Lab</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button className="nav-cta" onClick={() => scrollTo("contact")} {...cursorProps("START PROJECT ↗")}>Start a project <ArrowUpRight size={15}/></button>
        </nav>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          {menuOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {["work", "approach", "lab", "about", "contact"].map((id) => (
            <button key={id} onClick={() => scrollTo(id)}>{id === "contact" ? "Start a project ↗" : id}</button>
          ))}
        </div>
      )}

      <main>
        <section className="hero">
          <div className="construction-grid" />
          <div className="hero-noise" />
          <div className="hero-orbit orbit-a" />
          <div className="hero-orbit orbit-b" />
          <div className="hero-fragment fragment-one">BRAND / UX / CODE</div>
          <div className="hero-fragment fragment-two">OSLO → WORLDWIDE</div>
          <div className="hero-fragment fragment-three">SYSTEM / 001</div>

          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">DIGITAL EXPERIENCE STUDIO <span>EST. 2026</span></p>
            <h1>WE BUILD<br/><em>DIGITAL</em><br/>EXPERIENCES<span className="hero-dot">.</span></h1>
            <div className="hero-bottom">
              <p>Websites designed to make ambitious businesses impossible to ignore.</p>
              <div className="hero-actions">
                <button className="button primary" onClick={() => scrollTo("contact")} {...cursorProps("START PROJECT ↗")}>START A PROJECT <ArrowUpRight size={18}/></button>
                <button className="button ghost" onClick={() => scrollTo("work")} {...cursorProps("VIEW WORK ↘")}>VIEW OUR WORK <ArrowDownRight size={18}/></button>
              </div>
            </div>
          </div>
          <div className="hero-index">CIDEA / 001</div>
          <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15}/></div>
        </section>

        <section className="statement">
          <div className="statement-label">THE DIGITAL FLAGSHIP</div>
          <div className="statement-main">
            <div className="statement-line" />
            <h2>YOUR WEBSITE<br/><span>IS YOUR DIGITAL FLAGSHIP.</span></h2>
            <p>The place where your brand meets the world. We turn that first impression into an experience people remember, trust and act on.</p>
          </div>
        </section>

        <section className="work" id="work">
          <div className="section-head">
            <div><span className="eyebrow">SELECTED WORK</span><h2>BUILT TO<br/><em>BE REMEMBERED.</em></h2></div>
            <p>Four digital worlds. Four different problems. One standard: make the experience matter.</p>
          </div>
          <div className="projects">
            {projects.map((project, i) => (
              <article className={`project ${project.className}`} key={project.name} {...cursorProps("VIEW PROJECT ↗")}>
                <div className="project-art">
                  <div className="art-grid" />
                  <div className="art-scan" />
                  <div className="art-shape shape-one" />
                  <div className="art-shape shape-two" />
                  <div className="art-word">{project.code}</div>
                  <div className="art-label">CASE / 0{i + 1}</div>
                  <span className="art-orbit" />
                </div>
                <div className="project-meta">
                  <div><span>{project.tag}</span><h3>{project.name}</h3></div>
                  <div className="project-type">{project.type}</div>
                  <ArrowUpRight size={20}/>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="difference">
          <div className="eyebrow">THE DIFFERENCE</div>
          <h2>BEAUTIFUL<br/><em>IS THE BASELINE.</em></h2>
          <div className="difference-bottom">
            <p>We build for what happens after the click.</p>
            <div className="difference-word"><span>CLARITY</span><span>TRUST</span><span>DESIRE</span><span>ACTION</span></div>
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="section-head">
            <div><span className="eyebrow">OUR APPROACH</span><h2>COMPLEXITY<br/><em>UNDERNEATH.</em></h2></div>
            <p>Simplicity on the surface. Every decision has a reason, every interaction has a job.</p>
          </div>
          <div className="approach-stage">
            <div className="approach-display">
              <span>0{activeApproach + 1}</span>
              <strong>{approach[activeApproach][0]}</strong>
              <div className="approach-bar"><i style={{ width: `${(activeApproach + 1) * 25}%` }} /></div>
            </div>
            <div className="approach-list">
              {approach.map(([title, text], i) => (
                <button className={`approach-row ${activeApproach === i ? "active" : ""}`} key={title} onMouseEnter={() => setActiveApproach(i)} onFocus={() => setActiveApproach(i)}>
                  <span className="approach-index">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Plus size={22}/>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="impact">
          <div className="eyebrow">DESIGN THAT DOES SOMETHING</div>
          <div className="impact-copy">
            <h2>MAKE PEOPLE<br/><em>STOP.</em></h2>
            <div className="impact-lines">
              <p>Build trust faster</p><p>Generate better leads</p><p>Explain complex offers</p><p>Turn attention into action</p>
            </div>
          </div>
        </section>

        <section className="lab" id="lab">
          <div className="lab-visual">
            <div className="lab-crosshair" />
            <div className="lab-core">LAB</div>
            <div className="lab-ring ring-one"/>
            <div className="lab-ring ring-two"/>
            <span className="lab-data data-one">INTERACTION / 04</span>
            <span className="lab-data data-two">MOTION / ON</span>
          </div>
          <div className="lab-copy">
            <span className="eyebrow">THE LAB</span>
            <h2>WE TEST<br/><em>WHAT'S NEXT.</em></h2>
            <p>Interactive type. Motion systems. Spatial interfaces. AI experiences. We experiment so the final product can feel inevitable.</p>
            <button className="text-link" {...cursorProps("EXPLORE LAB ↗")}>EXPLORE THE LAB <ArrowUpRight size={16}/></button>
          </div>
        </section>

        <section className="about" id="about">
          <div className="eyebrow">ABOUT</div>
          <h2>SMALL TEAM.<br/><em>BIG CRAFT.</em></h2>
          <div className="about-bottom"><p>Independent digital studio based in Oslo, working with ambitious businesses worldwide.</p><span>OSLO / WORLDWIDE</span></div>
        </section>

        <section className="contact" id="contact">
          <span className="eyebrow">START A PROJECT</span>
          <h2>READY TO BUILD<br/><em>SOMETHING UNFORGETTABLE?</em></h2>
          <button className="contact-button" {...cursorProps("LET'S TALK ↗")}>LET'S TALK <ArrowUpRight size={25}/></button>
        </section>
      </main>

      <footer>
        <div className="brand">CIDEA<span>®</span></div>
        <div>OSLO / WORLDWIDE</div>
        <div>© 2026 CIDEA</div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);