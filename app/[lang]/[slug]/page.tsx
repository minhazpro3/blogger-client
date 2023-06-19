/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import { useRouter } from "next/navigation";

const Page = ({ params }: any) => {
  const router = useRouter();
  return <div>Welcome to slug {params.slug}</div>;
};

export default Page;
