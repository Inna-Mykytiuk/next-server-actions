import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10 w-full">
      <div className="max-w-xl mx-auto sm:px-4 flex justify-center">
        <h1 className="text-xl font-bold mb-0">
          <ul className="flex items-center justify-between gap-4">
            <li>
              <Link
                href="/"
                className="text-white/90 no-underline hover:text-white "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/counter"
                className="text-white/90 no-underline hover:text-white "
              >
                Counter
              </Link>
            </li>
            <li>
              <Link
                href="/addProd"
                className="text-white/90 no-underline hover:text-white "
              >
                Add products
              </Link>
            </li>
            <li>
              <Link
                href="/todosPage"
                className="text-white/90 no-underline hover:text-white "
              >
                Todos
              </Link>
            </li>
          </ul>
        </h1>
      </div>
    </nav>
  );
};
