import Help_article from "./Help_article";

export default function Help_articles() {

    return (
        <div className="container mx-auto px-8 md:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-stretch  gap-6 sm:gap-7 md:gap-6 lg:gap-8 text-center my-12">
                <Help_article />
                <Help_article />
                <Help_article />
            </div>
        </div>
    )
}