import { FiHeart } from "react-icons/fi";

function ProductItem({QuickLook }) {
  return (
    <div className="border-stone-200 border rounded-xl w-full group/mom overflow-hidden duration-200 ease-linear hover:shadow-lg">
      
      {/* img*/}
      <div className="relative w-full aspect-square overflow-hidden rounded-t-xl group/image">
        <img
          src="/a.jpg"
          className="w-full h-full object-cover rounded-t-xl transform transition-transform duration-300 group-hover/mom:scale-105 group-hover/image:scale-105"
          alt="product name"
        />
        {/*save*/}
        <div className="absolute right-3 top-3">
          <button className="border rounded-md p-2 bg-slate-100 
            opacity-0 transform translate-y-2 
            transition-all duration-300 ease-linear
            group-hover/image:opacity-100 group-hover/image:translate-y-0">
            <FiHeart size={15} />
          </button>
        </div>

        {/*  Quick View */}
        <div className="absolute bottom-[-20px] w-full px-6">
          <button onClick={()=> QuickLook(true)} className="w-full font-semibold text-[13px] h-8 bg-black text-white rounded-md transform transition-transform duration-300 group-hover/image:-translate-y-8">
            Quick View
          </button>
        </div>
      </div>

      {/* intro*/}
      <div className="my-4 mx-4">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-sm sm:text-base">Athletic Shorts</h1>
          <span className="border rounded-lg font-bold text-[10px] px-2 py-1">
            Shorts
          </span>
        </div>
        <h1 className="py-2 font-extrabold text-base sm:text-lg">34.99$</h1>
        <div className="flex gap-2">
          <select className="flex-1 text-[9px] sm:text-xs text-stone-500 bg-slate-100 rounded-md h-7">
            <option>Size</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <select className="flex-1 text-[9px] sm:text-xs text-stone-500 bg-slate-100 rounded-md h-7">
            <option>Color</option>
            <option>Black</option>
            <option>Navy</option>
            <option>Gray</option>
          </select>
        </div>
        <div className="flex justify-center pt-2">
          <button className="rounded-md w-full h-7 text-white bg-zinc-500 text-xs sm:text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
