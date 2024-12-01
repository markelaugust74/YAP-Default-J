import { Trophy } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function TrendingSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="h-4 w-4" />
          <span>Trending</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Top Streamers</h3>
            <ScrollArea className="h-[100px]">
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <span className="font-medium">{i + 1}.</span>
                    <img
                      src="/placeholder.svg?height=24&width=24"
                      alt=""
                className="h-6 w-6 rounded-full"
                    />
                    <span>Streamer {i + 1}</span>
                    <span className="text-muted-foreground ml-auto">
                      {Math.floor(Math.random() * 100)}K
                    </span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Top Categories</h3>
            <ScrollArea className="h-[100px]">
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <span className="font-medium">{i + 1}.</span>
                    <img
                      src="/placeholder.svg?height=24&width=24"
                      alt=""
                      className="h-6 w-6 rounded"
                    />
                    <span>Category {i + 1}</span>
                    <span className="text-muted-foreground ml-auto">
                      {Math.floor(Math.random() * 500)}K viewers
                    </span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Top Clips</h3>
            <ScrollArea className="h-[100px]">
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <span className="font-medium">{i + 1}.</span>
                    <img
                      src="/placeholder.svg?height=24&width=24"
                      alt=""
                      className="h-6 w-6 rounded"
                    />
                    <span>Clip Title {i + 1}</span>
                    <span className="text-muted-foreground ml-auto">
                      {Math.floor(Math.random() * 100)}K views
                    </span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

