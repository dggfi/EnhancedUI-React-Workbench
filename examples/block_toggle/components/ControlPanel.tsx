import React, { useState } from "react";
import ToggleItem from "./ToggleItem";

const ControlPanel: React.FC = () => {
    const [blockOn, setBlockOn] = useState<boolean>(false);
    const [clangHappy, setClangHappy] = useState<boolean>(false);

    return (
        <div className="flex text-3xl w-full h-full rounded-xl text-blueGray-700 bg-white bg-opacity-90 px-6 py-4 shadow-xl">
            {/* Left Zone */}
            <div className="w-1/3 h-full relative p-4">
                Left
            </div>
            <div className="h-full flex items-center py-2">
                <div className="h-full border-4 border-r border-blueGray-400"></div>
            </div>
            {/* Center Zone */}
            <div className="w-1/3 h-full flex flex-col p-4">
                <div className="flex justify-center items-center mb-12"><p>Clang is {!clangHappy && "NOT"} happy</p></div>
                <div className="flex justify-between flex-col">
                    <ToggleItem setting="Toggle" state={blockOn} setter={setBlockOn} />
                    <ToggleItem setting="Clang Happy" state={clangHappy} setter={setClangHappy} choiceA="Yes" choiceB="No" />
                </div>
            </div>
            {/* Right Zone */}
            <div className="h-full flex items-center py-2">
                <div className="h-full border-4 border-r border-blueGray-400"></div>
            </div>
            <div className="w-1/3 h-full p-4">
                The Other Left
            </div>
        </div>
    )
}

export default ControlPanel;