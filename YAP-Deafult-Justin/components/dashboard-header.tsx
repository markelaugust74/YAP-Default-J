import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Layout, Save, Settings } from 'lucide-react'

interface DashboardHeaderProps {
  sandboxMode: boolean
  onSandboxToggle: () => void
}

export function DashboardHeader({
  sandboxMode,
  onSandboxToggle,
}: DashboardHeaderProps) {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">YAP</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Layout className="mr-2 h-4 w-4" />
                  Preset Layouts
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Default Layout</DropdownMenuItem>
                <DropdownMenuItem>Compact View</DropdownMenuItem>
                <DropdownMenuItem>Stream Focus</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="flex flex-1 items-center space-x-4 justify-end">
          <div className="flex items-center space-x-2">
            <Switch
              checked={sandboxMode}
              onCheckedChange={onSandboxToggle}
              id="sandbox-mode"
            />
            <label
              htmlFor="sandbox-mode"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Sandbox Mode
            </label>
          </div>
          {sandboxMode && (
            <Button variant="outline" size="sm">
              <Save className="mr-2 h-4 w-4" />
              Save Configuration
            </Button>
          )}
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}

