import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AEC Coding Club",
  description: "Join AEC Coding Club - A community of passionate developers, innovators, and problem solvers. Learn Web Development, AI/ML, Competitive Programming, and more.",
  keywords: "coding club, programming, web development, AI, machine learning, competitive programming, AEC",
  authors: [{ name: "AEC Coding Club" }],
  creator: "AEC Coding Club",
  publisher: "AEC Coding Club",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://coding.aec.ac.in/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AEC Coding Club",
    description: "Join AEC Coding Club - A community of passionate developers, innovators, and problem solvers.",
    url: 'https://coding.aec.ac.in/',
    siteName: 'AEC Coding Club',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AEC Coding Club',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEC Coding Club',
    description: 'Join AEC Coding Club - A community of passionate developers, innovators, and problem solvers.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'AEC Coding Club',
    statusBarStyle: 'default',
    capable: true,
  },
  other: {
    'apple-mobile-web-app-title': 'Coding Club',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}