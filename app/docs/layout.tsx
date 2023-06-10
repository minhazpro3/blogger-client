import SubtitleHome from "@/components/docs/SubTitle_sidebar";
import Title_sidebar from "@/components/docs/Title_sidebar";


export default function DocsLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="my-5">
            <div className="grid grid-cols-12 text-white gap-4 px-8 bg-gradient-to-tr from-gray-950   via-indigo-900 via-30% to-gray-900">
                {/*   sidebar */}
                <div className="col-span-3     px-6">
                    <Title_sidebar/>
                </div>
                {/* main  */}
                <div className="col-span-6 static">
                    {children}
                </div>
                {/* documents */}
                <div className="col-span-3">
                    <SubtitleHome/>
                </div>
            </div>

        </div>
    )
}