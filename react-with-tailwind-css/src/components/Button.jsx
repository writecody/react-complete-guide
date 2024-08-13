export default function Button ({children, ...props}) {
    return (
        <button className="px-4 py-2 ml-4 font-semibold uppercase rounded text-stone-900 bg-amber-600 hover:bg-amber-800" {...props}>{children}</button>
    )
}