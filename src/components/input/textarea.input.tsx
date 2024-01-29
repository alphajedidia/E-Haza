type TextAreaProps = {
    cols?:number,
    rows?:number,
    style?:string,
    placeholder:string
}
export const TextArea = (props:TextAreaProps)=>{
    const {cols, rows, placeholder, style} = props
    return(
        <div className="w-full">
            <textarea name="" id="" cols={cols} rows={rows} className={`bg-inherit text-colorScheme-light-charcoal border-b-[1px] border-b-gray-300 focus:border-transparent focus-visible:outline-none focus:border-b-colorScheme-light-orange focus:ring-transparent ${style}`} placeholder={placeholder} autoFocus></textarea>
        </div>
    )
}