
import {FC, PropsWithChildren} from "react";

interface ButtonProps {
    onClick: () => void ;
}
export const Button: FC<PropsWithChildren<ButtonProps >> = (props) => <button
    onClick={props.onClick}> {props.children}</button>
