import { useState } from "react";
import {
    CustomLink,
    IconArea,
    OptionMenuStyle,
    TextMenu,
} from "../styles";
import { Link } from "react-router-dom";
import { OptionMenuProps } from "../../../Assets";

const OptionMenu = ({ name, iconUnselect, iconSelect, path, alt, onClick, isSelected }: OptionMenuProps) => {
    return (
        <div onClick={onClick}>
            <CustomLink to={path}>
                <IconArea
                isClicked={isSelected}
                >
                    {isSelected ? (
                        <img src={iconSelect} alt={alt} />
                    ) : (
                        <img src={iconUnselect} alt={alt} />
                    )}
                </IconArea>
                <TextMenu
                    isClicked={isSelected}
                >
                    {name}
                </TextMenu>
            </CustomLink >
        </div>)
}

export default OptionMenu;