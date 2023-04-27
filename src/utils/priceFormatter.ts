export default function priceFormatter(number: number) {
  return number
    .toString()
    .split(/(?=(?:...)*$)/)
    .join(' ')
}
