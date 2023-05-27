import Help_article from "./Help_article";

export default function Help_articles() {

    return (
        <div className="container mx-auto px-8 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:6">
                <Help_article />
                <Help_article />
                <Help_article />
            </div>
        </div>
    )
}