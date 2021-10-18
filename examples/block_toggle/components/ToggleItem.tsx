import React from "react";
import ToggleBox from "./ToggleBox"

const ToggleItem = (props) => {
    return (
        <div className="flex justify-between items-center my-4">
            {/* Extended attributes are available from the props parameter */}
            <p>{props.setting}</p>
            <ToggleBox state={props.state} setter={props.setter} choiceA={props.choiceA} choiceB={props.choiceB} />
        </div>
    )
}

export default ToggleItem;