import type React from "react"
import {
  Home,
  Zap,
  History,
  BookOpen,
  Map,
  Play,
  Settings,
  Wrench,
  ChevronDown,
  type LucideIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "../ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Badge } from "../ui/badge"

const navMain: {
  title: string
  url: string
  icon: LucideIcon
  items?: { title: string; url: string; badge?: string }[]
}[] = [
  {
    title: "Overview",
    url: "/lovelace/0",
    icon: Home,
    items: [
      { title: "Home", url: "/lovelace/0" },
      { title: "Living Room", url: "/lovelace/1" },
      { title: "Kitchen", url: "/lovelace/2" },
      { title: "Bedrooms", url: "/lovelace/3" },
      { title: "Outdoor", url: "/lovelace/4" },
    ],
  },
  {
    title: "Energy",
    url: "/energy",
    icon: Zap,
    items: [
      { title: "Dashboard", url: "/energy" },
      { title: "Solar", url: "/energy/solar" },
      { title: "Grid", url: "/energy/grid", badge: "Live" },
    ],
  },
  {
    title: "History",
    url: "/history",
    icon: History,
  },
  {
    title: "Logbook",
    url: "/logbook",
    icon: BookOpen,
  },
  {
    title: "Map",
    url: "/map",
    icon: Map,
  },
  {
    title: "Media",
    url: "/media-browser",
    icon: Play,
  },
  {
    title: "Settings",
    url: "/config/dashboard",
    icon: Settings,
    items: [
      { title: "General", url: "/config/general" },
      { title: "Devices", url: "/config/devices" },
      { title: "Integrations", url: "/config/integrations" },
      { title: "Automations", url: "/config/automation" },
      { title: "People", url: "/config/person" },
    ],
  },
  {
    title: "Developer Tools",
    url: "/developer-tools",
    icon: Wrench,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <svg viewBox="0 0 1024 1024" fill="currentColor" className="size-6">
                    <g transform="translate(0,1024) scale(1,-1)">
                      <path d="M484 839c-13-2-17-3-27-7-14-6-26-15-31-24-3-6-3-15 0-21 4-9 16-19 32-25 9-3 14-7 18-12 2-4 2-5 2-11 0-7-3-17-8-23-5-5-14-9-28-12-45-8-82-25-103-47-9-9-13-16-18-26-3-9-4-23-2-32 3-7 6-15 7-15 1 0 6 3 10 7 5 5 11 14 14 22l3 7 0-6c0-17-9-35-25-46-21-16-60-35-84-42-8-2-14-2-35-3-36-2-49-5-72-15-21-9-36-22-44-37-3-7-3-8-3-17 0-9 0-10 3-17 3-6 6-9 11-15 9-8 16-12 28-17 28-11 62-14 94-7 24 5 51 18 65 32 5 5 10 14 13 20 1 3 3 8 4 12 6 14 22 29 45 42 22 11 43 19 58 20 7 0 11 0 25-3 25-6 41-8 67-9 33-1 56 2 88 9 8 2 16 3 20 3 13 0 33-7 54-17 29-15 46-32 53-51 5-13 7-17 15-25 11-12 28-22 49-29 44-14 97-9 129 13 8 5 17 16 21 23 2 5 3 7 3 16 0 9-1 10-4 17-7 14-21 26-39 35-25 11-40 15-84 17-13 1-21 2-26 3-22 5-57 22-78 36-19 13-29 27-32 44-1 5-1 10-1 11 0 2 1 1 3-4 4-9 10-18 16-23 4-4 7-6 8-6 2 0 6 11 8 21 2 18-5 36-21 52-22 22-57 38-103 48-23 4-31 11-36 27-3 15 2 23 22 31 13 5 25 15 30 23 2 6 3 15 0 21-6 14-29 27-58 32-16 3-41 3-56 0zM534 825c8-3 13-7 14-12 0-3 0-3-4-7-6-6-14-8-29-9-10 0-13 0-20 2-18 4-24 14-14 21 8 6 18 8 34 8 9-1 13-1 19-3zM538 683c28-5 47-18 47-33 0-10-6-18-21-25-14-7-25-9-47-10-27 0-42 2-59 11-9 4-17 13-19 19-3 14 8 26 31 33 6 3 20 5 31 6 7 1 27 0 37-1zM220 499c12-2 23-9 25-16 3-10-6-20-23-26-11-4-19-5-34-5-12 1-14 1-22 4-10 3-16 8-18 13-5 12 5 22 27 29 13 4 30 5 45 1zM844 499c14-2 28-11 32-18 3-6 1-14-6-19-9-7-23-10-42-10-13 1-16 1-24 4-34 11-34 34-2 43 10 2 31 3 42 0zM392 502c-11-4-27-11-27-12 0-2 15-11 26-16 12-6 25-11 38-14 11-4 31-8 34-8 1 0 3 0 4-1 0 0 1-9 2-23 1-12 1-26 2-30 0-9 2-39 3-52 3-72 7-139 8-141 0-1 5-7 10-12l9-10 11 0 11 0 8 9c5 4 9 10 10 11 2 4 2 0 9 134 6 110 6 113 7 114 0 0 4 1 8 2 25 4 53 13 73 23 8 4 22 14 21 14-2 3-23 11-31 14-8 2-12 1-23-2-11-3-35-8-49-10-14-2-74-2-88 0-14 2-32 5-47 9-7 2-14 4-16 4-3 0-9-1-13-3zM383 457c0-4 4-38 5-43 1-7 3-11 12-20 4-4 8-8 8-8 0-1 2-16 4-35 2-18 5-41 6-50 3-26 2-23 16-34 12-10 12-10 17-7 3 2 6 4 7 5l2 2-3 46c-2 26-4 58-4 73-1 14-2 30-3 36 0 6-1 11-1 12-1 1-3 2-5 3-10 1-43 13-56 20-5 2-5 2-5 0zM625 452c-11-6-32-12-47-16l-4-1-1-22c-1-12-2-29-2-37-1-9-1-20-1-25-2-24-2-29-3-42-1-8-1-18-1-23l0-8 9-4c5-2 9-3 10-3 4 0 8 3 18 14 9 10 10 12 11 16 1 7 3 20 10 91 3 30 5 57 6 58 0 3 0 3-5 2z"/>
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-heading font-semibold text-base">neostronghold</span>
                  <span className="text-xs text-muted-foreground">Smart Home</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenu>
            {navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                {item.items ? (
                  <>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                        <ChevronDown className="ml-auto" />
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      {item.items.map((sub) => (
                        <SidebarMenuSubItem key={sub.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={sub.url}>
                              <span>{sub.title}</span>
                              {sub.badge && (
                                <Badge variant="outline" className="ml-auto text-xs">
                                  {sub.badge}
                                </Badge>
                              )}
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </>
                ) : (
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src="" alt="User" />
                    <AvatarFallback className="rounded-lg">NS</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">User</span>
                    <span className="truncate text-xs">user@home</span>
                  </div>
                  <ChevronDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src="" alt="User" />
                      <AvatarFallback className="rounded-lg">NS</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">User</span>
                      <span className="truncate text-xs">user@home</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Settings />
                    Profile
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
