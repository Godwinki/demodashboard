import { DashboardLayout } from "@/components/layout/dashboard-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WealthGuard Dashboard",
  description: "Manage your finances with WealthGuard",
}

export default function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  )
}
