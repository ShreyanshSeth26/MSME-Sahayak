"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "../contexts/LanguageContext"
import { ChevronRight, Check, Building2 } from 'lucide-react'

interface OnboardingScreensProps {
  onComplete: (role: "msme" | "lender") => void
}

export function OnboardingScreens({ onComplete }: OnboardingScreensProps) {
  const { language, setLanguage, t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    role: "",
    mobile: "",
    otp: "",
    aadhaar: "",
    pan: "",
    businessName: "",
    sector: "",
    location: "",
    turnover: "",
  })

  const steps = [t("selectLanguage"), t("selectRole"), t("mobileVerification"), t("kycDetails"), t("businessProfile")]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete(formData.role as "msme" | "lender")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{t("selectLanguage")}</h2>
              <p className="text-gray-600">Choose your preferred language / अपनी पसंदीदा भाषा चुनें</p>
            </div>
            <div className="space-y-4">
              <Button
                variant={language === "en" ? "default" : "outline"}
                className={`w-full h-16 text-lg relative ${
                  language === "en" ? "bg-blue-800 hover:bg-blue-900" : "border-blue-800 text-blue-800"
                }`}
                onClick={() => setLanguage("en")}
              >
                <span className="mr-2">🇺🇸</span>
                {t("english")}
                {language === "en" && <Check className="ml-auto h-5 w-5" />}
              </Button>
              <Button
                variant={language === "hi" ? "default" : "outline"}
                className={`w-full h-16 text-lg relative ${
                  language === "hi" ? "bg-blue-800 hover:bg-blue-900" : "border-blue-800 text-blue-800"
                }`}
                onClick={() => setLanguage("hi")}
              >
                <span className="mr-2">🇮🇳</span>
                {t("hindi")}
                {language === "hi" && <Check className="ml-auto h-5 w-5" />}
              </Button>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{t("selectRole")}</h2>
              <p className="text-gray-600">What describes you best?</p>
            </div>
            <div className="space-y-4">
              <Button
                variant={formData.role === "msme" ? "default" : "outline"}
                className={`w-full h-20 text-lg flex-col relative ${
                  formData.role === "msme" ? "bg-blue-800 hover:bg-blue-900" : "border-blue-800 text-blue-800"
                }`}
                onClick={() => setFormData({ ...formData, role: "msme" })}
              >
                <span className="text-2xl mb-1">🏪</span>
                {t("msmeOwner")}
                {formData.role === "msme" && <Check className="absolute top-2 right-2 h-5 w-5" />}
              </Button>
              <Button
                variant={formData.role === "lender" ? "default" : "outline"}
                className={`w-full h-20 text-lg flex-col relative ${
                  formData.role === "lender" ? "bg-blue-800 hover:bg-blue-900" : "border-blue-800 text-blue-800"
                }`}
                onClick={() => setFormData({ ...formData, role: "lender" })}
              >
                <span className="text-2xl mb-1">💰</span>
                {t("lender")}
                {formData.role === "lender" && <Check className="absolute top-2 right-2 h-5 w-5" />}
              </Button>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{t("mobileVerification")}</h2>
              <p className="text-gray-600">{t("enterMobileOtp")}</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="mobile" className="text-blue-900 font-semibold">{t("mobileNumber")}</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="h-12 text-lg border-blue-300 focus:border-blue-800"
                />
              </div>
              {formData.mobile && (
                <div>
                  <Label htmlFor="otp" className="text-blue-900 font-semibold">{t("enterOtp")}</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder={t("enterSixDigitOtp")}
                    value={formData.otp}
                    onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                    className="h-12 text-lg text-center tracking-widest border-blue-300 focus:border-blue-800"
                    maxLength={6}
                  />
                </div>
              )}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{t("kycDetails")}</h2>
              <p className="text-gray-600">{t("provideIdentityDocs")}</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="aadhaar" className="text-blue-900 font-semibold">{t("aadhaarNumber")}</Label>
                <Input
                  id="aadhaar"
                  type="text"
                  placeholder="XXXX XXXX XXXX"
                  value={formData.aadhaar}
                  onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
                  className="h-12 text-lg border-blue-300 focus:border-blue-800"
                />
              </div>
              <div>
                <Label htmlFor="pan" className="text-blue-900 font-semibold">{t("panNumber")}</Label>
                <Input
                  id="pan"
                  type="text"
                  placeholder="ABCDE1234F"
                  value={formData.pan}
                  onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
                  className="h-12 text-lg uppercase border-blue-300 focus:border-blue-800"
                />
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{t("businessProfile")}</h2>
              <p className="text-gray-600">{t("tellAboutBusiness")}</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="businessName" className="text-blue-900 font-semibold">{t("businessName")}</Label>
                <Input
                  id="businessName"
                  type="text"
                  placeholder={t("enterBusinessName")}
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="h-12 border-blue-300 focus:border-blue-800"
                />
              </div>
              <div>
                <Label htmlFor="sector" className="text-blue-900 font-semibold">{t("businessSector")}</Label>
                <select
                  id="sector"
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  className="w-full h-12 px-3 border border-blue-300 rounded-md focus:border-blue-800"
                >
                  <option value="">{t("selectSector")}</option>
                  <option value="manufacturing">{t("manufacturing")}</option>
                  <option value="trading">{t("trading")}</option>
                  <option value="services">{t("services")}</option>
                  <option value="retail">{t("retail")}</option>
                </select>
              </div>
              <div>
                <Label htmlFor="location" className="text-blue-900 font-semibold">{t("location")}</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="Delhi, India"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="h-12 border-blue-300 focus:border-blue-800"
                />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Government Header */}
      <div className="bg-blue-800 text-white p-4">
        <div className="max-w-md mx-auto flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">भा</span>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold">{t("msmePortal")}</h1>
            <p className="text-blue-200 text-sm">{t("registrationProcess")}</p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-blue-800 mb-2 font-semibold">
            <span>
              {t("step")} {currentStep + 1} {t("of")} {steps.length}
            </span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <Progress value={((currentStep + 1) / steps.length) * 100} className="h-3 bg-blue-100" />
        </div>

        {/* Step Content */}
        <Card className="mb-8 border-blue-200">
          <CardContent className="p-6">{renderStep()}</CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          {currentStep > 0 && (
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex-1 h-12 border-blue-800 text-blue-800 hover:bg-blue-50"
            >
              {t("back")}
            </Button>
          )}
          <Button
            onClick={handleNext}
            className="flex-1 h-12 bg-blue-800 hover:bg-blue-900"
            disabled={
              (currentStep === 0 && !language) ||
              (currentStep === 1 && !formData.role) ||
              (currentStep === 2 && (!formData.mobile || !formData.otp)) ||
              (currentStep === 3 && (!formData.aadhaar || !formData.pan)) ||
              (currentStep === 4 && (!formData.businessName || !formData.sector))
            }
          >
            {currentStep === steps.length - 1 ? t("submit") : t("next")}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
