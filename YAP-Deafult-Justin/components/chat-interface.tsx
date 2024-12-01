"use client"

import * as React from "react"
import { Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ChatMessage {
  id: number
  user: string
  message: string
  timestamp: string
}

export function ChatInterface() {
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      id: 1,
      user: "User1",
      message: "Hello everyone!",
      timestamp: "12:00",
    },
    {
      id: 2,
      user: "User2",
      message: "Hey there!",
      timestamp: "12:01",
    },
  ])

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <Tabs defaultValue="global" className="w-full">
        <div className="border-b px-4">
          <TabsList className="h-12">
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="streamer">Streamer</TabsTrigger>
            <TabsTrigger value="mentioned">Mentioned</TabsTrigger>
            <TabsTrigger value="combined">Combined</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="global" className="p-0">
          <ScrollArea className="h-[300px]">
            <div className="p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{message.user}</span>
                    <span className="text-xs text-muted-foreground">
                      {message.timestamp}
                    </span>
                  </div>
                  <p className="text-sm">{message.message}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="border-t p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                // Handle message submission
              }}
              className="flex space-x-2"
            >
              <Input placeholder="Type a message..." />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </TabsContent>
        {/* Other tab contents would be similar */}
      </Tabs>
    </div>
  )
}

