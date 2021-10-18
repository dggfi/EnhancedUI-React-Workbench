import React from "react";

const selectedToggleStyle = "w-1/2 flex justify-center items-center p-2 text-blueGray-200 bg-blueGray-600 focus:outline-none"
const unSelectedToggleStyle = "w-1/2 flex justify-center items-center p-2  text-blueGray-600 bg-blueGray-200 hover:bg-blueGray-400 hover:text-blueGray-200 focus:outline-none"

const ToggleBox = (props) => {
    const onClickChoiceA = (event) => {
        if (!props.state === true) props.setter(true);
    }
    const onClickChoiceB = (event) => {
        if (props.state) props.setter(false);
    }

    return (
        <div className="flex text-xl px-2">
            {/* As long as they evaluate to something that can be represented in the VDOM, you can inject JavaScript expressions */}
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
}

export default ToggleBox;