// type ButtonTypes = {
//   children: React.ReactNode;
//   onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
//   className?: string;
//   rest: any
// };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Button({ children, className, ...rest }: any) {
  return (
    <button
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      className={`bg-red-500 text-white py-2 px-6 rounded ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
