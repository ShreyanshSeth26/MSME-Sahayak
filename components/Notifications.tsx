"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "../contexts/LanguageContext"
import {
  Bell,
  AlertCircle,
  CheckCircle,
  Info,
  TrendingUp,
  Calendar,
  CreditCard,
  FileText,
  Settings,
} from "lucide-react"

export function Notifications() {
  const { t } = useLanguage()

  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Loan Application Approved",
      message:
        "Your MUDRA loan application for ₹3,00,000 has been approved. Funds will be disbursed within 2 business days.",
      time: "2 hours ago",
      category: "loans",
      read: false,
    },
    {
      id: 2,
      type: "warning",
      title: "EMI Payment Due",
      message: "Your EMI payment of ₹12,500 is due in 3 days. Please ensure sufficient balance in your account.",
      time: "1 day ago",
      category: "payments",
      read: false,
    },
    {
      id: 3,
      type: "info",
      title: "New Government Scheme Available",
      message:
        "PM SVANidhi scheme is now available for street vendors. Check if you're eligible for up to ₹50,000 loan.",
      time: "2 days ago",
      category: "schemes",
      read: true,
    },
    {
      id: 4,
      type: "success",
      title: "Document Verified",
      message: "Your GST certificate has been successfully verified and added to your profile.",
      time: "3 days ago",
      category: "documents",
      read: true,
    },
    {
      id: 5,
      type: "warning",
      title: "Profile Incomplete",
      message: "Your business profile is 85% complete. Upload your business license to complete your profile.",
      time: "5 days ago",
      category: "profile",
      read: true,
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "loans":
        return <CreditCard className="h-4 w-4" />
      case "payments":
        return <Calendar className="h-4 w-4" />
      case "schemes":
        return <TrendingUp className="h-4 w-4" />
      case "documents":
        return <FileText className="h-4 w-4" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  const filterNotifications = (category: string) => {
    if (category === "all") return notifications
    return notifications.filter((n) => n.category === category)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 lg:pt-0 pb-20 lg:pb-0">
      {/* Header */}
      <div className="bg-white border-b p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">{t("notifications")}</h1>
              <p className="text-gray-600 mt-1">Stay updated with your business activities</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button>Mark All Read</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Notification Stats */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Notification Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Unread</span>
                    <Badge className="bg-red-100 text-red-800">2</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Today</span>
                    <Badge variant="outline">3</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">This Week</span>
                    <Badge variant="outline">5</Badge>
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
                <TabsTrigger value="loans">Loans</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="schemes">Schemes</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              {["all", "loans", "payments", "schemes", "documents"].map((category) => (
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
            {notifications.length === 0 && (
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
    </div>
  )
}
