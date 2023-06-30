import { RiMenuFoldLine, RiMenuUnfoldFill } from "react-icons/ri";
export default function PreviewHeader({
  links,
  hashBar,
  setHashBar,
}: {
  links: { slug: string; title: string }[];
  hashBar: true | false;
  setHashBar: any;
}) {
  return (
    <div className="flex h-16 items-center justify-between">
      <div className="w-full"></div>
      <div className="w-28"></div>
    </div>
  );
}
