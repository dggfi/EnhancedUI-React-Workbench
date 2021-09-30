import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch: React.FC = () => {
    const location = useLocation();
    return (
        <div className="flex flex-col w-full h-full justify-center items-center text-4xl text-blueGray-300">
            <p>404</p>
            <p className="mt-5 max-w-sm p-6">{location.pathname}</p>
        </div>
    )
}

export default NoMatch;