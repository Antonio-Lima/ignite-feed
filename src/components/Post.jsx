import styles from './Post.module.css'

export function Post() {
  return(
    <article className={styles.post} >
      <header>
        <div className={styles.author}>
          <img src="https://github.com/diego3g.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="17 de novembro de 2022 às 15:37" dateTime="2022-11-17 15:37:00"> Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="#">jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Escreva aqui seu comentário" />

        <footer>
          <button type="submit">
            Publicar
          </button>
        </footer>
      </form>
    </article>
  )
}