import Navbar from '../navbar/Navbar'

function Layout({children}) {
  return (
    <>  
     <Navbar/>
    <div className='flex justify-center flex-col   my-30  ' >{children}</div>
    </>
 
  )
}

export default Layout