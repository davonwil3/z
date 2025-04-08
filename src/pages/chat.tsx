import {
  Brain,
  ChevronRight,
  MessageSquare,
  PieChart,
  RefreshCw,
  Send,
  Settings,
  Sparkles,
  MoreVertical,
  Trash2,
  Pencil,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { getIdToken } from "../App";

// ---------- domain types ----------
type Message = {
  text: string;
  sender: "user" | "assistant";
  isLoading?: boolean;
  followUpQuestions?: { question: string }[];
  citations?: string[];
};

type Thread = { id: string; title: string };

// ---------- component ----------
export default function ChatPage() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [currentThreadId, setCurrentThreadId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [editingThreadId, setEditingThreadId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [openMenuThreadId, setOpenMenuThreadId] = useState<string | null>(null);




  // -------- load thread list on mount --------
  useEffect(() => {
    (async () => {
      try {
        const token = await getIdToken();
        const res = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/list-threads",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = (await res.json()) as { threads: Thread[] };
        setThreads(
          data.threads.map((t: any) => ({ id: t.threadID, title: t.title }))
        );
      } catch (err) {
        console.error("Error loading threads", err);
      }
    })();
  }, []);

  // -------- load messages when thread changes --------
  useEffect(() => {
    if (!currentThreadId) return;
    console.log("Loading messages for thread:", currentThreadId);
    fetchMessages(currentThreadId);
  }, [currentThreadId]);

  useEffect(() => {
    const handleClickOutside = () => setOpenMenuThreadId(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);



  // ---------------- helpers ----------------
  const fetchMessages = async (threadID: string) => {
    try {
      const token = await getIdToken();
      const res = await fetch(
        import.meta.env.VITE_BACKEND_URL + `/api/get-messages/${threadID}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!res.ok) throw new Error("Failed to fetch messages");
      const data: Message[] = await res.json();
      setMessages(data);
    } catch (err) {
      console.error(err);
    }
  };

  // create a thread only when needed
  const ensureThread = async (firstPrompt: string): Promise<string> => {
    if (currentThreadId) return currentThreadId;

    const token = await getIdToken();
    const res = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/api/create-thread",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title: firstPrompt.slice(0, 40) || "New Chat" }),
      }
    );
    const { threadID } = (await res.json()) as { threadID: string };

    setThreads((prev) => [
      { id: threadID, title: firstPrompt.slice(0, 40) || "New Chat" },
      ...prev,
    ]);
    setCurrentThreadId(threadID);
    return threadID;
  };

  // ---------------- send message ----------------
  const handleSend = async (prompt?: string) => {
    const text = (prompt ?? newMessage).trim();
    if (!text) return;

    // 1️⃣  immediately render the user’s own message
    const userMsg: Message = { text, sender: "user" };
    setMessages((m) => [...m, userMsg]);
    setNewMessage("");

    try {
      const threadId = await ensureThread(text);
      const token = await getIdToken();

      const res = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/send-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ threadID: threadId, text }),
        }
      );
      if (!res.ok) throw new Error("send failed");
      const reply: Message = await res.json();

      setMessages((m) => [...m, reply]);
    } catch (err) {
      console.error(err);
    }
  };

  // ---------------- follow‑up ----------------
  const onFollowUp = (q: string) => handleSend(q);

  // ---------------- new chat ----------------
  const handleNewChat = async () => {
    try {
      const token = await getIdToken();
      const res = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/create-thread",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
         
          body: JSON.stringify({ title: "New Chat" }),
        }
      );
      const { threadID } = (await res.json()) as { threadID: string };
      setThreads((p) => [{ id: threadID, title: "New Chat" }, ...p]);
      setCurrentThreadId(threadID);
      setMessages([]);
    } catch (err) {
      console.error("Unable to create new chat", err);
    }
  };

  const handleRenameThread = async (threadID: string) => {
    const newTitle = editedTitle.trim();
    if (!newTitle) return;

    const token = await getIdToken();
    await fetch(import.meta.env.VITE_BACKEND_URL + `/api/rename-thread/${threadID}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle }),
    });

    setThreads((prev) =>
      prev.map((t) => (t.id === threadID ? { ...t, title: newTitle } : t))
    );
    setEditingThreadId(null);
  };

  const handleDeleteThread = async (threadID: string) => {
    if (!confirm("Are you sure you want to delete this thread?")) return;

    const token = await getIdToken();
    await fetch(import.meta.env.VITE_BACKEND_URL + `/api/delete-thread/${threadID}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    setThreads((prev) => prev.filter((t) => t.id !== threadID));
    if (currentThreadId === threadID) {
      setCurrentThreadId(null);
      setMessages([]);
    }
  };



  // ---------------- UI ----------------
  return (
    <div className="flex h-screen bg-[#0d1117] text-[#e6edf3]">
      {/* skinny sidebar (unchanged) */}
      <div className="flex w-16 flex-col items-center border-r border-[#30363d] bg-[#161b22] py-4">
        <div className="mb-8 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-1 animate-pulse rounded-full bg-[#58a6ff]/20 blur-sm"></div>
            <Brain className="relative h-8 w-8 text-[#58a6ff]" />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center gap-4">
          <Link to="/chat">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-md text-[#8b949e] hover:bg-[#30363d] hover:text-[#e6edf3]"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">AI Chat</span>
            </Button>
          </Link>

          <Link to="/dashboard">
            <Button
              variant="ghost"
              size="icon"
              className="relative h-10 w-10 rounded-md bg-[#1f6feb] text-white hover:bg-[#1f6feb]/90"
            >
              <PieChart className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </Button>
          </Link>

          <Link to="/settings">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-md text-[#8b949e] hover:bg-[#30363d] hover:text-[#e6edf3]"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </Link>
        </div>

        <div className="mt-auto">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-md text-[#8b949e] hover:bg-[#30363d] hover:text-[#e6edf3]"
          >
            <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#30363d]">
              <img
                src="/placeholder.svg?height=32&width=32&text=U"
                alt="User"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="sr-only">Profile</span>
          </Button>
        </div>
      </div>


      {/* main */}
      <div className="flex flex-1 flex-col">
        {/* header */}
        <header className="flex h-14 items-center justify-between border-b border-[#30363d] px-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-[#58a6ff]" />
            <h1 className="text-lg font-medium">AI Chat</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-[#8b949e] hover:bg-[#30363d] hover:text-[#e6edf3]"
            onClick={handleNewChat}
          >
            <RefreshCw className="mr-1 h-3 w-3" />
            New Chat
          </Button>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* -------- chat‑history sidebar -------- */}
          <div className="hidden w-64 border-r border-[#30363d] bg-[#0d1117] md:block">
            <div className="flex h-12 items-center justify-between border-b border-[#30363d] px-4">
              <h2 className="text-sm font-medium">Chat History</h2>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-[#8b949e] hover:bg-[#30363d] hover:text-[#e6edf3]"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-2 space-y-1">
              {threads.map((t) => {
                const isEditing = editingThreadId === t.id;

                return (
                  <div
                    key={t.id}
                    className={`group relative flex items-center justify-between rounded-md p-2 text-sm ${t.id === currentThreadId
                      ? "bg-[#1f6feb]/20 text-[#e6edf3]"
                      : "text-[#8b949e] hover:bg-[#30363d] hover:text-[#e6edf3]"
                      }`}
                  >
                    <div
                      onClick={() => setCurrentThreadId(t.id)}
                      className="flex flex-1 items-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="h-4 w-4 shrink-0" />
                      {isEditing ? (
                        <input
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          onBlur={() => handleRenameThread(t.id)}
                          onKeyDown={(e) => e.key === "Enter" && handleRenameThread(t.id)}
                          className="bg-transparent border-b border-[#30363d] text-sm text-white w-full focus:outline-none"
                          autoFocus
                        />
                      ) : (
                        <span
                          onClick={() => {
                            setEditingThreadId(t.id);
                            setEditedTitle(t.title);
                          }}
                        >
                          {t.title}
                        </span>
                      )}
                    </div>

                    <div className="relative">
                      <MoreVertical
                        className="h-4 w-4 cursor-pointer opacity-50 hover:opacity-100"
                        onClick={(e) => {
                          e.stopPropagation(); // prevent triggering parent onClick
                          setOpenMenuThreadId(openMenuThreadId === t.id ? null : t.id);
                        }}
                      />

                      {openMenuThreadId === t.id && (
                        <div className="absolute right-0 top-6 z-10 w-36 rounded-md border border-[#30363d] bg-[#161b22] text-sm text-white shadow-lg">
                          <button
                            onClick={() => {
                              setEditingThreadId(t.id);
                              setEditedTitle(t.title);
                              setOpenMenuThreadId(null);
                            }}
                            className="flex w-full items-center gap-2 px-3 py-2 hover:bg-[#30363d]"
                          >
                            <Pencil className="h-4 w-4" />
                            Rename
                          </button>
                          <button
                            onClick={() => {
                              handleDeleteThread(t.id);
                              setOpenMenuThreadId(null);
                            }}
                            className="flex w-full items-center gap-2 px-3 py-2 text-red-400 hover:bg-[#30363d]"
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </button>
                        </div>
                      )}

                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* -------- chat messages -------- */}
          <div className="flex flex-1 flex-col">
            <div className="flex-1 overflow-y-auto p-4">
              {/* empty state */}
              {messages.length === 0 && (
                <div className="mb-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1f6feb]/20">
                    <Sparkles className="h-8 w-8 text-[#58a6ff]" />
                  </div>
                  <h2 className="mb-2 text-xl font-semibold">
                    Welcome to Zorva AI Chat
                  </h2>
                  <p className="mx-auto max-w-md text-sm text-[#8b949e]">
                    Ask me anything about market trends, competitor analysis, or
                    idea validation. I'll provide data‑backed insights.
                  </p>
                </div>
              )}

              {/* message list */}
              <div className="space-y-6">
                {messages.map((m, i) =>
                  m.sender === "user" ? (
                    <UserBubble key={i} text={m.text} />
                  ) : (
                    <AiBubble key={i} msg={m} onFollowUp={onFollowUp} />
                  )
                )}
              </div>
            </div>

            {/* input */}
            <div className="border-t border-[#30363d] bg-[#161b22] p-4">
              <div className="flex items-end gap-2">
                <div className="relative flex-1">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask about market trends, competitors, or validate your ideas..."
                    className="min-h-12 border-[#30363d] bg-[#0d1117] pr-10 text-[#e6edf3] focus-visible:ring-[#58a6ff]"
                  />
                  <Button
                    size="icon"
                    onClick={() => handleSend()}
                    className="absolute bottom-0 right-0 top-0 h-full rounded-l-none bg-transparent px-3 text-[#8b949e] hover:bg-transparent hover:text-[#58a6ff]"
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- tiny presentational sub‑components ---------- */
function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-8 w-8 overflow-hidden rounded-full bg-[#30363d]">
        <img
          src="/placeholder.svg?height=32&width=32&text=U"
          alt="User"
          width={32}
          height={32}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1 rounded-lg border border-[#30363d] bg-[#161b22] p-3">
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}

function AiBubble({
  msg,
  onFollowUp,
}: {
  msg: Message;
  onFollowUp: (q: string) => void;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#238636]">
        <Brain className="h-5 w-5 text-white" />
      </div>
      <div className="flex-1 space-y-4 rounded-lg border border-[#30363d] bg-[#161b22] p-4">
        <p className="text-sm">{msg.text}</p>
        {msg.isLoading && <span className="text-xs italic">Loading…</span>}

        {msg.followUpQuestions && (
          <div className="flex flex-wrap gap-2">
            {msg.followUpQuestions.map((f, i) => (
              <button
                key={i}
                onClick={() => onFollowUp(f.question)}
                className="rounded bg-[#30363d] px-2 py-1 text-xs text-[#e6edf3]"
              >
                {f.question}
              </button>
            ))}
          </div>
        )}

        {msg.citations && (
          <div className="space-y-1">
            {msg.citations.map((c, i) => (
              <div key={i} className="text-xs text-[#8b949e]">
                {c}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
