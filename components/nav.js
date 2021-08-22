import { PlusIcon, DotsVerticalIcon } from '@heroicons/react/outline'

export default function Nav() {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-10 bg-gray-darkest">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex flex-grow items-center" id="example-navbar-warning">
          <ul className="flex flex-col flex-row list-none ml-auto">
              <li className="nav-item">
                <button className="inline-flex items-center h-10 px-5 transition-colors duration-150 bg-gray-200 rounded-lg focus:shadow-outline">
                  <PlusIcon className="w-4 h-4 mr-3 fill-current" />
                  <span className="text-xl">Connected</span>
                </button>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
