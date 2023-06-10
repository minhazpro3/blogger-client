import SubtitleHome from "@/components/docs/SubTitle_sidebar";
import Title_sidebar from "@/components/docs/Title_sidebar";


export default function DocsLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="">
            <div className="flex text-white gap-4  bg-gradient-to-tr from-gray-950  via-indigo-900 via-30% to-gray-900">
                {/*   sidebar */}
                <div className="w-[350px] fixed  h-screen ">
                    <Title_sidebar/>
                </div>
                {/* main  */}
                <div className="w-full pl-[365px] pr-[265px] ">
                    {children}
                </div>
                {/* documents */}
                <div className="w-[250px] right-0 fixed h-screen    ">
                    <SubtitleHome/>
                </div>
            </div>

        </div>
    )
}