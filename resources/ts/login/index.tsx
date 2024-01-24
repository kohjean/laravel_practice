import { FormEvent } from 'react'
import styles from './index.module.css'

export const Login = () => {
  const handleSubmit = (eve: FormEvent) => {
    eve.preventDefault()
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputArea}>
          <label id="email">email</label>
          <input id="email" type="email" name="email" required />
        </div>
        <div className={styles.inputArea}>
          <label id="password">password</label>
          <input id="password" type="password" name="password" required />
        </div>
        <div className={styles.submitContainer}>
          <button type="submit">登録</button>
        </div>
      </form>
    </div>
  )
}
