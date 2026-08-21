import "./globals.css";

export const metadata = {
  title: "FlowPilot AI — Intelligent Workflow Automation",
  description: "AI-powered workflow automation SaaS built with Next.js and TypeScript."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
