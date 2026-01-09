import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>Varad Srivastava Logo</title>
      <path d="M7 3l-4 18h4l4-18z" />
      <path d="M13 3l4 9-4 9h4l4-9-4-9z" />
    </svg>
  );
}
