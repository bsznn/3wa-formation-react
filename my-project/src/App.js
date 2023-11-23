import Greetings from "./components/Greetings";
import ItemTopics from "./components/ItemTopics";
import data from "./assets/data.js";

function App() {
  console.log(data);
  return (
    <main className="bg-slate-900	min-h-screen">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 justify-center items-center min-h-screen md:space-x-36 px-8">
        <Greetings></Greetings>

        <section className="md:col-span-2">
          <ul className="w-full flex flex-col gap-5">
            {data.quizzes.map((item, index) => (
              <ItemTopics
                key={index}
                title={item.title}
                images={item.icon}
              ></ItemTopics>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
