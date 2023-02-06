import {ChangeEvent, FC} from "react";

interface InputProps {
    onChange: (e:ChangeEvent< HTMLInputElement>)=> void
    value: string
}
export const Input: FC <InputProps> = (props) => <input onChange={props.onChange} value={props.value}/>
