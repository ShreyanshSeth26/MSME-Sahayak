"use client"

import { useState } from "react"
import { LanguageProvider } from "./contexts/LanguageContext"
import { OnboardingScreens } from "./components/OnboardingScreens"
import { Dashboard } from "./components/Dashboard"
import { LoanMarketplace } from "./components/LoanMarketplace"
import { AppNavigation } from "./components/AppNavigation"

export default function MSMESahayakApp() {
  const [isOnboarded, setIsOnboarded] = useState(false)
  const [currentScreen, setCurrentScreen] = useState("dashboard")

  const handleOnboardingComplete = () => {
    setIsOnboarded(true)
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "dashboard":
        return <Dashboard />
      case "loans":
        return <LoanMarketplace />
      case "profile":
        return (
          <div className="p-4 pb-20">
            <h1>Credit Profile (Coming Soon)</h1>
          </div>
        )
      case "learning":
        return (
          <div className="p-4 pb-20">
            <h1>Learning Hub (Coming Soon)</h1>
          </div>
        )
      case "notifications":
        return (
          <div className="p-4 pb-20">
            <h1>Notifications (Coming Soon)</h1>
          </div>
        )
      default:
        return <Dashboard />
    }
  }

  return (
    <LanguageProvider>
      <div className="max-w-md mx-auto bg-white min-h-screen relative">
        {!isOnboarded ? (
          <OnboardingScreens onComplete={handleOnboardingComplete} />
        ) : (
          <>
            {renderScreen()}
            <AppNavigation currentScreen={currentScreen} onScreenChange={setCurrentScreen} />
          </>
        )}
      </div>
    </LanguageProvider>
  )
}
