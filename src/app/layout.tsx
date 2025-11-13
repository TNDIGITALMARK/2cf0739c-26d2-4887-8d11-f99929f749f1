import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { ZyloProvider } from "@/lib/zylo/provider";
import { TranslationProvider } from "@/lib/translations/use-translations";
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
  title: "JM Service Digital | Services de Transformation Digitale",
  description: "Transformez votre présence digitale avec JM Service Digital. Nous livrons des sites web professionnels, développement d'applications, montage vidéo, design de logo, bots et services de gestion de communauté.",
  keywords: ["développement web", "développement d'applications", "montage vidéo", "design de logo", "création de bots", "gestion de communauté", "services digitaux"],
  authors: [{ name: "JM Service Digital" }],
  openGraph: {
    title: "JM Service Digital | Services de Transformation Digitale",
    description: "Solutions digitales professionnelles qui génèrent de vrais résultats - des sites web époustouflants aux applications puissantes",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "JM Service Digital | Services de Transformation Digitale",
    description: "Solutions digitales professionnelles qui génèrent de vrais résultats",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>


        {}

        {}
      
        {}
      
        {}
      
        {}
      
        {/* PHOENIX_EDITOR_INJECTION_START */}
        {(process.env.NODE_ENV === 'development' ||
          process.env.NEXT_PUBLIC_ENABLE_PHOENIX_EDITOR === 'true') && (
          <>
            <link rel="stylesheet" href="/phoenix-editor/helper.css?v=1763065037155" />
            <script
              src="/phoenix-editor/sourceMapTracker.js?v=1763065037155"
              data-phoenix-sourcemap="true"
              defer
            />
            <script
              src="/phoenix-editor/helper.js?v=1763065037155"
              data-phoenix-enabled="true"
              defer
            />
            <script
              src="/phoenix-editor/visualEditExtension.js?v=1763065037155"
              data-phoenix-visual-edit="true"
              defer
            />
            <script
              src="/phoenix-editor/contextIntegration.js?v=1763065037155"
              data-phoenix-context="true"
              defer
            />
            <script
              src="/phoenix-editor/inlineTextEditor.js?v=1763065037155"
              data-phoenix-text-edit="true"
              defer
            />
            <script
              src="/phoenix-editor/inlineClassEditor.js?v=1763065037155"
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
        <TranslationProvider locale="fr">
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
        </TranslationProvider>
      </body>
    </html>
  );
}
