import { HeroSection } from "@/components/landing/hero-section"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">WealthGuard</span>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <nav className="hidden md:flex gap-4">
            <Link href="#features" className="text-sm font-medium">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium">
              Pricing
            </Link>
            <Link href="#about" className="text-sm font-medium">
              About
            </Link>
          </nav>

          <ThemeToggle />

          <Button asChild variant="default" size="sm">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />

        {/* Add more sections here */}
      </main>

      <footer className="border-t bg-background py-6 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-semibold">WealthGuard</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2023 WealthGuard. All rights reserved.
          </div>

          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
