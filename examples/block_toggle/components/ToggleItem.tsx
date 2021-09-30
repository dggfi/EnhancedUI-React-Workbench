import React from "react";
import ToggleBox from "./ToggleBox"

interface IToggleItemProps {
    setting: string,
    state: boolean | any,
    setter: Function,
    choiceA?: string,
    choiceB?: string
}

const ToggleItem: React.FC<IToggleItemProps> = React.memo((props) => {
    return (
        <div className="flex justify-between items-center my-4">
            <p>{props.setting}</p>
            <ToggleBox state={props.state} setter={props.setter} choiceA={props.choiceA} choiceB={props.choiceB} />
        </div>
    )
})

export default React.memo(ToggleItem);