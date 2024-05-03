import { CORE_CONCEPTS as data } from "./data";
import HeaderComponent from "./components/Header";
import { CoreConcepts } from "./components/CoreConcepts";

function App() {
  return (
    <div>
      <HeaderComponent />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcepts
              title={data[0].title}
              description={data[0].description}
              image={data[0].image}
            />

            <CoreConcepts {...data[1]} />

            <CoreConcepts {...data[2]} />

            <CoreConcepts {...data[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
