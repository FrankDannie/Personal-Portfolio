import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import photo from "./assets/profile.jpeg";
import {
  profile,
  about,
  stack,
  experience,
  projects,
  internships,
  education,
  certifications,
  achievements,
  volunteering,
  languages,
} from "./data";

const NAV = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Primary">
        <a className="nav-mark" href="#top" aria-label="Back to top">
          FD
        </a>
        <ul>
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 90]);

  const rise = (i) =>
    reduce
      ? {}
      : {
          initial: { y: "110%" },
          animate: { y: 0 },
          transition: { duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-grid">
        <div className="hero-text">
          <h1 className="hero-name" aria-label={profile.name}>
            {profile.name.split(" ").map((w, i) => (
              <span className="mask" key={w} aria-hidden="true">
                <motion.span className="mask-inner" {...rise(i)}>
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="hero-copy"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="hero-role">{profile.role}</p>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#work">
                See selected work
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>

        <motion.figure
          className="hero-photo"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={photo}
            alt="Frank Dannie sitting on concrete breakwater blocks by the sea"
            style={{ y: imgY }}
          />
        </motion.figure>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...stack, ...stack];
  return (
    <div className="marquee" aria-label="Tech stack">
      <ul className="marquee-track">
        {items.map((s, i) => (
          <li key={i} aria-hidden={i >= stack.length ? "true" : undefined}>
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionHead({ title, note }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </div>
  );
}

function Work() {
  return (
    <section className="section" id="work">
      <SectionHead title="Selected work" note="Systems I've designed and shipped for enterprise teams." />
      <div className="work-list">
        {projects.map((p) => (
          <article className="project" key={p.title} style={{ "--tint": p.tint }}>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHead title="Experience" />
      <ol className="timeline">
        {experience.map((job) => (
          <li className="job" key={job.company + job.period}>
            <p className="job-period">{job.period}</p>
            <div>
              <h3>{job.company}</h3>
              <p className="job-role">{job.role}</p>
              <ul className="job-points">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="subhead">Internships</h3>
      <ul className="intern-list">
        {internships.map((i) => (
          <li key={i.company}>
            <p className="job-period">
              {i.period}
              <br />
              {i.place}
            </p>
            <div>
              <h4>{i.company}</h4>
              <p className="job-role">{i.role}</p>
              <p className="intern-text">{i.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <SectionHead title="About" />
      <div className="about-grid">
        <div className="about-text">
          <p className="about-lead">{about[0]}</p>
          <p>{about[1]}</p>
          <ul className="achievements">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <div className="facts">
          <div>
            <h3>Education</h3>
            <ul>
              {education.map((e) => (
                <li key={e.title}>
                  <strong>{e.title}</strong>
                  <span>
                    {e.place}, {e.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Certifications</h3>
            <ul className="plain">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Languages</h3>
            <ul>
              {languages.map((l) => (
                <li key={l.name}>
                  <strong>{l.name}</strong>
                  <span>{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Volunteering</h3>
            <ul>
              {volunteering.map((v) => (
                <li key={v.title}>
                  <strong>{v.title}</strong>
                  <span>
                    {v.place}, {v.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-inner">
        <h2>Have an AI problem worth solving? Let's talk.</h2>
        <a className="contact-mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Frank Dannie</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Experience />
        <About />
      </main>
      <Contact />
    </>
  );
}