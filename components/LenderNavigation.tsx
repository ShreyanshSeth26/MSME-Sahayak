"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/LanguageContext"
import { Home, Users, Briefcase, BarChart3, Bell, FileText, CreditCard, TrendingUp, Shield, ChevronDown, ChevronRight, User } from 'lucide-react'

interface LenderNavigationProps {
  currentScreen: string
  onScreenChange: (screen: string) => void
}

export function LenderNavigation({ currentScreen, onScreenChange }: LenderNavigationProps) {
  const { t } = useLanguage()
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['lending'])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const serviceCategories = [
    {
      id: "lending",
      title: "Lending Operations",
      icon: CreditCard,
      items: [
        { id: "applications", label: "Loan Applications", icon: FileText },
      ],
    },
    {
      id: "analytics",
      title: "Analytics & Reports",
      icon: BarChart3,
      items: [
        { id: "analytics", label: "Risk Analytics", icon: BarChart3 },
        { id: "compliance", label: "Compliance Reports", icon: Shield },
      ],
    },
    {
      id: "management",
      title: "Account Management",
      icon: Users,
      items: [
        { id: "lender-info", label: "Lender Information", icon: User },
        { id: "notifications", label: "Notifications", icon: Bell },
      ],
    },
  ]

  return (
    <div className="w-80 bg-yellow-400 min-h-screen p-4 animate-slide-in-left">
      <Card className="mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-4">
          <h2 className="text-lg font-bold text-blue-900 mb-4 break-words">Lender Portal</h2>
          <div className="space-y-2">
            {serviceCategories.map((category, index) => (
              <div key={category.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="flex items-center justify-between w-full text-blue-800 font-semibold mb-2 p-2 rounded hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <category.icon className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm break-words leading-tight">{category.title}</span>
                  </div>
                  {expandedCategories.includes(category.id) ? (
                    <ChevronDown className="h-4 w-4 flex-shrink-0 transform transition-transform duration-200" />
                  ) : (
                    <ChevronRight className="h-4 w-4 flex-shrink-0 transform transition-transform duration-200" />
                  )}
                </button>
                <div className={`ml-6 space-y-1 overflow-hidden transition-all duration-300 ${
                  expandedCategories.includes(category.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {category.items.map((item, itemIndex) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      size="sm"
                      className={`w-full justify-start text-left h-auto py-2 px-3 transition-all duration-200 transform hover:scale-105 animate-fade-in ${
                        currentScreen === item.id
                          ? "bg-blue-100 text-blue-900 font-semibold shadow-md"
                          : "text-blue-800 hover:bg-blue-50"
                      }`}
                      style={{ animationDelay: `${itemIndex * 50}ms` }}
                      onClick={() => onScreenChange(item.id)}
                    >
                      <item.icon className="h-3 w-3 mr-2 flex-shrink-0" />
                      <span className="text-xs break-words leading-tight min-w-0">{item.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lender Stats */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
        <CardContent className="p-4">
          <h3 className="font-bold text-blue-900 mb-3 break-words">Your Lending Stats</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center p-2 rounded hover:bg-blue-50 transition-colors duration-200">
              <span className="text-blue-800 break-words min-w-0 flex-1 mr-2">Active Loans</span>
              <span className="font-bold text-blue-900 flex-shrink-0 animate-counter">47</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded hover:bg-blue-50 transition-colors duration-200">
              <span className="text-blue-800 break-words min-w-0 flex-1 mr-2">Total Disbursed</span>
              <span className="font-bold text-blue-900 flex-shrink-0 animate-counter">₹2.3 Cr</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded hover:bg-blue-50 transition-colors duration-200">
              <span className="text-blue-800 break-words min-w-0 flex-1 mr-2">Default Rate</span>
              <span className="font-bold text-green-600 flex-shrink-0 animate-counter">2.1%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
