"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  Home, 
  BookOpen, 
  Wrench, 
  FlaskConical, 
  Briefcase,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/survival-guide", label: "Survival Guide", icon: BookOpen },
  { href: "/tools-hub", label: "Tools Hub", icon: Wrench },
  { href: "/practice-lab", label: "Practice Lab", icon: FlaskConical },
  { href: "/case-studies", label: "Case Studies", icon: FileText },
  { href: "/career-toolkit", label: "Career Toolkit", icon: Briefcase },
];

export function Sidebar() {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/onboarding") {
    return null; // Don't show sidebar on landing/onboarding
  }

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-card border-r">
      <div className="h-full px-4 py-6 overflow-y-auto bg-card flex flex-col">
        <Link href="/dashboard" className="flex items-center ps-2.5 mb-8">
          <span className="self-center text-xl font-bold whitespace-nowrap text-primary">
            Pranavi BA Lab
          </span>
        </Link>
        <ul className="space-y-2 font-medium flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center p-3 rounded-lg group relative",
                    isActive 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 bg-accent rounded-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon className="w-5 h-5 relative z-10" />
                  <span className="ms-3 relative z-10">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
