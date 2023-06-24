"use client";
import Link from "next/link";
const tabs = ["Windows", "macOS", "Linux"];

export default function EditorSetupLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <div className="pt-10">
      <strong className="text-sm font-bold text-cyan-600">Editor Setup</strong>
      <h1 className="my-4 text-4xl font-bold text-white">
        Get started to Setup your computer for{" "}
        <span className="text-sm font-bold text-cyan-600">{params.lang}</span>
      </h1>
      <p className="text-base">
        Tailwind CSS works by scanning all of your HTML files, JavaScript
        components, and any other templates for class names, generating the
        corresponding styles and then writing them to a static CSS file.
      </p>
      {/* setup */}
      <div className="mt-8">
        <strong className="text-lg font-bold text-cyan-600">
          Editor Setup
        </strong>
        <div className="mt-4 border-b border-gray-600">
          {tabs.map((tab, index) => (
            <Link
              legacyBehavior
              href={`/doc/${params.lang}/editor-setup/${tab.toLowerCase()}`}
              key={index}
            >
              <a
                className={`mr-8 inline-block border-b-2 border-transparent py-3 text-white hover:border-gray-600`}
              >
                {tab}
              </a>
            </Link>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
