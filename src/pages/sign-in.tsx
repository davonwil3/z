import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    Brain,
    Github,
} from "lucide-react";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../App";
import { getIdToken } from "../App";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";

async function syncUserWithBackend() {
  const token = await getIdToken(); // Get the current user's ID token
  if (!token) return;

  await fetch(import.meta.env.VITE_BACKEND_URL + "/api/add-user", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` }
  });
}

export default function SignIn() {
    const nav = useNavigate();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");

    // ---------------- email sign‑in ----------------
    const handleEmailSignIn = async () => {
        setErr("");
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, pass);

            await syncUserWithBackend();      // ensure user exists in MongoDB

            nav("/chat");                     // redirect after login
        } catch (e: any) {
            setErr(e.message);
        } finally {
            setLoading(false);
        }
    };

    // ---------------- provider sign‑in -------------
    const handleOAuthSignIn = async (providerName: "google" | "github") => {
        setErr("");
        try {
            setLoading(true);
            const provider =
                providerName === "google"
                    ? new GoogleAuthProvider()
                    : new GithubAuthProvider();

            await signInWithPopup(auth, provider);

            await syncUserWithBackend();

            nav("/chat");
        } catch (e: any) {
            setErr(e.message);
        } finally {
            setLoading(false);
        }
    };

    // ---------------- forgot password --------------
    const handleForgot = async () => {
        if (!email) {
            setErr("Enter your email first.");
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            setErr("Password reset email sent.");
        } catch (e: any) {
            setErr(e.message);
        }
    };

    // ---------------- UI ----------------
    return (
        <div className="flex min-h-screen flex-col bg-[#0d1117] text-[#e6edf3]">
            <div className="container relative flex-1 items-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                {/* Left form */}
                <div className="relative flex h-full flex-col items-center justify-center md:p-8 lg:p-16">
                    <Link
                        to="/"
                        className="absolute left-4 top-4 flex items-center text-sm text-[#8b949e] hover:text-[#58a6ff] md:left-8 md:top-8"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to home
                    </Link>

                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <div className="mx-auto mb-4 flex items-center gap-2">
                                <div className="relative">
                                    <div className="absolute -inset-1 animate-pulse rounded-full bg-[#58a6ff]/20 blur-sm" />
                                    <Brain className="relative h-8 w-8 text-[#58a6ff]" />
                                </div>
                                <span className="text-xl font-bold">Zorva.ai</span>
                            </div>
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Welcome back
                            </h1>
                            <p className="text-sm text-[#8b949e]">
                                Enter your email to sign in to your account
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label className="text-xs text-[#8b949e]" htmlFor="email">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    type="email"
                                    autoComplete="email"
                                    className="border-[#30363d] bg-[#0d1117]"
                                />

                                <div className="grid gap-1">
                                    <div className="flex items-center justify-between">
                                        <Label className="text-xs text-[#8b949e]" htmlFor="password">
                                            Password
                                        </Label>
                                        <button
                                            type="button"
                                            onClick={handleForgot}
                                            className="text-xs text-[#58a6ff]"
                                        >
                                            Forgot password?
                                        </button>
                                    </div>
                                    <Input
                                        id="password"
                                        value={pass}
                                        onChange={(e) => setPass(e.target.value)}
                                        placeholder="••••••••"
                                        type="password"
                                        autoComplete="current-password"
                                        className="border-[#30363d] bg-[#0d1117]"
                                    />
                                </div>

                                {err && <p className="text-xs text-red-500">{err}</p>}

                                <Button
                                    className="bg-[#238636] hover:bg-[#2ea043] w-full mt-2"
                                    disabled={loading}
                                    onClick={handleEmailSignIn}
                                >
                                    {loading ? "Signing in…" : "Sign In"}
                                </Button>
                            </div>

                            {/* OAuth separator */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <Separator className="w-full border-[#30363d]" />
                                </div>
                                <div className="relative flex justify-center text-xs">
                                    <span className="bg-[#0d1117] px-2 text-[#8b949e]">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            {/* OAuth buttons */}
                            <div className="grid gap-2">
                                <Button
                                    variant="outline"
                                    className="border-[#30363d] bg-[#161b22]"
                                    onClick={() => handleOAuthSignIn("github")}
                                    disabled={loading}
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    GitHub
                                </Button>

                                <Button
                                    variant="outline"
                                    className="border-[#30363d] bg-[#161b22]"
                                    onClick={() => handleOAuthSignIn("google")}
                                    disabled={loading}
                                >
                                    {/* Google icon */}
                                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"
                                        />
                                        <path d="M1 1h22v22H1z" fill="none" />
                                    </svg>
                                    Google
                                </Button>
                            </div>

                            <div className="text-center text-sm text-[#8b949e]">
                                Don't have an account?{" "}
                                <Link to="/signup" className="text-[#58a6ff]">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side with background */}
                <div className="hidden lg:block">
                    <div className="relative h-full bg-[#161b22]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(88,166,255,0.15),transparent_50%)]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                            <div className="max-w-md text-center">
                                <div className="mb-4 inline-flex items-center rounded-full border border-[#30363d] bg-[#0d1117] px-3 py-1 text-sm">
                                    <svg className="mr-2 h-4 w-4 text-[#f0883e]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                    <span>Trusted by 500+ founders and marketers</span>
                                </div>
                                <h2 className="mb-4 text-3xl font-bold">Your AI Market Strategist</h2>
                                <p className="mb-6 text-[#8b949e]">
                                    Validate ideas, track trends, and analyze competitors — all in one visual, intelligent conversation.
                                </p>
                                <div className="space-y-4 rounded-lg border border-[#30363d] bg-[#0d1117] p-4 text-left">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 h-8 w-8 rounded-full bg-[#238636] p-1.5">
                                            <svg className="h-full w-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex-1 rounded-lg border border-[#30363d] bg-[#161b22] p-3">
                                            <p className="text-sm">What are the current trends in AI-powered SaaS tools?</p>
                                        </div>
                                    </div>
                                    <div className="ml-11 flex items-start gap-3">
                                        <div className="flex-1 rounded-lg border border-[#30363d] bg-[#161b22] p-3">
                                            <p className="text-sm text-[#58a6ff]">Analyzing market data from multiple sources...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

