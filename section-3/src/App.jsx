import { useState } from 'react';
import CoreConcept from './components/CoreConcept/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';

import { CORE_CONCEPTS } from './data';

function App() {
  const [tabContent, setTabContent] = useState("Please click a button")

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
    console.log(tabContent)
  }

  console.log('App Component Rendering')

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
