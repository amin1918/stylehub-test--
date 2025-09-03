import { FiUser, FiHeart, FiShoppingBag, FiSearch, FiMenu, FiX } from "react-icons/fi"
import Container from "../container/Container"
import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white border-b">
      <Container className="lg:py-2 md:py-2 py-2 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="font-bold text-lg mr-3">StyleHub</h1>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium mr-3">
          <li>New Arrivals</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
        </ul>
        
        <div className="hidden md:flex relative flex-1 max-w-md items-center my-2">
          <input 
            placeholder="Search Products"
            className="w-full bg-stone-100 rounded-lg h-8 pl-7 text-sm outline-none"
          />
          <span className="absolute left-2 text-stone-500">
            <FiSearch size={15} />
          </span>
        </div>

        
        <div className="flex items-center gap-3 pl-4">
         
          <div className="hidden md:flex gap-6">
            <button className=" p-2 rounded-md m-1 hover:bg-stone-100"><FiUser size={14} /></button>
            <button className="p-2 rounded-md m-1 hover:bg-stone-100"><FiHeart size={14} /></button>
          </div>
        
          <button className="p-2 rounded-md m-1 hover:bg-stone-100 ml-6" ><FiShoppingBag size={14} /></button>

          <button className=" md:hidden ml-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t shadow-lg md:hidden px-5 py-5">
           
            <div className="relative p-4">
              <input 
                placeholder="Search Products"
                className="w-full bg-stone-100 rounded-lg h-8 pl-8 text-sm outline-none"
              />
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-500">
                <FiSearch size={14} />
              </span>
            </div>

         
            <ul className="flex flex-col gap-4 p-4 text-sm font-medium">
              
              <li><a>New Arrivals</a> </li>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
            </ul>

          
            <div className="flex gap-3 mt-2">
              <button><FiUser size={14} /></button>
              <button><FiHeart size={14} /></button>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Navbar
