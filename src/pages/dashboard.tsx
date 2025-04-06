import {
    ArrowRight,
    BarChart3,
    Brain,
    ChevronRight,
    LineChart,
    MessageSquare,
    PieChart,
    Plus,
    RefreshCw,
    Settings,
  } from "lucide-react"
  import {Link} from "react-router-dom"
  
  import { Button } from "../components/ui/button"
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
  
  export default function DashboardPage() {
    return (
      <div className="flex h-screen bg-[#0d1117] text-[#e6edf3]">
        {/* Skinny Sidebar */}
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
  
        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          {/* Header */}
          <header className="flex h-14 items-center justify-between border-b border-[#30363d] px-4">
            <div className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-[#58a6ff]" />
              <h1 className="text-lg font-medium">Dashboard</h1>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-[#30363d] text-xs text-[#e6edf3] hover:bg-[#30363d] hover:text-[#e6edf3]"
            >
              <Plus className="mr-1 h-3 w-3" />
              New Z Board
            </Button>
          </header>
  
          {/* Dashboard Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <Card className="border-[#30363d] bg-[#161b22]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-[#8b949e]">Total Z Boards</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-[#8b949e]">+2 from last month</p>
                </CardContent>
              </Card>
  
              <Card className="border-[#30363d] bg-[#161b22]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-[#8b949e]">AI Queries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">128</div>
                  <p className="text-xs text-[#8b949e]">42% of monthly limit</p>
                </CardContent>
              </Card>
  
              <Card className="border-[#30363d] bg-[#161b22]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-[#8b949e]">Insights Generated</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-[#8b949e]">+8 from last week</p>
                </CardContent>
              </Card>
            </div>
  
            <h2 className="mb-4 text-lg font-medium">Your Z Boards</h2>
  
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "SaaS Market Analysis",
                  description: "Tracking trends and competitors in the SaaS space",
                  lastUpdated: "Updated 2 hours ago",
                  insights: 8,
                  icon: <BarChart3 className="h-5 w-5 text-[#58a6ff]" />,
                },
                {
                  title: "Competitor Tracking",
                  description: "Monitoring key competitors and their market movements",
                  lastUpdated: "Updated 1 day ago",
                  insights: 12,
                  icon: <LineChart className="h-5 w-5 text-[#f0883e]" />,
                },
                {
                  title: "Product Validation",
                  description: "Validating my new product idea in the market",
                  lastUpdated: "Updated 3 days ago",
                  insights: 4,
                  icon: <MessageSquare className="h-5 w-5 text-[#238636]" />,
                },
              ].map((board, i) => (
                <Card
                  key={i}
                  className="border-[#30363d] bg-[#161b22] transition-all duration-200 hover:border-[#58a6ff]/30"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="rounded-md bg-[#0d1117] p-2">{board.icon}</div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-md text-[#8b949e] hover:bg-[#30363d] hover:text-[#e6edf3]"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-base">{board.title}</CardTitle>
                    <CardDescription className="text-xs text-[#8b949e]">{board.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center text-[#8b949e]">
                        <RefreshCw className="mr-1 h-3 w-3" />
                        {board.lastUpdated}
                      </div>
                      <div className="rounded bg-[#0d1117] px-2 py-0.5 text-[#8b949e]">{board.insights} insights</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-xs text-[#58a6ff] hover:bg-[#30363d]"
                    >
                      View Z Board
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
  
              <Card className="flex h-[204px] items-center justify-center border-[#30363d] border-dashed bg-[#161b22]/50">
                <CardContent>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 rounded-full bg-[#0d1117] p-3">
                      <Plus className="h-6 w-6 text-[#8b949e]" />
                    </div>
                    <p className="mb-1 text-sm font-medium">Create New Z Board</p>
                    <p className="text-xs text-[#8b949e]">Track market trends and competitors</p>
                    <Button className="mt-4 bg-[#238636] text-xs hover:bg-[#2ea043]">Create Z Board</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
  
            <h2 className="mb-4 mt-8 text-lg font-medium">Recent Activity</h2>
  
            <Card className="border-[#30363d] bg-[#161b22]">
              <CardContent className="p-0">
                <div className="divide-y divide-[#30363d]">
                  {[
                    {
                      action: "Added new insight to SaaS Market Analysis",
                      time: "2 hours ago",
                      icon: <BarChart3 className="h-4 w-4 text-[#58a6ff]" />,
                    },
                    {
                      action: "Created new Z Board: Product Validation",
                      time: "3 days ago",
                      icon: <Plus className="h-4 w-4 text-[#238636]" />,
                    },
                    {
                      action: "Updated Competitor Tracking with new data",
                      time: "1 week ago",
                      icon: <RefreshCw className="h-4 w-4 text-[#f0883e]" />,
                    },
                    {
                      action: "Generated market trend report",
                      time: "1 week ago",
                      icon: <LineChart className="h-4 w-4 text-[#8957e5]" />,
                    },
                    {
                      action: "Started new AI chat about market opportunities",
                      time: "2 weeks ago",
                      icon: <MessageSquare className="h-4 w-4 text-[#58a6ff]" />,
                    },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-[#0d1117] p-2">{activity.icon}</div>
                        <div>
                          <p className="text-sm">{activity.action}</p>
                          <p className="text-xs text-[#8b949e]">{activity.time}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-md text-[#8b949e] hover:bg-[#30363d] hover:text-[#e6edf3]"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }
  
  