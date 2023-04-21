/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Link from 'next/link';

export default function NavLink({
  children,
  href = '/',
  className = '',
  ...rest
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any | unknown) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <Link legacyBehavior href={href} {...rest}>
      <a className={` cursor-pointer text-gray-300 ${className}`}>{children}</a>
    </Link>
  );
}
