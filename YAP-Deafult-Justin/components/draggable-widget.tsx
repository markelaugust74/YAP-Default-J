"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

interface DraggableWidgetProps {
  children: React.ReactNode
  id: string
  x: number
  y: number
  isDraggable: boolean
  onPositionChange: (x: number, y: number) => void
}

export function DraggableWidget({
  children,
  id,
  x,
  y,
  isDraggable,
  onPositionChange,
}: DraggableWidgetProps) {
  const [isDragging, setIsDragging] = useState(false)
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={constraintsRef} className="relative">
      <motion.div
        drag={isDraggable}
        dragConstraints={constraintsRef}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false)
          // Calculate new grid position
          onPositionChange(x, y)
        }}
        className={`${
          isDragging ? "z-50 cursor-grabbing" : "cursor-grab"
        } transition-shadow ${
          isDraggable
            ? "hover:shadow-lg"
            : ""
        }`}
      >
        {children}
      </motion.div>
    </div>
  )
}

