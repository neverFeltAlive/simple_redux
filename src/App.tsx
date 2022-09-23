import Person from "./components/Person";
import Edit from "./components/Edit";

function App() {
    return (
        <main className="min-h-screen min-w-screen flex flex-col justify-evenly items-center container mx-auto lg:flex-row">
            <Edit/>
            <Person/>
        </main>
    );
}

export default App;
