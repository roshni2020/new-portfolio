export const LINKS = {
  email: "roshnikobular02@gmail.com",
  linkedin: "https://www.linkedin.com/in/roshni-kobula-raja",
  github: "https://github.com/roshni2020",
  resume: "/Roshni_Kobula_Raja_Resume.pdf",
};

export const experience = [
  {
    when: "Aug 2025 — May 2026",
    role: "Graduate Assistant",
    org: "Binghamton University, SUNY",
    where: "Binghamton, NY",
    bullets: [
      "Architected an agentic AI system for career planning and role matching: skill-gap analysis and personalized learning roadmaps, with prompt engineering for role-fit explanations.",
      "Partnered with Watson Career Services to gather requirements, test workflows and iterate on agent behavior from stakeholder feedback ahead of a planned release for student use.",
      "The work grew into EvidPath, the full-stack career-planning platform.",
    ],
    tags: ["Agentic AI", "Prompt engineering", "RAG", "Python", "Stakeholder testing"],
  },
  {
    when: "Jun 2023 — Dec 2023",
    role: "Data Analyst Intern",
    org: "Kanini",
    where: "Chennai, India",
    bullets: [
      "Shipped a full-stack document-analysis application with Django and Flask backed by PyTorch NLP pipelines, cutting manual processing time by 40%.",
      "Built and deployed a document classification model pairing an SVM classifier with BERT embeddings, served through Flask APIs; also used OpenAI and Transformers embeddings.",
      "Exposed REST APIs across the application for modular, reusable deployment, and built Python data pipelines and stakeholder dashboards.",
    ],
    tags: ["Django", "Flask", "PyTorch", "BERT", "SVM", "REST APIs"],
  },
  {
    when: "Jun 2022 — Aug 2022",
    role: "AI/ML Intern",
    org: "University of Texas at Dallas",
    where: "Dallas, TX",
    bullets: [
      "Worked with a cross-functional research team on Python solutions for classifying and analyzing multimedia data.",
      "Trained a music-genre classifier with K-Nearest Neighbors and scikit-learn, reaching 82% on GTZAN after hyperparameter tuning.",
      "Implemented the MFCC feature-extraction pipeline (Librosa, NumPy) and the model-evaluation pipeline.",
    ],
    tags: ["Python", "scikit-learn", "KNN", "Librosa", "NumPy"],
  },
];

export const education = [
  { when: "May 2026", title: "MS Computer Science", org: "State University of New York at Binghamton, Watson College", note: "Algorithms, Systems Programming, Mobile System Security, AI, Data Mining." },
  { when: "May 2024", title: "B.Tech Information Technology", org: "Rajalakshmi Engineering College, Chennai", note: "GPA 8.62/10. DSA, Networks, DBMS, Operating Systems, Software Testing." },
];

export const wins = [
  { when: "Sep 2026", icon: "🏆", title: "Best Product", body: "CoreWeave Hacks: Agent Loops (Weights & Biases, TypeSafe AI, AGI House) — Arian OS." },
  { when: "Sep 2026", icon: "🏆", title: "Best Use of Aria", body: "Same event, second award — agent traces and run comparison with Aria on Arian OS." },
  { when: "Aug 2026", icon: "🥈", title: "2nd Place", body: "Better Days Hackathon (ClickHouse × LibreChat), San Francisco — Silent Flood. Her idea; team formed that morning." },
  { when: "Sep 2026", icon: "★", title: "Special Mention, Qualcomm Track", body: "AI Infra Summit Hackathon, Santa Clara — PEMA. First Physical AI hackathon." },
];

export const certs = [
  { when: "Aug 2026", title: "Oracle Agentic AI Foundation", org: "Oracle" },
  { when: "Nov 2025", title: "Women in Tech Salesforce Training Program", org: "MTX" },
  { when: "Jul 2023", title: "Robotic Process Automation", org: "UiPath" },
  { when: "Aug 2022", title: "Machine Learning & Deep Learning", org: "The University of Texas at Dallas" },
  { when: "Aug 2022", title: "Python for Data Science", org: "Great Lakes Learning Academy" },
];

export const skills = [
  { title: "Languages", items: ["Python", "C / C++", "JavaScript", "TypeScript", "SQL"] },
  { title: "Software engineering", items: ["Data structures & algorithms", "REST & GraphQL APIs", "FastAPI, Django, Flask", "React", "Root cause analysis"] },
  { title: "Testing & infra", items: ["pytest, Playwright, Jest", "Smoke & end-to-end testing", "Docker, Kubernetes", "AWS EC2, Linux", "Git"] },
  { title: "Generative AI & data", items: ["LLMs & multi-modal models", "RAG, LangGraph, MCP", "PyTorch", "PostgreSQL, MongoDB", "ClickHouse, Neo4j"] },
];
