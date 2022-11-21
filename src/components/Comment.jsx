import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/DanielReezende.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Daniel Rezende</strong>
              <time title="17 de novembro de 2022 às 15:37" dateTime="2022-11-17 15:37:00">Cerca de 1h atrás</time>
            </div>
              <button title="Deletar comentário">
                <Trash size={24} />
              </button>
          </header>

          <p>Muito bom Diego.</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/> 
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}