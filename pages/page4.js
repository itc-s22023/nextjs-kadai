import styles from '../styles/page4.module.css'

export default function Coming () {
  return (
    <div className={styles.box}>
      <style jsx global>{`
        body {
          background-color: #033;
        }
    `}</style>
      <h1>COMING SOON</h1>
      <p>
        NEW WEBSITE IS AVAILABLE<br />
        ON 20XX.01.01
      </p>
    </div>
  )
}
