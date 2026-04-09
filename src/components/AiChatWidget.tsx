import { useEffect, useRef, useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import logo from "@/assets/logo.jpg";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT = `You are a helpful assistant for ${siteConfig.companyName}, a full-stack software development company.

Company facts:
- Name: DEVIK DIGITAL SOLUTIONS (Pvt. Ltd.)
- CEO: ${siteConfig.founderName}
- Services: Web apps (React, Next.js, Vue.js), Mobile (Flutter, React Native), Backend (Node.js, Laravel, FastAPI), AI/ML integration, E-Commerce, UI/UX Design, Cloud & DevOps
- Experience: 7+ years, 500+ projects, 100+ clients, 15+ countries
- Client markets: UK, EU, USA, UAE, Canada, Australia
- Email: ${siteConfig.email}
- Phone: ${siteConfig.phoneDisplay}
- Location: ${siteConfig.location}
- Book a call: /book

How to behave:
- Be concise: 2-3 sentences max per reply
- Be helpful and professional
- Answer questions about services, pricing, tech stack, and process
- Encourage visitors to book a free strategy call or message on WhatsApp for detailed discussions
- If someone asks for a quote, tell them to fill the booking form at /book
- Do NOT make up facts not listed above`;

const QUICK_PROMPTS = [
  "What services do you offer?",
  "How much does a project cost?",
  "Do you build mobile apps?",
  "How do I get started?",
];

const AiChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hi! I'm the DEVIK assistant. Ask me about our services, tech stack, pricing, or how to get started.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 60);
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open, messages]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setShowQuick(false);
    const next: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY as string | undefined;

    if (!apiKey || apiKey.startsWith("PASTE_")) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I'm not fully connected right now. Reach us directly at ${siteConfig.email} or via WhatsApp!`,
        },
      ]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          max_tokens: 180,
          temperature: 0.65,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...next.map((m) => ({ role: m.role, content: m.content })),
          ],
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const reply: string =
        data.choices?.[0]?.message?.content ??
        `I'm having trouble right now. Email us at ${siteConfig.email} and we'll get back quickly!`;
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I'm having a moment — please email us at ${siteConfig.email} or ping us on WhatsApp and we'll reply fast!`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── Chat window ── */}
      {open && (
        <div className="chat-window-bg no-print fixed bottom-[170px] right-5 z-[59] flex w-[320px] flex-col overflow-hidden rounded-[20px] border border-white/10 shadow-[0_24px_60px_-16px_rgba(7,19,38,0.9)] sm:right-6 sm:w-[350px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={logo}
                  alt="DEVIK"
                  className="h-9 w-9 rounded-xl object-cover ring-2 ring-sky-400/40"
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0d1f40] bg-emerald-400" />
              </div>
              <div>
                <p className="font-heading text-[13px] font-bold text-white leading-tight">DEVIK Assistant</p>
                <p className="flex items-center gap-1.5 text-[11px] text-white/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online · replies instantly
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-white/20 hover:bg-white/8 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex max-h-[260px] flex-col gap-2.5 overflow-y-auto px-4 py-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <img
                    src={logo}
                    alt="bot"
                    className="mr-2 mt-auto h-6 w-6 shrink-0 rounded-lg object-cover opacity-80"
                  />
                )}
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    msg.role === "assistant"
                      ? "rounded-bl-sm bg-white/10 text-white/90"
                      : "rounded-br-sm bg-gradient-to-br from-sky-500 to-blue-600 text-white"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="ml-2 mt-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/15 text-[10px] font-bold text-white/70">
                    You
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex items-end gap-2">
                <img
                  src={logo}
                  alt="bot"
                  className="h-6 w-6 shrink-0 rounded-lg object-cover opacity-80"
                />
                <div className="rounded-2xl rounded-bl-sm bg-white/10 px-4 py-3">
                  <span className="flex gap-1.5">
                    {(["chat-dot-1", "chat-dot-2", "chat-dot-3"] as const).map((cls) => (
                      <span
                        key={cls}
                        className={`h-1.5 w-1.5 rounded-full bg-sky-300 animate-bounce ${cls}`}
                      />
                    ))}
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick prompts */}
          {showQuick && messages.length === 1 && (
            <div className="flex flex-wrap gap-1.5 border-t border-white/8 px-4 py-3">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => send(prompt)}
                  className="rounded-full border border-sky-400/25 bg-sky-400/8 px-3 py-1.5 text-[11px] font-heading font-semibold text-sky-200/90 transition hover:bg-sky-400/18 hover:text-sky-100"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-white/8 px-3 py-3">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/6 px-3.5 py-2 transition focus-within:border-sky-400/35">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Ask about our services..."
                className="flex-1 bg-transparent text-[13px] text-white placeholder:text-white/30 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => send(input)}
                disabled={!input.trim() || loading}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-sm transition hover:scale-105 disabled:opacity-30"
                aria-label="Send"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="mt-1.5 text-center text-[10px] text-white/25">Powered by DEVIK AI</p>
          </div>
        </div>
      )}

      {/* ── Toggle button — sits above WhatsApp ── */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with DEVIK AI assistant"
        className={`no-print fixed bottom-[90px] right-5 z-[59] flex h-14 w-14 items-center justify-center rounded-full shadow-[0_8px_24px_-6px_rgba(10,56,120,0.7)] ring-[3px] transition-all duration-200 hover:scale-110 sm:right-6 ${
          open
            ? "bg-[#0f2a52] ring-white/20"
            : "bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 ring-white/30 animate-glow-pulse"
        }`}
      >
        {open ? (
          <X className="h-5 w-5 text-white" />
        ) : (
          <>
            <MessageSquare className="h-5 w-5 text-white" />
            <span className="absolute -right-1 -top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-sky-400 text-[9px] font-extrabold text-white ring-2 ring-white shadow-sm">
              AI
            </span>
          </>
        )}
      </button>
    </>
  );
};

export default AiChatWidget;
