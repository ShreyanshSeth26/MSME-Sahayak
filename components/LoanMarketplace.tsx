"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "../contexts/LanguageContext"
import { CreditCard, Users, FileText, Calculator, ArrowRight, Star, Clock, Shield } from 'lucide-react'
import { CreditRiskAssessment } from "./CreditRiskAssessment"

export function LoanMarketplace() {
  const { t } = useLanguage()
  const [loanAmount, setLoanAmount] = useState([300000])
  const [interestRate, setInterestRate] = useState([12])
  const [tenure, setTenure] = useState([24])

  const calculateEMI = (principal: number, rate: number, months: number) => {
    const monthlyRate = rate / 12 / 100
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    return Math.round(emi)
  }

  const userRiskScore = 28 // This would come from the risk assessment
  const baseRates = {
    "HDFC Bank": 9.5,
    "ICICI Bank": 10.2,
    "Axis Bank": 11.8
  }

  const preApprovedOffers = [
    {
      id: 1,
      lender: "HDFC Bank",
      amount: 500000,
      rate: baseRates["HDFC Bank"] + (userRiskScore / 100) * 3, // Personalized rate
      baseRate: baseRates["HDFC Bank"],
      riskPremium: (userRiskScore / 100) * 3,
      tenure: 36,
      riskBand: "green",
      processingFee: 1,
      approval: "24 hours",
    },
    {
      id: 2,
      lender: "ICICI Bank",
      amount: 300000,
      rate: baseRates["ICICI Bank"] + (userRiskScore / 100) * 3,
      baseRate: baseRates["ICICI Bank"],
      riskPremium: (userRiskScore / 100) * 3,
      tenure: 24,
      riskBand: "green",
      processingFee: 1.5,
      approval: "48 hours",
    },
    {
      id: 3,
      lender: "Axis Bank",
      amount: 400000,
      rate: baseRates["Axis Bank"] + (userRiskScore / 100) * 3,
      baseRate: baseRates["Axis Bank"],
      riskPremium: (userRiskScore / 100) * 3,
      tenure: 30,
      riskBand: "yellow",
      processingFee: 2,
      approval: "3-5 days",
    },
  ]

  const p2pLenders = [
    {
      id: 1,
      name: "Amit Sharma",
      rating: 4.8,
      amount: 200000,
      rate: 14.5,
      tenure: 18,
      riskBand: "yellow",
    },
    {
      id: 2,
      name: "Priya Investments",
      rating: 4.6,
      amount: 150000,
      rate: 13.2,
      tenure: 12,
      riskBand: "green",
    },
  ]

  const getRiskColor = (band: string) => {
    switch (band) {
      case "green":
        return "bg-green-100 text-green-800 border-green-200"
      case "yellow":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "red":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b p-4">
        <h1 className="text-xl font-bold">{t("loanMarketplace")}</h1>
        <p className="text-gray-600">Find the best loan offers for your business</p>
      </div>

      <div className="p-4">
        {/* EMI Calculator Widget */}
        <Card className="mb-6 border-2 border-blue-200 bg-blue-50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="h-5 w-5" />
              {t("emiCalculator")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">{t("loanAmount")}</label>
                <span className="text-sm font-bold">₹{loanAmount[0].toLocaleString()}</span>
              </div>
              <Slider
                value={loanAmount}
                onValueChange={setLoanAmount}
                max={1000000}
                min={50000}
                step={25000}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">{t("interestRate")}</label>
                <span className="text-sm font-bold">{interestRate[0]}%</span>
              </div>
              <Slider
                value={interestRate}
                onValueChange={setInterestRate}
                max={25}
                min={8}
                step={0.5}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">{t("tenure")}</label>
                <span className="text-sm font-bold">{tenure[0]} months</span>
              </div>
              <Slider value={tenure} onValueChange={setTenure} max={60} min={6} step={6} className="w-full" />
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <div className="text-center">
                <p className="text-sm text-gray-600">Monthly EMI</p>
                <p className="text-2xl font-bold text-blue-600">
                  ₹{calculateEMI(loanAmount[0], interestRate[0], tenure[0]).toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loan Tabs */}
        <Tabs defaultValue="preapproved" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="preapproved" className="text-xs">
              <CreditCard className="h-4 w-4 mr-1" />
              Pre-approved
            </TabsTrigger>
            <TabsTrigger value="p2p" className="text-xs">
              <Users className="h-4 w-4 mr-1" />
              P2P Lenders
            </TabsTrigger>
            <TabsTrigger value="invoice" className="text-xs">
              <FileText className="h-4 w-4 mr-1" />
              Invoice
            </TabsTrigger>
            <TabsTrigger value="risk" className="text-xs">
              <Shield className="h-4 w-4 mr-1" />
              Risk Score
            </TabsTrigger>
          </TabsList>

          <TabsContent value="preapproved" className="space-y-4 mt-4">
            {preApprovedOffers.map((offer) => (
              <Card key={offer.id} className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg">{offer.lender}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={getRiskColor(offer.riskBand)}>
                          {offer.riskBand === "green"
                            ? "Low Risk"
                            : offer.riskBand === "yellow"
                              ? "Medium Risk"
                              : "High Risk"}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gray-500" />
                          <span className="text-xs text-gray-600">{offer.approval}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">₹{(offer.amount / 100000).toFixed(1)}L</p>
                      <p className="text-sm text-gray-600">Max Amount</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-blue-600">{offer.rate.toFixed(1)}%</p>
                      <p className="text-xs text-gray-600">Your Rate</p>
                      <div className="text-xs text-gray-500 mt-1">
                        Base: {offer.baseRate}% + Risk: {offer.riskPremium.toFixed(1)}%
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{offer.tenure}m</p>
                      <p className="text-xs text-gray-600">Max Tenure</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{offer.processingFee}%</p>
                      <p className="text-xs text-gray-600">Processing Fee</p>
                    </div>
                  </div>

                  {/* Rate Comparison */}
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Market Rate:</span>
                      <span className="text-gray-800">13.2%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Your Rate:</span>
                      <span className="font-bold text-green-600">{offer.rate.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-1 pt-1 border-t border-blue-200">
                      <span className="text-green-600 font-medium">You Save:</span>
                      <span className="font-bold text-green-600">{(13.2 - offer.rate).toFixed(1)}%</span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    {t("applyNow")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="p2p" className="space-y-4 mt-4">
            {p2pLenders.map((lender) => (
              <Card key={lender.id} className="border-l-4 border-l-purple-500">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg">{lender.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{lender.rating}</span>
                        </div>
                        <Badge className={getRiskColor(lender.riskBand)}>
                          {lender.riskBand === "green" ? "Verified" : "New Lender"}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600">₹{(lender.amount / 100000).toFixed(1)}L</p>
                      <p className="text-sm text-gray-600">Available</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-purple-600">{lender.rate}%</p>
                      <p className="text-xs text-gray-600">Interest Rate</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{lender.tenure}m</p>
                      <p className="text-xs text-gray-600">Tenure</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    Connect with Lender
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="invoice" className="space-y-4 mt-4">
            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-4">
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Invoice Financing</h3>
                  <p className="text-gray-600 mb-4">Get instant funding against your pending invoices</p>
                  <Button className="bg-orange-500 hover:bg-orange-600">Upload Invoice</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risk" className="space-y-4 mt-4">
            <CreditRiskAssessment />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
