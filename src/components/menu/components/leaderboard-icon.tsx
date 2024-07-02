import React, { ButtonHTMLAttributes, ReactElement } from 'react'

interface IMenuLeaderboardIcon {
  color?: string
  size?: number
}

export function MenuLeaderboardIcon({
  color,
  size = 24,
}: IMenuLeaderboardIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 26"
    >
      <path
        fill={color}
        d="M0 14h2.667v12H0V14zm21.333-5.333H24V26h-2.667V8.667zm-10.666-8h2.666V26h-2.666V.667z"
      ></path>
    </svg>
  )
}
