"use client"
import { Home, CreditCard, User, BookOpen, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/LanguageContext"

interface AppNavigationProps {
  currentScreen: string
  onScreenChange: (screen: string) => void
}

export function AppNavigation({ currentScreen, onScreenChange }: AppNavigationProps) {
  const { t } = useLanguage()

  const navItems = [
    { id: "dashboard", icon: Home, label: t("dashboard") },
    { id: "loans", icon: CreditCard, label: t("loanMarketplace") },
    { id: "profile", icon: User, label: t("creditProfile") },
    { id: "learning", icon: BookOpen, label: t("learningHub") },
    { id: "notifications", icon: Bell, label: t("notifications") },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentScreen === item.id
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
                isActive ? "text-blue-600" : "text-gray-600"
              }`}
              onClick={() => onScreenChange(item.id)}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-blue-600" : "text-gray-600"}`} />
              <span className="text-xs">{item.label}</span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
