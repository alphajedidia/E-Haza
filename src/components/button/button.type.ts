import { UseErrorBoundaryApi } from "react-error-boundary";

export enum buttonSize { LARGE="large",MEDIUM="medium",SMALL="small"}

export enum buttonVariant { PRIMARY = "primary", SECONDARY = "secondary"}

export type ActionButtonProps = {
    type: "button" | "submit" | "reset"
    onClicked:(() => UseErrorBoundaryApi<any>) | (() => void)  ,
    label: React.ReactNode,
    isFetching: boolean,
    size?: buttonSize,
    variant: "primary" | "secondary",
    style?: string
};