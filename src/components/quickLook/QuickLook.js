function QuickLook({QuickLook}) {
    return (
        <div className="w-screen h-screen z-50 bg-black bg-opacity-40 flex items-center justify-center p-4">
            
            <div className="w-full sm:m-0 max-w-sm md:max-w-md bg-white pb-5 pt-6 px-6 rounded-md  shadow-lg">
                <div className="flex justify-between">
                    <h1 className="text-lg font-bold mb-4">Product Title</h1>
                    <button className="text-xs h-5" onClick={()=>QuickLook(false)}>✕</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              
                    <div className="flex justify-center aspect-square">
                        <div className="w-full">
                            <img
                                src="/a.jpg"
                                alt="Product"
                                className="object-cover w-full rounded-md"
                            />
                        </div>
                    </div>

                    {/* info*/}
                    <div className="flex flex-col">
                        <div>
                            <h2 className="text-xl font-bold">$34.99</h2>
                            <span className="inline-block mt-1 rounded-lg font-bold text-[10px] px-2 py-1 bg-stone-50">
                                Shorts
                            </span>
                        </div>

                        <p className="mt-2 text-xs  rounded-lg font-medium px-2 py-1">
                            High-performance athletic shorts with moisture-wicking technology.
                        </p>

                        <div className="mt-4 flex flex-col gap-2">
                            <label className="text-xs font-medium">Size</label>
                            <select className="text-xs text-stone-500 bg-slate-100 rounded-md h-7">
                                <option>Select Size</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>

                            <label className="text-xs font-medium">Color</label>
                            <select className="text-xs text-stone-500 bg-slate-100 rounded-md h-7">
                                <option>Select Color</option>
                                <option>Black</option>
                                <option>Navy</option>
                                <option>Gray</option>
                            </select>
                        </div>

                        <button className="mt-4 rounded-md w-full h-8 text-white bg-zinc-500 text-xs sm:text-sm hover:bg-zinc-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuickLook;
