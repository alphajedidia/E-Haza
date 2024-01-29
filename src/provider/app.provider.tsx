import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import {ErrorBoundary, useErrorBoundary} from "react-error-boundary";
import {QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {queryClient} from "../lib";
import { ActionButton } from "../components/button/button";


type AppProviderProps = {
    children: React.ReactNode
}

function ErrorFallback() {
    const resetBoundary = useErrorBoundary()
    return (
        <>
            <p>Something went wrong</p>
            <ActionButton
                type="button"
                label="try again"
                onClicked={() => {
                    return resetBoundary;
                }}
                isFetching={false}
                variant="secondary"
            />
        </>

    )
}

export  const AppProvider = ({ children }: AppProviderProps) => {
    return (

            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <QueryClientProvider client={queryClient}>
                    <Router>
                        {children}
                    </Router>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
                {/* */}
            </ErrorBoundary>

    )
}