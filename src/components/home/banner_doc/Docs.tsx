import Doc from "./Doc";

 

export default function Docs (){
    const docs = [
        {
            id:1,
            title:"Fundamentals Doc",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate magnam totam officiis. Modi impedit minus, voluptatum hic odit debitis tenetur dolorem, ea ducimus consequuntur nihil, fuga tempora rerum accusantium soluta atque. Ipsum iure perspiciatis repudiandae, atque sint voluptatem ea rem!"
        },
        {
            id:2,
            title:"Market Data Doc",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate magnam totam officiis. Modi impedit minus, voluptatum hic odit debitis tenetur dolorem, ea ducimus consequuntur nihil, fuga tempora rerum accusantium soluta atque. Ipsum iure perspiciatis repudiandae, atque sint voluptatem ea rem!"
        },
        {
            id:3,
            title:"Api Reference",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate magnam totam officiis. Modi impedit minus, voluptatum hic odit debitis tenetur dolorem, ea ducimus consequuntur nihil, fuga tempora rerum accusantium soluta atque. Ipsum iure perspiciatis repudiandae, atque sint voluptatem ea rem!"
        }
    ]
    return (
        <div className="container mx-auto md:px-0 px-8 ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 md:gap-6">
        <Doc/>
        <Doc/>
        <Doc/>
        </div>
        </div>
    )
}