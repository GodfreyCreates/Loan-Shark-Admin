"use client";

import { HoverEffect } from "../ui/card-hover-effect";
import {
  IconUser,
  IconCash,
  IconCreditCard,
  IconReport,
  IconShield,
  IconMessageCircle,
  IconChartBar,
  IconDeviceMobile,
  IconRepeat,
  IconUsers,
} from "@tabler/icons-react";
import Head from "next/head";

export function Features() {
  return (
    <>
      <Head>
        <title>Features | [App Name]</title>
        <meta
          name="description"
          content="Discover the powerful features of [App Name]"
        />
      </Head>

      <main className="relative mx-auto px-8 text-center py-12">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url(/images/1.avif)",
            opacity: 0.5 // Adjust opacity for background image
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-[rgba(0,0,0,0.9)] to-back"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-6">Features</h1>
          <p className="text-lg mb-12">
            Discover the powerful features of [App Name] that make managing loans
            and clients effortless.
          </p>
          <HoverEffect items={projects} />
        </div>
      </main>
    </>
  );
}

export const projects = [
  {
    title: "Client Management",
    description:
      "Maintain comprehensive profiles for each client, including personal details, loan history, and repayment records. Automated alerts keep you informed of upcoming due dates and overdue payments, ensuring timely follow-ups.",
    icon: IconUser,
  },
  {
    title: "Loan Tracking and Management",
    description:
      "Create, track, and manage multiple loan agreements with ease. Customize loan terms including interest rates, repayment schedules, and penalties for late payments to suit your specific needs.",
    icon: IconCash,
  },
  {
    title: "Payment Processing",
    description:
      "Integrate with mobile money and banking services for seamless payment collection. Generate digital receipts and maintain a transparent transaction history for both you and your clients.",
    icon: IconCreditCard,
  },
  {
    title: "Financial Reporting",
    description:
      "Access a real-time financial dashboard displaying outstanding loans, collected payments, and overall portfolio performance. Detailed financial reports and analytics help you monitor profitability and risk.",
    icon: IconReport,
  },
  {
    title: "Compliance and Security",
    description:
      "Ensure compliance with local lending regulations using built-in tools. Protect client information and financial records with secure data storage and encryption, maintaining confidentiality and integrity.",
    icon: IconShield,
  },
  {
    title: "Communication Tools",
    description:
      "Utilize in-app messaging for direct communication with clients regarding payments and reminders. Automated SMS and email notifications keep clients informed about due dates and important updates.",
    icon: IconMessageCircle,
  },
  {
    title: "Risk Assessment",
    description:
      "Assess the creditworthiness of potential clients based on their loan history and other factors. Use risk scoring tools to make informed lending decisions and manage potential risks effectively.",
    icon: IconChartBar,
  },
  {
    title: "Mobile Accessibility",
    description:
      "Manage your operations on the go with a dedicated mobile app. Offline capabilities ensure functionality in areas with limited internet access, keeping you connected and operational at all times.",
    icon: IconDeviceMobile,
  },
  {
    title: "Debt Recovery Assistance",
    description:
      "Access resources and tools for managing overdue payments and debt recovery. Set up repayment plans or negotiate settlements with clients to recover outstanding debts efficiently.",
    icon: IconRepeat,
  },
  {
    title: "Community and Support",
    description:
      "Join forums and support groups to share experiences, tips, and best practices with other lenders. Access legal resources and support to navigate lending regulations and enhance your operations.",
    icon: IconUsers,
  },
];
