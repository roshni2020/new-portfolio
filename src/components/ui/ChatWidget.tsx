"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X, ArrowUp } from "lucide-react";
import { LINKS } from "@/data/resume";

type Msg = { role: "user" | "assistant"; content: string };
const SUGGESTIONS = ["What are her strongest projects?", "Tell me about her hackathon highlights", "Is she a fit for a backend AI role?", "How does Silent Flood work?"];
const HELLO: Msg = { role: "assistant", content: "Hi! I know Roshni's projects, experience and hackathon record. What would you like to know?" };

// Any component can open the chat: openChat() from a button, or the floating pill.
export const openChat = () => window.dispatchEvent(new Event("open-chat"));

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState<Msg[]>([HELLO]);
  const [busy, setBusy] = useState(false);
  const [text, setText] = useState("");
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const on = () => setOpen(true);
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("open-chat", on); window.addEventListener("keydown", key);
    return () => { window.removeEventListener("open-chat", on); window.removeEventListener("keydown", key); };
  }, []);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 350); }, [open]);
  useEffect(() => { logRef.current?.scrollTo({ top: logRef.current.scrollHeight }); }, [log]);

  async function send(q: string) {
    q = q.trim(); if (!q || busy) return;
    setText(""); setBusy(true);
    const history: Msg[] = [...log.filter((m) => m !== HELLO), { role: "user", content: q }];
    setLog([...log, { role: "user", content: q }, { role: "assistant", content: "" }]);
    let reply = "";
    try {
      const r = await fetch("/api/chat", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ messages: history.slice(-15) }) });
      if (!r.ok) throw new Error((await r.json().catch(() => ({}))).error || "The chatbot is offline right now.");
      const rd = r.body!.getReader(), dec = new TextDecoder();
      for (;;) { const { done, value } = await rd.read(); if (done) break; reply += dec.decode(value, { stream: true }); setLog((l) => [...l.slice(0, -1), { role: "assistant", content: reply }]); }
    } catch (e) {
      setLog((l) => [...l.slice(0, -1), { role: "assistant", content: `${(e as Error).message} You can reach Roshni at ${LINKS.email}.` }]);
    }
    setBusy(false);
  }

  const fresh = log.length === 1;
  return (
    <>
      {!open && (
        <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: "spring" }} onClick={() => setOpen(true)} data-cursor-hover="true" aria-label="Ask about Roshni"
          style={{ position: "fixed", right: 24, bottom: 24, zIndex: 200, background: "#e8a33b", color: "#0d0d0d", border: 0, borderRadius: 999, padding: "14px 22px", fontWeight: 800, fontSize: ".78rem", letterSpacing: ".18em", cursor: "pointer", boxShadow: "0 10px 40px #e8a33b55", display: "flex", alignItems: "center", gap: 8, fontFamily: "inherit" }}>
          <Sparkles size={16} /> ASK MY AVATAR
        </motion.button>
      )}
      <AnimatePresence>
        {open && (
          <motion.div role="dialog" aria-label="Chat about Roshni" data-lenis-prevent initial={{ opacity: 0, scale: 0.7, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.7, y: 40 }} transition={{ type: "spring", stiffness: 260, damping: 24 }}
            style={{ position: "fixed", right: 24, bottom: 24, zIndex: 210, width: "min(420px, calc(100vw - 32px))", height: "min(620px, calc(100dvh - 48px))", background: "#141312f2", backdropFilter: "blur(14px)", border: "1px solid #2a2620", borderRadius: 22, display: "flex", flexDirection: "column", overflow: "hidden", transformOrigin: "100% 100%" }}>
            <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, padding: "18px 20px", borderBottom: "1px solid #2a2620" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <img src="/avatar.jpg" alt="" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", objectPosition: "50% 15%" }} />
                <div><div style={{ fontWeight: 800, letterSpacing: ".12em", fontSize: ".85rem" }}>ROSHNI&rsquo;S AVATAR</div><small style={{ color: "#b7ab98", fontSize: ".78rem" }}>Knows her work. Can be wrong — the resume is the source of truth.</small></div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" data-cursor-hover="true" style={{ background: "none", border: 0, color: "#ededed", cursor: "pointer" }}><X size={22} /></button>
            </header>
            <div ref={logRef} style={{ flex: 1, overflowY: "auto", padding: 18, display: "flex", flexDirection: "column", gap: 12, overscrollBehavior: "contain" }} aria-live="polite">
              {log.map((m, i) => (
                <p key={i} style={{ maxWidth: "88%", padding: "11px 15px", borderRadius: 16, whiteSpace: "pre-wrap", lineHeight: 1.4, fontSize: ".95rem", alignSelf: m.role === "user" ? "flex-end" : "flex-start", background: m.role === "user" ? "#e8a33b" : "#b7ab9818", color: m.role === "user" ? "#0d0d0d" : "#ededed", fontWeight: m.role === "user" ? 600 : 400, borderBottomRightRadius: m.role === "user" ? 4 : 16, borderBottomLeftRadius: m.role === "user" ? 16 : 4 }}>
                  {m.content || <span style={{ opacity: .5, letterSpacing: ".2em" }}>●●●</span>}
                </p>
              ))}
            </div>
            {fresh && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: "0 18px 12px" }}>
                {SUGGESTIONS.map((s) => <button key={s} onClick={() => send(s)} data-cursor-hover="true" style={{ background: "none", border: "1px solid #2a2620", color: "#ededed", borderRadius: 999, padding: "7px 14px", fontSize: ".8rem", fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>{s}</button>)}
              </div>
            )}
            <form onSubmit={(e) => { e.preventDefault(); send(text); }} style={{ display: "flex", gap: 8, padding: 14, borderTop: "1px solid #2a2620" }}>
              <input ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} maxLength={1000} placeholder="Ask anything about Roshni…" aria-label="Your question" autoComplete="off"
                style={{ flex: 1, minWidth: 0, background: "#0d0d0d", border: "1px solid #2a2620", borderRadius: 999, padding: "12px 18px", color: "#ededed", fontSize: "1rem", outline: 0, fontFamily: "inherit" }} />
              <button disabled={busy} aria-label="Send" data-cursor-hover="true" style={{ background: "#e8a33b", color: "#0d0d0d", border: 0, borderRadius: "50%", width: 44, height: 44, cursor: "pointer", opacity: busy ? .4 : 1, display: "grid", placeItems: "center" }}><ArrowUp size={20} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
