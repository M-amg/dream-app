import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../icons/logo'
import Menu from '../silde-overs/Menu'
import { useState } from 'react'


export default function Navbar() {

  return (
    <Disclosure as="nav" >
      {({ open }) => (
        <>
            <div className="flex h-16 items-center justify-between mt-10">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                <Logo />
                </div>
                
              </div>
              
              <div className="-mr-2 flex ">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-12 w-12" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-12 w-12" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            {open && (
            <Menu />
          )}
        </>
      )}
    </Disclosure>
  )
}
