import { Dialog } from "@mui/material"
import React from "react"
import { ActionButton } from "../button/button"
type ConfirmationModal = {
    title?: string,
    content: string,
    handleClose:()=>void,
    handleSubmit:()=>void,
    open: boolean
}
export const ConfirmationModal = (props:ConfirmationModal)=>{
    const { title, content, handleClose, open, handleSubmit } = props
    return(
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="py-5 px-4">
                    <h2 id="alert-dialog-title" className="text-xl font-semibold text-colorScheme-light-charcoal text-opacity-85 pb-4">{title}</h2>
                    <div className="text-colorScheme-light-charcoal">
                        <p className="alert-dialog-description">
                            {content}
                        </p>
                    </div>
                    <div className="flex flex-row justify-end w-full pt-4">
                        <div className="flex flex-row space-x-1">
                            <ActionButton onClicked={handleClose} isFetching={false} label="No" type="button" variant="secondary" style="border-none"/>
                            <ActionButton onClicked={handleSubmit} isFetching={false} label="Yes" type="button" variant="primary" style=""/>
                        </div>
                    </div>
                </div>
            </Dialog>
        </React.Fragment>
    )
}