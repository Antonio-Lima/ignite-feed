import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Antonio-Lima.png",
      name: "Antônio Lima",
      role: "Front-End Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "antonio.developer/doctorcore" },
    ],
    publishedAt: new Date("2022-11-20 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/alysonbarreto02.png",
      name: "Alyson Barreto",
      role: "Developer Jr"
    },
    content: [
      { type: "paragraph", content: "E ai galera" },
      { type: "paragraph", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis quia tempore? Minus fugiat quos quam quisquam eos? Molestiae assumenda eos quidem maiores possimus omnis, error incidunt commodi quibusdam odit." },
      { type: "link", content: "alyson.developer/doctorcore" },
    ],
    publishedAt: new Date("2022-11-10 20:00:00"),
  },
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { 
            posts.map(post => {
              return (
                <Post 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App
