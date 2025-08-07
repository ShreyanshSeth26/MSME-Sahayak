"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "../contexts/LanguageContext"
import { MessageCircle, Send, Bot, User, Sparkles, Lightbulb, HelpCircle, ArrowRight, Building2, Award, CreditCard, FileText, Phone, Mail, ExternalLink } from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
  suggestions?: string[]
  schemes?: any[]
}

export function SmartSahayak() {
  const { t } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Initial welcome message
    const welcomeMessage: Message = {
      id: '1',
      type: 'bot',
      content: `Namaste! 🙏 I'm Smart Sahayak, your intelligent assistant for MSME support. I can help you with:

• Navigate through your MSME profile and features
• Find the best government schemes for your business
• Understand loan processes and eligibility
• Get information about Delhi Government MSME schemes
• Answer questions about documentation and compliance

How can I assist you today?`,
      timestamp: new Date(),
      suggestions: [
        "Show me government schemes for my business",
        "How do I apply for a loan?",
        "Help me navigate the portal",
        "What documents do I need?",
        "Tell me about Delhi schemes"
      ]
    }
    setMessages([welcomeMessage])
  }, [])

  const governmentSchemes = [
    {
      name: "PM MUDRA Yojana",
      amount: "₹10 Lakh",
      category: "Micro Finance",
      eligibility: "All MSMEs",
      description: "Collateral-free loans for micro enterprises"
    },
    {
      name: "Delhi MSME Promotion Scheme",
      amount: "₹25 Lakh",
      category: "State Scheme",
      eligibility: "Delhi MSMEs",
      description: "Capital subsidy and interest support"
    },
    {
      name: "Stand-Up India",
      amount: "₹1 Crore",
      category: "Women/SC/ST",
      eligibility: "Women & SC/ST entrepreneurs",
      description: "Bank loans for new enterprises"
    },
    {
      name: "Credit Guarantee Scheme",
      amount: "₹2 Crore",
      category: "Credit Support",
      eligibility: "All MSMEs",
      description: "Collateral-free credit facility"
    }
  ]

  const getAIResponse = (userMessage: string): Message => {
    const message = userMessage.toLowerCase()
    
    // Navigation help
    if (message.includes('navigate') || message.includes('portal') || message.includes('how to use')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `I'll help you navigate the MSME Sahayak Portal! Here's what you can do:

🏠 **Dashboard**: Your main hub with quick services and business profile
💳 **Loan Marketplace**: Find and apply for business loans with personalized rates
👤 **Credit Profile**: Manage your documents and view credit score
🎓 **Learning Hub**: Access videos, articles, and case studies
🏛️ **Government Schemes**: Explore Delhi Government MSME schemes
🔔 **Notifications**: Stay updated with important alerts

Which section would you like to explore first?`,
        timestamp: new Date(),
        suggestions: [
          "Take me to Loan Marketplace",
          "Show me my Credit Profile",
          "Open Government Schemes",
          "What's in Learning Hub?"
        ]
      }
    }

    // Government schemes
    if (message.includes('scheme') || message.includes('government') || message.includes('subsidy')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `Based on your profile, here are the top government schemes for your business:`,
        timestamp: new Date(),
        schemes: governmentSchemes,
        suggestions: [
          "Tell me about PM MUDRA Yojana",
          "Show Delhi specific schemes",
          "How to apply for these schemes?",
          "What documents are needed?"
        ]
      }
    }

    // Loan help
    if (message.includes('loan') || message.includes('apply') || message.includes('eligibility')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `I can help you with loans! Here's what you need to know:

💰 **Your Loan Eligibility**: Based on your profile, you're eligible for up to ₹5 Lakh
📊 **Your Credit Score**: 720 (Good) - This helps you get better rates
⚡ **Pre-approved Offers**: You have 3 pre-approved offers waiting

**Steps to Apply:**
1. Go to Loan Marketplace
2. Choose from pre-approved offers
3. Upload required documents
4. Get instant approval

Would you like me to show you the best offers for your business?`,
        timestamp: new Date(),
        suggestions: [
          "Show me pre-approved offers",
          "What documents do I need?",
          "How to improve my credit score?",
          "Calculate EMI for my loan"
        ]
      }
    }

    // Documents help
    if (message.includes('document') || message.includes('papers') || message.includes('kyc')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `Here are the essential documents for MSME services:

📋 **Basic Documents:**
• Aadhaar Card (Identity proof)
• PAN Card (Tax identification)
• Business Registration Certificate
• GST Registration (if applicable)

🏦 **For Loans:**
• Bank statements (6 months)
• Income Tax Returns (2 years)
• Business license
• Financial statements

📊 **Your Document Status:**
✅ Aadhaar: Verified
✅ PAN: Verified
✅ Bank Statement: Verified
⏳ GST Certificate: Pending
❌ Business License: Missing

Need help uploading any documents?`,
        timestamp: new Date(),
        suggestions: [
          "Help me upload GST certificate",
          "Where to get business license?",
          "Update my bank statements",
          "Complete my profile"
        ]
      }
    }

    // Delhi schemes specific
    if (message.includes('delhi') || message.includes('state') || message.includes('local')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `Great! Delhi Government has excellent MSME schemes:

🏛️ **Top Delhi Schemes for You:**

1. **Delhi MSME Promotion Scheme 2024**
   • Up to ₹25 Lakh capital subsidy
   • Interest subsidy for 5 years
   • Single window clearance

2. **Delhi Women Entrepreneur Scheme** (if applicable)
   • Interest-free loans up to ₹5 Lakh
   • Skill development training

3. **Delhi Digital MSME Initiative**
   • 75% subsidy on digital infrastructure
   • Free digital marketing training

4. **Delhi Startup Policy - MSME Support**
   • Free incubation for 2 years
   • Seed funding up to ₹10 Lakh

Would you like detailed information about any of these schemes?`,
        timestamp: new Date(),
        suggestions: [
          "Tell me about MSME Promotion Scheme",
          "Am I eligible for women entrepreneur scheme?",
          "How to apply for digital initiative?",
          "Show me all Delhi schemes"
        ]
      }
    }

    // Business type specific help
    if (message.includes('electronics') || message.includes('retail') || message.includes('trading')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `Perfect! For Electronics Retail businesses like yours, I recommend:

🎯 **Best Schemes for Electronics Retail:**

1. **PM MUDRA Yojana** - Perfect for inventory financing
2. **Delhi Digital MSME Initiative** - Great for online presence
3. **Credit Guarantee Scheme** - No collateral needed

💡 **Business Growth Tips:**
• Consider digital payment solutions
• Explore e-commerce platforms
• Look into GST benefits for electronics
• Check export opportunities

📈 **Your Business Advantages:**
• Electronics sector has good growth potential
• Delhi location gives access to major markets
• Your credit score (720) qualifies for best rates

What specific area would you like to focus on?`,
        timestamp: new Date(),
        suggestions: [
          "Help me go digital",
          "Show inventory financing options",
          "Export opportunities for electronics",
          "GST benefits for my business"
        ]
      }
    }

    // Default response
    return {
      id: Date.now().toString(),
      type: 'bot',
      content: `I understand you're asking about "${userMessage}". Let me help you with that!

I can assist you with:
• Government schemes and subsidies
• Loan applications and eligibility
• Portal navigation and features
• Document requirements
• Business-specific advice

Could you please be more specific about what you'd like to know? For example:
- "Show me loan options"
- "Help me find government schemes"
- "How to use the portal"
- "What documents do I need"`,
      timestamp: new Date(),
      suggestions: [
        "Show me government schemes",
        "Help with loan application",
        "Navigate the portal",
        "Document requirements"
      ]
    }
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = getAIResponse(inputMessage)
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion)
    setTimeout(() => handleSendMessage(), 100)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 lg:pt-0 pb-20 lg:pb-0">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 lg:p-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold">SMART SAHAYAK</h1>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Sparkles className="h-5 w-5" />
                <span className="text-lg">AI-Powered MSME Assistant</span>
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your intelligent chatbot companion that helps MSME owners navigate the portal, 
            discover the best Indian and Delhi Government schemes, and get personalized business guidance
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Badge className="bg-white/20 text-white px-4 py-2 text-sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              24/7 Available
            </Badge>
            <Badge className="bg-white/20 text-white px-4 py-2 text-sm">
              <Lightbulb className="h-4 w-4 mr-2" />
              Scheme Recommendations
            </Badge>
            <Badge className="bg-white/20 text-white px-4 py-2 text-sm">
              <HelpCircle className="h-4 w-4 mr-2" />
              Portal Navigation Help
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-lg">Smart Sahayak</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Online & Ready to Help</span>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`flex items-start gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === 'user' ? 'bg-blue-600' : 'bg-purple-600'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Bot className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <div className={`rounded-lg p-3 ${
                          message.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          <p className="whitespace-pre-line">{message.content}</p>
                          
                          {/* Render schemes if present */}
                          {message.schemes && (
                            <div className="mt-4 space-y-3">
                              {message.schemes.map((scheme, index) => (
                                <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
                                  <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold text-gray-800">{scheme.name}</h4>
                                    <Badge className="bg-green-100 text-green-800">{scheme.amount}</Badge>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-2">{scheme.description}</p>
                                  <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="text-xs">{scheme.category}</Badge>
                                    <Badge variant="outline" className="text-xs">{scheme.eligibility}</Badge>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          <p className="text-xs mt-2 opacity-70">
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                      
                      {/* Suggestions */}
                      {message.suggestions && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {message.suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="text-xs"
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>
              
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about MSME schemes, loans, or portal navigation..."
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleSuggestionClick("Show me government schemes for my business")}
                >
                  <Award className="h-4 w-4 mr-2" />
                  Find Schemes
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleSuggestionClick("How do I apply for a loan?")}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Loan Help
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleSuggestionClick("Help me navigate the portal")}
                >
                  <Building2 className="h-4 w-4 mr-2" />
                  Portal Guide
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleSuggestionClick("What documents do I need?")}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Documents
                </Button>
              </CardContent>
            </Card>

            {/* Your Profile Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium">Rajesh Kumar Sharma</p>
                  <p className="text-gray-600">Sharma Electronics</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-green-50 p-2 rounded">
                    <p className="font-medium text-green-800">Credit Score</p>
                    <p className="text-green-600">720</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <p className="font-medium text-blue-800">Eligibility</p>
                    <p className="text-blue-600">₹5L</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Human Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 1800-180-6763
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Support
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Help Center
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
