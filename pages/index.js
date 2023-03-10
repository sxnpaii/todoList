// next modules
import Head from 'next/head';
// components
import Header from '../src/components/Header';
import TodoList from '../src/components/TodoList';
// styles
import cls from '../src/styles/TodoList.module.scss';
// data fetching
export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_URL}/api/hello`);
  const data = await response.json();
  return {
    props: {
      todos: data
    }
  }
}
export default function Home({ todos }) {
  return (
    <>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg " />
      </Head>
      <main className={cls.main}>
        <header>
          <div className="container">
            <div className="row">
              <Header />
            </div>
          </div>
        </header>
        <section className={cls.subHeader}>
          <div className="container">
            <div className="row">
              <div className="todosStatus">
                <h1>You’ve got <span> {todos.length} task</span> today </h1 >
                <div className="tools">
                  <div className="dropdown-center">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Centered dropdown
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Action two</a></li>
                      <li><a className="dropdown-item" href="#">Action three</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={cls.TodoList}>
          <div className="container">
            <div className="row">
              <TodoList todos={todos} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
