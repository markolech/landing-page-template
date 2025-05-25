import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="bg-background min-h-screen p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-foreground text-4xl font-bold">
            Landing Page Template
          </h1>
          <p className="text-muted-foreground text-xl">
            ShadCN UI has been successfully integrated! 🎉
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Button Components</CardTitle>
              <CardDescription>
                Various button styles and variants
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Default Button</Button>
              <Button variant="secondary" className="w-full">
                Secondary Button
              </Button>
              <Button variant="outline" className="w-full">
                Outline Button
              </Button>
              <Button variant="destructive" className="w-full">
                Destructive Button
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Form Components</CardTitle>
              <CardDescription>Input fields and labels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Enter your name" />
              </div>
              <Button className="w-full">Submit</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Theme Support</CardTitle>
              <CardDescription>Dark and light mode ready</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted rounded-lg p-4">
                <p className="text-muted-foreground text-sm">
                  This template includes full dark/light mode support with
                  ShadCN&apos;s theming system.
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="bg-primary h-4 w-4 rounded-full"></div>
                <div className="bg-secondary h-4 w-4 rounded-full"></div>
                <div className="bg-accent h-4 w-4 rounded-full"></div>
                <div className="bg-muted h-4 w-4 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Getting Started Section */}
        <Card>
          <CardHeader>
            <CardTitle>Getting Started with ShadCN</CardTitle>
            <CardDescription>
              Your ShadCN UI setup is complete and ready to use
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">What&apos;s Included:</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>✅ ShadCN UI components</li>
                  <li>✅ Tailwind CSS v4</li>
                  <li>✅ Dark/Light mode support</li>
                  <li>✅ TypeScript configuration</li>
                  <li>✅ Component library setup</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Next Steps:</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>
                    • Add more components with `npx shadcn@latest add
                    [component]`
                  </li>
                  <li>• Customize the theme in `globals.css`</li>
                  <li>• Build your landing page components</li>
                  <li>• Check out the ShadCN documentation</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button asChild>
                <a
                  href="https://ui.shadcn.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Documentation
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://ui.shadcn.com/docs/components"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Browse Components
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
