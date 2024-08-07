import React from 'react'

export function MenuIconBanner({ size = 48 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 49 48"
    >
      <path
        fill="#fff"
        d="M32.5 0h-16C7.663 0 .5 7.163.5 16v16c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16V16c0-8.837-7.163-16-16-16z"
      ></path>
      <path
        fill="#2500FF"
        d="M18.551 13.697a2.968 2.968 0 00.021 4.172l2.516 2.516a6.086 6.086 0 010 8.595l-4.612-4.612a6.074 6.074 0 010-8.596l2.044-2.044.031-.031z"
      ></path>
      <path
        fill="#2500FF"
        d="M20.564 19.859l-1.992-1.991a2.958 2.958 0 01-.021-4.172 2.875 2.875 0 014.057.031 2.89 2.89 0 01.849 2.044 2.89 2.89 0 01-.849 2.044l-.472.472M30.449 34.294a2.968 2.968 0 00-.021-4.172l-2.516-2.516a6.086 6.086 0 010-8.595l4.612 4.612a6.07 6.07 0 010 8.595l-2.044 2.044-.031.032z"
      ></path>
      <path
        fill="#2500FF"
        d="M28.425 28.141l1.992 1.991a2.958 2.958 0 01.021 4.172 2.876 2.876 0 01-4.057-.031 2.89 2.89 0 01-.849-2.044c0-.734.283-1.478.849-2.044l.482-.482"
      ></path>
    </svg>
  )
}
