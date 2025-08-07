"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useLanguage } from "../contexts/LanguageContext"
import { Search, CreditCard, TrendingUp, Building2, Users, FileText, Award, Calculator, MessageCircle, Bell, ArrowRight, ChevronLeft, ChevronRight, Sparkles, IndianRupee, Target, BarChart3, Globe } from 'lucide-react'

export function Dashboard() {
  const { t } = useLanguage()
  const [currentSchemeIndex, setCurrentSchemeIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  const featuredSchemes = [
    {
      title: t("pmMudraYojana"),
      description: t("pmMudraDesc"),
      achievement: "₹4.6 Lakh Crore",
      achievementLabel: "Loans Sanctioned",
      beneficiaries: "38.5 Crore",
      icon: "🏪",
      bgImage: "/placeholder.svg?height=300&width=500&text=MUDRA+Scheme",
    },
    {
      title: t("standUpIndia"),
      description: t("standUpDesc"),
      achievement: "1.33 Lakh",
      achievementLabel: "Loans Approved",
      beneficiaries: "SC/ST/Women",
      icon: "🚀",
      bgImage: "/placeholder.svg?height=300&width=500&text=Stand+Up+India",
    },
    {
      title: t("creditGuarantee"),
      description: t("creditGuaranteeDesc"),
      achievement: "₹8.21 Lakh Crore",
      achievementLabel: "Credit Guaranteed",
      beneficiaries: "74.5 Lakh MSMEs",
      icon: "🛡️",
      bgImage: "/placeholder.svg?height=300&width=500&text=Credit+Guarantee",
    },
  ]

  // Auto-rotate schemes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSchemeIndex((prev) => (prev + 1) % featuredSchemes.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [featuredSchemes.length])

  const nextScheme = () => {
    setCurrentSchemeIndex((prev) => (prev + 1) % featuredSchemes.length)
  }

  const prevScheme = () => {
    setCurrentSchemeIndex((prev) => (prev - 1 + featuredSchemes.length) % featuredSchemes.length)
  }

  const currentScheme = featuredSchemes[currentSchemeIndex]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Hero Banner Section - Government Style */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">भा</span>
                </div>
              </div>
              <div className="text-left">
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                  {t("msmePortal")}
                </h1>
                <p className="text-xl text-orange-100">
                  {t("msmeSubtitle")}
                </p>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-orange-100 mb-8 leading-relaxed">
                {t("oneStopPlatform")}
              </p>
              
              {/* Search Bar - Government Style */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="h-6 w-6 text-red-600" />
                  <h3 className="text-xl font-bold text-gray-800">{t("searchGovernmentService")}</h3>
                </div>
                <div className="flex gap-3">
                  <Input
                    placeholder={t("typeKeyword")}
                    className="flex-1 h-12 text-lg border-2 border-blue-200 focus:border-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Button>
                </div>
                <Button variant="link" className="text-blue-600 p-0 mt-2 font-medium">
                  {t("advancedSearch")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Scheme Showcase - Government Dashboard Style */}
      <div className="bg-white shadow-lg border-t-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {currentScheme.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {currentScheme.description}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Beneficiaries: {currentScheme.beneficiaries}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Pan-India Implementation</span>
                </div>
              </div>
            </div>

            {/* Center Achievement Display */}
            <div className="lg:col-span-1 relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-4">{currentScheme.icon}</div>
                <div className="text-4xl font-bold mb-2">
                  {currentScheme.achievement}
                </div>
                <div className="text-red-100 text-lg font-medium">
                  {currentScheme.achievementLabel}
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">{currentScheme.icon}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Did you know?
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This scheme has transformed the lives of millions of entrepreneurs across India, 
                  creating employment opportunities and boosting economic growth.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Scheme Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevScheme}
              className="border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-2">
              {featuredSchemes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSchemeIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSchemeIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <span className="text-gray-600 font-medium">
              {currentSchemeIndex + 1}/{featuredSchemes.length}
            </span>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextScheme}
              className="border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Quick Services */}
          <div className="lg:col-span-3 space-y-8">
            {/* Government Style Service Cards */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-blue-500 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-white" />
                </div>
                {t("quickServices")}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: CreditCard, label: t("applyLoan"), color: "from-blue-500 to-blue-600", desc: "Apply for business loans" },
                  { icon: FileText, label: t("uploadDocs"), color: "from-green-500 to-green-600", desc: "Upload documents" },
                  { icon: Calculator, label: t("emiCalculator"), color: "from-orange-500 to-orange-600", desc: "Calculate EMI" },
                  { icon: MessageCircle, label: t("getHelp"), color: "from-purple-500 to-purple-600", desc: "Get assistance" },
                ].map((service, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 bg-gradient-to-br from-gray-50 to-white">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">{service.label}</h3>
                      <p className="text-sm text-gray-600">{service.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Profile Dashboard */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-green-500 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-white" />
                </div>
                {t("businessProfileTitle")}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    value: "720", 
                    label: t("creditScore"), 
                    badge: t("good"), 
                    color: "text-green-600", 
                    bgColor: "from-green-50 to-green-100",
                    icon: Target
                  },
                  { 
                    value: "₹5L", 
                    label: t("loanEligibility"), 
                    badge: t("preApproved"), 
                    color: "text-blue-600", 
                    bgColor: "from-blue-50 to-blue-100",
                    icon: IndianRupee
                  },
                  { 
                    value: "85%", 
                    label: t("profileComplete"), 
                    badge: t("almostDone"), 
                    color: "text-orange-600", 
                    bgColor: "from-orange-50 to-orange-100",
                    icon: Users
                  },
                ].map((stat, index) => (
                  <div key={index} className={`bg-gradient-to-br ${stat.bgColor} rounded-xl p-6 text-center border border-gray-100`}>
                    <div className="flex justify-center mb-4">
                      <div className={`w-12 h-12 ${stat.color} bg-white rounded-full flex items-center justify-center shadow-md`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <p className="text-gray-700 font-medium mb-2">{stat.label}</p>
                    <Badge className="bg-white text-gray-700 border border-gray-200">{stat.badge}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Latest Updates */}
            <Card className="shadow-lg border-t-4 border-red-500">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Bell className="h-5 w-5 text-red-500" />
                  {t("latestUpdates")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: t("loanApproved"), desc: t("loanApprovedDesc"), time: `2 ${t("hoursAgo")}`, color: "border-green-400 bg-green-50" },
                    { title: t("documentRequired"), desc: t("documentRequiredDesc"), time: `1 ${t("dayAgo")}`, color: "border-yellow-400 bg-yellow-50" },
                    { title: t("newSchemeAvailable"), desc: t("newSchemeDesc"), time: `3 ${t("daysAgo")}`, color: "border-blue-400 bg-blue-50" },
                  ].map((notification, index) => (
                    <div key={index} className={`border-l-4 ${notification.color} pl-4 py-3 rounded-r-lg`}>
                      <p className="font-semibold text-gray-800 text-sm">{notification.title}</p>
                      <p className="text-xs text-gray-600 mt-1">{notification.desc}</p>
                      <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Government Initiatives */}
            <Card className="shadow-lg border-t-4 border-orange-500">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Globe className="h-5 w-5 text-orange-500" />
                  Government Initiatives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-bold text-orange-900 mb-2">{t("digitalIndia")}</h4>
                    <p className="text-sm text-orange-800">{t("digitalIndiaDesc")}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-900 mb-2">{t("atmanirbharBharat")}</h4>
                    <p className="text-sm text-green-800">{t("atmanirbharDesc")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card className="shadow-lg border-t-4 border-purple-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-gray-800">{t("needHelp")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {t("chatWithSahayak")}
                </Button>
                <Button variant="outline" className="w-full border-purple-300 text-purple-700 hover:bg-purple-50">
                  📞 {t("callHelpline")}: 1800-180-6763
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Statistics Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "6.3 Cr+", label: t("activeMsmes"), icon: "🏭" },
              { value: "₹2.8L Cr", label: t("loansDispersed"), icon: "💰" },
              { value: "150+", label: t("schemesAvailable"), icon: "📋" },
              { value: "12,965", label: t("servicesFromStates"), icon: "🌐" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
