// ? error with api integration but API is custom created 

// export const getServerSideProps = async (context) => {
//     const response = await fetch(`${process.env.API_URL}/api/hello/${context.params.id}`);
//     const data = await response.json();
//     return {
//         props: {
//             oneTodo: data
//         }
//     }
// } 
import Header from "../src/components/Header";

const oneTodo = ({/*{ oneTodo }*/}) => {
    return (
        <section>
            <header>
                <div className="container">
                    <div className="row">
                        <Header /> 
                    </div>
                </div>
            </header>

        </section>
    )
}

export default oneTodo
