import cls from "../src/styles/NewTask.module.scss";
import Header from "../src/components/Header";
import SubHeader from "../src/components/SubHeader";
const newTask = () => {
    return (
        <main>
            <header>
                <div className="container">
                    <div className="row">
                        <Header />
                    </div>
                </div>
            </header>
            <section>
                <div className="container">
                    <div className="row">
                        <SubHeader title="Create a New Task" />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className={cls.dropImage}>
                            <div className={cls.inner}>
                                <img src="/icons/export.svg" alt="" />
                                <p>Drag image <br /> or browse to  <a href="">select file</a></p>
                            </div>
                        </div>
                        <div className={cls.editor}>
                            <div className={cls.body}>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default newTask;
