
import Navmenu from './Navmenu'
import React, { useState } from 'react'
import ToggleTheme from './ToggleTheme'
import { FiSearch, FiUser, FiShoppingCart, FiX, FiMenu } from 'react-icons/fi'
// import { GiHamburgerMenu as HumbargerMenu } from 'react-icons/gi'
function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="relative bg-(--color-primary) dark:bg-[#110b06] text-white m-0.5 md:rounded-md">
        
          <div className="container px-1 md:px-4 mx-auto">
            <div className="flex items-center justify-between p-4">
              {/* logo section */}
              <div className='shrink-0 gap-2 flex items-center'>
                <h1 className="text-[16px] md:text-2xl font-bold">DryFruit</h1>
              </div>
              {/* menu section */}
              <div className="flex-1 flex justify-center hidden md:block">
                <ul className="flex items-center justify-center gap-2 md:gap-4">
                  {
                    Navmenu.map((item) => (
                      <li key={item.id} className="inline-block mx-4">
                        <a href={item.href} className=" font-poppins hover:text-gray-300">
                          {item.name}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
              {/* icon section */}
              <div className="flex items-center space-x-3 md:space-x-4">

                <button className="hover:text-gray-300 ml-4 md:mr-6" aria-label="Search">
                  <FiSearch className="text-xl md:text-2xl" strokeWidth={2} />
                </button>
                <div className='hidden md:flex gap-1 md:gap-2'>
                  <button className="text-white  font-poppins hover:text-gray-300">
                    Login
                  </button>
                  <button className="text-sm text-white px-2 md:px-6 py-2 font-poppins hover:text-gray-300">
                    SignUp
                  </button>
                </div>

                <ToggleTheme />

                <button className="hover:text-gray-300 hidden md:block " aria-label="User">
                  <FiUser className="text-xl md:text-2xl" strokeWidth={3} />
                </button>
                <button className="hover:text-gray-300" aria-label="Cart">
                  <FiShoppingCart className="text-xl md:text-2xl" strokeWidth={3} />
                </button>
              </div>
              {/* mobile humburger setion */}
              <div>
                <button
                  className="md:hidden hover:text-gray-300"
                  onClick={() => setOpen(!open)}
                  aria-label="Toggle menu"
                >
                  {open ? <FiX className="text-xl mt-2" /> : <FiMenu className="text-xl mt-2" />}

                </button>
                {open && (
                  <div className="md:hidden absolute left-0 top-full mt-0 w-full shadow-lg overflow-hidden bg-(--color-primary) ">
                    {/* menu items yahan */}
                    <ul className="flex flex-col items-center gap-5 text-center transition-all duration-1000 ease-in-out">
                      {
                        Navmenu.map((item) => (
                          <li key={item.id} className="w-full">
                            <a
                              href={item.href}
                              className=" w-full py-2 px-4 "
                            >{item.name}</a>

                          </li>
                        ))
                      }
                      <div className='flex flex-col gap-4 pb-4'>
                      <button className="text-white  font-poppins ">
                        Login
                      </button>
                      <button className="text-white  font-poppins ">
                        SignUp
                      </button>
                      </div>
                    </ul>
                  </div>
                )}


              </div>



            </div>
          </div>
        
      </nav>

    </>
  )
}

export default Navbar
