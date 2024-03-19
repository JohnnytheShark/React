import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';


const Mermaid = ({ chart, id }) => {
 const containerRef = useRef(null);

 useEffect(() => {
    mermaid.initialize({
      startOnLoad:true,
      theme: 'base',
      erDiagram: {
         useMaxWidth: false,
        chartWidth: 1080,
        chartHeight: 1920,
        minEntityWidth: 100, // Minimum width for entities
        minEntityHeight: 50, // Minimum height for entities
        entityPadding: 20 // Padding around entities
      }
    });

    const renderMermaid = () => {
      mermaid.render(id, chart, (svgCode) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svgCode;
        }
      });
    };

    renderMermaid();
 }, [chart, id]);

 return (
    <div className="mermaid" id={id} ref={containerRef}>
      {chart}
    </div>
 );
};

export default Mermaid;