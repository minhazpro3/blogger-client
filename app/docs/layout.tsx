import Title_sidebar from "@/components/docs/Title_sidebar";


export default function DocsLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="">
            <div className="grid grid-cols-12 text-white gap-4 px-8">
                {/*   sidebar */}
                <div className="col-span-3 bg-gradient-to-r from-indigo-700  to-indigo-900 inline px-6">
                    <Title_sidebar/>
                </div>
                {/* main  */}
                <div className="col-span-6">
                    {children}
                </div>
                {/* documents */}
                <div className="col-span-3">
                    col  span 2
                </div>
            </div>

        </div>
    )
}