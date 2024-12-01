"use client"

import { useState } from "react"
import { Search, UserPlus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Friend {
  id: number
  name: string
  status: "online" | "offline"
  avatar: string
}

export function FriendsManagement() {
  const [friends, setFriends] = useState<Friend[]>([
    {
      id: 1,
      name: "Alice",
      status: "online",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Bob",
      status: "offline",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ])

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Friends</h2>
        <div className="relative mt-2">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search friends..." className="pl-8" />
        </div>
      </div>
      <ScrollArea className="h-[300px]">
        <div className="p-4 space-y-4">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={friend.avatar}
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium leading-none">{friend.name}</p>
                  <p
                    className={`text-sm ${
                      friend.status === "online"
                        ? "text-green-500"
                        : "text-muted-foreground"
                    }`}
                  >
                    {friend.status}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <UserPlus className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

