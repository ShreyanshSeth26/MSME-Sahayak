"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "../contexts/LanguageContext"
import { Shield, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, XCircle, Info, BarChart3, PieChart, Calendar, CreditCard, Building2, FileText, DollarSign, Users, Clock, Target, Zap } from 'lucide-react'

export function CreditRiskAssessment() {
  const { t } = useLanguage()
  const [riskScore, setRiskScore] = useState(0)
  const [isCalculating, setIsCalculating] = useState(false)

  // Simulate risk score calculation
  useEffect(() => {
    setIsCalculating(true)
    const timer = setTimeout(() => {
      setRiskScore(28) // Example risk score
      setIsCalculating(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const getRiskLevel = (score: number) => {
    if (score <= 20) return { level: "Very Low", color: "text-green-600", bgColor: "bg-green-100", borderColor: "border-green-500" }
    if (score <= 40) return { level: "Low", color: "text-blue-600", bgColor: "bg-blue-100", borderColor: "border-blue-500" }
    if (score <= 60) return { level: "Medium", color: "text-yellow-600", bgColor: "bg-yellow-100", borderColor: "border-yellow-500" }
    if (score <= 80) return { level: "High", color: "text-orange-600", bgColor: "bg-orange-100", borderColor: "border-orange-500" }
    return { level: "Very High", color: "text-red-600", bgColor: "bg-red-100", borderColor: "border-red-500" }
  }

  const riskLevel = getRiskLevel(riskScore)

  const riskFactors = [
    {
      category: "Payment History",
      score: 15,
      weight: 35,
      status: "excellent",
      details: "No missed payments in last 24 months",
      icon: Calendar,
      improvement: "Maintain consistent payment schedule"
    },
    {
      category: "Credit Utilization",
      score: 25,
      weight: 30,
      status: "good",
      details: "Using 65% of available credit limit",
      icon: CreditCard,
      improvement: "Reduce utilization below 50%"
    },
    {
      category: "Business Stability",
      score: 35,
      weight: 20,
      status: "fair",
      details: "Business operational for 2.5 years",
      icon: Building2,
      improvement: "Maintain consistent revenue growth"
    },
    {
      category: "Financial Health",
      score: 40,
      weight: 10,
      status: "fair",
      details: "Debt-to-income ratio at 45%",
      icon: BarChart3,
      improvement: "Improve cash flow management"
    },
    {
      category: "Documentation",
      score: 10,
      weight: 5,
      status: "excellent",
      details: "All required documents verified",
      icon: FileText,
      improvement: "Keep documents updated"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-green-600 bg-green-100"
      case "good": return "text-blue-600 bg-blue-100"
      case "fair": return "text-yellow-600 bg-yellow-100"
      case "poor": return "text-red-600 bg-red-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const riskTrends = [
    { month: "Oct 2023", score: 35, change: 0 },
    { month: "Nov 2023", score: 32, change: -3 },
    { month: "Dec 2023", score: 30, change: -2 },
    { month: "Jan 2024", score: 28, change: -2 },
  ]

  const industryComparison = {
    yourScore: 28,
    industryAverage: 42,
    bestInClass: 15,
    sector: "Electronics Retail"
  }

  return (
    <div className="space-y-6">
      {/* Risk Score Overview */}
      <Card className={`border-l-4 ${riskLevel.borderColor} ${riskLevel.bgColor}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Credit Risk Assessment</h2>
              <p className="text-gray-600">AI-powered risk evaluation for lenders</p>
            </div>
            <div className="text-right">
              <Badge className={`${riskLevel.color} ${riskLevel.bgColor} text-lg px-4 py-2`}>
                {riskLevel.level} Risk
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Risk Score Display */}
            <div className="text-center">
              {isCalculating ? (
                <div className="space-y-4">
                  <div className="w-32 h-32 mx-auto border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                  <p className="text-gray-600">Calculating risk score...</p>
                </div>
              ) : (
                <div className="relative">
                  <div className="w-40 h-40 mx-auto relative">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={riskScore <= 20 ? "#10b981" : riskScore <= 40 ? "#3b82f6" : riskScore <= 60 ? "#f59e0b" : "#ef4444"}
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${(100 - riskScore) * 2.51} 251`}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`text-4xl font-bold ${riskLevel.color}`}>{riskScore}</div>
                        <div className="text-sm text-gray-600">Risk Score</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Lower score = Lower risk for lenders</p>
                    <div className="flex justify-center space-x-4 text-xs">
                      <span className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        0-20 Very Low
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        21-40 Low
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        41-60 Medium
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        61-100 High
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Key Insights */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Key Insights</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Strong Payment History</p>
                    <p className="text-sm text-gray-600">Consistent payments boost your profile</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">High Credit Utilization</p>
                    <p className="text-sm text-gray-600">Consider reducing to below 50%</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                  <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Improving Trend</p>
                    <p className="text-sm text-gray-600">Score improved by 7 points in 4 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interest Rate Calculator Based on Risk Score */}
      <Card className="border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-600" />
            Personalized Interest Rate Range
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Rate Range Display */}
            <div className="space-y-4">
              <div className="text-center p-6 bg-white rounded-xl border-2 border-green-200">
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Your Expected Interest Rate Range</p>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {(() => {
                      const baseRate = 8.5
                      const riskPremium = (riskScore / 100) * 12 // 0-12% premium based on risk
                      const minRate = baseRate + riskPremium
                      const maxRate = minRate + 2
                      return `${minRate.toFixed(1)}% - ${maxRate.toFixed(1)}%`
                    })()}
                  </div>
                  <p className="text-sm text-gray-600">Per Annum</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Rate:</span>
                    <span className="font-medium">8.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Risk Premium:</span>
                    <span className="font-medium text-orange-600">+{((riskScore / 100) * 12).toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-gray-600">Your Range:</span>
                    <span className="font-bold text-green-600">
                      {(8.5 + (riskScore / 100) * 12).toFixed(1)}% - {(10.5 + (riskScore / 100) * 12).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Rate Comparison */}
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-gray-800 mb-3">Rate Comparison</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <span className="text-sm text-gray-700">Your Rate (Risk Score: {riskScore})</span>
                    <span className="font-bold text-green-600">{(8.5 + (riskScore / 100) * 12).toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm text-gray-700">Market Average</span>
                    <span className="font-medium text-gray-600">13.2%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                    <span className="text-sm text-gray-700">Best Available Rate</span>
                    <span className="font-medium text-blue-600">8.5%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rate Breakdown and Factors */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-gray-800 mb-3">Rate Factors</h4>
                <div className="space-y-3">
                  {[
                    { factor: "Credit History", impact: riskScore <= 20 ? "Excellent (-1.5%)" : riskScore <= 40 ? "Good (-0.5%)" : "Fair (+0.5%)", color: riskScore <= 20 ? "text-green-600" : riskScore <= 40 ? "text-blue-600" : "text-yellow-600" },
                    { factor: "Business Stability", impact: "2.5 years (+0.8%)", color: "text-yellow-600" },
                    { factor: "Loan Amount", impact: "₹3L - Standard", color: "text-gray-600" },
                    { factor: "Collateral", impact: "Unsecured (+2.0%)", color: "text-orange-600" },
                    { factor: "Sector Risk", impact: "Electronics - Low (+0.2%)", color: "text-green-600" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">{item.factor}</span>
                      <span className={`text-sm font-medium ${item.color}`}>{item.impact}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="h-4 w-4 text-green-600" />
                  <h4 className="font-semibold text-green-800">Rate Improvement Potential</h4>
                </div>
                <p className="text-sm text-green-700 mb-2">
                  By improving your risk score to 15, you could qualify for rates as low as <strong>10.3%</strong>
                </p>
                <div className="text-xs text-green-600">
                  Potential savings: ₹{Math.round(((8.5 + (riskScore / 100) * 12) - 10.3) * 300000 / 100 / 12 * 24).toLocaleString()} over 24 months
                </div>
              </div>
            </div>
          </div>

          {/* Lender Rate Ranges */}
          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 mb-4">Expected Rates from Different Lenders</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { 
                  type: "Public Sector Banks", 
                  rate: `${(8.5 + (riskScore / 100) * 12).toFixed(1)}% - ${(9.5 + (riskScore / 100) * 12).toFixed(1)}%`,
                  features: ["Lower rates", "Longer processing", "Strict criteria"],
                  color: "border-blue-500 bg-blue-50"
                },
                { 
                  type: "Private Banks", 
                  rate: `${(9.0 + (riskScore / 100) * 12).toFixed(1)}% - ${(11.0 + (riskScore / 100) * 12).toFixed(1)}%`,
                  features: ["Faster processing", "Flexible terms", "Digital process"],
                  color: "border-green-500 bg-green-50"
                },
                { 
                  type: "NBFCs", 
                  rate: `${(10.5 + (riskScore / 100) * 12).toFixed(1)}% - ${(13.5 + (riskScore / 100) * 12).toFixed(1)}%`,
                  features: ["Quick approval", "Minimal documentation", "Higher rates"],
                  color: "border-orange-500 bg-orange-50"
                }
              ].map((lender, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${lender.color}`}>
                  <h5 className="font-semibold text-gray-800 mb-2">{lender.type}</h5>
                  <div className="text-lg font-bold text-gray-800 mb-2">{lender.rate}</div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {lender.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Rate Calculator */}
          <div className="mt-6 p-4 bg-white rounded-lg border">
            <h4 className="font-semibold text-gray-800 mb-4">EMI Calculator with Your Rate</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { amount: 200000, tenure: 24 },
                { amount: 300000, tenure: 36 },
                { amount: 500000, tenure: 48 }
              ].map((loan, index) => {
                const rate = 8.5 + (riskScore / 100) * 12
                const monthlyRate = rate / 12 / 100
                const emi = (loan.amount * monthlyRate * Math.pow(1 + monthlyRate, loan.tenure)) / (Math.pow(1 + monthlyRate, loan.tenure) - 1)
                
                return (
                  <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">₹{(loan.amount / 100000).toFixed(1)}L for {loan.tenure}m</div>
                    <div className="text-lg font-bold text-blue-600">₹{Math.round(emi).toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Monthly EMI</div>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analysis Tabs */}
      <Tabs defaultValue="factors" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="factors">Risk Factors</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
          <TabsTrigger value="improvement">Improve Score</TabsTrigger>
        </TabsList>

        <TabsContent value="factors" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Risk Factor Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {riskFactors.map((factor, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <factor.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{factor.category}</h4>
                          <p className="text-sm text-gray-600">Weight: {factor.weight}%</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800">{factor.score}</div>
                        <Badge className={getStatusColor(factor.status)}>
                          {factor.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Risk Contribution</span>
                        <span>{factor.score}/100</span>
                      </div>
                      <Progress 
                        value={factor.score} 
                        className="h-2"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm text-gray-700">
                        <strong>Current Status:</strong> {factor.details}
                      </p>
                      <p className="text-sm text-blue-600">
                        <strong>Improvement Tip:</strong> {factor.improvement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-green-600" />
                Risk Score Trends (Improving)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskTrends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">{trend.month}</p>
                      <p className="text-sm text-gray-600">Risk Score</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-800">{trend.score}</p>
                      {trend.change !== 0 && (
                        <div className={`flex items-center gap-1 text-sm ${
                          trend.change < 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {trend.change < 0 ? (
                            <TrendingDown className="h-4 w-4" />
                          ) : (
                            <TrendingUp className="h-4 w-4" />
                          )}
                          {Math.abs(trend.change)} points
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-green-800">Positive Trend</h4>
                </div>
                <p className="text-sm text-green-700">
                  Your risk score has improved by 7 points over the last 4 months, indicating better creditworthiness and reduced lending risk.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Industry Comparison - {industryComparison.sector}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{industryComparison.yourScore}</div>
                  <p className="text-sm text-gray-600 mb-1">Your Score</p>
                  <Badge className="bg-blue-100 text-blue-800">You</Badge>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-3xl font-bold text-gray-600 mb-2">{industryComparison.industryAverage}</div>
                  <p className="text-sm text-gray-600 mb-1">Industry Average</p>
                  <Badge className="bg-gray-100 text-gray-800">Sector Average</Badge>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">{industryComparison.bestInClass}</div>
                  <p className="text-sm text-gray-600 mb-1">Best in Class</p>
                  <Badge className="bg-green-100 text-green-800">Top 10%</Badge>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold text-green-800">Above Industry Average</h4>
                  </div>
                  <p className="text-sm text-green-700">
                    Your risk score is 33% better than the industry average, making you an attractive borrower for lenders.
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-800">Improvement Potential</h4>
                  </div>
                  <p className="text-sm text-blue-700">
                    You can potentially improve by 13 points to reach best-in-class status, which could unlock better loan terms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="improvement" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Score Improvement Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Quick Wins (1-3 months)</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-green-600">1</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Reduce Credit Utilization</p>
                          <p className="text-sm text-gray-600">Target: Below 50% (Currently 65%)</p>
                          <p className="text-xs text-green-600">Potential improvement: -5 points</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-green-600">2</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Update Financial Documents</p>
                          <p className="text-sm text-gray-600">Upload latest bank statements</p>
                          <p className="text-xs text-green-600">Potential improvement: -2 points</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Long-term Goals (6-12 months)</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-blue-600">1</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Improve Cash Flow</p>
                          <p className="text-sm text-gray-600">Maintain positive cash flow for 6+ months</p>
                          <p className="text-xs text-blue-600">Potential improvement: -4 points</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-blue-600">2</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Diversify Revenue Streams</p>
                          <p className="text-sm text-gray-600">Reduce dependency on single income source</p>
                          <p className="text-xs text-blue-600">Potential improvement: -3 points</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">Target Score: 15</h4>
                      <p className="text-gray-600">Achieve "Very Low Risk" status</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Current Score</p>
                      <p className="text-2xl font-bold text-gray-800">28</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Potential Improvement</p>
                      <p className="text-2xl font-bold text-green-600">-13 points</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Improvement Plan
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Lender Benefits */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Benefits for Lenders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Risk Assessment</h4>
              <p className="text-sm text-gray-600">AI-powered evaluation reduces default risk</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Data-Driven Decisions</h4>
              <p className="text-sm text-gray-600">Comprehensive financial health analysis</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Faster Processing</h4>
              <p className="text-sm text-gray-600">Automated risk scoring speeds up approvals</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
