import { CORE_CONCEPTS as data, EXAMPLES } from "./data";
import HeaderComponent from "./components/Header";
import { CoreConcepts } from "./components/CoreConcepts";
import {
  TabButton,
  TabButtonDynamicProps,
} from "./components/reuseable_components/TabButton";
import { useState } from "react";
import Section from "./components/Section";

function App() {
  const [tabContant, setTabContent] = useState();

  function handleSelect(value) {
    // console.log(`You clicked on ${value}`);
    setTabContent(value);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (tabContant) {
    const { title, description, code } = EXAMPLES[tabContant];
    tabContent = (
      <div id="tab-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <HeaderComponent />
      <main>
        <Section title="Core Concepts" id="core-concepts">
          <ul>
            {data.map((item) => {
              return <CoreConcepts key={item.title} {...item} />;
            })}
            {/* {data.map((item) => {
              return (
                <CoreConcepts
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              );
            })} */}
            {/* <CoreConcepts
              title={data[0].title}
              description={data[0].description}
              image={data[0].image}
            />
            <CoreConcepts {...data[1]} />
            <CoreConcepts {...data[2]} />
            <CoreConcepts {...data[3]} /> */}
          </ul>
        </Section>
        <section id="examples">
          <menu>
            <TabButton
              isSelected={tabContant === "components"}
              onSelect={() => handleSelect("components")}
              label="Components"
            />
            <TabButton
              isSelected={tabContant === "jsx"}
              onSelect={() => handleSelect("jsx")}
              label="JSX"
            />
            <TabButton
              isSelected={tabContant === "props"}
              onSelect={() => handleSelect("props")}
              label="Props"
            />
            <TabButtonDynamicProps
              className={tabContant === "state" ? "active" : undefined}
              onClick={() => handleSelect("state")}
              label="State"
            />
          </menu>
          {tabContent}

          {/* {!tabContant ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[tabContant].title}</h3>
              <p>{EXAMPLES[tabContant].description}</p>
              <pre>
                <code>{EXAMPLES[tabContant].code}</code>
              </pre>
            </div>
          )} */}
          {/* {!tabContant && <p>Please Select a topic.</p>}
          {tabContant && (
            <div id="tab-content">
              <h3>{EXAMPLES[tabContant].title}</h3>
              <p>{EXAMPLES[tabContant].description}</p>
              <pre>
                <code>{EXAMPLES[tabContant].code}</code>
              </pre>
            </div>
          )} */}
        </section>
      </main>
    </>
  );
}

export default App;
