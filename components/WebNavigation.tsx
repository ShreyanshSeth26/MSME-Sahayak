"use client"
import { Home, CreditCard, User, BookOpen, Bell, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/LanguageContext"
import { useState } from "react"

interface WebNavigationProps {
  currentScreen: string
  onScreenChange: (screen: string) => void
  isMobile?: boolean
}

export function WebNavigation({ currentScreen, onScreenChange, isMobile = false }: WebNavigationProps) {
  const { t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "dashboard", icon: Home, label: t("dashboard") },
    { id: "loans", icon: CreditCard, label: t("loanMarketplace") },
    { id: "profile", icon: User, label: t("creditProfile") },
    { id: "learning", icon: BookOpen, label: t("learningHub") },
    { id: "notifications", icon: Bell, label: t("notifications") },
  ]

  if (isMobile) {
    return (
      <>
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-4 py-3 z-50 lg:hidden">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">MSME Sahayak</h1>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Navigation</h2>
              </div>
              <nav className="p-4">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = currentScreen === item.id
                  return (
                    <Button
                      key={item.id}
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start mb-2 ${isActive ? "bg-blue-600 text-white" : ""}`}
                      onClick={() => {
                        onScreenChange(item.id)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {item.label}
                    </Button>
                  )
                })}
              </nav>
            </div>
          </div>
        )}

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50 lg:hidden">
          <div className="flex justify-around items-center">
            {navItems.slice(0, 4).map((item) => {
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
      </>
    )
  }

  // Desktop Sidebar
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-sm z-30">
      {/* Logo */}
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-blue-600">MSME Sahayak</h1>
        <p className="text-sm text-gray-600 mt-1">Business Growth Platform</p>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = currentScreen === item.id
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start ${
                  isActive ? "bg-blue-600 text-white hover:bg-blue-700" : "hover:bg-gray-100"
                }`}
                onClick={() => onScreenChange(item.id)}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </Button>
            )
          })}
        </div>
      </nav>

      {/* User Profile Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
            R
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm">Rajesh Sharma</p>
            <p className="text-xs text-gray-600">Sharma Electronics</p>
          </div>
        </div>
      </div>
    </div>
  )
}
