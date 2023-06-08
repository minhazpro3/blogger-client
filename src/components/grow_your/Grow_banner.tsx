
export default function HomeGrowYou() {


    return (
        <div className="container mx-auto px-8 md:px-0">

            <div className="grid grid-cols-4  gap-4">
                <div className="col-span-3 bg-blue-900 p-4 bg-opacity-30 rounded-lg">
                    <h2 className="text-white">Grow your business <br />with Beautiful And Unique Design</h2>
                    <button className="text-white">Get Start</button>
                </div>
                <div className="col-span-1 text-white bg-blue-900 bg-opacity-30 rounded-lg p-4">
                    <ul className="py-1 my-1 text-center hover:cursor-pointer hover:bg-cyan-950 rounded-md  bg-cyan-800">
                        <button>Menu</button>
                    </ul>
                    <ul className="py-1 my-1 text-center hover:cursor-pointer hover:bg-cyan-950 rounded-md  bg-cyan-800">
                        <button>Services</button>
                    </ul>
                    <ul className="py-1 my-1 text-center hover:cursor-pointer hover:bg-cyan-950 rounded-md  bg-cyan-800">
                        <button>Solution</button>
                    </ul>
                    <ul className="py-1 my-1 text-center hover:cursor-pointer hover:bg-cyan-950 rounded-md  bg-cyan-800">
                        <button>About us </button>
                    </ul>
                    <ul className="py-1 my-1 text-center hover:cursor-pointer hover:bg-cyan-950 rounded-md  bg-cyan-800">
                        <button>Blogs </button>
                    </ul>
                    <ul className="py-1 my-1 text-center hover:cursor-pointer hover:bg-cyan-950 rounded-md  bg-cyan-800">
                        <button>Contact us </button>
                    </ul>
                </div>
            </div>

        </div>
    )
}