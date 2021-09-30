import React from "react";

interface IToggleProps {
    state: boolean,
    setter: Function,
    choiceA?: string,
    choiceB?: string,
}

const selectedToggleStyle = "w-1/2 flex justify-center items-center p-2 text-blueGray-200 bg-blueGray-600 focus:outline-none"
const unSelectedToggleStyle = "w-1/2 flex justify-center items-center p-2  text-blueGray-600 bg-blueGray-200 hover:bg-blueGray-400 hover:text-blueGray-200 focus:outline-none"

const ToggleBox: React.FC<IToggleProps> = React.memo((props) => {
    const onClickChoiceA = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!props.state === true) props.setter(true);
    }
    const onClickChoiceB = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (props.state) props.setter(false);
    }

    return (
        <div className="flex text-xl px-2">
            <button type="button" onClick={onClickChoiceA} className={((props.state) ? selectedToggleStyle : unSelectedToggleStyle) + " rounded-l-md"}>
                <p>
                    {props.choiceA || "ON"}
                </p>
            </button>
            <div className="place-self-stretch border border-blueGray-100"></div>
            <button type="button" onClick={onClickChoiceB} className={((!props.state) ? selectedToggleStyle : unSelectedToggleStyle) + " rounded-r-md"}>
                <p>
                    {props.choiceB || "OFF"}
                </p>
            </button>
        </div>
    )
})

export default ToggleBox;