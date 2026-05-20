import { BrowserRouter, Routes, Route, Navigate } from "react-router"

const DashboardPage = () => (
  <div className="flex-1 p-6">
    <h1 className="text-2xl font-heading font-bold text-foreground">Dashboard</h1>
    <p className="text-muted-foreground mt-2">Your smart home overview.</p>
  </div>
)

const AgentPage = () => (
  <div className="flex-1 p-6">
    <h1 className="text-2xl font-heading font-bold text-foreground">Agent</h1>
    <p className="text-muted-foreground mt-2">Chat with Orion.</p>
  </div>
)

const SettingsPage = () => (
  <div className="flex-1 p-6">
    <h1 className="text-2xl font-heading font-bold text-foreground">Settings</h1>
    <p className="text-muted-foreground mt-2">Manage the system.</p>
  </div>
)

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/agent" element={<AgentPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
