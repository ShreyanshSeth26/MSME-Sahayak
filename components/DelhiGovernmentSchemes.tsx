"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "../contexts/LanguageContext"
import { Search, Building2, Users, TrendingUp, Award, FileText, Calendar, MapPin, Phone, Mail, ExternalLink, CheckCircle, Clock, AlertCircle, IndianRupee, Factory, Briefcase, Zap, Target, Globe } from 'lucide-react'

export function DelhiGovernmentSchemes() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const delhiSchemes = [
    {
      id: "DS001",
      title: "Delhi MSME Promotion Scheme 2024",
      category: "Financial Support",
      department: "Dept. of Industries, Delhi Govt.",
      description: "Financial assistance for setting up new MSME units in Delhi with subsidies up to ₹25 lakh",
      benefits: [
        "Capital subsidy up to 25% (max ₹25 lakh)",
        "Interest subsidy for 5 years",
        "Electricity duty exemption",
        "Single window clearance"
      ],
      eligibility: [
        "New MSME units in Delhi",
        "Investment between ₹25 lakh to ₹5 crore",
        "Must create minimum 10 jobs",
        "Valid trade license required"
      ],
      amount: "₹25 Lakh",
      duration: "5 Years",
      status: "Active",
      applicationDeadline: "31st March 2024",
      documentsRequired: [
        "Project Report",
        "Land/Building documents",
        "Bank loan sanction letter",
        "Pollution clearance certificate"
      ],
      contactInfo: {
        office: "Delhi MSME Development Office",
        address: "Udyog Bhawan, New Delhi - 110001",
        phone: "011-23062204",
        email: "msme.delhi@gov.in"
      }
    },
    {
      id: "DS002",
      title: "Delhi Startup Policy - MSME Support",
      category: "Startup Support",
      department: "Delhi Startup Cell",
      description: "Special support for MSME startups in Delhi with incubation facilities and funding support",
      benefits: [
        "Free incubation for 2 years",
        "Seed funding up to ₹10 lakh",
        "Mentorship programs",
        "Market linkage support"
      ],
      eligibility: [
        "Registered startup in Delhi",
        "MSME certificate required",
        "Age of company < 3 years",
        "Innovative business model"
      ],
      amount: "₹10 Lakh",
      duration: "3 Years",
      status: "Active",
      applicationDeadline: "Rolling basis",
      documentsRequired: [
        "Startup registration certificate",
        "MSME Udyam certificate",
        "Business plan",
        "Founder's profile"
      ],
      contactInfo: {
        office: "Delhi Startup Cell",
        address: "Delhi Secretariat, ITO, New Delhi",
        phone: "011-23392000",
        email: "startup.delhi@gov.in"
      }
    },
    {
      id: "DS003",
      title: "Delhi Women Entrepreneur Scheme",
      category: "Women Empowerment",
      department: "Delhi Commission for Women",
      description: "Special financial and technical support for women-led MSME enterprises in Delhi",
      benefits: [
        "Interest-free loans up to ₹5 lakh",
        "Skill development training",
        "Marketing support",
        "Legal assistance"
      ],
      eligibility: [
        "Women-owned MSME (51% ownership)",
        "Delhi resident for 3+ years",
        "Age between 18-55 years",
        "No previous loan defaults"
      ],
      amount: "₹5 Lakh",
      duration: "3 Years",
      status: "Active",
      applicationDeadline: "30th June 2024",
      documentsRequired: [
        "Women ownership proof",
        "Residence proof (3 years)",
        "Business registration",
        "Income certificate"
      ],
      contactInfo: {
        office: "Delhi Commission for Women",
        address: "2nd Floor, ISBT Building, Kashmere Gate",
        phone: "011-23862640",
        email: "dcw.delhi@gov.in"
      }
    },
    {
      id: "DS004",
      title: "Delhi Pollution Control Incentive Scheme",
      category: "Environmental",
      department: "Delhi Pollution Control Committee",
      description: "Incentives for MSMEs adopting eco-friendly technologies and pollution control measures",
      benefits: [
        "50% subsidy on pollution control equipment",
        "Green certification benefits",
        "Tax incentives for 3 years",
        "Priority in government tenders"
      ],
      eligibility: [
        "MSME units in Delhi",
        "Pollution control compliance",
        "Investment in green technology",
        "Environmental clearance"
      ],
      amount: "₹15 Lakh",
      duration: "3 Years",
      status: "Active",
      applicationDeadline: "31st December 2024",
      documentsRequired: [
        "Environmental clearance",
        "Pollution control equipment quotation",
        "Green technology adoption plan",
        "Compliance certificates"
      ],
      contactInfo: {
        office: "Delhi Pollution Control Committee",
        address: "4th Floor, ISBT Building, Kashmere Gate",
        phone: "011-23814419",
        email: "dpcc.delhi@gov.in"
      }
    },
    {
      id: "DS005",
      title: "Delhi Digital MSME Initiative",
      category: "Digital Transformation",
      department: "Delhi Digital Board",
      description: "Support for MSMEs to adopt digital technologies and e-commerce platforms",
      benefits: [
        "75% subsidy on digital infrastructure",
        "Free digital marketing training",
        "E-commerce platform setup",
        "Digital payment gateway support"
      ],
      eligibility: [
        "MSME registered in Delhi",
        "Willingness to adopt digital tools",
        "Basic computer literacy",
        "Valid business registration"
      ],
      amount: "₹8 Lakh",
      duration: "2 Years",
      status: "New Launch",
      applicationDeadline: "31st May 2024",
      documentsRequired: [
        "Digital adoption plan",
        "MSME registration",
        "Technology vendor quotations",
        "Training completion certificate"
      ],
      contactInfo: {
        office: "Delhi Digital Board",
        address: "Delhi Secretariat, ITO, New Delhi",
        phone: "011-23392100",
        email: "digital.delhi@gov.in"
      }
    }
  ]

  const schemeCategories = [
    { id: "all", label: "All Schemes", count: delhiSchemes.length },
    { id: "Financial Support", label: "Financial Support", count: delhiSchemes.filter(s => s.category === "Financial Support").length },
    { id: "Startup Support", label: "Startup Support", count: delhiSchemes.filter(s => s.category === "Startup Support").length },
    { id: "Women Empowerment", label: "Women Empowerment", count: delhiSchemes.filter(s => s.category === "Women Empowerment").length },
    { id: "Environmental", label: "Environmental", count: delhiSchemes.filter(s => s.category === "Environmental").length },
    { id: "Digital Transformation", label: "Digital Transformation", count: delhiSchemes.filter(s => s.category === "Digital Transformation").length }
  ]

  const filteredSchemes = delhiSchemes.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scheme.department.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = selectedCategory === "all" || scheme.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800"
      case "New Launch": return "bg-blue-100 text-blue-800"
      case "Closing Soon": return "bg-orange-100 text-orange-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Financial Support": return <IndianRupee className="h-4 w-4" />
      case "Startup Support": return <Zap className="h-4 w-4" />
      case "Women Empowerment": return <Users className="h-4 w-4" />
      case "Environmental": return <Globe className="h-4 w-4" />
      case "Digital Transformation": return <Target className="h-4 w-4" />
      default: return <Award className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 lg:pt-0 pb-20 lg:pb-0">
      {/* Header */}
      <div className="bg-white border-b p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">Delhi Government MSME Schemes</h1>
              <p className="text-gray-600 mt-1">Exclusive schemes by Delhi Government to support and uplift MSME businesses</p>
            </div>
            <div className="flex gap-4">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search schemes..." 
                  className="pl-10" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button>
                <FileText className="h-4 w-4 mr-2" />
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        {/* Delhi Government Banner */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
            <CardContent className="p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Government of NCT of Delhi</h2>
                  <h3 className="text-xl mb-2">MSME Development & Support Initiative</h3>
                  <p className="text-red-100 mb-4">
                    Delhi Government is committed to supporting Micro, Small & Medium Enterprises through 
                    various financial assistance programs, skill development initiatives, and business promotion schemes.
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-white/20 text-white">5 Active Schemes</Badge>
                    <Badge className="bg-white/20 text-white">₹63 Lakh Total Support</Badge>
                  </div>
                  <Button className="bg-white text-red-600 hover:bg-gray-100">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Delhi.gov.in
                  </Button>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Building2 className="h-16 w-16 mx-auto mb-4 text-white" />
                    <h4 className="text-lg font-bold mb-2">One Delhi, One Vision</h4>
                    <p className="text-red-100 text-sm">Empowering MSMEs for a prosperous Delhi</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {schemeCategories.map((category) => (
              <Card 
                key={category.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedCategory === category.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-2">
                    {getCategoryIcon(category.id)}
                  </div>
                  <h3 className="font-medium text-sm mb-1">{category.label}</h3>
                  <Badge variant="outline" className="text-xs">{category.count} schemes</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Schemes List */}
        <div className="space-y-6">
          {filteredSchemes.map((scheme) => (
            <Card key={scheme.id} className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Scheme Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                            {getCategoryIcon(scheme.category)}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">{scheme.title}</h3>
                            <p className="text-sm text-gray-600">{scheme.department}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{scheme.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className={getStatusColor(scheme.status)}>
                            {scheme.status}
                          </Badge>
                          <Badge variant="outline">
                            {scheme.category}
                          </Badge>
                          <Badge variant="outline">
                            ID: {scheme.id}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <Tabs defaultValue="benefits" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="benefits">Benefits</TabsTrigger>
                        <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                        <TabsTrigger value="documents">Documents</TabsTrigger>
                        <TabsTrigger value="contact">Contact</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="benefits" className="mt-4">
                        <div className="space-y-2">
                          {scheme.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="eligibility" className="mt-4">
                        <div className="space-y-2">
                          {scheme.eligibility.map((criteria, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{criteria}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="documents" className="mt-4">
                        <div className="space-y-2">
                          {scheme.documentsRequired.map((doc, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <FileText className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{doc}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="contact" className="mt-4">
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <Building2 className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">{scheme.contactInfo.office}</p>
                              <p className="text-sm text-gray-600">{scheme.contactInfo.address}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-700">{scheme.contactInfo.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-700">{scheme.contactInfo.email}</span>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>

                  {/* Scheme Details Sidebar */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-3">Scheme Details</h4>
                      <div className="space-y-3">
                        <div className="text-center p-3 bg-white rounded-lg border">
                          <p className="text-2xl font-bold text-red-600">{scheme.amount}</p>
                          <p className="text-sm text-gray-600">Maximum Support</p>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg border">
                          <p className="text-xl font-bold text-gray-800">{scheme.duration}</p>
                          <p className="text-sm text-gray-600">Scheme Duration</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-orange-600" />
                        <h4 className="font-semibold text-orange-800">Application Deadline</h4>
                      </div>
                      <p className="text-sm text-orange-700">{scheme.applicationDeadline}</p>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Apply Online
                      </Button>
                      <Button variant="outline" className="w-full">
                        <FileText className="h-4 w-4 mr-2" />
                        Download Form
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        Contact Office
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-red-50 border border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Help with Applications?</h3>
              <p className="text-gray-600 mb-6">
                Our dedicated support team is here to help you navigate through Delhi Government MSME schemes
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto py-4">
                  <div className="text-center">
                    <Phone className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-medium">Call Helpline</div>
                    <div className="text-sm text-gray-600">1800-11-7777</div>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto py-4">
                  <div className="text-center">
                    <Mail className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-medium">Email Support</div>
                    <div className="text-sm text-gray-600">help@delhimsme.gov.in</div>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto py-4">
                  <div className="text-center">
                    <MapPin className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-medium">Visit Office</div>
                    <div className="text-sm text-gray-600">Udyog Bhawan, New Delhi</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
