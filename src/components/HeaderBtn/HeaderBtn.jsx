import React from "react"

const Button = ({extraStyle, children}) => {
    return (
            <button className={`${extraStyle} w-[200px] py-2 rounded-[10px] border-slate-400`}>{children}</button>
    )
}
export default Button
