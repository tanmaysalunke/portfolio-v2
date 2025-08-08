import "./App.css";
import React, { useState, useEffect, useRef } from "react";

// 1. Social icons SVGs (add at top for reuse)
const LinkedInIcon = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      fill="currentColor"
    />
  </svg>
);
const GitHubIcon = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      fill="currentColor"
    />
  </svg>
);
const LeetCodeIcon = ({ theme }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill="#B3B1B0"
      d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
    />
    <path
      fill="#E7A41F"
      d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
    />
    <path
      fill={theme === "light" ? "#000000" : "#ffffff"}
      d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
    />
  </svg>
);
const EmailIcon = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
      fill="currentColor"
    />
    <path
      d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
      fill="currentColor"
    />
  </svg>
);

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/tanmay-salunke-8552a216b/",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/tanmaysalunke",
    icon: <GitHubIcon />,
    label: "GitHub",
  },
  {
    href: "https://leetcode.com/u/tanmaysalunke/",
    icon: <LeetCodeIcon />,
    label: "LeetCode",
  },
  {
    href: "mailto:tanmaysalunke4@gmail.com",
    icon: <EmailIcon />,
    label: "Email",
  },
];

function GlassNavbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "about", "contact"];
      let found = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center z-50 pt-6 pb-6 pointer-events-none">
      <div
        className={`flex items-center gap-6 px-8 py-3 rounded-full ${
          theme === "light"
            ? "bg-white/10 border-gray-200"
            : "bg-white/10 border-white/20"
        } backdrop-blur-2xl border shadow-lg max-w-3xl w-full justify-center relative pointer-events-auto`}
      >
        {[
          { label: "Home", href: "#home", id: "home" },
          { label: "Projects", href: "#projects", id: "projects" },
          { label: "Skills", href: "#skills", id: "skills" },
          { label: "About", href: "#about", id: "about" },
          { label: "Contact", href: "#contact", id: "contact" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`${
              theme === "light" ? "text-gray-700" : "text-white/80"
            } font-medium px-3 py-1 rounded-full ${
              theme === "light"
                ? "hover:bg-gray-200 hover:text-black"
                : "hover:bg-white/20 hover:text-white"
            } transition ${
              activeSection === item.id
                ? `bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animated-gradient-infinite${
                    theme === "dark" ? " drop-shadow-lg" : ""
                  }`
                : ""
            }`}
          >
            {item.label}
          </a>
        ))}
        {/* Theme toggle and Download Resume */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              theme === "light"
                ? "bg-gray-100 border-gray-200 text-blue-600 hover:text-blue-700"
                : "bg-white/10 border-white/20 text-blue-400 hover:text-blue-300"
            } border hover:bg-black/10 transition`}
            aria-label="Download Resume"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 16l-5-5h3V4h4v7h3l-5 5z" fill="currentColor" />
              <path d="M20 18H4v2h16v-2z" fill="currentColor" />
            </svg>
          </a>
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              theme === "light"
                ? "bg-gray-100 border-gray-200 text-yellow-500"
                : "bg-white/10 border-white/20 text-white/80"
            } border hover:bg-black/10 transition`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            type="button"
          >
            {theme === "light" ? (
              <span role="img" aria-label="sun">
                ☀️
              </span>
            ) : (
              <span role="img" aria-label="moon">
                🌙
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

function TypingName({ text, className }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed((prev) => {
        if (prev.length < text.length) {
          return prev + text[prev.length];
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 150);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-2 animate-pulse align-middle">|</span>
    </span>
  );
}

function ChangingHello({ className }) {
  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Olá",
    "नमस्ते",
    "こんにちは",
    "你好",
    "안녕하세요",
    "مرحبا",
    "Привет",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 1400);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % greetings.length);
        setFade(true);
      }, 300);
    }, 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <span
      className={`${className} transition-opacity duration-300 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {greetings[index]}
    </span>
  );
}

function Hero({ theme }) {
  // Smooth scroll handler
  const handleSmoothScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Mouse tracking for glowing orb
  const heroRef = useRef(null);
  const [orbPos, setOrbPos] = useState({ x: 0, y: 0 });
  const [targetOrbPos, setTargetOrbPos] = useState({ x: 0, y: 0 });
  const trailSpeed = 0.15; // 0.05 = slow, 0.15 = medium, 0.3 = fast

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      // Clamp so orb stays within section
      x = Math.max(160, Math.min(rect.width - 160, x));
      y = Math.max(160, Math.min(rect.height - 160, y));
      setTargetOrbPos({ x, y });
    };
    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (hero) {
        hero.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Smoothly interpolate orb position toward target
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setOrbPos((prev) => {
        const dx = targetOrbPos.x - prev.x;
        const dy = targetOrbPos.y - prev.y;
        return {
          x: prev.x + dx * trailSpeed,
          y: prev.y + dy * trailSpeed,
        };
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [targetOrbPos.x, targetOrbPos.y]);

  return (
    <section
      id="home"
      ref={heroRef}
      className={`relative flex flex-col items-center justify-center min-h-screen px-4 overflow-x-hidden overflow-hidden pt-28 ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      {/* Glowing orb background - behind all content */}
      <div
        className="absolute pointer-events-none select-none z-0"
        style={{
          left: orbPos.x - 160,
          top: orbPos.y - 160,
          width: 320,
          height: 320,
        }}
      >
        <div
          className={`absolute w-80 h-80 rounded-full ${
            theme === "light"
              ? "bg-gradient-to-br from-blue-400/70 via-purple-400/60 to-pink-400/50"
              : "bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-pink-400/20"
          } blur-3xl animate-pulse-slow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
          style={{ opacity: 0.7 }} // Make sure orb is not fully opaque
        ></div>
        <div
          className={`absolute w-16 h-16 rounded-full ${
            theme === "light" ? "bg-white/95" : "bg-white/80"
          } blur-2xl animate-pulse left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
        ></div>
      </div>
      {/* Main Hero content - above orb */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <div
          className={`${
            theme === "light" ? "text-gray-700" : "text-white/100"
          } text-lg mb-2 w-full text-left max-w-3xl`}
        >
          <ChangingHello />
        </div>
        <h1
          className={`animated-gradient-infinite text-5xl md:text-7xl font-extrabold leading-tight mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-left w-full max-w-3xl`}
        >
          <TypingName text="Tanmay Salunke" />
        </h1>
        <h2
          className={`text-2xl md:text-4xl font-bold ${
            theme === "light" ? "text-gray-900" : "text-white"
          } mb-6 text-left w-full max-w-3xl`}
        >
          Software Engineer {/*&amp; Developer */}
        </h2>
        {/* Social icons in hero */}
        <div className="flex gap-4 mb-6 w-full max-w-3xl">
          {socialLinks.map((link) => {
            // Define colors for each platform
            const getIconColors = (label) => {
              switch (label) {
                case "LinkedIn":
                  return {
                    light: "text-blue-600 hover:text-blue-700",
                    dark: "text-blue-400 hover:text-blue-300",
                  };
                case "GitHub":
                  return {
                    light: "text-gray-800 hover:text-gray-900",
                    dark: "text-gray-300 hover:text-white",
                  };
                case "LeetCode":
                  return {
                    light: "text-orange-600 hover:text-orange-700",
                    dark: "text-orange-400 hover:text-orange-300",
                  };
                case "Email":
                  return {
                    light: "text-green-600 hover:text-green-700",
                    dark: "text-green-400 hover:text-green-300",
                  };
                default:
                  return {
                    light: "text-blue-500 hover:text-pink-500",
                    dark: "text-blue-400 hover:text-pink-400",
                  };
              }
            };

            const colors = getIconColors(link.label);

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`p-3 rounded-full border backdrop-blur-2xl transition-all duration-300 inline-flex hover:scale-110 ${
                  theme === "light"
                    ? `border-gray-200 bg-white/10 ${colors.light} hover:bg-white/20`
                    : `border-white/20 bg-white/10 ${colors.dark} hover:bg-white/20`
                }`}
              >
                {link.label === "LeetCode" ? (
                  <LeetCodeIcon theme={theme} />
                ) : (
                  link.icon
                )}
              </a>
            );
          })}
        </div>
        <p
          className={`${
            theme === "light" ? "text-gray-700" : "text-white/70"
          } text-lg mb-8 max-w-3xl text-left`}
        >
          Driven by curiosity, I thrive in fast-paced environments where code
          meets creativity, execution, and real-world impact.
        </p>
        <div className="flex gap-4 w-full max-w-2xl">
          <a
            href="#experience"
            onClick={handleSmoothScroll("experience")}
            className={`animated-gradient flex-1 px-6 py-3 rounded-full border ${
              theme === "light"
                ? "border-gray-200 bg-white/10 backdrop-blur-2xl text-gray-900"
                : "border-white/20 bg-white/10 backdrop-blur-2xl text-white"
            } font-semibold text-lg shadow-lg transition text-center hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:text-white`}
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={handleSmoothScroll("contact")}
            className={`animated-gradient flex-1 px-6 py-3 rounded-full border ${
              theme === "light"
                ? "border-gray-200 bg-white/10 backdrop-blur-2xl text-gray-900"
                : "border-white/20 bg-white/10 backdrop-blur-2xl text-white"
            } font-semibold text-lg shadow-lg transition text-center hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:text-white`}
          >
            Get In Touch
          </a>
        </div>
      </div>
      {/* Down arrow indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-10">
        <svg
          width="32"
          height="32"
          fill="none"
          stroke={theme === "light" ? "#333" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce opacity-60"
        >
          <path d="M16 8v16M8 20l8 8 8-8" />
        </svg>
      </div>
    </section>
  );
}

function LiquidGlassCard({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl shadow-2xl border border-white/20 backdrop-blur-2xl bg-gradient-to-br from-white/30 via-white/10 to-neonblue/10 ${className}`}
      style={{
        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37), 0 1.5px 8px 0 #64ffda33",
      }}
    >
      {/* Animated blob highlight */}
      <div className="absolute -top-16 -left-16 w-72 h-72 opacity-40 animate-liquid-blob pointer-events-none select-none">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="liquidGlass" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#64ffda" stopOpacity="0.2" />
            </radialGradient>
          </defs>
          <ellipse
            cx="200"
            cy="200"
            rx="180"
            ry="140"
            fill="url(#liquidGlass)"
          />
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// HoverShadowCard: Card with dynamic shadow based on mouse movement
function HoverShadowCard({ children, className = "", theme, ...props }) {
  const cardRef = useRef(null);
  // Target shadow offset
  const [targetShadow, setTargetShadow] = useState(null); // null means no shadow
  // Animated shadow offset
  const [shadow, setShadow] = useState(null);
  const defaultShadow = null;
  const shadowChaseSpeed = 0.18;

  // Animate shadow toward target
  useEffect(() => {
    let frame;
    const animate = () => {
      setShadow((prev) => {
        if (!targetShadow) return null;
        if (!prev) return targetShadow;
        const dx = targetShadow.x - prev.x;
        const dy = targetShadow.y - prev.y;
        return {
          x: prev.x + dx * shadowChaseSpeed,
          y: prev.y + dy * shadowChaseSpeed,
        };
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [targetShadow && targetShadow.x, targetShadow && targetShadow.y]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const dx = (x - centerX) / centerX;
    const dy = (y - centerY) / centerY;
    const shadowX = dx * 24;
    const shadowY = dy * 24 + 8;
    setTargetShadow({ x: shadowX, y: shadowY });
  };

  const handleMouseLeave = () => {
    setTargetShadow(null);
  };

  // Shadow color based on theme, matching orb
  let boxShadow = "none";
  if (shadow) {
    boxShadow = `
      ${shadow.x}px ${shadow.y}px 32px 0 rgba(96,165,250,0.28),
      ${shadow.x / 2}px ${shadow.y / 2}px 48px 0 rgba(192,132,252,0.22),
      ${-shadow.x / 2}px ${-shadow.y / 2}px 48px 0 rgba(244,114,182,0.18)
    `;
  }

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ boxShadow, transition: "box-shadow 0s" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
}

function Experience({ theme }) {
  const experiences = [
    {
      date: "AUGUST 2024 - PRESENT",
      title: "Teaching Assistant - CSE 110",
      org: "Arizona State University",
      desc: [
        "Helped over 120 students overcome challenges in understanding core programming concepts through consistent hands-on guidance and academic support.",
        "Improved student comprehension and engagement by 25%, based on mid-semester feedback and lab performance metrics.",
      ],
    },
    {
      date: "MAY - AUGUST 2024",
      title: "Web Developer",
      org: "Arizona State University",
      desc: [
        "Solved the problem of fragmented communication within an international research group by launching a centralized, accessible website used by 50+ global collaborators.",
        "Increased global meeting participation by 25% through streamlined scheduling and automated event registration tools.",
      ],
    },
    {
      date: "JAN 2023 - JULY 2023",
      title: "Software Developer",
      org: "Jio Platforms Limited",
      desc: [
        "Addressed inefficiencies in enterprise visitor management by redesigning workflows and automating key processes, leading to a 30% boost in system efficiency.",
        "Reduced visitor check-in times by 15 minutes per entry through strategic automation.",
        "Enhanced user satisfaction by 50% via a more intuitive and responsive user interface.",
      ],
    },
    {
      date: "JUNE - JULY 2020",
      title: "Web Development Intern",
      org: "Mumbai University",
      desc: [
        "Tackled outdated website usability by redesigning the user experience, increasing stakeholder engagement by 40% within the first month.",
        "Improved website performance and discoverability by 70%, as measured by SEO tools and page load analytics.",
      ],
    },
  ];
  return (
    <section
      id="experience"
      className={`py-24 flex flex-col items-center ${
        theme === "light" ? "bg-gray-50" : "bg-black"
      }`}
    >
      <h2
        className={`text-3xl font-bold ${
          theme === "light" ? "text-gray-900" : "text-white"
        } mb-12`}
      >
        Experience
      </h2>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
        {experiences.map((exp, i) => (
          <HoverShadowCard
            key={i}
            className={`relative overflow-hidden rounded-3xl border backdrop-blur-2xl p-8 min-h-[220px] flex flex-col ${
              theme === "light"
                ? "border-gray-200 bg-white/80"
                : "border-white/20 bg-gradient-to-br from-white/20 via-white/5 to-neonblue/10"
            }`}
            theme={theme}
          >
            <div
              className={`text-xs font-mono font-semibold mb-1 animated-gradient-infinite bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`}
            >
              {exp.date}
            </div>
            <div
              className={`text-lg font-bold mb-1 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {exp.title}
            </div>
            <div
              className={`text-sm font-semibold mb-2 animated-gradient-infinite bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`}
            >
              {exp.org}
            </div>
            <div
              className={`${
                theme === "light" ? "text-gray-700" : "text-white/80"
              } text-base leading-relaxed text-justify`}
            >
              {Array.isArray(exp.desc)
                ? exp.desc.map((point, idx) => (
                    <p key={idx} className="mb-2 last:mb-0">
                      {point}
                    </p>
                  ))
                : exp.desc}
            </div>
          </HoverShadowCard>
        ))}
      </div>
    </section>
  );
}

function Skills({ theme }) {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: "💻",
      skills: [
        {
          name: "Python",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <defs>
                <linearGradient
                  id="pythonGradient1"
                  x1="10.458"
                  x2="26.314"
                  y1="12.972"
                  y2="26.277"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#26abe7"></stop>
                  <stop offset="1" stopColor="#086dbf"></stop>
                </linearGradient>
                <linearGradient
                  id="pythonGradient2"
                  x1="35.334"
                  x2="23.517"
                  y1="37.911"
                  y2="21.034"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#feb705"></stop>
                  <stop offset="1" stopColor="#ffda1c"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#pythonGradient1)"
                d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2 H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104 c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672 C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498 c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
              ></path>
              <path
                fill="url(#pythonGradient2)"
                d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2 h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104 c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672 C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498 c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
              ></path>
            </svg>
          ),
          level: "Advanced",
        },
        {
          name: "JavaScript",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
              <path
                fill="#000001"
                d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
              ></path>
            </svg>
          ),
          level: "Advanced",
        },
        {
          name: "Java",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <path
                fill="#F44336"
                d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
              ></path>
              <path
                fill="#F44336"
                d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
              ></path>
              <path
                fill="#1565C0"
                d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
              ></path>
              <path
                fill="#1565C0"
                d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
              ></path>
              <path
                fill="#1565C0"
                d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
              ></path>
              <path
                fill="#1565C0"
                d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
              ></path>
              <path
                fill="#1565C0"
                d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
              ></path>
            </svg>
          ),
          level: "Intermediate",
        },
      ],
    },
    {
      name: "Frontend",
      icon: "🎨",
      skills: [
        {
          name: "React.js",
          icon: (
            <svg width="25" height="25" viewBox="0 0 40 40" fill="none">
              <path
                fill="#98ccfd"
                d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"
              ></path>
              <path
                fill="#4788c7"
                d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"
              ></path>
              <g>
                <path
                  fill="#98ccfd"
                  d="M39.5,20c0-2.796-2.912-5.232-7.492-6.787c0.576-2.671,0.655-5.055,0.166-6.881 c-0.408-1.522-1.181-2.617-2.296-3.253c-0.671-0.382-1.438-0.577-2.279-0.577c-2.207,0-4.893,1.401-7.597,3.791 C17.296,3.902,14.609,2.5,12.4,2.5c-0.842,0-1.608,0.194-2.279,0.577C9.006,3.714,8.232,4.81,7.825,6.333 c-0.489,1.826-0.41,4.21,0.165,6.88C3.412,14.768,0.5,17.205,0.5,20s2.912,5.232,7.491,6.786c-0.576,2.67-0.655,5.054-0.165,6.88 c0.407,1.524,1.181,2.619,2.297,3.257c0.671,0.382,1.438,0.577,2.279,0.577c0.001,0,0,0,0.001,0c2.208,0,4.894-1.401,7.598-3.793 c2.704,2.389,5.39,3.789,7.597,3.79c0.001,0,0.001,0,0.001,0c0.842,0,1.608-0.194,2.28-0.577c1.114-0.636,1.887-1.731,2.294-3.253 c0.489-1.826,0.41-4.21-0.165-6.88C36.587,25.233,39.5,22.796,39.5,20z M28.888,4.817c0.634,0.362,1.09,1.046,1.354,2.033 c0.401,1.496,0.322,3.509-0.158,5.79c-1.596-0.417-3.343-0.734-5.208-0.938c-1.11-1.502-2.269-2.855-3.44-4.041 c2.397-2.087,4.598-3.158,6.163-3.158C28.089,4.503,28.522,4.609,28.888,4.817z M25.784,23.287 c-0.653,1.117-1.324,2.152-2.003,3.119c-1.205,0.105-2.467,0.162-3.782,0.162c-1.316,0-2.578-0.058-3.784-0.162 c-0.679-0.967-1.35-2.002-2.003-3.119C13.576,22.197,13,21.096,12.481,20c0.519-1.095,1.095-2.197,1.732-3.287 c0.653-1.117,1.325-2.152,2.004-3.12c1.205-0.105,2.468-0.162,3.783-0.162c1.315,0,2.577,0.057,3.781,0.162 c0.679,0.968,1.35,2.002,2.003,3.119c0.637,1.09,1.214,2.192,1.733,3.287C26.998,21.096,26.421,22.197,25.784,23.287z M28.558,22.392c0.41,1.036,0.756,2.052,1.041,3.035c-0.99,0.258-2.057,0.478-3.194,0.655c0.377-0.582,0.748-1.174,1.106-1.787 C27.881,23.663,28.226,23.028,28.558,22.392z M20,30.983c-0.729-0.738-1.467-1.556-2.205-2.47c0.724,0.034,1.457,0.055,2.205,0.055 c0.747,0,1.48-0.021,2.203-0.055C21.466,29.427,20.729,30.246,20,30.983z M13.593,26.082c-1.136-0.177-2.203-0.397-3.193-0.655 c0.285-0.983,0.63-1.998,1.04-3.034c0.332,0.635,0.677,1.271,1.046,1.903C12.844,24.908,13.216,25.5,13.593,26.082z M11.44,17.607 c-0.41-1.036-0.755-2.051-1.04-3.034c0.99-0.258,2.057-0.478,3.194-0.655c-0.377,0.582-0.749,1.174-1.107,1.786 C12.117,16.337,11.772,16.972,11.44,17.607z M20.001,9.018c0.729,0.737,1.466,1.555,2.202,2.469 c-0.723-0.034-1.456-0.055-2.203-0.055s-1.48,0.021-2.203,0.055C18.534,10.573,19.272,9.755,20.001,9.018z M27.511,15.704 c-0.358-0.613-0.729-1.205-1.106-1.787c1.137,0.177,2.204,0.397,3.194,0.655c-0.285,0.984-0.631,1.999-1.041,3.036 C28.226,16.973,27.881,16.337,27.511,15.704z M9.757,6.851c0.265-0.989,0.721-1.674,1.355-2.037C11.478,4.606,11.911,4.5,12.4,4.5 c1.567,0,3.768,1.072,6.166,3.161c-1.172,1.187-2.332,2.539-3.443,4.042c-1.865,0.204-3.612,0.522-5.208,0.939 C9.435,10.359,9.356,8.346,9.757,6.851z M2.5,20c0-1.729,2.231-3.566,5.983-4.857C8.935,16.708,9.538,18.342,10.28,20 c-0.742,1.658-1.345,3.292-1.797,4.857C4.731,23.566,2.5,21.729,2.5,20z M12.401,35.5c-0.49,0-0.924-0.106-1.288-0.313 c-0.636-0.363-1.092-1.048-1.356-2.037c-0.401-1.496-0.322-3.509,0.158-5.79c1.596,0.417,3.342,0.734,5.207,0.938 c1.111,1.503,2.271,2.856,3.444,4.043C16.168,34.429,13.967,35.5,12.401,35.5z M30.241,33.15c-0.265,0.987-0.72,1.671-1.354,2.033 c-0.365,0.208-0.799,0.314-1.289,0.314c-1.566,0-3.767-1.071-6.164-3.157c1.172-1.187,2.331-2.54,3.441-4.042 c1.865-0.204,3.611-0.522,5.207-0.938C30.563,29.641,30.642,31.654,30.241,33.15z M31.515,24.858 c-0.452-1.565-1.055-3.199-1.797-4.858c0.742-1.659,1.345-3.293,1.797-4.858C35.268,16.433,37.5,18.271,37.5,20 C37.5,21.729,35.268,23.567,31.515,24.858z"
                ></path>
                <path
                  fill="#4788c7"
                  d="M12.402,38c-0.93,0-1.78-0.216-2.528-0.642c-1.237-0.708-2.089-1.906-2.532-3.563 c-0.472-1.762-0.446-4.064,0.07-6.682C2.694,25.42,0,22.842,0,20s2.694-5.42,7.412-7.114c-0.517-2.617-0.542-4.92-0.07-6.682 C7.785,4.548,8.637,3.35,9.873,2.643c2.52-1.438,6.178-0.393,10.128,2.988c3.949-3.378,7.604-4.422,10.125-2.986 c1.235,0.705,2.087,1.902,2.531,3.558c0.472,1.763,0.446,4.066-0.071,6.683C37.305,14.579,40,17.158,40,20 c0,2.842-2.695,5.421-7.414,7.115c0.518,2.617,0.542,4.919,0.07,6.682c-0.443,1.656-1.294,2.853-2.529,3.558 C27.604,38.793,23.946,37.746,20,34.37C17.224,36.747,14.604,38,12.402,38z M12.4,3c-0.753,0-1.437,0.172-2.031,0.511 C9.373,4.081,8.68,5.074,8.309,6.462c-0.458,1.707-0.398,4.005,0.171,6.646l0.094,0.436l-0.422,0.144C3.606,15.23,1,17.531,1,20 s2.606,4.77,7.151,6.313l0.422,0.144l-0.094,0.436c-0.569,2.641-0.629,4.939-0.171,6.646c0.371,1.389,1.064,2.382,2.062,2.952 C10.965,36.828,11.648,37,12.401,37h0.001c2.012,0,4.592-1.302,7.267-3.667L20,33.04l0.331,0.293 c2.674,2.362,5.255,3.664,7.267,3.664c0.754,0,1.438-0.172,2.034-0.511c0.994-0.568,1.687-1.56,2.058-2.948 c0.458-1.707,0.398-4.004-0.171-6.645l-0.094-0.436l0.422-0.144C36.393,24.771,39,22.469,39,20c0-2.47-2.607-4.771-7.153-6.313 l-0.422-0.144l0.095-0.436c0.569-2.641,0.629-4.939,0.171-6.646c-0.372-1.389-1.065-2.38-2.061-2.948 c-0.595-0.339-1.278-0.511-2.031-0.511c-2.011,0-4.591,1.302-7.267,3.666l-0.331,0.293L19.67,6.668C16.994,4.303,14.413,3,12.4,3z M12.401,36c-0.577,0-1.094-0.127-1.535-0.379c-0.756-0.432-1.292-1.22-1.593-2.342c-0.408-1.527-0.355-3.61,0.152-6.022 l0.108-0.513l0.507,0.132c1.591,0.415,3.317,0.727,5.135,0.925l0.217,0.024L15.523,28c1.073,1.451,2.217,2.793,3.397,3.989 l0.374,0.379l-0.401,0.35C16.464,34.834,14.158,36,12.401,36z M10.303,27.973c-0.468,2.04-0.482,3.777-0.063,5.047 c0.278,0.841,0.605,1.438,1.121,1.732c1.294,0.739,3.813-0.237,6.473-2.446c-1.033-1.08-2.035-2.267-2.984-3.536 C13.257,28.588,11.73,28.32,10.303,27.973z M27.599,35.997c-1.757,0-4.063-1.165-6.491-3.28l-0.401-0.349l0.374-0.379 c1.185-1.202,2.327-2.543,3.394-3.988l0.13-0.176l0.218-0.024c1.819-0.199,3.548-0.51,5.137-0.925l0.508-0.132l0.107,0.513 c0.507,2.414,0.56,4.496,0.151,6.022c-0.301,1.121-0.836,1.908-1.589,2.338C28.693,35.87,28.176,35.997,27.599,35.997z M22.166,32.306c2.66,2.207,5.171,3.184,6.475,2.443c0.513-0.292,0.839-0.889,1.117-1.728c0.422-1.271,0.405-3.008-0.062-5.047 c-1.427,0.347-2.954,0.614-4.549,0.797C24.204,30.035,23.203,31.221,22.166,32.306z M20,31.695l-0.355-0.36 c-0.773-0.782-1.526-1.625-2.238-2.508l-0.7-0.867l1.112,0.053c1.431,0.068,2.931,0.068,4.361,0l1.111-0.053l-0.698,0.866 c-0.71,0.879-1.462,1.723-2.237,2.507L20,31.695z M18.898,29.054c0.359,0.417,0.728,0.822,1.102,1.212 c0.374-0.392,0.741-0.796,1.101-1.212C20.372,29.073,19.627,29.073,18.898,29.054z M20,27.068c-1.284,0-2.571-0.055-3.827-0.164 l-0.232-0.02l-0.134-0.191c-0.721-1.027-1.402-2.089-2.025-3.154c-0.619-1.061-1.209-2.179-1.753-3.325L11.927,20l0.102-0.214 c0.544-1.146,1.134-2.265,1.753-3.325c0.63-1.078,1.293-2.109,2.027-3.155l0.134-0.19l0.232-0.02c2.508-0.218,5.142-0.218,7.649,0 l0.232,0.02l0.134,0.191c0.736,1.05,1.399,2.082,2.025,3.154c0.625,1.07,1.215,2.188,1.753,3.326L28.069,20l-0.101,0.214 c-0.538,1.137-1.128,2.256-1.753,3.326c-0.626,1.072-1.289,2.104-2.025,3.154l-0.134,0.191l-0.232,0.02 C22.57,27.013,21.284,27.068,20,27.068z M16.491,25.928c2.309,0.187,4.71,0.187,7.015,0c0.667-0.961,1.272-1.91,1.847-2.893 c0.571-0.977,1.112-1.997,1.61-3.035c-0.498-1.038-1.039-2.058-1.61-3.035c-0.574-0.983-1.18-1.932-1.847-2.893 c-2.306-0.187-4.711-0.187-7.013,0c-0.665,0.958-1.271,1.906-1.849,2.894c-0.565,0.968-1.107,1.988-1.61,3.034 c0.503,1.045,1.044,2.065,1.61,3.035C15.215,24.01,15.836,24.982,16.491,25.928z M25.377,26.749l0.607-0.938 c0.373-0.576,0.74-1.162,1.095-1.767c0.366-0.626,0.707-1.255,1.035-1.883l0.506-0.968l0.402,1.016 c0.405,1.023,0.761,2.06,1.057,3.081l0.143,0.494l-0.497,0.129c-1.017,0.264-2.107,0.488-3.243,0.665L25.377,26.749z M28.479,23.6 c-0.174,0.316-0.353,0.633-0.537,0.949c-0.168,0.288-0.34,0.571-0.513,0.851c0.528-0.1,1.042-0.209,1.54-0.329 C28.819,24.581,28.655,24.09,28.479,23.6z M14.621,26.749l-1.105-0.172c-1.136-0.177-2.227-0.401-3.241-0.665l-0.497-0.129 l0.143-0.493c0.294-1.017,0.649-2.053,1.056-3.08l0.402-1.017l0.506,0.97c0.327,0.628,0.668,1.256,1.034,1.882 c0.354,0.605,0.722,1.191,1.095,1.767L14.621,26.749z M11.029,25.069c0.496,0.119,1.01,0.229,1.537,0.329 c-0.173-0.279-0.344-0.562-0.512-0.85c-0.185-0.315-0.362-0.631-0.536-0.948C11.342,24.092,11.179,24.582,11.029,25.069z M31.18,25.502l-0.146-0.505c-0.446-1.548-1.043-3.16-1.772-4.792L29.17,20l0.092-0.204c0.729-1.63,1.326-3.243,1.773-4.792 l0.146-0.505l0.498,0.171C35.637,16.031,38,18.024,38,20c0,1.977-2.363,3.969-6.322,5.331L31.18,25.502z M30.265,20 c0.63,1.427,1.159,2.84,1.579,4.209C34.993,23.039,37,21.412,37,20s-2.007-3.039-5.156-4.209 C31.424,17.162,30.894,18.574,30.265,20z M8.817,25.501L8.32,25.33C4.363,23.968,2,21.976,2,20s2.363-3.968,6.32-5.33l0.497-0.171 l0.146,0.505c0.449,1.554,1.045,3.167,1.772,4.792L10.828,20l-0.092,0.204c-0.728,1.625-1.323,3.238-1.772,4.792L8.817,25.501z M8.155,15.791C5.006,16.962,3,18.589,3,20s2.006,3.038,5.155,4.209c0.421-1.375,0.95-2.787,1.578-4.209 C9.105,18.578,8.576,17.166,8.155,15.791z M11.378,18.809l-0.402-1.017c-0.406-1.027-0.762-2.063-1.056-3.08l-0.143-0.493 l0.497-0.129c1.016-0.264,2.106-0.488,3.242-0.665l1.106-0.172l-0.61,0.939c-0.373,0.575-0.74,1.161-1.095,1.766 c-0.366,0.625-0.707,1.254-1.034,1.882L11.378,18.809z M11.029,14.931c0.149,0.487,0.313,0.978,0.489,1.469 c0.174-0.316,0.352-0.632,0.536-0.948c0.168-0.287,0.339-0.57,0.512-0.85C12.039,14.701,11.525,14.812,11.029,14.931z M28.62,18.809l-0.506-0.969c-0.328-0.629-0.669-1.257-1.035-1.883c-0.354-0.605-0.722-1.191-1.095-1.767l-0.607-0.938l1.104,0.172 c1.137,0.177,2.229,0.401,3.243,0.666l0.497,0.129l-0.143,0.494c-0.296,1.02-0.651,2.057-1.057,3.081L28.62,18.809z M27.43,14.601 c0.173,0.28,0.345,0.563,0.513,0.851c0.185,0.316,0.363,0.632,0.537,0.949c0.176-0.491,0.34-0.982,0.49-1.47 C28.473,14.811,27.958,14.701,27.43,14.601z M30.465,13.257l-0.507-0.132c-1.587-0.415-3.315-0.726-5.137-0.925l-0.218-0.024 l-0.13-0.176c-1.07-1.449-2.212-2.791-3.394-3.987l-0.374-0.379l0.401-0.35c3.229-2.811,6.243-3.919,8.027-2.901 c0.755,0.431,1.29,1.218,1.591,2.338c0.408,1.527,0.355,3.61-0.152,6.023L30.465,13.257z M25.147,11.229 c1.597,0.183,3.123,0.451,4.549,0.798c0.517-1.907,0.59-3.595,0.063-5.048c-0.302-0.83-0.604-1.435-1.119-1.729 c-1.298-0.74-3.812,0.236-6.473,2.444C23.2,8.775,24.201,9.962,25.147,11.229z M9.534,13.257l-0.108-0.513 c-0.508-2.413-0.561-4.495-0.152-6.022c0.301-1.123,0.836-1.911,1.591-2.341c1.789-1.02,4.801,0.091,8.03,2.904l0.402,0.35 l-0.375,0.379c-1.184,1.197-2.326,2.539-3.396,3.987l-0.13,0.176l-0.218,0.024c-1.818,0.199-3.547,0.51-5.137,0.925L9.534,13.257z M12.4,5c-0.401,0-0.751,0.083-1.041,0.249c-0.514,0.293-0.774,0.916-1.119,1.731c-0.54,1.275-0.449,3.011,0.063,5.047 c1.428-0.347,2.954-0.615,4.549-0.798c0.946-1.267,1.948-2.453,2.983-3.534C15.766,5.977,13.803,5,12.4,5z M16.709,12.039 l0.699-0.866c0.71-0.88,1.463-1.723,2.237-2.507l0.355-0.36l0.355,0.36c0.777,0.787,1.529,1.63,2.236,2.506l0.697,0.866 l-1.11-0.052c-1.43-0.067-2.93-0.067-4.359,0L16.709,12.039z M20,10.932c0.37,0,0.737,0.005,1.101,0.014 c-0.357-0.415-0.726-0.819-1.1-1.211c-0.374,0.391-0.742,0.795-1.101,1.211C19.264,10.937,19.63,10.932,20,10.932z"
                ></path>
              </g>
            </svg>
          ),
          level: "Advanced",
        },
        {
          name: "HTML",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5z"></path>
              <path fill="#FF6F00" d="M24,8v31.9l11.2-3.2L37.7,8H24z"></path>
              <path
                fill="#FFF"
                d="M24,25v-4h8.6l-0.7,11.5L24,35.1V25z M24,16.1v-4h4v4h4v-4h4v4h-4v4h-4v-4H24z"
              ></path>
              <path
                fill="#EEE"
                d="M24.5,22.1h-8.5l0.7,11.5l7.8,2.7V22.1z M19.5,16.1H24v4h-4.5V16.1z"
              ></path>
            </svg>
          ),
          level: "Advanced",
        },
        {
          name: "CSS",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5z"></path>
              <path fill="#039BE5" d="M24,8v31.9l11.2-3.2L37.7,8H24z"></path>
              <path
                fill="#FFF"
                d="M33.1,13H24v4h9.1l-0.7,11.5L24,32.4V28h-4.5l0.7,11.5L24,42.1V37.6l7.8-2.7L33.1,13z"
              ></path>
              <path
                fill="#EEE"
                d="M24,13v4h-9.1l-0.7,11.5L24,32.4V28h-4.5l0.7,11.5L24,42.1V37.6l-7.8-2.7L19.1,17H24z"
              ></path>
            </svg>
          ),
          level: "Advanced",
        },
        {
          name: "Figma",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <path
                fill="#F24E1E"
                d="M24,4c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S29.5,4,24,4z"
              ></path>
              <path
                fill="#FF7262"
                d="M24,14c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S26.8,14,24,14z"
              ></path>
              <path
                fill="#A259FF"
                d="M14,24c0-5.5,4.5-10,10-10s10,4.5,10,10s-4.5,10-10,10S14,29.5,14,24z"
              ></path>
              <path
                fill="#1ABCFE"
                d="M24,34c-5.5,0-10-4.5-10-10h20C34,29.5,29.5,34,24,34z"
              ></path>
              <path
                fill="#0ACF83"
                d="M24,24c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S26.8,24,24,24z"
              ></path>
            </svg>
          ),
          level: "Intermediate",
        },
      ],
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <path
                fill="#21A366"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              ></path>
              <path
                fill="#FFF"
                d="M24,8c-8.837,0-16,7.163-16,16s7.163,16,16,16s16-7.163,16-16S32.837,8,24,8z"
              ></path>
              <path
                fill="#21A366"
                d="M24,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S30.627,12,24,12z"
              ></path>
              <path
                fill="#FFF"
                d="M24,16c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S28.418,16,24,16z"
              ></path>
              <path
                fill="#21A366"
                d="M24,20c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S26.209,20,24,20z"
              ></path>
            </svg>
          ),
          level: "Advanced",
        },
        {
          name: "Django",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <path
                fill="#092E20"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              ></path>
              <path
                fill="#44B78B"
                d="M24,8c-8.837,0-16,7.163-16,16s7.163,16,16,16s16-7.163,16-16S32.837,8,24,8z"
              ></path>
              <path
                fill="#FFF"
                d="M24,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S30.627,12,24,12z"
              ></path>
              <path
                fill="#44B78B"
                d="M24,16c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S28.418,16,24,16z"
              ></path>
              <path
                fill="#FFF"
                d="M24,20c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S26.209,20,24,20z"
              ></path>
            </svg>
          ),
          level: "Advanced",
        },
        {
          name: "Flask",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <path
                fill="#000000"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M24,8c-8.837,0-16,7.163-16,16s7.163,16,16,16s16-7.163,16-16S32.837,8,24,8z"
              ></path>
              <path
                fill="#000000"
                d="M24,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S30.627,12,24,12z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M24,16c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S28.418,16,24,16z"
              ></path>
              <path
                fill="#000000"
                d="M24,20c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S26.209,20,24,20z"
              ></path>
            </svg>
          ),
          level: "Intermediate",
        },
      ],
    },
    {
      name: "Databases",
      icon: "🗄️",
      skills: [
        {
          name: "MongoDB",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <path
                fill="#4DB33D"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              ></path>
              <path
                fill="#FFF"
                d="M24,8c-8.837,0-16,7.163-16,16s7.163,16,16,16s16-7.163,16-16S32.837,8,24,8z"
              ></path>
              <path
                fill="#4DB33D"
                d="M24,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S30.627,12,24,12z"
              ></path>
              <path
                fill="#FFF"
                d="M24,16c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S28.418,16,24,16z"
              ></path>
              <path
                fill="#4DB33D"
                d="M24,20c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S26.209,20,24,20z"
              ></path>
            </svg>
          ),
          level: "Intermediate",
        },
        {
          name: "MySQL",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <path
                fill="#4479A1"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              ></path>
              <path
                fill="#FFF"
                d="M24,8c-8.837,0-16,7.163-16,16s7.163,16,16,16s16-7.163,16-16S32.837,8,24,8z"
              ></path>
              <path
                fill="#4479A1"
                d="M24,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S30.627,12,24,12z"
              ></path>
              <path
                fill="#FFF"
                d="M24,16c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S28.418,16,24,16z"
              ></path>
              <path
                fill="#4479A1"
                d="M24,20c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S26.209,20,24,20z"
              ></path>
            </svg>
          ),
          level: "Intermediate",
        },
        {
          name: "SQLite",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <path
                fill="#003B57"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              ></path>
              <path
                fill="#FFF"
                d="M24,8c-8.837,0-16,7.163-16,16s7.163,16,16,16s16-7.163,16-16S32.837,8,24,8z"
              ></path>
              <path
                fill="#003B57"
                d="M24,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S30.627,12,24,12z"
              ></path>
              <path
                fill="#FFF"
                d="M24,16c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S28.418,16,24,16z"
              ></path>
              <path
                fill="#003B57"
                d="M24,20c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S26.209,20,24,20z"
              ></path>
            </svg>
          ),
          level: "Advanced",
        },
      ],
    },
    {
      name: "Tools & DevOps",
      icon: "🛠️",
      skills: [
        {
          name: "Git",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <path
                fill="#F05032"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              ></path>
              <path
                fill="#FFF"
                d="M24,8c-8.837,0-16,7.163-16,16s7.163,16,16,16s16-7.163,16-16S32.837,8,24,8z"
              ></path>
              <path
                fill="#F05032"
                d="M24,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S30.627,12,24,12z"
              ></path>
              <path
                fill="#FFF"
                d="M24,16c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S28.418,16,24,16z"
              ></path>
              <path
                fill="#F05032"
                d="M24,20c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S26.209,20,24,20z"
              ></path>
            </svg>
          ),
          level: "Advanced",
        },
        { name: "CI/CD", icon: "🔄", level: "Intermediate" },
        {
          name: "AWS",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <path
                fill="#FF9900"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              ></path>
              <path
                fill="#FFF"
                d="M24,8c-8.837,0-16,7.163-16,16s7.163,16,16,16s16-7.163,16-16S32.837,8,24,8z"
              ></path>
              <path
                fill="#FF9900"
                d="M24,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S30.627,12,24,12z"
              ></path>
              <path
                fill="#FFF"
                d="M24,16c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S28.418,16,24,16z"
              ></path>
              <path
                fill="#FF9900"
                d="M24,20c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S26.209,20,24,20z"
              ></path>
            </svg>
          ),
          level: "Intermediate",
        },
        {
          name: "WordPress",
          icon: (
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
              <path
                fill="#fff"
                d="M24 4.050000000000001A19.95 19.95 0 1 0 24 43.95A19.95 19.95 0 1 0 24 4.050000000000001Z"
              ></path>
              <path
                fill="#01579b"
                d="M8.001,24c0,6.336,3.68,11.806,9.018,14.4L9.385,17.488C8.498,19.479,8.001,21.676,8.001,24z M34.804,23.194c0-1.977-1.063-3.35-1.67-4.412c-0.813-1.329-1.576-2.437-1.576-3.752c0-1.465,1.471-2.84,3.041-2.84 c0.071,0,0.135,0.006,0.206,0.008C31.961,9.584,28.168,8,24.001,8c-5.389,0-10.153,2.666-13.052,6.749 c0.228,0.074,0.307,0.039,0.611,0.039c1.669,0,4.264-0.2,4.264-0.2c0.86-0.057,0.965,1.212,0.099,1.316c0,0-0.864,0.105-1.828,0.152 l5.931,17.778l3.5-10.501l-2.603-7.248c-0.861-0.046-1.679-0.152-1.679-0.152c-0.862-0.056-0.762-1.375,0.098-1.316 c0,0,2.648,0.2,4.217,0.2c1.675,0,4.264-0.2,4.264-0.2c0.861-0.057,0.965,1.212,0.104,1.316c0,0-0.87,0.105-1.832,0.152 l5.891,17.61l1.599-5.326C34.399,26.289,34.804,24.569,34.804,23.194z M24.281,25.396l-4.8,13.952c1.436,0.426,2.95,0.652,4.52,0.652 c1.861,0,3.649-0.324,5.316-0.907c-0.04-0.071-0.085-0.143-0.118-0.22L24.281,25.396z M38.043,16.318 c0.071,0.51,0.108,1.059,0.108,1.645c0,1.628-0.306,3.451-1.219,5.737l-4.885,14.135C36.805,35.063,40,29.902,40,24 C40,21.219,39.289,18.604,38.043,16.318z"
              ></path>
              <path
                fill="#01579b"
                d="M4,24c0,11.024,8.97,20,19.999,20C35.03,44,44,35.024,44,24S35.03,4,24,4S4,12.976,4,24z M5.995,24 c0-9.924,8.074-17.999,18.004-17.999S42.005,14.076,42.005,24S33.929,42.001,24,42.001C14.072,42.001,5.995,33.924,5.995,24z"
              ></path>
            </svg>
          ),
          level: "Intermediate",
        },
      ],
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "from-green-400 to-emerald-500";
      case "Intermediate":
        return "from-blue-400 to-cyan-500";
      case "Beginner":
        return "from-yellow-400 to-orange-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  return (
    <section
      id="skills"
      className={`py-24 ${theme === "light" ? "bg-gray-50" : "bg-black"}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2
          className={`text-3xl font-bold mb-12 ${
            theme === "light" ? "text-gray-900" : "text-white"
          } text-center`}
        >
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <HoverShadowCard
              key={category.name}
              className={`relative overflow-hidden rounded-3xl border backdrop-blur-2xl p-6 ${
                theme === "light"
                  ? "border-gray-200 bg-white/80"
                  : "border-white/20 bg-gradient-to-br from-white/20 via-white/5 to-neonblue/10"
              }`}
              theme={theme}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3
                  className={`text-lg font-bold ${
                    theme === "light" ? "text-gray-900" : "text-white"
                  }`}
                >
                  {category.name}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 p-3 rounded-xl border backdrop-blur-2xl transition-all duration-300 hover:scale-105 ${
                      theme === "light"
                        ? "border-gray-200 bg-white/50 hover:bg-white/70"
                        : "border-white/20 bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`text-sm font-semibold truncate ${
                          theme === "light" ? "text-gray-900" : "text-white"
                        }`}
                      >
                        {skill.name}
                      </div>
                      <div
                        className={`text-xs bg-gradient-to-r ${getLevelColor(
                          skill.level
                        )} bg-clip-text text-transparent font-medium`}
                      >
                        {skill.level}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </HoverShadowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ date, title, description, link, tech, theme }) {
  return (
    <HoverShadowCard
      className={`relative overflow-hidden rounded-3xl border backdrop-blur-2xl p-8 min-h-[220px] flex flex-col ${
        theme === "light"
          ? "border-gray-200 bg-white/80"
          : "border-white/20 bg-gradient-to-br from-white/20 via-white/5 to-neonblue/10"
      }`}
      theme={theme}
    >
      <div className="text-xs font-mono font-semibold mb-1 animated-gradient-infinite bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        {date}
      </div>
      <div
        className={`text-lg font-bold mb-1 ${
          theme === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        {title}
      </div>
      <div className="mb-2 flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={t}
            className={`rounded-3xl shadow-2xl border px-4 py-1 text-xs font-mono font-semibold animated-gradient-infinite bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ${
              theme === "light" ? "border-gray-200" : "border-white/20"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div
        className={`${
          theme === "light" ? "text-gray-700" : "text-white/80"
        } text-base leading-relaxed mb-2 text-justify`}
      >
        {Array.isArray(description)
          ? description.map((point, idx) => (
              <p key={idx} className="mb-2 last:mb-0">
                {point}
              </p>
            ))
          : description}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-2 font-mono font-bold text-sm transition-colors underline ${
            theme === "light"
              ? "text-blue-600 hover:text-pink-500"
              : "text-blue-400 hover:text-pink-400"
          }`}
        >
          View Project
        </a>
      )}
    </HoverShadowCard>
  );
}

function Projects({ theme }) {
  const projects = [
    {
      date: "OCTOBER - OCTOBER 2024",
      title: "OptiCloud",
      tech: [
        "Next.js",
        "Django",
        "Python Boto3 (AWS SDK)",
        "AWS EC2",
        "AWS S3",
        "AWS CloudWatch",
        "AWS CloudFormation",
        "OpenAI API",
        "YAML",
        "Chart.js",
      ],
      description: [
        "Lowered cloud infrastructure costs by up to 25% by developing a platform that analyzes system metrics and recommends optimization strategies.",
        "Reduced cloud environment setup time by 60% by automating permissions and resource provisioning processes.",
      ],
    },
    {
      date: "SEPTEMBER - NOVEMBER 2024",
      title: "Autoscaled Face Recognition System",
      tech: [
        "Autoscaling",
        "Concurrency",
        "Microservices",
        "AWS - EC2",
        "SQS",
        "S3",
        "IAM",
        "Lambda",
        "CloudWatch",
      ],
      description: [
        "Designed a responsive face recognition system capable of handling 1000+ concurrent requests, ensuring reliable performance under high load.",
        "Improved operational efficiency and responsiveness by deploying a scalable, event-driven processing architecture.",
      ],
    },
    {
      date: "MAY - JULY 2024",
      title: "Course Swap Application",
      tech: [
        "JavaScript",
        "React",
        "Node.js",
        "GitHub Actions",
        "Amazon EC2",
        "MongoDB",
        "Socket.io",
        "Puppeteer",
      ],
      description: [
        "Helped university students match for course swaps more effectively by building a real-time, preference-based matching system.",
        "Increased deployment scalability and reliability through automation and continuous integration pipelines.",
        "Enhanced accessibility and inclusivity for users by building a fully accessible, real-time web platform.",
      ],
    },
    {
      date: "MARCH - AUGUST 2022",
      title: "Software for System Hardware Inventory",
      tech: ["Python", "Django", "Batch Scripting", "SQLite", "CronJob"],
      description: [
        "Delivered a scalable asset tracking solution for managing hardware across a hybrid infrastructure.",
        "Reduced manual data collection time by 80% through automation and scheduled uploads of system inventory.",
      ],
    },
    {
      date: "JANUARY - APRIL 2022",
      title: "E-Waste Tracker",
      tech: ["Python", "Django", "SQLite", "HTML/CSS/JS", "Git"],
      description: [
        "Addressed the problem of inefficient electronic waste management by enabling real-time tracking of devices and promoting sustainability across the tech sector.",
        "Improved user access to e-waste data, supporting better compliance with environmental policies.",
      ],
    },
    {
      date: "JANUARY - APRIL 2021",
      title: "Location Tracking System",
      tech: ["Android - Java", "Firebase", "XML", "OpenStreetMap API", "Git"],
      description: [
        "Solved the challenge of staying connected with friends and family by enabling real-time location tracking through a mobile app.",
        "Improved user safety and coordination by providing continuous, accurate location visibility of loved ones.",
      ],
    },
    {
      date: "JANUARY - APRIL 2020",
      title: "Mental Health Test Web Application",
      tech: ["Python", "Flask", "MySQL", "Git"],
      description: [
        "Tackled low mental health awareness among students by providing a self-assessment platform developed in collaboration with counselors.",
        "Increased mental health engagement and early detection through guided questionnaires.",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className={`py-24 ${theme === "light" ? "bg-gray-50" : "bg-black"}`}
    >
      <h2
        className={`text-3xl font-bold mb-8 ${
          theme === "light" ? "text-gray-900" : "text-white"
        } text-center`}
      >
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl px-4 mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title + idx} {...project} theme={theme} />
        ))}
      </div>
    </section>
  );
}

function Contact({ theme }) {
  return (
    <section
      id="contact"
      className={`py-24 flex flex-col items-center ${
        theme === "light" ? "bg-gray-50" : "bg-black"
      }`}
    >
      <h2
        className={`text-3xl font-bold mb-12 ${
          theme === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        Contact
      </h2>
      <div
        className={`relative overflow-hidden rounded-3xl shadow-2xl border backdrop-blur-2xl p-8 w-full max-w-xl ${
          theme === "light"
            ? "border-gray-200 bg-white/80"
            : "border-white/20 bg-gradient-to-br from-white/20 via-white/5 to-neonblue/10"
        }`}
      >
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={`px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition ${
              theme === "light"
                ? "border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:ring-blue-200"
                : "border-white/20 bg-white/10 text-white placeholder-white/60 focus:ring-neonblue/40"
            }`}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={`px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition ${
              theme === "light"
                ? "border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:ring-blue-200"
                : "border-white/20 bg-white/10 text-white placeholder-white/60 focus:ring-neonblue/40"
            }`}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className={`px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition ${
              theme === "light"
                ? "border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:ring-blue-200"
                : "border-white/20 bg-white/10 text-white placeholder-white/60 focus:ring-neonblue/40"
            }`}
          />
          <button
            type="submit"
            className={`w-full py-3 rounded-full font-bold text-lg shadow-lg hover:opacity-90 transition ${
              theme === "light"
                ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white"
                : "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white"
            }`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "light";
  });

  useEffect(() => {
    // Save theme to localStorage whenever it changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`${theme} transition-colors duration-300`}>
      <GlassNavbar theme={theme} toggleTheme={toggleTheme} />
      <main className="min-h-screen">
        <Hero theme={theme} />
        <Experience theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
      </main>
    </div>
  );
}
