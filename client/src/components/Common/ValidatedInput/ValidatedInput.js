import styles from "./ValidatedInput.module.css"

export const ValidatedInput = ({type, name, placeholder, defaultValue, value, onChange}) => {

    const onInputBlur = () => {

    }

    return (

    <input 
    type={type} 
    name={name}
    placeholder={placeholder}
    defaultValue={defaultValue} 
    value={value}
    onChange={onChange}
    onBlur={onInputBlur}
    />
    
    )
}