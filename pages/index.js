import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Mcq from "@/components/Mcq";
import Tools from "@/components/Tools";
import Games from "@/components/Games";
import Roadmaps from "@/components/Roadmap";

export default function Home() {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>Code Skipper - Learn Coding from Scratch</title>
        <meta name="description" content="Code Skipper is your ultimate platform to learn coding from scratch. Explore tutorials, quizzes, exercises, and projects in web development, data science, machine learning, and game design." />
        <meta name="keywords" content="learn coding, coding tutorials, programming exercises, web development, data science, machine learning, game design, Code Skipper" />
        <meta name="author" content="Kartik Sharma" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Code Skipper - Learn Coding from Scratch" />
        <meta property="og:description" content="Join Code Skipper to explore coding tutorials, quizzes, exercises, and projects designed for beginners and experienced programmers." />
        <meta property="og:image" content="https://codeskipper.in/Images/logo.png" /> {/* Replace with actual OG image */}
        <meta property="og:url" content="https://codeskipper.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Code Skipper - Learn Coding from Scratch" />
        <meta name="twitter:description" content="Your platform to learn coding with tutorials, quizzes, and projects in web development, data science, machine learning, and more." />
        <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />

        {/* Technical SEO */}
        <link rel="canonical" href="https://codeskipper.in/" />
        <link rel="icon" href="/Images/favicon.ico" />

        <meta name="robots" content="index, follow" />
      </Head>

      {/* JSON-LD Structured Data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Code Skipper",
            "url": "https://codeskipper.in/",
            "description": "Code Skipper is your ultimate platform to learn coding from scratch. Explore tutorials, quizzes, exercises, and projects in web development, data science, machine learning, and game design.",
            "publisher": {
              "@type": "Organization",
              "name": "Code Skipper",
              "logo": {
                "@type": "ImageObject",
                "url": "https://codeskipper.in/Images/logo.png" // Replace with your logo URL
              }
            }
          })
        }}
      />

      <SimpleLayout>
        <Hero/>
        <Feature/>
        <Roadmaps/>
        <Mcq/>
        <Tools/>
        <Games/>
      </SimpleLayout>
    </>
  );
}
