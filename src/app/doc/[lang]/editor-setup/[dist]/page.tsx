"use client";
export default function Page({
  params: { lang, dist },
}: {
  params: { lang: string; dist: string };
}) {
  return (
    <div>
      Welcome to {dist} distribution for {lang} languages
    </div>
  );
}
