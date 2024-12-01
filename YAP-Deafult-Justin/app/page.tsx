

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { StreamCarousel } from "@/components/stream-carousel"
import { FriendsManagement } from "@/components/friends-management"
import { ChatInterface } from "@/components/chat-interface"
import { TrendingSection } from "@/components/trending-section"
import { DraggableWidget } from "@/components/draggable-widget"

export default function Dashboard() {
  const [sandboxMode, setSandboxMode] = useState(false)
  const [widgets, setWidgets] = useState([
    { id: "friends", x: 0, y: 0, component: FriendsManagement },
    { id: "chat", x: 1, y: 0, component: ChatInterface },
    { id: "trending", x: 2, y: 0, component: TrendingSection },
  ])

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader
        sandboxMode={sandboxMode}
        onSandboxToggle={() => setSandboxMode(!sandboxMode)}
      />
      <main className="container mx-auto p-4 space-y-6">
        <StreamCarousel />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {widgets.map((widget) => (
            <DraggableWidget
              key={widget.id}
              id={widget.id}
              x={widget.x}
              y={widget.y}
              isDraggable={sandboxMode}
              onPositionChange={(newX, newY) => {
                setWidgets(
                  widgets.map((w) =>
                    w.id === widget.id ? { ...w, x: newX, y: newY } : w
                  )
                )
              }}
            >
              <widget.component />
            </DraggableWidget>
          ))}
        </div>
      </main>
    </div>
  )
}

