import { useEffect } from 'react';
import mermaid from 'mermaid';

const Mermaid = ({ chart, id }) => {
 useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.init(undefined, document.getElementById(id));
 }, [chart, id]);

 return (
    <div className="mermaid" id={id}>
      {chart}
    </div>
 );
};

export default Mermaid;