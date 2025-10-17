import Link from "next/link";
export default function Navbar() {
  return (
    <div className="drawer z-20">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <label htmlFor="my-drawer" className="btn drawer-button">
              {/* Hamburger menu icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </label>
            <a className="btn btn-ghost text-xl text-primary font-[IM_FELL_English_SC]" href="/">
              CharredWonderland
            </a>
          </div>
          <div className="flex-none gap-2">
            <ul className="menu menu-horizontal flex gap-2 max-sm:hidden mb-[-2rem] ">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/catalog">Catalog</Link>
              </li>
              <li>
                <Link href="/comission">Comission</Link>
              </li>
              <li>
                <Link href="/books">Books</Link>
              </li>
              <li>
                <Link href="/payment">Payment</Link>
              </li>
            </ul>
            <div className="dropdown dropdown-end">
              <ul tabIndex={0} className="mt-3 z-[1] p-0 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li className="sm:hidden">
                  <Link href="/">Beranda</Link>
                </li>
                <li className="sm:hidden">
                  <Link href="/catalog">Catalog</Link>
                </li>
                <li className="sm:hidden">
                  <Link href="/comission">Comission</Link>
                </li>
                <li className="sm:hidden">
                  <Link href="/books">Books</Link>
                </li>
                <li className="sm:hidden">
                  <Link href="/payment">Payment</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/catalog">Catalog</Link>
          </li>
          <li>
            <Link href="/comission">Comission</Link>
          </li>
          <li>
            <Link href="/books">Books</Link>
          </li>
          <li>
            <Link href="/payment">Payment</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
