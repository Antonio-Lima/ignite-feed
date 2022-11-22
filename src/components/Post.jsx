import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', { 
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit',
  // }).format(publishedAt);

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { 
    locale: ptBR,
  })

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return(
    <article className={styles.post} >
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={ publishedDateFormatted } dateytime={ publishedAt.toISOString() }>{ publishedDateRelativeNow }</time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p>{ item.content }</p>
          } else if (item.type === 'link') {
            return <p><a href="">{ item.content }</a></p>
          }
        })}
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

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}