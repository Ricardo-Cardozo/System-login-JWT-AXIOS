import styles from "./Input.module.css"

const Input = ({type, name, placeholder, onChange, label}) => {
  return (
    <div className={styles.Input}>
      <label>
        {label}
        <br />
        <input
        className={styles.input_form}
          type={type} 
          name={name} 
          onChange={onChange} 
          placeholder={placeholder}
        />
      </label>
    </div>
  )
}

export default Input