import {FC} from "react";

interface RadiogroupProps {
    items: {id: string; label: string; value: string}[]
    value: string;
    onChange: (value: string)=> void
}

export const Radiogroup: FC<RadiogroupProps> = ({  items, value, onChange }) => {
    return (
        <div>
            {items.map((item)=>(
                <div key={item.id}>
                    <input
                    type={"radio"}
                    value={item.value}
                    id={item.id}
                    checked={item.value === value}
                    onChange={()=> onChange(item.value)}

                    />
                    <label htmlFor={item.id}>{item.label}</label>

                </div>
            ))}
        </div>
    );
}
