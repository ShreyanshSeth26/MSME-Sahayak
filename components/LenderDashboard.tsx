"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "../contexts/LanguageContext"
import { Search, Users, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, CreditCard, FileText, BarChart3, Shield, Eye, Download, Filter, Star, IndianRupee, Calendar, Building2, Phone, Mail, MapPin, Briefcase, User, Edit, Save, Info, ArrowRight, ChevronRight, Bell, Settings, Target, Zap, PieChart } from 'lucide-react'

interface LenderDashboardProps {
  activeTab?: string
  onNavigate?: (screen: string) => void
}

function LenderDashboard({ activeTab = "dashboard", onNavigate }: LenderDashboardProps) {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRiskFilter, setSelectedRiskFilter] = useState("all")
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [lenderProfile, setLenderProfile] = useState({
    name: "HDFC Bank",
    type: "Private Sector Bank",
    license: "RBI/2023/NBFC/001",
    establishedYear: "1994",
    headquarters: "Mumbai, Maharashtra",
    totalAssets: "₹18.9 Lakh Crore",
    branchCount: "6,342",
    contactEmail: "lending@hdfcbank.com",
    contactPhone: "+91 22 6160 6161",
    website: "www.hdfcbank.com",
    riskAppetite: "Conservative",
    minLoanAmount: "₹50,000",
    maxLoanAmount: "₹50 Lakh",
    interestRateRange: "8.5% - 18.0%",
    processingFee: "1.0% - 2.5%",
    avgProcessingTime: "3-7 days"
  })

  // Lender-specific notifications
  const lenderNotifications = [
    {
      id: 1,
      type: "success",
      title: "New Loan Application Received",
      message: "Rajesh Kumar Sharma has submitted a loan application for ₹3,00,000. Risk score: 28 (Low Risk).",
      time: "1 hour ago",
      category: "applications",
      read: false,
    },
    {
      id: 2,
      type: "warning",
      title: "Compliance Report Due",
      message: "RBI Quarterly Compliance Report is due in 5 days. Please ensure all documentation is ready.",
      time: "3 hours ago",
      category: "compliance",
      read: false,
    },
    {
      id: 3,
      type: "info",
      title: "Risk Analytics Update",
      message: "Monthly risk analytics report is now available. Average portfolio risk has decreased by 2.3%.",
      time: "1 day ago",
      category: "analytics",
      read: true,
    },
    {
      id: 4,
      type: "success",
      title: "Loan Disbursement Completed",
      message: "₹5,00,000 loan to Priya Gupta (Gupta Textiles) has been successfully disbursed.",
      time: "2 days ago",
      category: "applications",
      read: true,
    },
    {
      id: 5,
      type: "warning",
      title: "High Risk Application Alert",
      message: "New application from Amit Singh has a risk score of 45. Review recommended before approval.",
      time: "3 days ago",
      category: "applications",
      read: true,
    },
    {
      id: 6,
      type: "info",
      title: "System Maintenance Scheduled",
      message: "Planned system maintenance on Sunday 2 AM - 4 AM. Lending portal will be temporarily unavailable.",
      time: "5 days ago",
      category: "system",
      read: true,
    },
  ]

  // Mock data for loan applications
  const loanApplications = [
    {
      id: "APP001",
      applicantName: "Rajesh Kumar Sharma",
      businessName: "Sharma Electronics",
      amount: 300000,
      riskScore: 28,
      creditScore: 720,
      appliedDate: "2024-01-15",
      status: "under_review",
      sector: "Electronics Retail",
      experience: "2.5 years",
      location: "Delhi",
      phone: "+91 98765 43210",
      email: "rajesh@sharmaelectronics.com",
      documents: {
        aadhaar: "verified",
        pan: "verified",
        gst: "pending",
        bankStatement: "verified",
        businessLicense: "missing"
      },
      financials: {
        monthlyRevenue: 85000,
        monthlyExpenses: 62000,
        existingLoans: 150000,
        collateral: "none"
      },
      riskFactors: {
        paymentHistory: "excellent",
        creditUtilization: "good",
        businessStability: "fair",
        financialHealth: "fair"
      }
    },
    {
      id: "APP002",
      applicantName: "Priya Gupta",
      businessName: "Gupta Textiles",
      amount: 500000,
      riskScore: 15,
      creditScore: 780,
      appliedDate: "2024-01-14",
      status: "approved",
      sector: "Textile Manufacturing",
      experience: "5 years",
      location: "Mumbai",
      phone: "+91 87654 32109",
      email: "priya@guptatextiles.com",
      documents: {
        aadhaar: "verified",
        pan: "verified",
        gst: "verified",
        bankStatement: "verified",
        businessLicense: "verified"
      },
      financials: {
        monthlyRevenue: 125000,
        monthlyExpenses: 85000,
        existingLoans: 200000,
        collateral: "machinery"
      },
      riskFactors: {
        paymentHistory: "excellent",
        creditUtilization: "excellent",
        businessStability: "excellent",
        financialHealth: "good"
      }
    },
    {
      id: "APP003",
      applicantName: "Amit Singh",
      businessName: "Singh Auto Parts",
      amount: 750000,
      riskScore: 45,
      creditScore: 650,
      appliedDate: "2024-01-13",
      status: "rejected",
      sector: "Automotive",
      experience: "1.5 years",
      location: "Pune",
      phone: "+91 76543 21098",
      email: "amit@singhautopars.com",
      documents: {
        aadhaar: "verified",
        pan: "verified",
        gst: "verified",
        bankStatement: "pending",
        businessLicense: "verified"
      },
      financials: {
        monthlyRevenue: 95000,
        monthlyExpenses: 78000,
        existingLoans: 350000,
        collateral: "inventory"
      },
      riskFactors: {
        paymentHistory: "fair",
        creditUtilization: "poor",
        businessStability: "fair",
        financialHealth: "poor"
      }
    }
  ]

  // Mock MSME data for analytics
  const msmeAnalytics = {
    totalMSMEs: 1247,
    byRiskLevel: {
      veryLow: 156,
      low: 423,
      medium: 487,
      high: 134,
      veryHigh: 47
    },
    bySector: {
      manufacturing: 387,
      trading: 298,
      services: 342,
      retail: 220
    },
    byLocation: {
      delhi: 234,
      mumbai: 198,
      bangalore: 167,
      pune: 143,
      others: 505
    },
    avgCreditScore: 685,
    avgRiskScore: 34,
    successfulLoans: 892,
    defaultRate: 2.3
  }

  // Mock compliance data
  const complianceReports = [
    {
      id: "RPT001",
      title: "RBI Compliance Report - Q4 2023",
      type: "Regulatory",
      status: "Submitted",
      dueDate: "2024-01-31",
      submittedDate: "2024-01-28",
      officer: "Compliance Team",
      description: "Quarterly regulatory compliance report as per RBI guidelines"
    },
    {
      id: "RPT002",
      title: "MSME Lending Portfolio Analysis",
      type: "Internal Audit",
      status: "In Progress",
      dueDate: "2024-02-15",
      submittedDate: null,
      officer: "Internal Audit",
      description: "Comprehensive analysis of MSME lending portfolio and risk assessment"
    },
    {
      id: "RPT003",
      title: "Anti-Money Laundering (AML) Report",
      type: "AML/KYC",
      status: "Completed",
      dueDate: "2024-01-15",
      submittedDate: "2024-01-12",
      officer: "AML Team",
      description: "Monthly AML compliance report covering suspicious transaction monitoring"
    },
    {
      id: "RPT004",
      title: "Credit Risk Assessment Framework",
      type: "Risk Management",
      status: "Under Review",
      dueDate: "2024-02-28",
      submittedDate: null,
      officer: "Risk Management",
      description: "Annual review of credit risk assessment framework and methodologies"
    }
  ]

  const getRiskLevel = (score: number) => {
    if (score <= 20) return { level: "Very Low", color: "text-green-600", bgColor: "bg-green-100", borderColor: "border-green-500" }
    if (score <= 40) return { level: "Low", color: "text-blue-600", bgColor: "bg-blue-100", borderColor: "border-blue-500" }
    if (score <= 60) return { level: "Medium", color: "text-yellow-600", bgColor: "bg-yellow-100", borderColor: "border-yellow-500" }
    if (score <= 80) return { level: "High", color: "text-orange-600", bgColor: "bg-orange-100", borderColor: "border-orange-500" }
    return { level: "Very High", color: "text-red-600", bgColor: "bg-red-100", borderColor: "border-red-500" }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "bg-green-100 text-green-800"
      case "under_review": return "bg-yellow-100 text-yellow-800"
      case "rejected": return "bg-red-100 text-red-800"
      case "disbursed": return "bg-blue-100 text-blue-800"
      case "Submitted": return "bg-green-100 text-green-800"
      case "Completed": return "bg-blue-100 text-blue-800"
      case "In Progress": return "bg-yellow-100 text-yellow-800"
      case "Under Review": return "bg-orange-100 text-orange-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "approved": return "Approved"
      case "under_review": return "Under Review"
      case "rejected": return "Rejected"
      case "disbursed": return "Disbursed"
      default: return status
    }
  }

  const calculateInterestRate = (riskScore: number) => {
    const baseRate = 8.5
    const riskPremium = (riskScore / 100) * 12
    return baseRate + riskPremium
  }

  const filteredApplications = loanApplications.filter(app => {
    const matchesSearch = app.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.id.toLowerCase().includes(searchQuery.toLowerCase())
  
    const matchesRisk = selectedRiskFilter === "all" || 
                       (selectedRiskFilter === "low" && app.riskScore <= 30) ||
                       (selectedRiskFilter === "medium" && app.riskScore > 30 && app.riskScore <= 60) ||
                       (selectedRiskFilter === "high" && app.riskScore > 60)
  
    return matchesSearch && matchesRisk
  })

  const handleProfileSave = () => {
    setIsEditingProfile(false)
    // Here you would typically save to backend
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "applications":
        return <CreditCard className="h-4 w-4" />
      case "compliance":
        return <Shield className="h-4 w-4" />
      case "analytics":
        return <BarChart3 className="h-4 w-4" />
      case "system":
        return <Settings className="h-4 w-4" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  const filterNotifications = (category: string) => {
    if (category === "all") return lenderNotifications
    return lenderNotifications.filter((n) => n.category === category)
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Welcome to Lender Portal</h1>
                  <p className="text-blue-100 text-lg">Manage your MSME lending operations efficiently</p>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold mb-1">47</div>
                  <div className="text-blue-100 text-sm">Active Applications</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold mb-1">₹2.3 Cr</div>
                  <div className="text-blue-100 text-sm">Total Disbursed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold mb-1">2.1%</div>
                  <div className="text-blue-100 text-sm">Default Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold mb-1">98.5%</div>
                  <div className="text-blue-100 text-sm">Compliance Rate</div>
                </div>
              </div>
            </div>

            {/* Quick Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-blue-500 group"
                onClick={() => onNavigate?.("applications")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Loan Applications</h3>
                  <p className="text-sm text-gray-600 mb-3">Review and manage loan applications</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-yellow-100 text-yellow-800">3 Pending</Badge>
                    <Badge variant="outline">47 Total</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-green-500 group"
                onClick={() => onNavigate?.("analytics")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <BarChart3 className="h-6 w-6 text-green-600" />
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Risk Analytics</h3>
                  <p className="text-sm text-gray-600 mb-3">Analyze MSME risk patterns and trends</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800">1,247 MSMEs</Badge>
                    <Badge variant="outline">Avg Risk: 34</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-purple-500 group"
                onClick={() => onNavigate?.("compliance")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Compliance Reports</h3>
                  <p className="text-sm text-gray-600 mb-3">View regulatory compliance reports</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-purple-100 text-purple-800">4 Reports</Badge>
                    <Badge variant="outline">2 Due</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-orange-500 group"
                onClick={() => onNavigate?.("lender-info")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                      <User className="h-6 w-6 text-orange-600" />
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Lender Information</h3>
                  <p className="text-sm text-gray-600 mb-3">Manage your lender profile and settings</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-orange-100 text-orange-800">HDFC Bank</Badge>
                    <Badge variant="outline">Verified</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Recent Applications
                    <Button variant="outline" size="sm" onClick={() => onNavigate?.("applications")}>
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {loanApplications.slice(0, 3).map((app) => (
                      <div key={app.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">{app.applicantName}</p>
                          <p className="text-sm text-gray-600">{app.businessName}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">₹{(app.amount / 100000).toFixed(1)}L</p>
                          <Badge className={getStatusColor(app.status)} size="sm">
                            {getStatusLabel(app.status)}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Compliance Status
                    <Button variant="outline" size="sm" onClick={() => onNavigate?.("compliance")}>
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {complianceReports.slice(0, 3).map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800 text-sm">{report.title}</p>
                          <p className="text-xs text-gray-600">{report.type}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(report.status)} size="sm">
                            {report.status}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">Due: {report.dueDate}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "applications":
        return (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by name, business, or application ID..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedRiskFilter}
                  onChange={(e) => setSelectedRiskFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Risk Levels</option>
                  <option value="low">Low Risk (≤30)</option>
                  <option value="medium">Medium Risk (31-60)</option>
                  <option value="high">High Risk (&gt;60)</option>
                </select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>

            {/* Applications List */}
            <div className="space-y-6">
              {filteredApplications.map((app) => {
                const riskLevel = getRiskLevel(app.riskScore)
                const interestRate = calculateInterestRate(app.riskScore)
                
                return (
                  <Card key={app.id} className={`border-l-4 ${riskLevel.borderColor}`}>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Applicant Info */}
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                              <Building2 className="h-8 w-8 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-800">{app.applicantName}</h3>
                              <p className="text-gray-600 font-medium">{app.businessName}</p>
                              <p className="text-sm text-gray-500">{app.sector} • {app.experience}</p>
                              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {app.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {app.appliedDate}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Badge className={getStatusColor(app.status)}>
                              {getStatusLabel(app.status)}
                            </Badge>
                            <Badge className={`${riskLevel.color} ${riskLevel.bgColor}`}>
                              {riskLevel.level} Risk
                            </Badge>
                            <Badge variant="outline">
                              ID: {app.id}
                            </Badge>
                          </div>
                        </div>

                        {/* Financial & Risk Info */}
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <p className="text-2xl font-bold text-blue-600">₹{(app.amount / 100000).toFixed(1)}L</p>
                              <p className="text-sm text-gray-600">Loan Amount</p>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <p className="text-2xl font-bold text-green-600">{interestRate.toFixed(1)}%</p>
                              <p className="text-sm text-gray-600">Suggested Rate</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <p className="text-xl font-bold text-gray-800">{app.riskScore}</p>
                              <p className="text-sm text-gray-600">Risk Score</p>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <p className="text-xl font-bold text-gray-800">{app.creditScore}</p>
                              <p className="text-sm text-gray-600">Credit Score</p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Monthly Revenue:</span>
                              <span className="font-medium">₹{app.financials.monthlyRevenue.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Monthly Expenses:</span>
                              <span className="font-medium">₹{app.financials.monthlyExpenses.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Existing Loans:</span>
                              <span className="font-medium">₹{app.financials.existingLoans.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>

                        {/* Actions & Documents */}
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-gray-800">Document Status</h4>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              {Object.entries(app.documents).map(([doc, status]) => (
                                <div key={doc} className="flex items-center gap-1">
                                  {status === "verified" && <CheckCircle className="h-3 w-3 text-green-500" />}
                                  {status === "pending" && <Clock className="h-3 w-3 text-yellow-500" />}
                                  {status === "missing" && <AlertTriangle className="h-3 w-3 text-red-500" />}
                                  <span className="capitalize">{doc.replace(/([A-Z])/g, ' $1')}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold text-gray-800">Risk Factors</h4>
                            <div className="space-y-1 text-xs">
                              {Object.entries(app.riskFactors).map(([factor, rating]) => (
                                <div key={factor} className="flex justify-between">
                                  <span className="text-gray-600 capitalize">{factor.replace(/([A-Z])/g, ' $1')}:</span>
                                  <span className={`font-medium ${
                                    rating === "excellent" ? "text-green-600" :
                                    rating === "good" ? "text-blue-600" :
                                    rating === "fair" ? "text-yellow-600" : "text-red-600"
                                  }`}>
                                    {rating}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            <Button className="w-full" size="sm">
                              <Eye className="h-3 w-3 mr-2" />
                              View Full Profile
                            </Button>
                            {app.status === "under_review" && (
                              <>
                                <Button className="w-full bg-green-600 hover:bg-green-700" size="sm">
                                  <CheckCircle className="h-3 w-3 mr-2" />
                                  Approve
                                </Button>
                                <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50" size="sm">
                                  Reject
                                </Button>
                              </>
                            )}
                          </div>

                          <div className="pt-2 border-t">
                            <div className="flex items-center gap-2 text-xs text-gray-600">
                              <Phone className="h-3 w-3" />
                              <span>{app.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                              <Mail className="h-3 w-3" />
                              <span>{app.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )

      case "analytics":
        return (
          <div className="space-y-6">
            {/* MSME Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total MSMEs</p>
                      <p className="text-3xl font-bold text-blue-600">{msmeAnalytics.totalMSMEs}</p>
                      <p className="text-sm text-gray-500">In your network</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Avg Credit Score</p>
                      <p className="text-3xl font-bold text-green-600">{msmeAnalytics.avgCreditScore}</p>
                      <p className="text-sm text-green-500">Good range</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Avg Risk Score</p>
                      <p className="text-3xl font-bold text-yellow-600">{msmeAnalytics.avgRiskScore}</p>
                      <p className="text-sm text-yellow-500">Low risk</p>
                    </div>
                    <Shield className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Success Rate</p>
                      <p className="text-3xl font-bold text-purple-600">{((msmeAnalytics.successfulLoans / msmeAnalytics.totalMSMEs) * 100).toFixed(1)}%</p>
                      <p className="text-sm text-purple-500">Loan approvals</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Risk Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>MSME Risk Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {Object.entries(msmeAnalytics.byRiskLevel).map(([level, count]) => {
                    const percentage = ((count / msmeAnalytics.totalMSMEs) * 100).toFixed(1)
                    const colors = {
                      veryLow: "bg-green-100 text-green-800 border-green-500",
                      low: "bg-blue-100 text-blue-800 border-blue-500",
                      medium: "bg-yellow-100 text-yellow-800 border-yellow-500",
                      high: "bg-orange-100 text-orange-800 border-orange-500",
                      veryHigh: "bg-red-100 text-red-800 border-red-500"
                    }
                    return (
                      <div key={level} className={`p-4 rounded-lg border-l-4 ${colors[level as keyof typeof colors]}`}>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{count}</p>
                          <p className="text-sm capitalize">{level.replace(/([A-Z])/g, ' $1')} Risk</p>
                          <p className="text-xs mt-1">{percentage}%</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Sector & Location Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>MSMEs by Sector</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(msmeAnalytics.bySector).map(([sector, count]) => {
                      const percentage = ((count / msmeAnalytics.totalMSMEs) * 100).toFixed(1)
                      return (
                        <div key={sector} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium capitalize">{sector}</p>
                            <p className="text-sm text-gray-600">{count} businesses</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-blue-600">{percentage}%</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>MSMEs by Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(msmeAnalytics.byLocation).map(([location, count]) => {
                      const percentage = ((count / msmeAnalytics.totalMSMEs) * 100).toFixed(1)
                      return (
                        <div key={location} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium capitalize">{location}</p>
                            <p className="text-sm text-gray-600">{count} businesses</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-600">{percentage}%</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "compliance":
        return (
          <div className="space-y-6">
            {/* Compliance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Submitted</p>
                      <p className="text-3xl font-bold text-green-600">
                        {complianceReports.filter(r => r.status === "Submitted" || r.status === "Completed").length}
                      </p>
                      <p className="text-sm text-gray-500">This quarter</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">In Progress</p>
                      <p className="text-3xl font-bold text-yellow-600">
                        {complianceReports.filter(r => r.status === "In Progress" || r.status === "Under Review").length}
                      </p>
                      <p className="text-sm text-gray-500">Active reports</p>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Reports</p>
                      <p className="text-3xl font-bold text-blue-600">{complianceReports.length}</p>
                      <p className="text-sm text-gray-500">All time</p>
                    </div>
                    <FileText className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Compliance Rate</p>
                      <p className="text-3xl font-bold text-purple-600">98.5%</p>
                      <p className="text-sm text-gray-500">Last 12 months</p>
                    </div>
                    <Shield className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Compliance Reports List */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Compliance Reports</CardTitle>
                  <Button>
                    <FileText className="h-4 w-4 mr-2" />
                    Generate New Report
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceReports.map((report) => (
                    <Card key={report.id} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
                          <div className="lg:col-span-2">
                            <h3 className="font-bold text-gray-800 mb-1">{report.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span>ID: {report.id}</span>
                              <span>Officer: {report.officer}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge className={getStatusColor(report.status)}>
                                {report.status}
                              </Badge>
                              <Badge variant="outline">
                                {report.type}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600">
                              <p>Due: {report.dueDate}</p>
                              {report.submittedDate && <p>Submitted: {report.submittedDate}</p>}
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            <Button variant="outline" size="sm" className="w-full">
                              <Eye className="h-3 w-3 mr-2" />
                              View Report
                            </Button>
                            <Button variant="outline" size="sm" className="w-full">
                              <Download className="h-3 w-3 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Regulatory Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Regulatory Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <div>
                        <h4 className="font-semibold text-yellow-800">RBI Annual Return - Due March 31, 2024</h4>
                        <p className="text-sm text-yellow-700">Annual return submission to RBI with detailed lending portfolio analysis</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Info className="h-5 w-5 text-blue-600" />
                      <div>
                        <h4 className="font-semibold text-blue-800">MSME Lending Target Review - Due February 28, 2024</h4>
                        <p className="text-sm text-blue-700">Quarterly review of MSME lending targets and achievement analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "notifications":
        return (
          <div className="space-y-6">
            {/* Notification Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{t("notifications")} Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Unread</span>
                        <Badge className="bg-red-100 text-red-800">{lenderNotifications.filter(n => !n.read).length}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Today</span>
                        <Badge variant="outline">{lenderNotifications.filter(n => n.time.includes('hour')).length}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">This Week</span>
                        <Badge variant="outline">{lenderNotifications.filter(n => n.time.includes('day')).length}</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <Bell className="h-4 w-4 mr-2" />
                        Enable Push Notifications
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <Settings className="h-4 w-4 mr-2" />
                        Notification Preferences
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Notifications List */}
              <div className="lg:col-span-3">
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="applications">Applications</TabsTrigger>
                    <TabsTrigger value="compliance">Compliance</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="system">System</TabsTrigger>
                  </TabsList>

                  {["all", "applications", "compliance", "analytics", "system"].map((category) => (
                    <TabsContent key={category} value={category} className="mt-6">
                      <div className="space-y-4">
                        {filterNotifications(category).map((notification) => (
                          <Card
                            key={notification.id}
                            className={`cursor-pointer hover:shadow-md transition-shadow ${
                              !notification.read ? "border-l-4 border-l-blue-500 bg-blue-50/30" : ""
                            }`}
                          >
                            <CardContent className="p-4 lg:p-6">
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-1">{getIcon(notification.type)}</div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <h3
                                          className={`font-semibold ${!notification.read ? "text-gray-900" : "text-gray-700"}`}
                                        >
                                          {notification.title}
                                        </h3>
                                        {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                                      </div>
                                      <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                                      <div className="flex items-center gap-3 text-xs text-gray-500">
                                        <span>{notification.time}</span>
                                        <div className="flex items-center gap-1">
                                          {getCategoryIcon(notification.category)}
                                          <span className="capitalize">{notification.category}</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                      {!notification.read && (
                                        <Button variant="ghost" size="sm">
                                          Mark Read
                                        </Button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>

                {/* Empty State */}
                {lenderNotifications.length === 0 && (
                  <Card className="mt-6">
                    <CardContent className="p-12 text-center">
                      <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications yet</h3>
                      <p className="text-gray-600">When you have new updates, they'll appear here.</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        )

      case "lender-info":
        return (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Lender Information
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                >
                  {isEditingProfile ? (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Basic Information */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-600">Institution Name</label>
                        {isEditingProfile ? (
                          <Input
                            value={lenderProfile.name}
                            onChange={(e) => setLenderProfile({...lenderProfile, name: e.target.value})}
                            className="mt-1"
                          />
                        ) : (
                          <p className="font-medium text-gray-800">{lenderProfile.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Institution Type</label>
                        {isEditingProfile ? (
                          <Input
                            value={lenderProfile.type}
                            onChange={(e) => setLenderProfile({...lenderProfile, type: e.target.value})}
                            className="mt-1"
                          />
                        ) : (
                          <p className="font-medium text-gray-800">{lenderProfile.type}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">License Number</label>
                        <p className="font-medium text-gray-800">{lenderProfile.license}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Established Year</label>
                        <p className="font-medium text-gray-800">{lenderProfile.establishedYear}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Headquarters</label>
                        {isEditingProfile ? (
                          <Input
                            value={lenderProfile.headquarters}
                            onChange={(e) => setLenderProfile({...lenderProfile, headquarters: e.target.value})}
                            className="mt-1"
                          />
                        ) : (
                          <p className="font-medium text-gray-800">{lenderProfile.headquarters}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-600">Email</label>
                        {isEditingProfile ? (
                          <Input
                            value={lenderProfile.contactEmail}
                            onChange={(e) => setLenderProfile({...lenderProfile, contactEmail: e.target.value})}
                            className="mt-1"
                          />
                        ) : (
                          <p className="font-medium text-gray-800">{lenderProfile.contactEmail}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Phone</label>
                        {isEditingProfile ? (
                          <Input
                            value={lenderProfile.contactPhone}
                            onChange={(e) => setLenderProfile({...lenderProfile, contactPhone: e.target.value})}
                            className="mt-1"
                          />
                        ) : (
                          <p className="font-medium text-gray-800">{lenderProfile.contactPhone}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Website</label>
                        {isEditingProfile ? (
                          <Input
                            value={lenderProfile.website}
                            onChange={(e) => setLenderProfile({...lenderProfile, website: e.target.value})}
                            className="mt-1"
                          />
                        ) : (
                          <p className="font-medium text-blue-600">{lenderProfile.website}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lending Parameters */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Institution Scale</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-600">Total Assets</label>
                        <p className="font-medium text-gray-800">{lenderProfile.totalAssets}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Branch Count</label>
                        <p className="font-medium text-gray-800">{lenderProfile.branchCount}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Lending Parameters</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-600">Risk Appetite</label>
                        {isEditingProfile ? (
                          <select
                            value={lenderProfile.riskAppetite}
                            onChange={(e) => setLenderProfile({...lenderProfile, riskAppetite: e.target.value})}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="Conservative">Conservative</option>
                            <option value="Moderate">Moderate</option>
                            <option value="Aggressive">Aggressive</option>
                          </select>
                        ) : (
                          <p className="font-medium text-gray-800">{lenderProfile.riskAppetite}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Loan Amount Range</label>
                        <p className="font-medium text-gray-800">{lenderProfile.minLoanAmount} - {lenderProfile.maxLoanAmount}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Interest Rate Range</label>
                        {isEditingProfile ? (
                          <Input
                            value={lenderProfile.interestRateRange}
                            onChange={(e) => setLenderProfile({...lenderProfile, interestRateRange: e.target.value})}
                            className="mt-1"
                          />
                        ) : (
                          <p className="font-medium text-gray-800">{lenderProfile.interestRateRange}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Processing Fee</label>
                        {isEditingProfile ? (
                          <Input
                            value={lenderProfile.processingFee}
                            onChange={(e) => setLenderProfile({...lenderProfile, processingFee: e.target.value})}
                            className="mt-1"
                          />
                        ) : (
                          <p className="font-medium text-gray-800">{lenderProfile.processingFee}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Average Processing Time</label>
                        {isEditingProfile ? (
                          <Input
                            value={lenderProfile.avgProcessingTime}
                            onChange={(e) => setLenderProfile({...lenderProfile, avgProcessingTime: e.target.value})}
                            className="mt-1"
                          />
                        ) : (
                          <p className="font-medium text-gray-800">{lenderProfile.avgProcessingTime}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {isEditingProfile && (
                    <div className="flex gap-4">
                      <Button onClick={handleProfileSave} className="flex-1">
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditingProfile(false)} className="flex-1">
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )

      default:
        return <div>Content not found</div>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 lg:pt-0 pb-20 lg:pb-0">
      {/* Header */}
      <div className="bg-white border-b p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">
                {activeTab === "dashboard" && "Lender Dashboard"}
                {activeTab === "applications" && "Loan Applications"}
                {activeTab === "analytics" && "Risk Analytics"}
                {activeTab === "compliance" && "Compliance Reports"}
                {activeTab === "lender-info" && "Lender Information"}
                {activeTab === "notifications" && t("notifications")}
              </h1>
              <p className="text-gray-600 mt-1">
                {activeTab === "dashboard" && "Welcome to your lending operations center"}
                {activeTab === "applications" && "Manage loan applications and portfolio"}
                {activeTab === "analytics" && "Analyze MSME risk patterns and trends"}
                {activeTab === "compliance" && "View regulatory compliance reports and audit trails"}
                {activeTab === "lender-info" && "Manage your lender profile and settings"}
                {activeTab === "notifications" && "Stay updated with your lending activities"}
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              {activeTab === "applications" && (
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  New Application
                </Button>
              )}
              {activeTab === "compliance" && (
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
              )}
              {activeTab === "notifications" && (
                <Button>
                  Mark All Read
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        {renderContent()}
      </div>
    </div>
  )
}

export default LenderDashboard
