"use client"

import { useState } from "react"
import { LanguageProvider } from "../contexts/LanguageContext"
import { OnboardingScreens } from "../components/OnboardingScreens"
import { Dashboard } from "../components/Dashboard"
import { LoanMarketplace } from "../components/LoanMarketplace"
import { CreditProfile } from "../components/CreditProfile"
import { LearningHub } from "../components/LearningHub"
import { Notifications } from "../components/Notifications"
import { DelhiGovernmentSchemes } from "../components/DelhiGovernmentSchemes"
import { SmartSahayak } from "../components/SmartSahayak"
import { GovernmentHeader } from "../components/GovernmentHeader"
import { GovernmentNavigation } from "../components/GovernmentNavigation"
import LenderDashboard from "../components/LenderDashboard"
import { LenderNavigation } from "../components/LenderNavigation"

export default function MSMESahayakApp() {
  const [isOnboarded, setIsOnboarded] = useState(false)
  const [currentScreen, setCurrentScreen] = useState("dashboard")
  const [userRole, setUserRole] = useState<"msme" | "lender" | null>(null)

  const handleOnboardingComplete = (role: "msme" | "lender") => {
    setUserRole(role)
    setIsOnboarded(true)
    // Set default screen based on role
    if (role === "lender") {
      setCurrentScreen("dashboard")
    }
  }

  const renderMSMEScreen = () => {
    switch (currentScreen) {
      case "dashboard":
        return <Dashboard />
      case "loans":
        return <LoanMarketplace />
      case "profile":
        return <CreditProfile />
      case "learning":
        return <LearningHub />
      case "notifications":
        return <Notifications />
      case "schemes":
        return <DelhiGovernmentSchemes />
      case "chatbot":
        return <SmartSahayak />
      default:
        return <Dashboard />
    }
  }

  const renderLenderScreen = () => {
    return <LenderDashboard activeTab={currentScreen} onNavigate={setCurrentScreen} />
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-100">
        {!isOnboarded ? (
          <OnboardingScreens onComplete={handleOnboardingComplete} />
        ) : (
          <>
            <GovernmentHeader />
            <div className="flex">
              {userRole === "msme" ? (
                <GovernmentNavigation currentScreen={currentScreen} onScreenChange={setCurrentScreen} />
              ) : (
                <LenderNavigation currentScreen={currentScreen} onScreenChange={setCurrentScreen} />
              )}
              <div className="flex-1 transition-all duration-300 ease-in-out">
                {userRole === "msme" ? renderMSMEScreen() : renderLenderScreen()}
              </div>
            </div>
          </>
        )}
      </div>
    </LanguageProvider>
  )
}
