import './App.css'
import Mermaid from './components/Mermaid';

function App() {
  const chartDefinition = `
  graph TD;
  A[]-->B;
  A-->C;
  B-->D;
  C-->D;
`;
  return (
    <>
      <Mermaid chart={chartDefinition} id="Diagram Example"/>
    </>
  )
}

export default App
