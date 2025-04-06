import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Brain,
  Github,
} from "lucide-react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../App";
import { getIdToken } from "../App";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { Checkbox } from "../components/ui/checkbox";

async function syncUserWithBackend() {
  const token = await getIdToken(); // Get the current user's ID token
  if (!token) return;

  await fetch(import.meta.env.VITE_BACKEND_URL + "/api/add-user", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` }
  });
}

export default function SignUp() {
  const nav = useNavigate();

  // form state
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");



  // ----- handlers -----
  const handleCreate = async () => {
    setErr("");
    if (!agree) {
      setErr("You must accept the terms.");
      return;
    }
    if (pass.length < 8) {
      setErr("Password must be at least 8 characters.");
      return;
    }
    try {
      setLoading(true);
      const cred = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(cred.user, { displayName: `${first} ${last}`.trim() });
  
      await syncUserWithBackend();  // 👈 ADD THIS LINE
  
      nav("/dashboard");                     // or wherever you land after sign‑up
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  const providerSignIn = async (provider: "google" | "github") => {
    try {
      setLoading(true);
      const prov =
        provider === "google"
          ? new GoogleAuthProvider()
          : new GithubAuthProvider();
      await signInWithPopup(auth, prov);
  
      await syncUserWithBackend();  // 👈 ADD THIS LINE
  
      nav("/");
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };
  

  // ----- UI -----
  return (
    <div className="flex min-h-screen flex-col bg-[#0d1117] text-[#e6edf3]">
      <div className="container relative flex-1 items-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* Left */}
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
                Create an account
              </h1>
              <p className="text-sm text-[#8b949e]">
                Enter your details to create your Zorva account
              </p>
            </div>

            <div className="grid gap-6">
              {/* form */}
              <div className="grid gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="grid gap-1">
                    <Label className="text-xs text-[#8b949e]" htmlFor="first">
                      First name
                    </Label>
                    <Input
                      id="first"
                      value={first}
                      onChange={(e) => setFirst(e.target.value)}
                      placeholder="John"
                      className="border-[#30363d] bg-[#0d1117]"
                    />
                  </div>
                  <div className="grid gap-1">
                    <Label className="text-xs text-[#8b949e]" htmlFor="last">
                      Last name
                    </Label>
                    <Input
                      id="last"
                      value={last}
                      onChange={(e) => setLast(e.target.value)}
                      placeholder="Doe"
                      className="border-[#30363d] bg-[#0d1117]"
                    />
                  </div>
                </div>

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

                <Label className="text-xs text-[#8b949e]" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="••••••••"
                  type="password"
                  autoComplete="new-password"
                  className="border-[#30363d] bg-[#0d1117]"
                />
                <p className="text-xs text-[#8b949e]">
                  Password must be at least 8 characters long
                </p>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agree}
                    onCheckedChange={(v) => setAgree(!!v)}
                    className="border-[#30363d] data-[state=checked]:bg-[#238636]"
                  />
                  <label
                    htmlFor="terms"
                    className="text-xs text-[#8b949e] leading-none"
                  >
                    I agree to the{" "}
                    <Link to="" className="text-[#58a6ff]">
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link to="" className="text-[#58a6ff]">
                      privacy policy
                    </Link>
                  </label>
                </div>

                {err && (
                  <p className="text-xs text-red-500">
                    {err}
                  </p>
                )}

                <Button
                  className="mt-2 bg-[#238636] hover:bg-[#2ea043]"
                  disabled={loading}
                  onClick={handleCreate}
                >
                  {loading ? "Creating…" : "Create Account"}
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
                  onClick={() => providerSignIn("github")}
                  disabled={loading}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>

                <Button
                  variant="outline"
                  className="border-[#30363d] bg-[#161b22]"
                  onClick={() => providerSignIn("google")}
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
                Already have an account?{" "}
                <Link to="/sign-in" className="text-[#58a6ff]">
                  Sign in
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
                  <span>Join 500+ founders and marketers</span>
                </div>
                <h2 className="mb-4 text-3xl font-bold">Start your free 14-day trial</h2>
                <p className="mb-6 text-[#8b949e]">
                  No credit card required. Full access to all Zorva features during your trial.
                </p>
                <div className="space-y-3 rounded-lg border border-[#30363d] bg-[#0d1117] p-4 text-left">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#238636]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Validate your business ideas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#238636]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Track real-time market trends</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#238636]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Analyze your competitors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#238636]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Create custom Z Boards</span>
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

