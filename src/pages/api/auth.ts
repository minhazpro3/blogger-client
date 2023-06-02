/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/api/auth.js
export default function handler(_req: any, res: any) {
  // Your authentication logic here
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  res.status(200).json({ message: "Authentication successful" });
}
