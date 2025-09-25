"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  CreditCard,
  DollarSign,
  Home,
  PieChart,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
  Wallet,
  History,
  Shield,
  FileText,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Accounts",
      icon: Wallet,
      href: "/accounts",
      active: pathname === "/accounts",
    },
    {
      label: "Investments",
      icon: DollarSign,
      href: "/investments",
      active: pathname === "/investments",
    },
    {
      label: "Transactions",
      icon: History,
      href: "/transactions",
      active: pathname === "/transactions",
    },
    {
      label: "Analytics",
      icon: BarChart3,
      href: "/analytics",
      active: pathname === "/analytics",
    },
    {
      label: "Budget",
      icon: CreditCard,
      href: "/budget",
      active: pathname === "/budget",
    },
    {
      label: "Reports",
      icon: FileText,
      href: "/reports",
      active: pathname === "/reports",
    },
    {
      label: "Security",
      icon: Shield,
      href: "/security",
      active: pathname === "/security",
    },
    {
      label: "Users",
      icon: Users,
      href: "/users",
      active: pathname === "/users",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
      active: pathname === "/settings",
    },
  ]

  return (
    <div className={cn(className, "relative flex flex-col h-full")}>
      <div className="py-4 pl-2 pr-1">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 font-bold text-xl",
              isCollapsed ? "justify-center" : "px-2"
            )}
          >
            <Shield className="h-6 w-6 text-primary" />
            {!isCollapsed && <span>WealthGuard</span>}
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto h-8 w-8 p-0"
            onClick={toggleSidebar}
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      <div className="space-y-1 py-2 flex-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center py-3 px-3 text-sm font-medium rounded-lg hover:bg-accent hover:text-accent-foreground",
              route.active ? "bg-accent text-accent-foreground" : "transparent",
              isCollapsed ? "justify-center" : ""
            )}
          >
            <route.icon className={cn("h-5 w-5", route.active ? "text-primary" : "text-muted-foreground")} />
            {!isCollapsed && <span className="ml-3">{route.label}</span>}
          </Link>
        ))}
      </div>
    </div>
  )
}
