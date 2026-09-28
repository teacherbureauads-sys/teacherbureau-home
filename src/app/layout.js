import "./globals.css";
import AppLayout from "~/components/layouts/app-layout";
import { Urbanist } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReduxProvider } from "./redux-provider";
import { Toaster } from "react-hot-toast";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import FloatingCTA from "~/components/floating-cta/FloatingCTA";
import PopupForm from "~/components/floating-cta/PopupForm";

const urbanist = Urbanist({ subsets: ["latin"] });

const GOOGLE_SITE_VERIFICATION =
  process.env.GOOGLE_SITE_VERIFICATION;

const GTM_ID = process.env.GTM_ID;

// Google Analytics 4 (gtag.js) measurement ID, e.g. "G-XXXXXXXXXX"
const GA_ID = process.env.GA_ID;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://teachersbureau.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Teachers Bureau | Trusted Home Tutors Across India",
    template: "%s | Teachers Bureau",
  },

  description:
    "Teachers Bureau connects families with qualified, background-checked home tutors across India. Book a subject expert for school, CBSE, ICSE, or competitive-exam coaching in a few clicks.",

  keywords: [
    "Teachers Bureau",
    "Home Tutor Booking",
    "Qualified Home Tutors",
    "Tutor Near Me",
    "Home Tuition Service",
    "Home Tutor in Mumbai",
    "Home Tutor in Pune",
    "Home Tutor in Bangalore",
    "CBSE Tutor at Home",
    "ICSE Tutor at Home",
    "Maths Tutor at Home",
    "Science Tutor at Home",
    "English Tutor at Home",
  ],

  authors: [{ name: "Teachers Bureau" }],

  creator: "Teachers Bureau",
  publisher: "Teachers Bureau",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Teachers Bureau",

    title: "Teachers Bureau | Trusted Home Tutors Across India",

    description:
      "Book a background-checked home tutor for your child in a few clicks.",

    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 675,
        alt: "Teachers Bureau",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Teachers Bureau | Trusted Home Tutors Across India",
    description:
      "Book a background-checked home tutor for your child in a few clicks.",

    images: [`${SITE_URL}/og.jpg`],
  },

  icons: {
    icon: "/favicon.ico",
  },
};


/* =========================
   Root Layout
========================= */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

      <body className={urbanist.className}>

        {/* Google Tag Manager NoScript */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{
                display: "none",
                visibility: "hidden",
              }}
            />
          </noscript>
        )}

        <Toaster position="bottom-center" />

        <ReduxProvider>
          <AppLayout>
            {children}
          </AppLayout>
        </ReduxProvider>

        {/* Floating Call / WhatsApp Buttons */}
        <FloatingCTA />

        {/* Auto lead-capture popup, opens once per session after 10s */}
        <PopupForm />

      </body>
    </html>
  );
}
