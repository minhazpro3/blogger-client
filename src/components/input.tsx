export default function Input({
  title,
  type = 'text',
  labelClass,
  inputClass,
  ...rest
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    <label className={labelClass} htmlFor={title.replace(/\s+/g, '_')}>
      <p>{title}</p>
      <input
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        className={inputClass}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        type={type}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        id={title.replace(/\s+/g, '_')}
        {...rest}
      />
    </label>
  );
}
