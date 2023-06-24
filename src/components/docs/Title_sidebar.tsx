"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineSetting } from "react-icons/ai";
import { type SectionType, type SectionTypes } from "@/languages/types";

interface PropsTypes {
  lang: string;
  language: SectionTypes;
}

const Title_sidebar: React.FC<PropsTypes> = ({
  lang = "javascript",
  language,
}) => {
  console.log(lang);
  return (
    <div className="h-[93%] overflow-y-scroll px-2 pb-6">
      <h2 className="text-2xl font-medium">Welcome to</h2>
      <h2 className="text-xl font-medium">
        {lang?.replace(/[^0-9A-Za-z]/g, "")}
      </h2>
      {/* Buttons */}
      <div className="mt-6">
        <Link legacyBehavior href={`/doc/${lang}/editor-setup`}>
          <a className="group/edit flex items-center">
            <span className="mr-4 flex h-6 w-6 items-center justify-center rounded-md bg-slate-800 text-center text-lg shadow-sm group-hover/edit:bg-cyan-700">
              <AiOutlineSetting />
            </span>
            <span className="group-hover/edit:text-white">Editor Setup</span>
          </a>
        </Link>
      </div>
      {/* dashboard section */}
      <div className="mt-6">
        {language.map(
          (langDoc: SectionType, index: React.Key | null | undefined) => (
            <div key={index}>
              <h5 className="mb-8 font-semibold text-slate-900 dark:text-slate-200 lg:mb-3">
                {langDoc.section}
              </h5>
              {langDoc.topics.map((doc) => (
                <Link
                  legacyBehavior
                  href={`/doc/${lang}/${doc.slug}`}
                  key={doc.order}
                >
                  <a className="block select-none border-l border-gray-700  py-2 pl-5 text-left text-base hover:border-l-2 hover:border-cyan-700 hover:text-gray-300">
                    {doc.name}
                  </a>
                </Link>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Title_sidebar;
