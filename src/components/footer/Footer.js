import { 
  FiFacebook, 
  FiInstagram, 
  FiTwitter, 
  FiYoutube, 
  FiMail, 
  FiPhone, 
  FiMapPin 
} from "react-icons/fi";
import Container from "../container/Container";
function Footer() {
  return (
    <div className="text-sm bg-stone-100 border w-full">
      <Container className="mt-0 mb-0 md:py-3 ">
        <div className="py-6">
        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            
            {/* col1 */}
            <div>
              <h1 className="font-bold text-base mb-2">StyleHub</h1>
              <p className="text-slate-500 text-xs">
                Your destination for premium fashion and apparel. Quality meets style in every piece we offer.
              </p>
              <div className="mt-3 flex items-center gap-4 text-gray-700">
                <button><FiFacebook size={12} /></button>
                <button><FiInstagram size={12} /></button>
                <button><FiTwitter size={12} /></button>
                <button><FiYoutube size={12} /></button>
              </div>
            </div>

            {/* col2 */}
            <div>
              <h1 className="font-bold text-sm mb-2">Shop</h1>
              <ul className="flex flex-col text-slate-500 text-xs gap-1.5">
                <li><a href="#new-arrivals" className="hover:underline">New Arrivals</a></li>
                <li><a href="#mens-collection" className="hover:underline">Men's Collection</a></li>
                <li><a href="#womens-collection" className="hover:underline">Women's Collection</a></li>
                <li><a href="#kids-collection" className="hover:underline">Kids Collection</a></li>
                <li><a href="#sale-items" className="hover:underline">Sale Items</a></li>
                <li><a href="#accessories" className="hover:underline">Accessories</a></li>
              </ul>
            </div>

            {/* col3 */}
            <div>
              <h1 className="font-bold text-sm mb-2">Customer Service</h1>
              <ul className="flex flex-col text-slate-500 text-xs gap-1.5">
                <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
                <li><a href="#size-guide" className="hover:underline">Size Guide</a></li>
                <li><a href="#shipping-info" className="hover:underline">Shipping Info</a></li>
                <li><a href="#returns-exchanges" className="hover:underline">Returns & Exchanges</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
                <li><a href="#track-order" className="hover:underline">Track Your Order</a></li>
              </ul>
            </div>

            {/* col4 */}
            <div>
              <h1 className="font-bold text-sm mb-2">Stay Updated</h1>
              <p className="text-slate-500 text-xs mb-2">
                Subscribe to get updates on new arrivals and exclusive offers.
              </p>

              {/* input + button */}
              <div className="flex gap-1.5 mb-4 ">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-stone-200  flex-1 px-3 py-1.5 border  rounded-md  text-xs outline-none"
                />
                <button className="px-3 py-1.5 bg-black text-white rounded-md text-xs font-medium">
                  Subscribe
                </button>
              </div>

              {/* contact info */}
              <div className="flex flex-col gap-1 text-slate-400 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <FiMail size={12} className="text-gray-400" />
                  <span>info@stylehub.com</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiPhone size={12} className="text-gray-400" />
                  <span>1-800-FASHION</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiMapPin size={12} className="text-gray-400" />
                  <span>123 Fashion Ave, NY 10001</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-slate-300 h-[1px] mt-5"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center py-3 border-t border-gray-200 text-gray-500 text-[11px] gap-2">
            <span>© 2024 StyleHub. All rights reserved.</span>
            <div className="flex gap-3">
              <a href="#privacy-policy" className="hover:underline">Privacy Policy</a>
              <a href="#terms-of-service" className="hover:underline">Terms of Service</a>
              <a href="#cookie-policy" className="hover:underline">Cookie Policy</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
