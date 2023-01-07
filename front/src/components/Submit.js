import styles from "./Submit.module.css"

const Submit = ({type, value, onSubmit}) => {
  return (
    <div className={styles.btn_container}>
      <input className={styles.btn}type={type} value={value} onSubmit={onSubmit}/>
    </div>
  )
}

export default Submit