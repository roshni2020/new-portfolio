export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
  thumbnail: string;
  videoUrl?: string;
  award?: string;
  problemStatement: string;
  techDecisions: string;
  results: string;
}

const gh = (r: string) => `https://github.com/roshni2020/${r}`;

export const projects: Project[] = [
  {
    slug: "evidpath",
    title: "EvidPath",
    description: "AI career-planning platform: RAG resume analysis and skill-gap scoring across 205 role pathways.",
    techStack: ["Python", "FastAPI", "GraphQL", "React", "TypeScript", "BERT", "RAG", "AWS EC2", "Docker", "pytest"],
    repoLink: gh("Career-Pathway-engine"),
    thumbnail: "/thumbs/evidpath.jpg",
    award: "2026 — now",
    problemStatement: "CS students can't tell which roles fit their skills, or what to learn next to get there. This started as Roshni's Graduate Assistant work with Binghamton's Watson Career Services and grew into a full platform.",
    techDecisions: "Python/FastAPI and GraphQL services on AWS EC2 with a React/TypeScript frontend. BERT sentence-transformers semantically match user skills against O*NET occupational data plus custom modern roles (AI Engineer, DevOps, Cloud Architect). A skill-gap engine scores what's missing for a target role and React Flow renders the roadmap. RAG-based resume analysis with PDF parsing, plain-English LLM explanations for every recommendation, and YouTube API course suggestions for each gap.",
    results: "205 role pathways with matching, gap analysis and personalised learning paths. A 17-case pytest suite across 10 modules covers retrieval quality, scoring accuracy, auth persistence and security validation, plus Jest frontend tests and a smoke test against Docker Compose.",
  },
  {
    slug: "silent-flood",
    title: "Silent Flood",
    description: "Detects a flood by how fast the river is rising, not by whether it is raining.",
    techStack: ["PostgreSQL triggers", "ClickHouse", "Python", "MCP", "LibreChat", "Docker"],
    repoLink: gh("floods-watch"),
    thumbnail: "/thumbs/silent-flood.jpg",
    award: "🥈 2nd Place — Better Days Hackathon",
    problemStatement: "The Bhote Koshi in Nepal rose about nine metres in half an hour under a clear sky. Every rain-triggered early-warning system was blind to it, because they all watch the wrong variable.",
    techDecisions: "The detection lives in the database, not the app: a PostgreSQL statement trigger buckets gauge readings into five-minute windows, measures rate of rise against the last fifteen minutes, sums six hours of rainfall, and writes an alert in the same transaction as the insert. No cron, no worker, no polling. ClickHouse handles large-scale analytics, downstream village mapping tells a district officer who is at risk and how many minutes they have, and a LibreChat + MCP assistant turns raw alerts into language people can act on.",
    results: "In backtest the system warned 100 minutes before the surge reached Barhabise. 2nd Place at Better Days Hackathon (ClickHouse × LibreChat), San Francisco, Aug 2026. The idea was Roshni's; she walked in alone and met her team that morning.",
  },
  {
    slug: "arian-os",
    title: "Arian OS",
    description: "Agents that read a published ML paper and keep iterating until your metric improves.",
    techStack: ["Multi-agent loops", "W&B Weave", "Aria", "Hugging Face", "Python"],
    thumbnail: "/thumbs/arian-os.jpg",
    award: "🏆 Best Product + Best Use of Aria — CoreWeave Hacks",
    problemStatement: "Reproducing and improving on a published paper is slow, manual research work.",
    techDecisions: "Researchers upload a published paper and define the metric they want to improve. Multiple agents analyse the paper, search GitHub and Hugging Face, test different ML approaches, and loop. Aria (Weights & Biases) traces every agent step so the team could see why a run got better.",
    results: "In one experiment accuracy went from 18% to 56%. Best Product and Best Use of Aria at CoreWeave Hacks: Agent Loops (W&B, TypeSafe AI, AGI House), Sep 2026. Built with Ali Amjad, Rikin Shah and Ahmad Mustafa.",
  },
  {
    slug: "variantcourt",
    title: "VariantCourt",
    description: "An AI courtroom for DNA variant interpretation, where a rule engine — not an LLM — gives the verdict.",
    techStack: ["FastAPI", "Nuxt 4", "TypeSafe AI", "W&B Weave", "marimo", "pytest"],
    repoLink: gh("variantdna"),
    thumbnail: "/thumbs/variantcourt.jpg",
    award: "CoreWeave Hacks: Agent Loops",
    problemStatement: "LLMs shouldn't get the final say on whether a DNA variant causes disease. So they argue, and a deterministic engine decides.",
    techDecisions: "One agent argues the variant is pathogenic, another argues benign; TypeSafe cross-examines both; a jury revises a shared structured state over up to three rounds. A deterministic ACMG-style rule engine issues the final classification. Weave traces every step and ARIA compares runs to recommend better loop configurations. FastAPI backend, Nuxt 4 frontend, CLI demo, marimo research notebook.",
    results: "A working research prototype with a pytest suite — explicitly not for clinical use.",
  },
  {
    slug: "successor",
    title: "Successor",
    description: "Voice-based knowledge capture for semiconductor fab operations.",
    techStack: ["MongoDB Atlas", "Vector Search", "RRF", "LangGraph", "ElevenLabs", "FastAPI", "React"],
    repoLink: gh("Successor_MDB"),
    thumbnail: "/thumbs/successor.jpg",
    award: "MongoDB Build Fest",
    problemStatement: "When an experienced fab employee leaves, years of troubleshooting knowledge leave with them. Nobody writes the PDF.",
    techDecisions: "Captures knowledge through natural voice conversation and intelligent follow-up questions instead of documentation. A hybrid ranking algorithm on MongoDB Atlas fuses Atlas Search and Vector Search with Reciprocal Rank Fusion. The voice agent is a LangGraph state machine with ElevenLabs STT/TTS and a MongoDB checkpointer, so sessions are stateful and resume mid-conversation.",
    results: "Surfaces fixes from spoken symptoms across 60 fault classes and 185 fix outcomes. Built with Zubair Zafar and Swetha Prakash at MongoDB Build Fest, San Francisco.",
  },
  {
    slug: "civictrace-sf",
    title: "CivicTrace SF",
    description: "Government meeting video → a Neo4j knowledge graph that catches contradictions.",
    techStack: ["TypeScript", "Neo4j", "OpenAI", "TwelveLabs", "Strands Agents", "Playwright", "Docker"],
    repoLink: gh("CivicTrace_SF"),
    thumbnail: "/thumbs/civictrace-sf.jpg",
    problemStatement: "Hours of SF government meeting video hide claims that contradict each other and projects approved with no permit on file.",
    techDecisions: "Multi-modal OpenAI and TwelveLabs models with Strands Agents turn unstructured video into a structured Neo4j knowledge graph. A Playwright end-to-end suite runs Chromium and mobile projects with retries and trace-on-failure; pytest covers backend routes; everything is containerised with Docker Compose.",
    results: "Flags contradicted claims and approved projects with no permit on file, with full e2e coverage.",
  },
  {
    slug: "pema",
    title: "PEMA",
    description: "Personal Environmental Memory Agent — Physical AI that remembers where things are.",
    techStack: ["Qualcomm GenieX", "On-device AI", "Python", "Arduino / STM32", "VLA models"],
    repoLink: gh("PEMA"),
    thumbnail: "/thumbs/pema.jpg",
    award: "★ Special Mention, Qualcomm Track — AI Infra Summit",
    problemStatement: "Low-vision and memory-impaired users lose track of where objects are and what changed in a room.",
    techDecisions: "A privacy-focused Physical AI system that remembers where objects were last seen and connects AI reasoning to real-world actions. On-device GenAI with Qualcomm GenieX keeps reasoning local to the hardware, wired to sensing on the Arduino/STM32 side. The same weekend Roshni also competed in the Intel track with Intel Labs' Physical AI Studio — robot manipulation and training ACT / SmallVLA models.",
    results: "Special Mention, Qualcomm track, AI Infra Summit Hackathon, Santa Clara, Sep 2026. Her first Physical AI hackathon.",
  },
  {
    slug: "echoloop",
    title: "EchoLoop",
    description: "You don't learn how to talk to the AI. The AI learns how you communicate.",
    techStack: ["Python", "Multi-agent", "Speech recognition", "Vision", "Slack", "Vercel"],
    liveLink: "https://auteciia.vercel.app",
    repoLink: gh("Autecia-ai"),
    thumbnail: "/thumbs/echoloop.jpg",
    award: "Lemma × Comma Capital Hackathon",
    problemStatement: "Many autistic and neurodivergent people, people with aphasia, and AAC users know exactly what they want to say but can't always finish the sentence. \"I need… that… blue…\" — and everyone starts guessing.",
    techDecisions: "Listens to the fragment exactly as spoken, looks at what's visibly in the room, and remembers what this person has confirmed before. Four agents loop to propose two to four complete sentences. The person picks one, or says none fit. Only then does it speak aloud and, optionally, send to a caregiver's Slack.",
    results: "Nothing is ever said that wasn't confirmed. Live demo deployed on Vercel.",
  },
  {
    slug: "cloudvault-lite",
    title: "CloudVault Lite",
    description: "A deduplicating, content-addressable storage engine in C++.",
    techStack: ["C++", "SHA-256", "SQLite", "Concurrency"],
    thumbnail: "/thumbs/cloudvault-lite.jpg",
    problemStatement: "Redundant physical writes waste storage when the same file is uploaded many times.",
    techDecisions: "A C++ content-addressable storage engine uses SHA-256 hashing to detect and eliminate duplicate files before they hit disk. A TOCTOU race condition in SQLite transactions was debugged to root cause.",
    results: "Concurrent uploads scaled to four workers once the race was fixed.",
  },
  {
    slug: "clearform",
    title: "ClearForm + Readback",
    description: "Voice-first document completion for blind and low-vision users.",
    techStack: ["Next.js", "TypeScript", "ElevenLabs", "Linkup", "pdf-lib"],
    liveLink: "https://clearform-three.vercel.app",
    repoLink: gh("clearform"),
    thumbnail: "/thumbs/clearform.jpg",
    problemStatement: "Medical and government documents are unreadable with a screen reader, because screen readers read characters, not structure.",
    techDecisions: "Hear → Speak → Confirm → Complete → Download. Reads documents aloud by structure and fills forms by voice with ElevenLabs speech and Scribe STT; Linkup is used only for trusted terminology. Safety rules are baked in: every spoken value is read back and confirmed before a field is filled, low-confidence values are marked Needs review and never guessed, signature fields are never completed, nothing is stored.",
    results: "Falls back to the browser speech engine with no API keys, so it works anywhere.",
  },
  {
    slug: "ate-yield-tracker",
    title: "ATE Yield Tracker",
    description: "ATE log analysis and PCB yield tracking for manufacturing test engineering.",
    techStack: ["Python", "pandas", "SQLite", "pytest", "PDF reports"],
    repoLink: gh("ate-yield-tracker"),
    thumbnail: "/thumbs/ate-yield-tracker.jpg",
    problemStatement: "Manufacturing teams analyse ATE test logs and track PCB yield by hand, which is slow and error-prone.",
    techDecisions: "Parses ATE-style test logs in CSV and JSON, extracts per-board pass/fail records and computes yield KPIs across test steps. Classifies hardware failure modes (opens, shorts, parametric deviations) by board type and test step, generates ranked defect PDF reports with trend charts, and keeps an SQLite traceability store of board ID, test step, result and timestamp.",
    results: "Analysed logs for 150 boards across three board types. 18 pytest cases, zero regressions.",
  },
  {
    slug: "cctv-anomaly",
    title: "CCTV Anomaly Detection",
    description: "An LSTM that flags shoplifting and loitering in surveillance video.",
    techStack: ["TensorFlow/Keras", "LSTM", "OpenCV", "Streamlit"],
    repoLink: gh("Anomaly-Detection-in-CCTV-Footage"),
    thumbnail: "/thumbs/cctv-anomaly.jpg",
    problemStatement: "Manually monitoring CCTV footage for suspicious activity is slow and misses things.",
    techDecisions: "Collected and annotated a surveillance dataset, extracted temporal features from frame sequences with OpenCV, and trained an LSTM in TensorFlow/Keras to separate normal behaviour from anomalies on an imbalanced dataset. Deployed via Streamlit with a real-time alert mechanism.",
    results: "92% accuracy at 2.5 seconds per video segment.",
  },
];
