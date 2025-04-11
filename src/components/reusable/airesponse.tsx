import { Brain } from "lucide-react";

interface msg {
    text: string;
    sender: "user" | "assistant";
    isLoading?: boolean;
    followUpQuestions?: { question: string }[];
    citations?: string[];
    structured?: any;
  }

 

  export default function AiBubble({ msg, onFollowUp }: { msg: msg; onFollowUp: (q: string) => void }) {
    return (
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#238636]">
          <Brain className="h-5 w-5 text-white" />
        </div>
  
        <div className="flex w-full flex-col md:flex-row gap-4">
          {/* Left column – assistant's message */}
          <div className="flex-1 text-sm" style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            <div dangerouslySetInnerHTML={{ __html: msg.text }} />
            {msg.isLoading && <span className="text-xs italic">Loading…</span>}
  
            {(msg.followUpQuestions ?? []).length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {(msg.followUpQuestions ?? []).map((f, i) => (
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
          </div>
  
          {/* Right column – structured data */}
          {msg.structured && (
            <div className="w-full md:w-1/2 max-h-[400px] overflow-y-auto rounded-lg border border-[#30363d] bg-[#161b22] p-4 text-sm space-y-4">
              {msg.structured.relevantPosts?.length > 0 && (
                <div>
                  <h3 className="text-[#58a6ff] font-semibold mb-2">🔗 Relevant Posts</h3>
                  {msg.structured.relevantPosts.map((p: any, i: number) => (
                    <a key={i} href={p.url} target="_blank" className="block mb-2 text-[#c9d1d9] hover:underline">
                      <strong>{p.title}</strong>
                      <div className="text-xs text-[#8b949e]">{p.excerpt}</div>
                    </a>
                  ))}
                </div>
              )}
  
              {msg.structured.relevantComments?.length > 0 && (
                <div>
                  <h3 className="text-[#58a6ff] font-semibold mb-2">💬 Highlighted Comments</h3>
                  {msg.structured.relevantComments.map((c: any, i: number) => (
                    <a key={i} href={c.permalink} target="_blank" className="block mb-2">
                      <blockquote className="text-[#c9d1d9] italic">"{c.body}"</blockquote>
                      <div className="text-xs text-[#8b949e]">by u/{c.author} — {c.score} points</div>
                    </a>
                  ))}
                </div>
              )}
  
              {msg.structured.subreddits?.length > 0 && (
                <div>
                  <h3 className="text-[#58a6ff] font-semibold mb-2">📊 Active Subreddits</h3>
                  {msg.structured.subreddits.map((s: any, i: number) => (
                    <a key={i} href={s.url} target="_blank" className="block mb-1 text-[#c9d1d9] hover:underline">
                      r/{s.subreddit} — {s.recentMentions} mentions
                    </a>
                  ))}
                </div>
              )}
  
              {msg.structured.opportunities?.length > 0 && (
                <div>
                  <h3 className="text-[#58a6ff] font-semibold mb-2">📣 Engagement Opportunities</h3>
                  {msg.structured.opportunities.map((p: any, i: number) => (
                    <a key={i} href={p.url} target="_blank" className="block mb-2 text-[#c9d1d9] hover:underline">
                      {p.title} — {p.num_comments} comments, {p.score} points
                    </a>
                  ))}
                </div>
              )}
  
              {msg.structured.brands?.length > 0 && (
                <div>
                  <h3 className="text-[#58a6ff] font-semibold mb-2">🏷️ Brand Overview</h3>
                  {msg.structured.brands.map((b: any, i: number) => (
                    <div key={i} className="mb-2 text-[#c9d1d9]">
                      <strong>{b.keyword}</strong> — ZScore: {b.zScore}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
  