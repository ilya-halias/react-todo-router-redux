
import {FC} from "react";
interface CheckboxProps{
    checked: boolean;
    onChange: () => void
}
export const Checkbox: FC<CheckboxProps>= (props) => <input type={"checkbox"} onChange={props.onChange} checked={props.checked}/>
