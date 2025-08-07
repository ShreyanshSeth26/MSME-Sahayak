"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "../contexts/LanguageContext"
import { User, FileText, Upload, CheckCircle, AlertCircle, TrendingUp, Calendar, CreditCard } from "lucide-react"

export function CreditProfile() {
  const { t } = useLanguage()

  const profileCompletion = 85
  const creditScore = 720

  const documents = [
    { name: "Aadhaar Card", status: "verified", uploadDate: "2024-01-15" },
    { name: "PAN Card", status: "verified", uploadDate: "2024-01-15" },
    { name: "Bank Statement", status: "verified", uploadDate: "2024-01-20" },
    { name: "GST Certificate", status: "pending", uploadDate: "2024-01-22" },
    { name: "Business License", status: "missing", uploadDate: null },
  ]

  const creditHistory = [
    { date: "Jan 2024", score: 720, change: "+15" },
    { date: "Dec 2023", score: 705, change: "+8" },
    { date: "Nov 2023", score: 697, change: "-5" },
    { date: "Oct 2023", score: 702, change: "+12" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16 lg:pt-0 pb-20 lg:pb-0">
      {/* Header */}
      <div className="bg-white border-b p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl lg:text-3xl font-bold">{t("creditProfile")}</h1>
          <p className="text-gray-600 mt-1">Manage your credit profile and documents</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-6 w-6" />
                  Profile Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Personal Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm text-gray-600">Full Name</label>
                        <p className="font-medium">Rajesh Kumar Sharma</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Mobile Number</label>
                        <p className="font-medium">+91 98765 43210</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <p className="font-medium">rajesh@sharmaelectronics.com</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">PAN Number</label>
                        <p className="font-medium">ABCDE1234F</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Business Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm text-gray-600">Business Name</label>
                        <p className="font-medium">Sharma Electronics</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Business Type</label>
                        <p className="font-medium">Retail Electronics</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">GST Number</label>
                        <p className="font-medium">07ABCDE1234F1Z5</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Annual Turnover</label>
                        <p className="font-medium">₹25 Lakhs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Document Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  Document Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {doc.status === "verified" && <CheckCircle className="h-5 w-5 text-green-500" />}
                        {doc.status === "pending" && <AlertCircle className="h-5 w-5 text-yellow-500" />}
                        {doc.status === "missing" && <Upload className="h-5 w-5 text-gray-400" />}
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          {doc.uploadDate && <p className="text-sm text-gray-600">Uploaded: {doc.uploadDate}</p>}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            doc.status === "verified" ? "default" : doc.status === "pending" ? "secondary" : "outline"
                          }
                          className={
                            doc.status === "verified"
                              ? "bg-green-100 text-green-800"
                              : doc.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }
                        >
                          {doc.status === "verified" ? "Verified" : doc.status === "pending" ? "Pending" : "Missing"}
                        </Badge>
                        {doc.status === "missing" && <Button size="sm">Upload</Button>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{profileCompletion}%</div>
                  <Progress value={profileCompletion} className="h-3" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Personal Info</span>
                    <span className="text-green-600">✓ Complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Business Info</span>
                    <span className="text-green-600">✓ Complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Documents</span>
                    <span className="text-yellow-600">85% Complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bank Details</span>
                    <span className="text-green-600">✓ Complete</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Credit Score */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Credit Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-green-600 mb-2">{creditScore}</div>
                  <Badge className="bg-green-100 text-green-800">Good</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Payment History</span>
                    <span className="text-green-600">Excellent</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Credit Utilization</span>
                    <span className="text-green-600">Good</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Credit Age</span>
                    <span className="text-yellow-600">Fair</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Credit History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Credit History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {creditHistory.map((entry, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{entry.score}</p>
                        <p className="text-sm text-gray-600">{entry.date}</p>
                      </div>
                      <Badge
                        variant={entry.change.startsWith("+") ? "default" : "secondary"}
                        className={
                          entry.change.startsWith("+") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }
                      >
                        {entry.change}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-transparent" variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Document
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
