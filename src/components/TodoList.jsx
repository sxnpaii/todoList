// next modules
import Link from "next/link";
import cls from "../styles/forComponents/TodoList.module.scss";

const TodoList = ({ todos }) => {
    return (
        <>
            <div className={cls.todos}>
                {todos.map(({id, author, image, dueDate, status, notes }) => (
                    <Link href={`${id}`} key={id} className={cls.toodo}>
                        <div className={cls.body}>
                            <div className={cls.ava}>
                                <img src={image} alt="" />
                            </div>
                            <div className={cls.text}>
                                <h6><span>{author}</span> - 06.06.2022  14:00PM</h6>
                                <p>{notes}</p>
                            </div>
                        </div>
                        <div className={cls.status}>
                            <p><b>Expiration:</b> {dueDate} </p>
                            <button>{status}</button>
                        </div>
                    </Link>
                ))} 
            </div>
        </>
    )
}

export default TodoList
