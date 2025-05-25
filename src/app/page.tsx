import {
  ArrowRight,
  Check,
  Star,
  Zap,
  Shield,
  BarChart3,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="flex h-14 items-center border-b px-4 lg:px-6">
        <div className="flex items-center justify-center">
          <Zap className="text-primary h-6 w-6" />
          <span className="ml-2 text-lg font-bold">MicroFlow</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="hover:text-primary text-sm font-medium transition-colors"
            href="#features"
          >
            Features
          </a>
          <a
            className="hover:text-primary text-sm font-medium transition-colors"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="hover:text-primary text-sm font-medium transition-colors"
            href="#testimonials"
          >
            Reviews
          </a>
        </nav>
        <div className="ml-4 flex gap-2">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 md:py-24 lg:py-32 xl:py-48 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="mb-4 border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                >
                  🚀 Now in Beta - 50% Off
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Automate Your Workflow
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    In Minutes, Not Hours
                  </span>
                </h1>
                <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
                  MicroFlow helps small businesses automate repetitive tasks,
                  save time, and focus on what matters most. No coding required.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="h-12 bg-gradient-to-r from-blue-600 to-purple-600 px-8 hover:from-blue-700 hover:to-purple-700"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 border-blue-200 px-8 text-blue-700 hover:bg-blue-50"
                >
                  Watch Demo
                </Button>
              </div>
              <p className="text-muted-foreground text-sm">
                ✨ No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="bg-muted/50 w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need to Automate
                </h2>
                <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Powerful features designed specifically for small businesses
                  and solopreneurs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-950/50">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Lightning Fast Setup</CardTitle>
                  <CardDescription>
                    Get your automations running in under 5 minutes with our
                    intuitive drag-and-drop builder.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-0 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/50 dark:to-teal-950/50">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Enterprise Security</CardTitle>
                  <CardDescription>
                    Bank-level encryption and SOC 2 compliance to keep your data
                    safe and secure.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/50 dark:to-pink-950/50">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-600">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Real-time Analytics</CardTitle>
                  <CardDescription>
                    Track performance, monitor workflows, and optimize your
                    automations with detailed insights.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that fits your business. Upgrade or downgrade
                  at any time.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {/* Starter Plan */}
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>
                    Perfect for individuals and small teams
                  </CardDescription>
                  <div className="text-4xl font-bold">
                    $9
                    <span className="text-muted-foreground text-lg font-normal">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Check className="text-primary mr-2 h-4 w-4" />
                      <span className="text-sm">Up to 100 automations</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-primary mr-2 h-4 w-4" />
                      <span className="text-sm">5 integrations</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-primary mr-2 h-4 w-4" />
                      <span className="text-sm">Email support</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-primary mr-2 h-4 w-4" />
                      <span className="text-sm">Basic analytics</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg shadow-blue-500/10 dark:from-blue-950/30 dark:to-purple-950/30">
                <CardHeader>
                  <Badge className="w-fit border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    Most Popular
                  </Badge>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Best for growing businesses</CardDescription>
                  <div className="text-4xl font-bold">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      $29
                    </span>
                    <span className="text-muted-foreground text-lg font-normal">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                      <span className="text-sm">Unlimited automations</span>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                      <span className="text-sm">20+ integrations</span>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                      <span className="text-sm">Priority support</span>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                      <span className="text-sm">Advanced analytics</span>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                      <span className="text-sm">Custom workflows</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Start Free Trial
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>
                    For large teams and organizations
                  </CardDescription>
                  <div className="text-4xl font-bold">
                    $99
                    <span className="text-muted-foreground text-lg font-normal">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Check className="text-primary mr-2 h-4 w-4" />
                      <span className="text-sm">Everything in Pro</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-primary mr-2 h-4 w-4" />
                      <span className="text-sm">Dedicated support</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-primary mr-2 h-4 w-4" />
                      <span className="text-sm">Custom integrations</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-primary mr-2 h-4 w-4" />
                      <span className="text-sm">SLA guarantee</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-primary mr-2 h-4 w-4" />
                      <span className="text-sm">On-premise deployment</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about MicroFlow and how it can
                  help your business.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How quickly can I set up my first automation?
                  </AccordionTrigger>
                  <AccordionContent>
                    Most users have their first automation running within 5-10
                    minutes. Our drag-and-drop builder is designed to be
                    intuitive, and we provide templates for common workflows to
                    get you started even faster.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What integrations do you support?
                  </AccordionTrigger>
                  <AccordionContent>
                    We support 50+ popular business tools including Gmail,
                    Slack, Shopify, Stripe, Google Sheets, Airtable, Zapier, and
                    many more. New integrations are added monthly based on user
                    requests.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Is my data secure with MicroFlow?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely. We use bank-level encryption (AES-256), are SOC
                    2 Type II compliant, and never store your sensitive data.
                    All connections use OAuth 2.0 for secure authentication
                    without sharing passwords.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Can I cancel my subscription anytime?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, you can cancel your subscription at any time with no
                    cancellation fees. Your automations will continue to run
                    until the end of your billing period, and you can export
                    your data anytime.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Do you offer customer support?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! Starter plans include email support with 24-hour
                    response time. Pro plans get priority support with 4-hour
                    response time. Enterprise customers receive dedicated
                    support with phone and video call options.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    What happens if I exceed my automation limit?
                  </AccordionTrigger>
                  <AccordionContent>
                    We&apos;ll notify you when you&apos;re approaching your limit. You can
                    either upgrade your plan or pause some automations. We never
                    stop your automations without warning - your business
                    operations stay protected.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Still have questions?
                </p>
                <Button variant="outline" size="lg">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="bg-muted/50 w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Loved by Thousands
                </h2>
                <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers are saying about MicroFlow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="fill-primary text-primary h-4 w-4"
                      />
                    ))}
                  </div>
                  <CardDescription>
                    &quot;MicroFlow saved me 10 hours per week. I can finally focus
                    on growing my business instead of manual tasks.&quot;
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center space-x-2">
                    <div className="bg-muted h-8 w-8 rounded-full" />
                    <div>
                      <p className="text-sm font-medium">Sarah Chen</p>
                      <p className="text-muted-foreground text-xs">
                        Founder, TechStart
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="fill-primary text-primary h-4 w-4"
                      />
                    ))}
                  </div>
                  <CardDescription>
                    &quot;The setup was incredibly easy. Within 30 minutes, I had my
                    first automation running perfectly.&quot;
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center space-x-2">
                    <div className="bg-muted h-8 w-8 rounded-full" />
                    <div>
                      <p className="text-sm font-medium">Mike Rodriguez</p>
                      <p className="text-muted-foreground text-xs">
                        Marketing Director
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="fill-primary text-primary h-4 w-4"
                      />
                    ))}
                  </div>
                  <CardDescription>
                    &quot;Best investment for our agency. Our team productivity
                    increased by 40% in the first month.&quot;
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center space-x-2">
                    <div className="bg-muted h-8 w-8 rounded-full" />
                    <div>
                      <p className="text-sm font-medium">Emily Watson</p>
                      <p className="text-muted-foreground text-xs">
                        Agency Owner
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                  Ready to Automate Your Business?
                </h2>
                <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses already saving time with
                  MicroFlow. Start your free trial today.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="h-12 bg-white px-8 text-blue-600 hover:bg-blue-50"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 border-white/50 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white hover:text-blue-600"
                >
                  Schedule Demo
                </Button>
              </div>
              <p className="text-sm text-blue-100">
                14-day free trial • No credit card required
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <div className="flex items-center space-x-2">
          <Zap className="text-primary h-4 w-4" />
          <span className="text-sm font-medium">MicroFlow</span>
        </div>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <a className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </a>
          <a className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy Policy
          </a>
          <a className="text-xs underline-offset-4 hover:underline" href="#">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Github className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Linkedin className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
