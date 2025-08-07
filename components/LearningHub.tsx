"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "../contexts/LanguageContext"
import { Play, FileText, Users, Search, Clock, Star } from 'lucide-react'

export function LearningHub() {
  const { t } = useLanguage()

  const videos = [
    {
      id: 1,
      title: "How to Apply for MUDRA Loan",
      duration: "12:30",
      views: "2.3K",
      rating: 4.8,
      thumbnail: "/images/mudra-loan-tutorial.png",
      category: "Loans",
    },
    {
      id: 2,
      title: "GST Filing for Small Businesses",
      duration: "18:45",
      views: "1.8K",
      rating: 4.6,
      thumbnail: "/images/gst-filing-tutorial.png",
      category: "Taxation",
    },
    {
      id: 3,
      title: "Digital Marketing for MSMEs",
      duration: "25:15",
      views: "3.1K",
      rating: 4.9,
      thumbnail: "/images/digital-marketing-tutorial.png",
      category: "Marketing",
    },
  ]

  const articles = [
    {
      id: 1,
      title: "10 Government Schemes Every MSME Should Know",
      readTime: "5 min read",
      author: "Dr. Priya Sharma",
      date: "Jan 15, 2024",
      category: "Government Schemes",
    },
    {
      id: 2,
      title: "Building Credit Score for Your Business",
      readTime: "8 min read",
      author: "Rajesh Kumar",
      date: "Jan 12, 2024",
      category: "Finance",
    },
    {
      id: 3,
      title: "Export Opportunities for Small Businesses",
      readTime: "12 min read",
      author: "Anita Gupta",
      date: "Jan 10, 2024",
      category: "Export",
    },
  ]

  const caseStudies = [
    {
      id: 1,
      title: "From ₹50K to ₹50L: A Textile Business Success Story",
      company: "Gupta Textiles",
      growth: "1000%",
      timeframe: "3 years",
      category: "Manufacturing",
    },
    {
      id: 2,
      title: "Digital Transformation of a Traditional Sweet Shop",
      company: "Sharma Sweets",
      growth: "300%",
      timeframe: "18 months",
      category: "Retail",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16 lg:pt-0 pb-20 lg:pb-0">
      {/* Header */}
      <div className="bg-white border-b p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">{t("learningHub")}</h1>
              <p className="text-gray-600 mt-1">Learn and grow your business with expert guidance</p>
            </div>
            <div className="flex gap-4">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search courses, articles..." className="pl-10" />
              </div>
              <Button>Browse All</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        {/* Featured Section */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Featured Course</h2>
                  <h3 className="text-xl mb-2">Complete Guide to Business Loans</h3>
                  <p className="text-blue-100 mb-4">
                    Master the art of securing business loans with our comprehensive course covering everything from
                    application to approval.
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-white/20 text-white">12 Lessons</Badge>
                    <Badge className="bg-white/20 text-white">3 Hours</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>4.9</span>
                    </div>
                  </div>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">Start Learning</Button>
                </div>
                <div className="hidden lg:block">
                  <img
                    src="/images/business-loans-course.png"
                    alt="Featured Course"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              {t("videos")}
            </TabsTrigger>
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              {t("articles")}
            </TabsTrigger>
            <TabsTrigger value="cases" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {t("caseStudies")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-t-lg">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <Play className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <Badge className="absolute top-2 right-2 bg-black bg-opacity-70 text-white">{video.duration}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2">
                      {video.category}
                    </Badge>
                    <h3 className="font-semibold mb-2 line-clamp-2">{video.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{video.views} views</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{video.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="articles" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {article.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                      <span>By {article.author}</span>
                      <span>{article.date}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cases" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {caseStudies.map((study) => (
                <Card key={study.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {study.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Company</p>
                        <p className="font-medium">{study.company}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Growth</p>
                        <p className="font-medium text-green-600">{study.growth}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Timeline: {study.timeframe}</span>
                      <Button variant="outline" size="sm">
                        Read Case Study
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Popular Categories */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Loans & Finance", icon: "💰", count: "45 resources" },
              { name: "Government Schemes", icon: "🏛️", count: "32 resources" },
              { name: "Digital Marketing", icon: "📱", count: "28 resources" },
              { name: "Export Business", icon: "🌍", count: "19 resources" },
              { name: "Taxation", icon: "📊", count: "24 resources" },
              { name: "Legal Compliance", icon: "⚖️", count: "16 resources" },
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <h3 className="font-medium text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-gray-600">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
