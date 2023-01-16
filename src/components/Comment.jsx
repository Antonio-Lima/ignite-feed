import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment(props) {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/DanielReezende.png" alt="" hasBorder={false} />
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

          <p>{props.content}</p>
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