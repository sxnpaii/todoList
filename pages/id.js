
import Header from "../src/components/Header";
import SubHeader from "../src/components/SubHeader";

const oneTodo = () => {
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
                        <SubHeader title="Task" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default oneTodo;
