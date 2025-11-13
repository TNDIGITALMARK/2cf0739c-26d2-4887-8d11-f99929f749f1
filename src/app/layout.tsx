import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { ZyloProvider } from "@/lib/zylo/provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JM Service Digital | Digital Transformation Services",
  description: "Transform your digital presence with JM Service Digital. We deliver professional websites, app development, video editing, logo design, bots, and community management services.",
  keywords: ["web development", "app development", "video editing", "logo design", "bot creation", "community management", "digital services"],
  authors: [{ name: "JM Service Digital" }],
  openGraph: {
    title: "JM Service Digital | Digital Transformation Services",
    description: "Professional digital solutions that drive real results - from stunning websites to powerful apps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JM Service Digital | Digital Transformation Services",
    description: "Professional digital solutions that drive real results",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

      
        {}
      
        {/* PHOENIX_EDITOR_INJECTION_START */}
        {(process.env.NODE_ENV === 'development' ||
          process.env.NEXT_PUBLIC_ENABLE_PHOENIX_EDITOR === 'true') && (
          <>
            <link rel="stylesheet" href="/phoenix-editor/helper.css?v=1763064101930" />
            <script
              src="/phoenix-editor/sourceMapTracker.js?v=1763064101930"
              data-phoenix-sourcemap="true"
              defer
            />
            <script
              src="/phoenix-editor/helper.js?v=1763064101930"
              data-phoenix-enabled="true"
              defer
            />
            <script
              src="/phoenix-editor/visualEditExtension.js?v=1763064101930"
              data-phoenix-visual-edit="true"
              defer
            />
            <script
              src="/phoenix-editor/contextIntegration.js?v=1763064101930"
              data-phoenix-context="true"
              defer
            />
            <script
              src="/phoenix-editor/inlineTextEditor.js?v=1763064101930"
              data-phoenix-text-edit="true"
              defer
            />
            <script
              src="/phoenix-editor/inlineClassEditor.js?v=1763064101930"
              data-phoenix-class-edit="true"
              defer
            />
          </>
        )}
        {/* PHOENIX_EDITOR_INJECTION_END */}
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        <QueryProvider>
          <ZyloProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <TooltipProvider>
                {children}
                <Toaster />
                <Sonner />
              </TooltipProvider>
            </ThemeProvider>
          </ZyloProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
