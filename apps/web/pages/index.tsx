import Head from 'next/head'
import cn from 'classnames'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>To-Do app with Next.js, Node.js, and Fastify</title>
      </Head>

      <header className={cn('wrapper')}>
        <h1 className={cn('text-2xl font-medium')}>
          Your To-Do's
        </h1>
      </header>

      <main className={cn([styles.main, 'wrapper'])}>
        <section className={cn([styles.actionBar])}>
          <nav>
            <a href="">Active</a>
            <a href="">Completed</a>
            <a href="">Archived</a>
          </nav>

          <button>New To-Do</button>
        </section>

        <section>
          <div>
            Win Warzone
          </div>
        </section>
      </main>
    </div>
  )
}
