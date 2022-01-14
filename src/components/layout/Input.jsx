import { TextField } from "@mui/material";

export default function Input (type, id, label, value, onChange, placeholder, defaultChecked, defaultValue) {
    <TextField 
    type={type}
    id={id}
    label={label}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    defaultChecked = {defaultChecked}
    defaultValue={defaultValue} />
}