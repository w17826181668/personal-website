/* 线性图标集（1.5px 描边，克制统一） */
const paths = {
  compass: (
    <>
      <circle cx="24" cy="24" r="17" />
      <path d="M15.5 32.5 20 20l12.5-4.5L28 28z" />
    </>
  ),
  chart: (
    <>
      <path d="M7 39V19M17 39V11M27 39V24M37 39V15" />
      <path d="M4 43h40" />
    </>
  ),
  play: (
    <>
      <rect x="6" y="5" width="28" height="26" rx="5" />
      <path d="M17 14l9 6-9 6z" />
      <path d="M20 35v6M30 35v6" />
    </>
  ),
  spark: (
    <>
      <path d="M24 6l3.4 8.6L36 18l-8.6 3.4L24 30l-3.4-8.6L12 18l8.6-3.4z" />
      <path d="M35 32l1.8 4.2L41 38l-4.2 1.8L35 44l-1.8-4.2L29 38l4.2-1.8z" />
    </>
  ),
  code: (
    <>
      <path d="M16 15 8 24l8 9M32 15l8 9-8 9M27 10l-6 28" />
    </>
  ),
  heart: (
    <>
      <path d="M24 41S8 31.5 8 20.5C8 14.7 12.3 11 16.8 11c3 0 5.6 1.6 7.2 4 1.6-2.4 4.2-4 7.2-4C35.7 11 40 14.7 40 20.5 40 31.5 24 41 24 41z" />
    </>
  ),
}

export default function Icon({ name, size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.spark}
    </svg>
  )
}
