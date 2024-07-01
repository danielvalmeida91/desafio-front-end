import React from 'react'

interface IMenuDashboardIcon {
  size?: number
  color?: string
}

export function MenuDashboardIcon({
  color = '#FFF',
  size = 24,
}: IMenuDashboardIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 28 28"
    >
      <path
        fill={color}
        d="M11.67 5.846l.372 5.52.184 2.774c.002.285.046.569.133.841.222.529.758.865 1.34.842l8.877-.581c.384-.006.755.137 1.031.4.23.218.38.504.426.812l.016.186c-.367 5.087-4.103 9.329-9.179 10.424-5.075 1.095-10.28-1.218-12.788-5.684a10.958 10.958 0 01-1.329-4.195 8.011 8.011 0 01-.084-1.315C.66 10.417 4.544 5.703 9.979 4.566a1.456 1.456 0 011.559.841c.067.139.112.287.132.439z"
      ></path>
      <path
        fill={color}
        d="M27.334 11.083l-.01.043-.027.064.004.173a1.07 1.07 0 01-.255.63c-.16.186-.377.312-.617.361l-.146.02-10.241.664a1.22 1.22 0 01-.933-.302 1.178 1.178 0 01-.384-.716l-.688-10.227a.16.16 0 010-.106c.01-.282.134-.549.345-.74.21-.192.491-.292.778-.279 6.08.154 11.19 4.526 12.174 10.415z"
        opacity="0.4"
      ></path>
    </svg>
  )
}
