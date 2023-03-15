import styles from "./CommonSection.module.css"
const CommonSection = ({ title }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
    </div>
  )
}

export default CommonSection
