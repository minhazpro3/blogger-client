"use client";
import Title_sidebar from "@/components/docs/Title_sidebar";
import Header from "@/components/header";
import HashLinkContext from "@/contexts/hashLinkContext";
import languages from "@/languages";
import { type SectionTypes } from "@/languages/types";
import NotFound from "@/ui/notFound";
import { useState } from "react";

export default function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string; slug?: string };
}) {
  const langSlug: string = params.lang;
  const language: SectionTypes | unknown = languages[langSlug];
  return (
    <div>
      <Header />
      {!language ? (
        <div className="container flex h-screen w-screen items-center justify-center text-center">
          <NotFound />
        </div>
      ) : (
        <div className="container mx-auto h-screen max-w-[1360px] px-5">
          <div className="flex h-full gap-4 text-[#92a1b6]">
            {/*   sidebar */}
            <div className="fixed h-full w-[300px]  pt-[7%] ">
              <Title_sidebar language={language as []} lang={params.lang} />
            </div>
            {/* main  */}
            <div className="w-full pl-[315px] pt-[7%]">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}
