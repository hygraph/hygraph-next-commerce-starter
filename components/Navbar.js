import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'
import navigation from '../utils/navigation'


export default function Navbar() {
  return (
    <Popover className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Hygraph Bikes</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/logo.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {navigation.map((category) => (
              <a key={category.slug} href={`/category/${category.slug}`} className="text-base font-medium text-gray-500 hover:text-gray-900">
                {category.name}
              </a>
            ))}
  
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            
            <a href="/cart" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            {<ShoppingCartIcon />} Cart
            </a>
            
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}