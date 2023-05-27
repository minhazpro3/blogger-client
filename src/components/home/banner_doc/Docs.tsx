import Doc from "./Doc";



export default function Docs() {
    const docs = [
        {
            id: 1,
            title: "Fundamentals Doc",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate magnam totam officiis. Modi impedit minus, voluptatum hic odit debitis tenetur dolorem, ea ducimus consequuntur nihil, fuga tempora rerum accusantium soluta. ",
            icon: "https://assets2.lottiefiles.com/private_files/lf30_TnPsHD.json"
        },
        {
            id: 2,
            title: "Market Data Doc",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate magnam totam officiis. Modi impedit minus, voluptatum hic odit debitis tenetur dolorem, ea ducimus consequuntur nihil, fuga tempora rerum accusantium soluta. "
            ,
            icon: "https://assets10.lottiefiles.com/packages/lf20_rpy2wsnf.json"
        },
        {
            id: 3,
            title: "Api Reference",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate magnam totam officiis. Modi impedit minus, voluptatum hic odit debitis tenetur dolorem, ea ducimus consequuntur nihil, fuga tempora rerum accusantium soluta. "
             ,
            icon: "https://assets1.lottiefiles.com/packages/lf20_xUxVNs.json"
        }
    ]
    return (
        <div className="container mx-auto md:px-0 px-8 ">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 md:gap-6">
                
                {
                    docs.map((doc,index)=><Doc key={index} doc={doc} />)
                }
            </div>
        </div>
    )
}