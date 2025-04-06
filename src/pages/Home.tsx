import type React from "react"
import {
    ArrowRight,
    Brain,
    Check,
    ChevronDown,
    Code,
    Command,
    CircleDollarSign,
    Eye,
    LineChart,
    MessageSquare,
    PieChart,
    Plus,
    RefreshCw,
    Search,
    Shield,
    Star,
    Zap,
} from "lucide-react"
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-[#0d1117] text-[#e6edf3]">
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b border-[#30363d] bg-[#0d1117]/90 backdrop-blur-md">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <div className="absolute -inset-1 animate-pulse rounded-full bg-[#58a6ff]/20 blur-sm"></div>
                            <Brain className="relative h-8 w-8 text-[#58a6ff]" />
                        </div>
                        <span className="text-xl font-bold">Zorva.ai</span>
                    </div>
                    <nav className="hidden space-x-8 md:flex">
                        <Link to='' className="text-sm text-[#8b949e] transition-colors hover:text-[#58a6ff]">
                            Features
                        </Link>
                        <Link to='' className="text-sm text-[#8b949e] transition-colors hover:text-[#58a6ff]">
                            How It Works
                        </Link>
                        <Link to='' className="text-sm text-[#8b949e] transition-colors hover:text-[#58a6ff]">
                            Use Cases
                        </Link>
                        <Link to='' className="text-sm text-[#8b949e] transition-colors hover:text-[#58a6ff]">
                            Pricing
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link
                            to="/signin"
                        >
                            <Button
                                variant="ghost"
                                className="hidden text-sm text-[#8b949e] transition-colors hover:text-[#58a6ff] md:inline-flex"
                            >
                                Log in
                            </Button>
                        </Link>
                      <Link to="signup"> <Button className="bg-[#238636] text-sm hover:bg-[#2ea043]">Sign up for free</Button> </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 md:py-32">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(88,166,255,0.15),transparent_50%)]"></div>
                    <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-gradient-to-t from-[#0d1117] to-transparent"></div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-6 inline-flex items-center rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1 text-sm">
                            <Star className="mr-2 h-4 w-4 text-[#f0883e]" fill="#f0883e" />
                            <span>Trusted by 500+ founders and marketers</span>
                        </div>
                        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                            Your AI Market Strategist <br />
                            <span className="bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] bg-clip-text text-transparent">
                                That Actually Helps You Win
                            </span>
                        </h1>
                        <p className="mb-8 text-lg text-[#8b949e]">
                            Zorva is a chat-based AI tool that helps you validate ideas, track trends, and analyze competitors — all
                            in one visual, intelligent conversation.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button className="group w-full bg-[#238636] px-6 py-6 text-lg hover:bg-[#2ea043] sm:w-auto">
                                Get started for free
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full border-[#30363d] px-6 py-6 text-lg text-[#e6edf3] hover:border-[#58a6ff] hover:bg-[#161b22] hover:text-white sm:w-auto"
                            >
                                See how it works
                            </Button>
                        </div>
                    </div>

                    <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-xl border border-[#30363d] bg-[#161b22] shadow-2xl">
                        <div className="flex items-center border-b border-[#30363d] bg-[#0d1117] px-4 py-3">
                            <div className="flex space-x-2">
                                <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
                                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
                                <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
                            </div>
                            <div className="mx-auto flex items-center rounded-md bg-[#0d1117] px-3 py-1 text-sm text-[#8b949e]">
                                <Command className="mr-2 h-4 w-4" /> zorva.ai
                            </div>
                        </div>
                        <div className="grid md:grid-cols-5">
                            <div className="border-r border-[#30363d] bg-[#0d1117] p-4 md:col-span-1">
                                <div className="mb-4 text-sm font-medium text-[#8b949e]">Z BOARDS</div>
                                <div className="space-y-2">
                                    <div className="rounded bg-[#1f6feb] px-2 py-1 text-sm font-medium text-white">
                                        SaaS Market Analysis
                                    </div>
                                    <div className="rounded px-2 py-1 text-sm text-[#8b949e] hover:bg-[#161b22]">Competitor Tracking</div>
                                    <div className="rounded px-2 py-1 text-sm text-[#8b949e] hover:bg-[#161b22]">Product Validation</div>
                                    <div className="mt-4 flex items-center text-sm text-[#58a6ff]">
                                        <Plus className="mr-1 h-4 w-4" /> New Z Board
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:col-span-4">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="text-sm font-medium">SaaS Market Analysis</div>
                                    <div className="flex items-center text-xs text-[#8b949e]">
                                        <RefreshCw className="mr-1 h-3 w-3" /> Updated 2 minutes ago
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 h-8 w-8 rounded-full bg-[#238636] p-1.5">
                                            <MessageSquare className="h-full w-full text-white" />
                                        </div>
                                        <div className="flex-1 rounded-lg border border-[#30363d] bg-[#0d1117] p-3">
                                            <p className="text-sm">What are the current trends in AI-powered SaaS tools?</p>
                                        </div>
                                    </div>

                                    <div className="ml-11 flex items-start gap-3">
                                        <div className="flex-1 space-y-4 rounded-lg border border-[#30363d] bg-[#0d1117] p-4">
                                            <div className="flex items-center justify-between">
                                                <div className="font-medium">Top AI SaaS Trends (Last 90 Days)</div>
                                                <div className="text-xs text-[#8b949e]">Data from Google Trends, Reddit, X</div>
                                            </div>

                                            <div className="h-64 rounded-md border border-[#30363d] bg-[#0d1117] p-3">
                                                <div className="mb-4 flex items-center justify-between">
                                                    <div className="text-sm font-medium">Trend Momentum</div>
                                                    <div className="rounded-full bg-[#161b22] px-2 py-0.5 text-xs text-[#8b949e]">Live Data</div>
                                                </div>
                                                <div className="relative h-40">
                                                    {/* Simulated chart */}
                                                    <div className="absolute bottom-0 left-0 h-full w-full">
                                                        <div className="relative h-full w-full">
                                                            <div className="absolute bottom-0 left-[10%] h-[60%] w-4 rounded-t bg-[#238636]"></div>
                                                            <div className="absolute bottom-0 left-[25%] h-[85%] w-4 rounded-t bg-[#1f6feb]"></div>
                                                            <div className="absolute bottom-0 left-[40%] h-[40%] w-4 rounded-t bg-[#8957e5]"></div>
                                                            <div className="absolute bottom-0 left-[55%] h-[70%] w-4 rounded-t bg-[#f0883e]"></div>
                                                            <div className="absolute bottom-0 left-[70%] h-[30%] w-4 rounded-t bg-[#f85149]"></div>
                                                            <div className="absolute bottom-0 left-[85%] h-[50%] w-4 rounded-t bg-[#58a6ff]"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-2 grid grid-cols-6 text-center text-xs text-[#8b949e]">
                                                    <div>AI Agents</div>
                                                    <div>Copilots</div>
                                                    <div>No-code</div>
                                                    <div>AI Analytics</div>
                                                    <div>Voice AI</div>
                                                    <div>AI Strategy</div>
                                                </div>
                                            </div>

                                            <div className="space-y-2 text-sm">
                                                <p>Based on the data, here are the key insights:</p>
                                                <ul className="space-y-1 pl-5 text-[#8b949e]">
                                                    <li className="list-disc">
                                                        AI Copilots show the strongest growth (85% increase in mentions)
                                                    </li>
                                                    <li className="list-disc">AI Analytics is gaining significant traction (70% increase)</li>
                                                    <li className="list-disc">Voice AI has the lowest momentum but is expected to grow</li>
                                                </ul>
                                                <p className="mt-2 text-[#58a6ff]">
                                                    Recommendation: The AI Copilot and Analytics spaces are becoming crowded. Consider focusing on
                                                    the emerging Voice AI space or creating a hybrid solution.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 h-8 w-8 rounded-full bg-[#238636] p-1.5">
                                            <MessageSquare className="h-full w-full text-white" />
                                        </div>
                                        <div className="flex-1 rounded-lg border border-[#30363d] bg-[#0d1117] p-3">
                                            <p className="text-sm">Save this analysis to my Z Board and set up weekly updates</p>
                                        </div>
                                    </div>

                                    <div className="ml-11 flex items-start gap-3">
                                        <div className="flex-1 rounded-lg border border-[#30363d] bg-[#0d1117] p-3">
                                            <div className="flex items-center text-sm text-[#58a6ff]">
                                                <Check className="mr-2 h-4 w-4" />
                                                Analysis saved to your Z Board. Weekly updates scheduled for Mondays at 9 AM.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <div className="mb-4 inline-flex items-center rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1 text-sm">
                            <Zap className="mr-2 h-4 w-4 text-[#f0883e]" />
                            <span>Powerful Features</span>
                        </div>
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Everything you need to win your market</h2>
                        <p className="text-lg text-[#8b949e]">
                            Zorva combines real-time data with AI reasoning to help you make better strategic decisions.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <FeatureCard
                            icon={<Search className="h-6 w-6 text-[#58a6ff]" />}
                            title="Validate Your Ideas Instantly"
                            description="Ask Zorva about your product idea or niche and get demand data, sentiment, SEO trends, and a unique Pulse Score to validate your concept before investing resources."
                        />
                        <FeatureCard
                            icon={<LineChart className="h-6 w-6 text-[#58a6ff]" />}
                            title="Track Real-Time Market Trends"
                            description="Pulls data from Reddit, X, Google Trends, and more to create visual charts and insights on what's rising, fading, or underhyped in your market."
                        />
                        <FeatureCard
                            icon={<Eye className="h-6 w-6 text-[#58a6ff]" />}
                            title="Analyze Your Competitors"
                            description="See who's gaining traction, what customers are saying, and where gaps exist in the market. Stay ahead with live updates on competitor movements."
                        />
                        <FeatureCard
                            icon={<PieChart className="h-6 w-6 text-[#58a6ff]" />}
                            title="Save Insights to Z Boards"
                            description="Build your own living dashboard (Z Boards) just by chatting. Save charts, summaries, and get auto-refreshing live sections that update as the market changes."
                        />
                        <FeatureCard
                            icon={<MessageSquare className="h-6 w-6 text-[#58a6ff]" />}
                            title="Personalized, Actionable Strategy"
                            description="Zorva doesn't just show data — it helps you act on it with positioning ideas, content suggestions, and go-to-market moves tailored to your business."
                        />
                        <FeatureCard
                            icon={<RefreshCw className="h-6 w-6 text-[#58a6ff]" />}
                            title="Conversational UX"
                            description="Instead of static dashboards, interact with your market data through natural conversation. Ask follow-up questions, request visualizations, or dive deeper into insights."
                        />
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="border-y border-[#30363d] bg-[#161b22] py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <div className="mb-4 inline-flex items-center rounded-full border border-[#30363d] bg-[#0d1117] px-3 py-1 text-sm">
                            <Code className="mr-2 h-4 w-4 text-[#bc8cff]" />
                            <span>Simple Process</span>
                        </div>
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">How Zorva Works</h2>
                        <p className="text-lg text-[#8b949e]">
                            Get market insights in minutes, not days, with our conversational AI approach.
                        </p>
                    </div>

                    <div className="mx-auto max-w-5xl">
                        <div className="relative">
                            <div className="absolute left-16 top-0 h-full w-0.5 bg-[#30363d] md:left-[50%] md:-ml-0.5"></div>

                            <div className="mb-16 md:mb-24">
                                <div className="flex flex-col items-start md:flex-row">
                                    <div className="flex w-32 flex-none flex-col items-center">
                                        <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#0d1117] bg-[#1f6feb] text-white">
                                            1
                                        </div>
                                        <div className="mt-2 text-center text-sm font-medium">Ask</div>
                                    </div>
                                    <div className="ml-10 mt-3 md:ml-16 md:mt-0 md:w-[calc(50%-64px)]">
                                        <div className="rounded-lg border border-[#30363d] bg-[#0d1117] p-6">
                                            <h3 className="mb-2 text-xl font-semibold">Ask Anything</h3>
                                            <p className="mb-4 text-[#8b949e]">
                                                Simply chat with Zorva about your market questions. No complex queries or specialized knowledge
                                                needed.
                                            </p>
                                            <div className="rounded-md border border-[#30363d] bg-[#161b22] p-3">
                                                <p className="text-sm font-medium">Example questions:</p>
                                                <ul className="mt-2 space-y-1 text-sm text-[#8b949e]">
                                                    <li>"Is my SaaS idea viable in today's market?"</li>
                                                    <li>"What are people saying about my competitors?"</li>
                                                    <li>"Show me trending topics in AI marketing tools"</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-16 md:mb-24">
                                <div className="flex flex-col items-start md:flex-row md:justify-end">
                                    <div className="flex w-32 flex-none flex-col items-center md:order-2">
                                        <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#0d1117] bg-[#238636] text-white">
                                            2
                                        </div>
                                        <div className="mt-2 text-center text-sm font-medium">Analyze</div>
                                    </div>
                                    <div className="ml-10 mt-3 md:order-1 md:mr-16 md:ml-0 md:mt-0 md:w-[calc(50%-64px)]">
                                        <div className="rounded-lg border border-[#30363d] bg-[#0d1117] p-6">
                                            <h3 className="mb-2 text-xl font-semibold">AI-Powered Analysis</h3>
                                            <p className="mb-4 text-[#8b949e]">
                                                Zorva analyzes real-time data from multiple sources to generate comprehensive insights and
                                                visualizations.
                                            </p>
                                            <div className="grid grid-cols-3 gap-2">
                                                <div className="rounded bg-[#161b22] p-2 text-center text-xs text-[#8b949e]">Reddit Data</div>
                                                <div className="rounded bg-[#161b22] p-2 text-center text-xs text-[#8b949e]">X Trends</div>
                                                <div className="rounded bg-[#161b22] p-2 text-center text-xs text-[#8b949e]">Google Trends</div>
                                                <div className="rounded bg-[#161b22] p-2 text-center text-xs text-[#8b949e]">Reviews</div>
                                                <div className="rounded bg-[#161b22] p-2 text-center text-xs text-[#8b949e]">SEO Data</div>
                                                <div className="rounded bg-[#161b22] p-2 text-center text-xs text-[#8b949e]">Sentiment</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-col items-start md:flex-row">
                                    <div className="flex w-32 flex-none flex-col items-center">
                                        <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#0d1117] bg-[#f0883e] text-white">
                                            3
                                        </div>
                                        <div className="mt-2 text-center text-sm font-medium">Act</div>
                                    </div>
                                    <div className="ml-10 mt-3 md:ml-16 md:mt-0 md:w-[calc(50%-64px)]">
                                        <div className="rounded-lg border border-[#30363d] bg-[#0d1117] p-6">
                                            <h3 className="mb-2 text-xl font-semibold">Get Actionable Insights</h3>
                                            <p className="mb-4 text-[#8b949e]">
                                                Receive clear, actionable strategies and visualizations you can implement immediately to improve
                                                your market position.
                                            </p>
                                            <div className="grid gap-2 sm:grid-cols-2">
                                                <div className="rounded-md border border-[#30363d] bg-[#161b22] p-3">
                                                    <div className="mb-2 text-sm font-medium text-[#58a6ff]">Strategic Recommendations</div>
                                                    <p className="text-xs text-[#8b949e]">
                                                        Tailored action items based on your specific business context and goals
                                                    </p>
                                                </div>
                                                <div className="rounded-md border border-[#30363d] bg-[#161b22] p-3">
                                                    <div className="mb-2 text-sm font-medium text-[#58a6ff]">Z Boards</div>
                                                    <p className="text-xs text-[#8b949e]">
                                                        Save insights to your custom dashboard for ongoing monitoring and updates
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <div className="mb-4 inline-flex items-center rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1 text-sm">
                            <Users className="mr-2 h-4 w-4 text-[#bc8cff]" />
                            <span>Perfect For</span>
                        </div>
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Who Uses Zorva</h2>
                        <p className="text-lg text-[#8b949e]">See how different teams use Zorva to gain competitive advantages.</p>
                    </div>

                    <Tabs defaultValue="founders" className="mx-auto max-w-4xl">
                        <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3 bg-[#161b22]">
                            <TabsTrigger value="founders">Founders</TabsTrigger>
                            <TabsTrigger value="marketers">Marketers</TabsTrigger>
                            <TabsTrigger value="product">Product Teams</TabsTrigger>
                        </TabsList>

                        <TabsContent value="founders" className="rounded-lg border border-[#30363d] bg-[#161b22] p-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-4 text-xl font-semibold">For Founders & Entrepreneurs</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                            <span className="text-[#e6edf3]">Validate business ideas before investing resources</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                            <span className="text-[#e6edf3]">Identify market gaps and opportunities for innovation</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                            <span className="text-[#e6edf3]">Get a Pulse Score to measure idea viability</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                            <span className="text-[#e6edf3]">
                                                Create compelling investor pitches with data-backed insights
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <Button className="bg-[#238636] hover:bg-[#2ea043]">Learn More</Button>
                                    </div>
                                </div>
                                <div className="rounded-lg border border-[#30363d] bg-[#0d1117] p-4">
                                    <div className="mb-3 text-sm font-medium text-[#8b949e]">Success Story</div>
                                    <h4 className="mb-2 text-lg font-medium">SaaS Founder</h4>
                                    <p className="mb-4 text-sm text-[#8b949e]">
                                        "Zorva helped me pivot my SaaS idea before launch. The market analysis showed a saturated primary
                                        market but identified an underserved niche with higher growth potential. Saved me months of
                                        development in the wrong direction."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 overflow-hidden rounded-full bg-[#161b22]">
                                            <img
                                                src="/placeholder.svg?height=40&width=40"
                                                alt="Founder"
                                                width={40}
                                                height={40}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium">Alex Chen</div>
                                            <div className="text-xs text-[#8b949e]">Founder, ProductFit</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="marketers" className="rounded-lg border border-[#30363d] bg-[#161b22] p-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-4 text-xl font-semibold">For Marketing Teams</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                            <span className="text-[#e6edf3]">Identify trending topics for content creation</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                            <span className="text-[#e6edf3]">Analyze competitor messaging and positioning</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                            <span className="text-[#e6edf3]">Track sentiment around your brand and products</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                            <span className="text-[#e6edf3]">Generate data-driven content strategies</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <Button className="bg-[#238636] hover:bg-[#2ea043]">Learn More</Button>
                                    </div>
                                </div>
                                <div className="rounded-lg border border-[#30363d] bg-[#0d1117] p-4">
                                    <div className="mb-3 text-sm font-medium text-[#8b949e]">Success Story</div>
                                    <h4 className="mb-2 text-lg font-medium">Growth Marketing Lead</h4>
                                    <p className="mb-4 text-sm text-[#8b949e]">
                                        "Our content engagement increased by 78% after using Zorva to identify trending topics in our
                                        industry. The Z Boards feature lets us track performance against competitors in real-time, which has
                                        transformed our content strategy."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 overflow-hidden rounded-full bg-[#161b22]">
                                            <img
                                                src="/placeholder.svg?height=40&width=40"
                                                alt="Marketer"
                                                width={40}
                                                height={40}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium">Sarah Johnson</div>
                                            <div className="text-xs text-[#8b949e]">CMO, GrowthLabs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="product" className="rounded-lg border border-[#30363d] bg-[#161b22] p-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-4 text-xl font-semibold">For Product Teams</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                            <span className="text-[#e6edf3]">Identify feature gaps in the market</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                            <span className="text-[#e6edf3]">Track user sentiment about competitor products</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                            <span className="text-[#e6edf3]">Prioritize roadmap based on market demand</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                            <span className="text-[#e6edf3]">Validate new feature concepts before development</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <Button className="bg-[#238636] hover:bg-[#2ea043]">Learn More</Button>
                                    </div>
                                </div>
                                <div className="rounded-lg border border-[#30363d] bg-[#0d1117] p-4">
                                    <div className="mb-3 text-sm font-medium text-[#8b949e]">Success Story</div>
                                    <h4 className="mb-2 text-lg font-medium">Product Manager</h4>
                                    <p className="mb-4 text-sm text-[#8b949e]">
                                        "Zorva has become our secret weapon for product planning. We identified a critical feature gap that
                                        users were complaining about across all competitor products. By addressing this first, we saw a 32%
                                        increase in conversion rates."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 overflow-hidden rounded-full bg-[#161b22]">
                                            <img
                                                src="/placeholder.svg?height=40&width=40"
                                                alt="Product Manager"
                                                width={40}
                                                height={40}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium">Michael Torres</div>
                                            <div className="text-xs text-[#8b949e]">PM, TechSolutions</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Z Boards Section */}
            <section className="border-y border-[#30363d] bg-[#161b22] py-24">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 md:grid-cols-2 md:items-center">
                        <div>
                            <div className="mb-4 inline-flex items-center rounded-full border border-[#30363d] bg-[#0d1117] px-3 py-1 text-sm">
                                <PieChart className="mr-2 h-4 w-4 text-[#f0883e]" />
                                <span>Z Boards</span>
                            </div>
                            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Your Living Market Dashboard</h2>
                            <p className="mb-6 text-lg text-[#8b949e]">
                                Z Boards are dynamic dashboards that update automatically as market conditions change. No more static
                                reports that are outdated as soon as they're created.
                            </p>

                            <ul className="mb-8 space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#238636] text-white">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Create boards through conversation</h3>
                                        <p className="text-sm text-[#8b949e]">Just chat with Zorva and save insights to your board</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#238636] text-white">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Auto-refreshing data</h3>
                                        <p className="text-sm text-[#8b949e]">Boards update automatically with the latest market data</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#238636] text-white">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Share with your team</h3>
                                        <p className="text-sm text-[#8b949e]">
                                            Collaborate on market research with your entire organization
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <Button className="group bg-[#238636] hover:bg-[#2ea043]">
                                Try Z Boards
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>

                        <div className="relative rounded-lg border border-[#30363d] bg-[#0d1117] p-4 shadow-xl">
                            <div className="mb-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <PieChart className="h-5 w-5 text-[#f0883e]" />
                                    <span className="font-medium">Competitor Analysis Z Board</span>
                                </div>
                                <div className="rounded bg-[#161b22] px-2 py-0.5 text-xs text-[#8b949e]">Updated 5 min ago</div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded border border-[#30363d] bg-[#161b22] p-3">
                                    <div className="mb-2 text-sm font-medium">Competitor Sentiment</div>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="mb-1 flex items-center justify-between text-xs">
                                                <span>Competitor A</span>
                                                <span className="text-[#58a6ff]">72%</span>
                                            </div>
                                            <div className="h-2 w-full rounded-full bg-[#0d1117]">
                                                <div className="h-2 w-[72%] rounded-full bg-[#58a6ff]"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mb-1 flex items-center justify-between text-xs">
                                                <span>Competitor B</span>
                                                <span className="text-[#238636]">65%</span>
                                            </div>
                                            <div className="h-2 w-full rounded-full bg-[#0d1117]">
                                                <div className="h-2 w-[65%] rounded-full bg-[#238636]"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mb-1 flex items-center justify-between text-xs">
                                                <span>Competitor C</span>
                                                <span className="text-[#f0883e]">48%</span>
                                            </div>
                                            <div className="h-2 w-full rounded-full bg-[#0d1117]">
                                                <div className="h-2 w-[48%] rounded-full bg-[#f0883e]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded border border-[#30363d] bg-[#161b22] p-3">
                                    <div className="mb-2 text-sm font-medium">Feature Comparison</div>
                                    <div className="space-y-2 text-xs">
                                        <div className="flex items-center justify-between">
                                            <span>AI Analysis</span>
                                            <div className="flex gap-1">
                                                <span className="inline-block h-4 w-4 rounded-sm bg-[#238636]"></span>
                                                <span className="inline-block h-4 w-4 rounded-sm bg-[#238636]"></span>
                                                <span className="inline-block h-4 w-4 rounded-sm bg-[#8b949e]"></span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Real-time Data</span>
                                            <div className="flex gap-1">
                                                <span className="inline-block h-4 w-4 rounded-sm bg-[#238636]"></span>
                                                <span className="inline-block h-4 w-4 rounded-sm bg-[#8b949e]"></span>
                                                <span className="inline-block h-4 w-4 rounded-sm bg-[#8b949e]"></span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Visualization</span>
                                            <div className="flex gap-1">
                                                <span className="inline-block h-4 w-4 rounded-sm bg-[#238636]"></span>
                                                <span className="inline-block h-4 w-4 rounded-sm bg-[#238636]"></span>
                                                <span className="inline-block h-4 w-4 rounded-sm bg-[#238636]"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded border border-[#30363d] bg-[#161b22] p-3 md:col-span-2">
                                    <div className="mb-2 text-sm font-medium">Market Opportunity Analysis</div>
                                    <div className="text-xs text-[#8b949e]">
                                        <p>Based on competitor analysis, there's a significant opportunity in the following areas:</p>
                                        <ul className="mt-2 space-y-1 pl-4">
                                            <li className="list-disc">Real-time market alerts (not offered by any competitor)</li>
                                            <li className="list-disc">Integration with marketing tools (weak spot for Competitors B & C)</li>
                                            <li className="list-disc">Mobile experience (pain point mentioned in 72% of negative reviews)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <div className="mb-4 inline-flex items-center rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1 text-sm">
                            <Star className="mr-2 h-4 w-4 text-[#f0883e]" fill="#f0883e" />
                            <span>Testimonials</span>
                        </div>
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">What Our Users Say</h2>
                        <p className="text-lg text-[#8b949e]">
                            Hear from strategists and business leaders who've transformed their approach with Zorva.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                quote:
                                    "Zorva has completely changed how I approach market research. What used to take weeks now takes minutes, and the insights are more actionable than ever.",
                                author: "Sarah Johnson",
                                role: "Chief Marketing Officer, TechVenture",
                                rating: 5,
                            },
                            {
                                quote:
                                    "As a solo founder, I don't have the resources for a dedicated market research team. Zorva gives me enterprise-level insights at a fraction of the cost.",
                                author: "David Chen",
                                role: "Founder, NexGen Solutions",
                                rating: 5,
                            },
                            {
                                quote:
                                    "The Z Boards feature is a game-changer. I can build living dashboards through conversation and share them with my team. No more outdated spreadsheets.",
                                author: "Michelle Rodriguez",
                                role: "VP of Strategy, Global Innovations",
                                rating: 4,
                            },
                            {
                                quote:
                                    "I was skeptical about AI-powered market research, but Zorva has proven invaluable. It's like having a team of analysts available 24/7.",
                                author: "James Wilson",
                                role: "Product Manager, Enterprise Solutions",
                                rating: 5,
                            },
                            {
                                quote:
                                    "Our agency has been able to take on more clients without expanding our team, all thanks to the efficiency Zorva brings to our market research process.",
                                author: "Emma Thompson",
                                role: "Strategy Director, Catalyst Agency",
                                rating: 5,
                            },
                            {
                                quote:
                                    "The visual reports Zorva generates have become a staple in our executive presentations. Clear, insightful, and incredibly easy to produce.",
                                author: "Robert Jackson",
                                role: "CEO, Innovate Inc.",
                                rating: 4,
                            },
                        ].map((testimonial, i) => (
                            <div
                                key={i}
                                className="group rounded-lg border border-[#30363d] bg-[#161b22] p-6 transition-all duration-300 hover:border-[#58a6ff]/30 hover:bg-[#0d1117]"
                            >
                                <div className="mb-4 flex">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < testimonial.rating ? "fill-[#f0883e] text-[#f0883e]" : "text-[#30363d]"}`}
                                        />
                                    ))}
                                </div>
                                <blockquote className="mb-6 text-[#e6edf3]">"{testimonial.quote}"</blockquote>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 overflow-hidden rounded-full bg-[#0d1117]">
                                        <img
                                            src={`/placeholder.svg?height=40&width=40&text=${testimonial.author.charAt(0)}`}
                                            alt={testimonial.author}
                                            width={40}
                                            height={40}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">{testimonial.author}</div>
                                        <div className="text-xs text-[#8b949e]">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="border-y border-[#30363d] bg-[#161b22] py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <div className="mb-4 inline-flex items-center rounded-full border border-[#30363d] bg-[#0d1117] px-3 py-1 text-sm">
                            <CircleDollarSign className="mr-2 h-4 w-4 text-[#bc8cff]" />
                            <span>Pricing</span>
                        </div>
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Simple, Transparent Pricing</h2>
                        <p className="text-lg text-[#8b949e]">
                            Choose the plan that fits your needs. All plans include core features.
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
                        <Card className="border-[#30363d] bg-[#0d1117]">
                            <CardHeader>
                                <CardTitle>Starter</CardTitle>
                                <div className="mt-4 text-4xl font-bold">
                                    $49<span className="text-lg font-normal text-[#8b949e]">/month</span>
                                </div>
                                <CardDescription className="mt-2">Perfect for individuals and small startups</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">100 AI queries per month</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">Basic competitor analysis</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">Market trend reports</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">1 Z Board</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">Email support</span>
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-[#161b22] hover:bg-[#30363d]">Get Started</Button>
                            </CardFooter>
                        </Card>

                        <Card className="relative border-[#58a6ff]/30 bg-[#0d1117]">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#1f6feb] px-3 py-1 text-xs font-medium">
                                Most Popular
                            </div>
                            <CardHeader>
                                <CardTitle>Professional</CardTitle>
                                <div className="mt-4 text-4xl font-bold">
                                    $99<span className="text-lg font-normal text-[#8b949e]">/month</span>
                                </div>
                                <CardDescription className="mt-2">Ideal for growing businesses and teams</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">500 AI queries per month</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">Advanced competitor analysis</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">Custom market reports</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">5 Z Boards</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">Visual data exports</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">Priority email support</span>
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-[#238636] hover:bg-[#2ea043]">Get Started</Button>
                            </CardFooter>
                        </Card>

                        <Card className="border-[#30363d] bg-[#0d1117]">
                            <CardHeader>
                                <CardTitle>Enterprise</CardTitle>
                                <div className="mt-4 text-4xl font-bold">
                                    $249<span className="text-lg font-normal text-[#8b949e]">/month</span>
                                </div>
                                <CardDescription className="mt-2">For organizations with advanced needs</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">Unlimited AI queries</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">Full competitive intelligence</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">Custom API integrations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">Unlimited Z Boards</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">Team collaboration features</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">Dedicated account manager</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#58a6ff]" />
                                        <span className="text-[#e6edf3]">24/7 priority support</span>
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-[#161b22] hover:bg-[#30363d]">Contact Sales</Button>
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-[#30363d] bg-[#0d1117] p-6">
                        <div className="flex items-center gap-4">
                            <Shield className="h-8 w-8 text-[#58a6ff]" />
                            <h3 className="text-xl font-semibold">Need a custom plan?</h3>
                        </div>
                        <p className="mt-2 text-[#8b949e]">
                            We offer custom plans for organizations with specific requirements. Contact our sales team to discuss your
                            needs.
                        </p>
                        <div className="mt-4">
                            <Button variant="outline" className="border-[#30363d] hover:border-[#58a6ff] hover:bg-[#161b22]">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <div className="mb-4 inline-flex items-center rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1 text-sm">
                            <MessageSquare className="mr-2 h-4 w-4 text-[#f0883e]" />
                            <span>FAQ</span>
                        </div>
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
                        <p className="text-lg text-[#8b949e]">Find answers to common questions about Zorva.</p>
                    </div>

                    <div className="mx-auto grid max-w-4xl gap-6">
                        {[
                            {
                                question: "How accurate is Zorva's market data?",
                                answer:
                                    "Zorva sources data from thousands of verified sources and uses advanced AI to ensure accuracy. Our data is updated in real-time and validated against multiple sources before being presented to users. We maintain a 95%+ accuracy rate across all market insights.",
                            },
                            {
                                question: "What is a Z Board and how does it work?",
                                answer:
                                    "Z Boards are living dashboards that you create through conversation with Zorva. Simply chat with Zorva and save insights, charts, and analyses to your Z Board. These boards update automatically as market conditions change, ensuring you always have the latest data at your fingertips.",
                            },
                            {
                                question: "How is Zorva different from traditional market research tools?",
                                answer:
                                    "Unlike traditional tools that require you to know what you're looking for and how to analyze the data, Zorva handles the heavy lifting for you. It combines AI with comprehensive market data to provide actionable insights in minutes, not days or weeks. Plus, you can ask follow-up questions to dive deeper into specific areas.",
                            },
                            {
                                question: "What data sources does Zorva use?",
                                answer:
                                    "Zorva pulls data from a wide range of sources including Reddit, X (formerly Twitter), Google Trends, review sites, news outlets, industry reports, and more. This multi-source approach ensures comprehensive coverage of market trends and sentiment.",
                            },
                            {
                                question: "Is my data secure with Zorva?",
                                answer:
                                    "Absolutely. We take data security seriously. All data is encrypted both in transit and at rest. We follow industry best practices for security and compliance, including GDPR and SOC 2. Your queries and business information are never shared with third parties or used to train our models without explicit permission.",
                            },
                            {
                                question: "Can I try Zorva before committing to a subscription?",
                                answer:
                                    "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial. You can also schedule a demo with our team to see how Zorva can address your specific market research needs.",
                            },
                        ].map((faq, i) => (
                            <div key={i} className="rounded-lg border border-[#30363d] bg-[#161b22] p-6">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-lg font-medium">{faq.question}</h3>
                                    <ChevronDown className="mt-1 h-5 w-5 text-[#8b949e]" />
                                </div>
                                <p className="mt-4 text-[#8b949e]">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="relative overflow-hidden rounded-2xl border border-[#30363d] bg-[#161b22] p-8 md:p-12">
                        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#58a6ff]/10 blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#58a6ff]/10 blur-3xl"></div>

                        <div className="relative z-10 mx-auto max-w-3xl text-center">
                            <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
                                Ready to Transform Your Market Strategy?
                            </h2>
                            <p className="mb-8 text-lg text-[#8b949e]">
                                Join hundreds of founders, marketers, and product teams using Zorva to make data-driven decisions and
                                stay ahead of the competition.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button className="group w-full bg-[#238636] px-8 py-6 text-lg hover:bg-[#2ea043] sm:w-auto">
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full border-[#30363d] px-8 py-6 text-lg text-[#e6edf3] hover:border-[#58a6ff] hover:bg-[#0d1117] hover:text-white sm:w-auto"
                                >
                                    Schedule Demo
                                </Button>
                            </div>
                            <p className="mt-4 text-sm text-[#8b949e]">No credit card required. 14-day free trial.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#30363d] bg-[#161b22] py-12">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <Brain className="h-6 w-6 text-[#58a6ff]" />
                                <span className="text-lg font-bold">Zorva.ai</span>
                            </div>
                            <p className="mt-4 text-[#8b949e]">
                                Your AI market strategist. Get clear, actionable insights powered by real-time data.
                            </p>
                            <div className="mt-6 flex space-x-4">
                                {["Twitter", "LinkedIn", "GitHub", "Discord"].map((social) => (
                                    <a key={social} href="#" className="text-[#8b949e] hover:text-[#58a6ff]">
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4 text-lg font-semibold">Product</h3>
                            <ul className="space-y-3">
                                {["Features", "Z Boards", "Pricing", "Integrations", "Roadmap"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-[#8b949e] hover:text-[#58a6ff]">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
                            <ul className="space-y-3">
                                {["Documentation", "Guides", "API", "Community", "Support"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-[#8b949e] hover:text-[#58a6ff]">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-lg font-semibold">Company</h3>
                            <ul className="space-y-3">
                                {["About Us", "Careers", "Contact", "Privacy Policy", "Terms of Service"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-[#8b949e] hover:text-[#58a6ff]">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-[#30363d] pt-8">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <div className="text-center text-sm text-[#8b949e] md:text-left">
                                © {new Date().getFullYear()} Zorva AI. All rights reserved.
                            </div>
                            <div className="flex space-x-6">
                                <a href="#" className="text-sm text-[#8b949e] hover:text-[#58a6ff]">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-sm text-[#8b949e] hover:text-[#58a6ff]">
                                    Terms of Service
                                </a>
                                <a href="#" className="text-sm text-[#8b949e] hover:text-[#58a6ff]">
                                    Cookie Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="group rounded-lg border border-[#30363d] bg-[#161b22] p-6 transition-all duration-300 hover:border-[#58a6ff]/30 hover:bg-[#0d1117]">
            <div className="mb-4 rounded-full bg-[#0d1117] p-3 transition-colors group-hover:bg-[#1f6feb]/20">{icon}</div>
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-[#8b949e]">{description}</p>
        </div>
    )
}

function Users({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}


