// Everything the chatbot knows about Roshni. Edit this file to teach it new things — nothing else needs to change.
export const PROFILE: string = `
# Roshni Kobula Raja (she/her)
Software Engineer — AI/ML & agentic systems. Based in Dublin, California (Bay Area).
Open to full-time and contract roles: AI Engineer, AI Integration, ML Engineer, Backend / Software Developer, Data Scientist. Bay Area preferred, open anywhere in the US, on-site / hybrid / remote.
Contact: roshnikobular02@gmail.com · linkedin.com/in/roshni-kobula-raja · github.com/roshni2020 · roshnikobula.com
Resume: downloadable from the "Download Resume" button on this site.

## Story
Grew up in India, did her B.Tech in Chennai, then moved to New York in January 2024 for her Master's — her first long stretch away from home. Worked part-time through the degree to support herself. Graduated MS Computer Science from Binghamton University (SUNY, Watson College) in May 2026. Moved to the Bay Area and has spent most weekends since at San Francisco hackathons: 12 hackathons attended, 4 wins. Motto: "Build fast. Learn faster."
She likes problems with a real person at the end of them — accessibility, disaster warning, knowledge that would otherwise be lost. She debugs to root cause and leaves tests behind.

## Education
- MS Computer Science, State University of New York at Binghamton — May 2026. Coursework: Design & Analysis of Algorithms, Systems Programming, Mobile System Security, Intro to AI, Data Mining.
- B.Tech Information Technology, Rajalakshmi Engineering College, Chennai — May 2024. GPA 8.62/10 (3.45/4.00). Coursework: DSA, Computer Networks, DBMS, Operating Systems, Software Testing.

## Experience
### Graduate Assistant — Binghamton University (Aug 2025 – May 2026)
- Architected an agentic AI system for career planning and role matching: skill-gap analysis, personalized learning roadmaps, prompt engineering for role-fit explanations.
- Partnered with Watson Career Services to gather requirements, test workflows and iterate on agent behavior from stakeholder feedback ahead of a planned student release. This grew into EvidPath.
### Data Analyst Intern — Kanini, Chennai (Jun 2023 – Dec 2023)
- Shipped a document-analysis application (Django, Flask) with PyTorch NLP pipelines; cut manual processing time 40%.
- Document classification model: SVM classifier on BERT embeddings, served via Flask APIs. Also used OpenAI models and Transformers embeddings.
- Django web app for text classification and topic exploration; REST APIs for reuse across workflows; data pipelines and stakeholder dashboards.
### AI/ML Intern — University of Texas at Dallas (Jun 2022 – Aug 2022)
- Music-genre classification with K-Nearest Neighbors and scikit-learn, 82% accuracy on GTZAN. MFCC feature extraction with Librosa and NumPy; model-evaluation pipeline.

## Hackathon wins
- Best Product AND Best Use of Aria — CoreWeave Hacks: Agent Loops (Weights & Biases, TypeSafe AI, AGI House), Sep 2026 — project: Arian OS.
- Special Mention, Qualcomm track — AI Infra Summit Hackathon, Santa Clara, Sep 15–17 2026 — project: PEMA. Her first Physical AI hackathon; she also competed in the Intel track the same weekend.
- 2nd Place — Better Days Hackathon (ClickHouse × LibreChat), San Francisco, Aug 2026 — project: Silent Flood.
- Also took part in MongoDB Build Fest (Persistent Context Sprint) — no prize, built Successor.

## Projects
- **EvidPath** (Mar 2026 – present): AI career-planning platform. Python/FastAPI + GraphQL on AWS EC2, React/TypeScript frontend. BERT sentence-transformers match skills to O*NET roles plus custom modern roles; RAG resume analysis with PDF parsing; skill-gap scoring across 205 role pathways; React Flow roadmap; YouTube API course suggestions. 17-case pytest suite across 10 modules (retrieval quality, scoring accuracy, auth persistence, security validation), Jest tests, smoke test against Docker Compose. Code: github.com/roshni2020/Career-Pathway-engine
- **Silent Flood** (🥈): flood early-warning that watches how fast the river rises, not rainfall. Inspired by the Bhote Koshi flood in Nepal (about nine metres in half an hour, clear sky). The detection is a PostgreSQL statement trigger — buckets gauge readings, measures rate of rise vs the last 15 minutes, sums six hours of rain, writes the alert in the same transaction; no cron or worker. ClickHouse for analytics, downstream village mapping, LibreChat + MCP assistant. Backtest: warning 100 minutes before the surge reached Barhabise. The idea was hers; she walked in alone and met her team that morning. Code: github.com/roshni2020/floods-watch
- **Arian OS** (🏆 CoreWeave): agentic system where ML researchers upload a published paper and a metric to improve; agents analyse the paper, search GitHub and Hugging Face, try approaches and loop. Aria/Weave traces. One experiment improved accuracy from 18% to 56%. Team: Ali Amjad, Rikin Shah, Ahmad Mustafa.
- **VariantCourt**: AI courtroom for DNA variant interpretation (CoreWeave Hacks). One agent argues pathogenic, one benign, TypeSafe cross-examines, a jury revises shared state for up to three rounds; a deterministic ACMG-style rule engine — not an LLM — gives the final classification. FastAPI, Nuxt 4, Weave, marimo, pytest. Research prototype, not clinical. Code: github.com/roshni2020/variantdna
- **Successor** (MongoDB Build Fest): voice-based knowledge capture for semiconductor fab operations. Hybrid ranking fusing MongoDB Atlas Search + Vector Search with Reciprocal Rank Fusion across 60 fault classes and 185 fix outcomes. LangGraph state machine, ElevenLabs STT/TTS, MongoDB checkpointer for resumable sessions. FastAPI + React. Team: Zubair Zafar, Swetha Prakash. Code: github.com/roshni2020/Successor_MDB
- **CivicTrace SF**: turns SF government meeting video into a Neo4j knowledge graph with multi-modal OpenAI + TwelveLabs models and Strands Agents; flags contradicted claims and approved projects with no permit on file. Playwright e2e (Chromium + mobile, retries, trace-on-failure), pytest, Docker Compose. Code: github.com/roshni2020/CivicTrace_SF
- **PEMA** (★ Qualcomm): Personal Environmental Memory Agent — privacy-focused Physical AI for low-vision and memory-impaired users; remembers where objects were last seen. On-device GenAI with Qualcomm GenieX plus Arduino/STM32 sensing. Code: github.com/roshni2020/PEMA
- **EchoLoop**: multi-agent assistant for people who know what they want to say but can't always finish the sentence (autism, aphasia, AAC users). Hears the fragment, looks at the room, remembers past confirmations, proposes 2–4 sentences; only speaks or sends to a caregiver's Slack after the person confirms. Lemma × Comma Capital hackathon, Sep 2026. Live: auteciia.vercel.app
- **CloudVault Lite** (May–Jul 2026): C++ content-addressable dedup storage engine using SHA-256. Root-caused a TOCTOU race in SQLite transactions and scaled concurrent uploads to 4 workers.
- **ClearForm / Readback**: voice-first document completion for blind and low-vision users. Every spoken value is read back and confirmed; low-confidence values are marked "Needs review", never guessed; signatures never completed; nothing stored. Next.js, ElevenLabs, Linkup. Live: clearform-three.vercel.app
- **HelpLoop**: live community map matching people to food assistance; Linkup verifies resources, Nebius ranks, Convex realtime. Live: helploop-one.vercel.app
- **ATE Yield Tracker**: Python tool parsing ATE test logs, classifying PCB failure modes (opens/shorts/parametric), yield KPIs, PDF reports, SQLite traceability. 150 boards, 3 board types, 18 pytest cases.
- **CCTV Anomaly Detection**: LSTM (TensorFlow/Keras, OpenCV) flagging shoplifting/loitering; 92% accuracy, 2.5 s per segment; Streamlit.
- **Warzone Tweet Sentiment** (final-year group project): VADER + TF-IDF + Logistic Regression / Random Forest / Naive Bayes; 94% accuracy; Streamlit dashboard.
- Smaller: StudyGPS (study planner, FastAPI + React + OpenAI), SceneDNA (which film scenes lose viewers), Flipkart product-data RPA bot (UiPath).

## Skills
Languages: Python, C/C++, JavaScript, TypeScript, SQL.
Software engineering: data structures & algorithms, REST and GraphQL APIs, FastAPI, Django, Flask, React, root cause analysis.
Testing & infra: pytest, Playwright, Jest, smoke and end-to-end testing, Git, Docker, Kubernetes, AWS EC2, Linux.
Generative AI & data: LLMs, multi-modal models, RAG, LangGraph, MCP, PyTorch, PostgreSQL, MongoDB, ClickHouse, Neo4j.

## Certifications
Oracle Agentic AI Foundation (Aug 2026) · MTX Women in Tech Salesforce Training (Nov 2025) · UiPath Robotic Process Automation (Jul 2023) · Python for Data Science, Great Lakes (Aug 2022) · ML & Deep Learning, UT Dallas (Aug 2022).
`;
