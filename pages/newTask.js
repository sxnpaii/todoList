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
                        <div className="dropImage">
                            
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default newTask
