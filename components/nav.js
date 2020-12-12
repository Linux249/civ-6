import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-4">
        <li>
          <Link href="/">
            <p className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
              Home
            </p>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          <li>
            <p className="no-underline btn-blue">Reset</p>
          </li>
          <li>
            <p className="no-underline btn-blue">Menu</p>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
