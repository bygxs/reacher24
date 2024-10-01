import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header with Your Name */}
      <header className="text-2xl font-bold row-start-1 tracking-wide">
        {" "}
        B I N I Y A M{" "}
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-xl font-semibold">
          My Journey Creating a Next.js PWA and Deploying on Vercel
        </h2>
        <p className="text-sm">Published on October 1, 2024</p>
        <p className="mt-2">
          Creating my first Progressive Web Application (PWA) with Next.js was
          both exhilarating and challenging. Initially, I was drawn to Next.js
          because of its powerful features like server-side rendering and static
          site generation, which promise enhanced performance and SEO benefits.
          I dove into the project, excited to combine my knowledge of React with
          the latest web technologies. As I set up the project, I was impressed
          by how easy it was to configure Next.js to enable PWA functionalities.
          The ability to transform my app into a seamless, app-like experience
          for users was a thrilling prospect. One of the biggest hurdles I faced
          was understanding how to properly implement service workers. The
          documentation was quite helpful, but the intricacies of caching
          strategies and offline support took some trial and error. After
          multiple attempts and a few frustrating moments, I finally managed to
          get my service worker up and running. Seeing my app load instantly,
          even when offline, made all the effort worthwhile. It was a huge
          milestone that reinforced the potential of PWAs in enhancing user
          experience. With the development phase complete, it was time to deploy
          my app on Vercel. The deployment process was remarkably smooth.
          Vercel’s integration with GitHub allowed me to push my changes
          seamlessly, and within minutes, my app was live. The platform’s
          automated previews made it easy to test new features before merging
          them into the main branch. I was pleasantly surprised by how intuitive
          the entire process was, making it a great option for developers of all
          skill levels. Reflecting on this journey, I’ve gained not just
          technical skills but also a deeper appreciation for the PWA paradigm.
          Building this Next.js application has opened my eyes to the
          possibilities of creating fast, reliable, and engaging web
          applications. I can’t wait to explore more features and refine my app
          further, as the web continues to evolve toward a more app-like
          experience. This project was not just about coding; it was about
          learning, growing, and embracing the future of web development.
          {/* Add the rest of your blog entry here */}
        </p>
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>

        {/* New Blog Entry */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold">
            My Journey Creating a Next.js PWA and Deploying on Vercel
          </h2>
          <p className="text-sm">Published on October 1, 2024</p>
          <p className="mt-2">
            Creating my first Progressive Web Application (PWA) with Next.js was
            both exhilarating and challenging. Initially, I was drawn to Next.js
            because of its powerful features like server-side rendering and
            static site generation, which promise enhanced performance and SEO
            benefits. I dove into the project, excited to combine my knowledge
            of React with the latest web technologies. As I set up the project,
            I was impressed by how easy it was to configure Next.js to enable
            PWA functionalities. The ability to transform my app into a
            seamless, app-like experience for users was a thrilling prospect.
            One of the biggest hurdles I faced was understanding how to properly
            implement service workers. The documentation was quite helpful, but
            the intricacies of caching strategies and offline support took some
            trial and error. After multiple attempts and a few frustrating
            moments, I finally managed to get my service worker up and running.
            Seeing my app load instantly, even when offline, made all the effort
            worthwhile. It was a huge milestone that reinforced the potential of
            PWAs in enhancing user experience. With the development phase
            complete, it was time to deploy my app on Vercel. The deployment
            process was remarkably smooth. Vercel’s integration with GitHub
            allowed me to push my changes seamlessly, and within minutes, my app
            was live. The platform’s automated previews made it easy to test new
            features before merging them into the main branch. I was pleasantly
            surprised by how intuitive the entire process was, making it a great
            option for developers of all skill levels. Reflecting on this
            journey, I’ve gained not just technical skills but also a deeper
            appreciation for the PWA paradigm. Building this Next.js application
            has opened my eyes to the possibilities of creating fast, reliable,
            and engaging web applications. I can’t wait to explore more features
            and refine my app further, as the web continues to evolve toward a
            more app-like experience. This project was not just about coding; it
            was about learning, growing, and embracing the future of web
            development.
            {/* Add the rest of your blog entry here */}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 flex gap-6 flex-wrap items-center justify-center bg-gray-800 p-4 text-white">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
