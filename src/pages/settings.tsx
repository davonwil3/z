import { Bell, Brain, Globe, Key, Lock, MessageSquare, Moon, PieChart, Settings, Shield, User } from "lucide-react"
import {Link} from "react-router-dom"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Separator } from "../components/ui/separator"
import { Switch } from "../components/ui/switch"

export default function SettingsPage() {
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
              className="h-10 w-10 rounded-md text-[#8b949e] hover:bg-[#30363d] hover:text-[#e6edf3]"
            >
              <PieChart className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </Button>
          </Link>

          <Link to="/settings">
            <Button
              variant="ghost"
              size="icon"
              className="relative h-10 w-10 rounded-md bg-[#1f6feb] text-white hover:bg-[#1f6feb]/90"
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
            <Settings className="h-5 w-5 text-[#58a6ff]" />
            <h1 className="text-lg font-medium">Settings</h1>
          </div>
        </header>

        {/* Settings Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Settings Sidebar */}
          <div className="hidden w-64 border-r border-[#30363d] bg-[#0d1117] md:block">
            <nav className="p-4">
              <div className="mb-2 text-xs font-medium uppercase tracking-wider text-[#8b949e]">User Settings</div>
              <div className="space-y-1">
                {[
                  { label: "Profile", icon: <User className="h-4 w-4" />, active: true },
                  { label: "Account", icon: <Key className="h-4 w-4" /> },
                  { label: "Appearance", icon: <Moon className="h-4 w-4" /> },
                  { label: "Notifications", icon: <Bell className="h-4 w-4" /> },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm ${
                      item.active ? "bg-[#1f6feb] text-white" : "text-[#8b949e] hover:bg-[#30363d] hover:text-[#e6edf3]"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-4 bg-[#30363d]" />

              <div className="mb-2 text-xs font-medium uppercase tracking-wider text-[#8b949e]">App Settings</div>
              <div className="space-y-1">
                {[
                  { label: "Security", icon: <Shield className="h-4 w-4" /> },
                  { label: "API", icon: <Globe className="h-4 w-4" /> },
                  { label: "Billing", icon: <Lock className="h-4 w-4" /> },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-[#8b949e] hover:bg-[#30363d] hover:text-[#e6edf3]"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </nav>
          </div>

          {/* Settings Form */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-6 text-xl font-semibold">Profile Settings</h2>

              <div className="mb-8 flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-[#30363d] bg-[#161b22]">
                  <img
                    src="/placeholder.svg?height=80&width=80&text=U"
                    alt="User"
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <Button className="mb-2 bg-[#238636] text-sm hover:bg-[#2ea043]">Change Avatar</Button>
                  <p className="text-xs text-[#8b949e]">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      className="border-[#30363d] bg-[#161b22] text-[#e6edf3] focus-visible:ring-[#58a6ff]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      className="border-[#30363d] bg-[#161b22] text-[#e6edf3] focus-visible:ring-[#58a6ff]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-[#30363d] bg-[#161b22] text-[#e6edf3] focus-visible:ring-[#58a6ff]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    placeholder="Acme Inc."
                    className="border-[#30363d] bg-[#161b22] text-[#e6edf3] focus-visible:ring-[#58a6ff]"
                  />
                </div>

                <Separator className="my-4 bg-[#30363d]" />

                <h3 className="text-lg font-medium">Preferences</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Email Notifications</Label>
                      <p className="text-xs text-[#8b949e]">Receive email updates about your account</p>
                    </div>
                    <Switch className="data-[state=checked]:bg-[#238636]" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Weekly Reports</Label>
                      <p className="text-xs text-[#8b949e]">Get weekly insights about your Z Boards</p>
                    </div>
                    <Switch className="data-[state=checked]:bg-[#238636]" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Market Alerts</Label>
                      <p className="text-xs text-[#8b949e]">Receive alerts about significant market changes</p>
                    </div>
                    <Switch className="data-[state=checked]:bg-[#238636]" />
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <Button
                    variant="outline"
                    className="border-[#30363d] text-[#e6edf3] hover:bg-[#30363d] hover:text-[#e6edf3]"
                  >
                    Cancel
                  </Button>
                  <Button className="bg-[#238636] hover:bg-[#2ea043]">Save Changes</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

