import Container from "../container/Container"

function Header() {
    return (
        <div className="bg-stone-100">
            <Container className="mt-2 lg:pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 items-center pt-20">
                    {/* text*/}
                    <div className="flex flex-col justify-center pb-10 md:gap-2  rounded-lg lg:aspect-square">
                        <div>
                            <h1 className="text-5xl md:text-5xl font-semibold">
                                New Collection Summer 2024
                            </h1>
                            <p
                                className="text-base md:text-lg text-slate-500 max-w-md mt-4"
                                style={{ fontWeight: 300 }}
                            >
                                Discover the latest trends in fashion with our curated collection
                                of premium apparel. Quality meets style in every piece.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                            <button className="bg-black rounded-md text-white py-2 px-6 font-bold text-sm">
                                Shop Now
                            </button>
                            <button className="rounded-md py-2 px-6 font-bold text-sm border">
                                View Catalog
                            </button>
                        </div>
                        <div className="flex sm:flex-row items-center gap-3 sm:gap-8 mt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-slate-500"> Free Shipping </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-xs text-slate-500"> 30-Day Returns</span>
                            </div>
                        </div>
                    </div>
                    {/* img*/}
                    <div className=" relative flex justify-center items-center  rounded-lg aspect-square">
                        <img
                            src="/main2.avif"
                            className="w-full h-full object-cover rounded-lg"
                            alt="main"
                        />
                        <button className="absolute top-4 right-4 bg-white rounded-3xl text-sm  py-2 px-3 w-14">new</button>
                        <button className="absolute bottom-4 left-4  bg-black text-white text-xs rounded-3xl   py-2 px-3 w-20"> 50% Off </button>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Header
