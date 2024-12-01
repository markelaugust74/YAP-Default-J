"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const SAMPLE_STREAMS = [
  {
    id: 1,
    title: "Just Chatting",
    streamer: "StreamerOne",
    viewers: "12.5K",
    thumbnail: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Playing Minecraft",
    streamer: "StreamerTwo",
    viewers: "8.2K",
    thumbnail: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Ranked Gameplay",
    streamer: "StreamerThree",
    viewers: "15.7K",
    thumbnail: "/placeholder.svg?height=200&width=400",
  },
]

export function StreamCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {SAMPLE_STREAMS.map((stream) => (
          <CarouselItem
            key={stream.id}
            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent className="relative flex aspect-video items-center justify-center p-0">
                  <img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="absolute inset-0 object-cover rounded-lg"
                  />
                  <Button
                    size="icon"
                    variant="secondary"
                    className="relative z-10 bg-background/80 backdrop-blur-sm"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-background/0 p-4">
                    <h3 className="font-semibold text-white">{stream.title}</h3>
                    <p className="text-sm text-white/80">{stream.streamer}</p>
                    <p className="text-sm text-white/60">{stream.viewers} viewers</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

