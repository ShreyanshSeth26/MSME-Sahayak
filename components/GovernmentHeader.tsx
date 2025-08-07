"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/LanguageContext"
import { Search, Plus, Minus, Type, Menu, X } from 'lucide-react'

export function GovernmentHeader() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [fontSize, setFontSize] = useState(16)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const increaseFontSize = () => {
    if (fontSize < 20) {
      setFontSize(fontSize + 2)
      document.documentElement.style.fontSize = `${fontSize + 2}px`
    }
  }

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2)
      document.documentElement.style.fontSize = `${fontSize - 2}px`
    }
  }

  const resetFontSize = () => {
    setFontSize(16)
    document.documentElement.style.fontSize = '16px'
  }

  return (
    <div className={`bg-blue-800 text-white transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Accessibility Bar */}
      <div className="bg-blue-900 px-4 py-2 animate-fade-in">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <button className="hover:text-blue-200 transition-colors duration-200">
              {t("skipToContent")}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-blue-800 rounded px-2 py-1">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-blue-700 p-1 transition-all duration-200 hover:scale-110"
                onClick={increaseFontSize}
              >
                <Plus className="h-3 w-3" />
                <span className="ml-1 text-xs">A</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-blue-700 p-1 transition-all duration-200 hover:scale-110"
                onClick={resetFontSize}
              >
                <Type className="h-3 w-3" />
                <span className="ml-1 text-xs">A</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-blue-700 p-1 transition-all duration-200 hover:scale-110"
                onClick={decreaseFontSize}
              >
                <Minus className="h-3 w-3" />
                <span className="ml-1 text-xs">A</span>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-blue-700 transition-all duration-200 hover:scale-105 px-3 py-1 rounded"
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
            >
              {language === "en" ? t("hindi") : t("english")}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 animate-slide-in-left">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg animate-pulse">भा</span>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl lg:text-3xl font-bold break-words leading-tight">
                {t("msmePortal")}
              </h1>
              <p className="text-blue-200 text-base lg:text-lg break-words leading-tight">
                {t("msmeSubtitle")}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4 animate-slide-in-right">
            <div className="text-right">
              <p className="text-sm text-blue-200 break-words">{t("initiativeUnder")}</p>
              <div className="bg-white px-3 py-1 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
                <span className="text-blue-800 font-bold text-sm break-words">MSME.gov.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
