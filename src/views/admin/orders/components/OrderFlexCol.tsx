import type { FC } from "react"

const OrderFlexCol:FC<{label: string, value: string}> = ({label, value}) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2 text-sm">
        <span className="font-bold">{label}</span>
        <span className="font-medium">{value}</span>
    </div>
  )
}

export default OrderFlexCol