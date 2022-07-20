import React from 'react'
import Preload from '../components/common/Preload/Preload'


export const withSuspense = (Component) => {
    return (props) => {
        return (
            <React.Suspense fallback={<Preload/>}>
                <Component {...props}/>
            </React.Suspense>
        )
    }
}