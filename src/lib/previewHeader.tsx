import { RiMenuFoldLine, RiMenuUnfoldFill } from "react-icons/ri";
export default function PreviewHeader({
  links,
  hashBar,
  setHashBar,
}: {
  links: { slug: string; title: string }[];
  hashBar: true | false;
  setHashBar: (arg0: boolean) => void;
}) {
  return (
    <div className="flex h-16 items-center justify-between">
      <div className="w-full"></div>
      <div className="w-28">
        <button onClick={() => setHashBar(!hashBar)}>
          {hashBar ? <RiMenuFoldLine /> : <RiMenuUnfoldFill />}
        </button>
      </div>
    </div>
  );
}
