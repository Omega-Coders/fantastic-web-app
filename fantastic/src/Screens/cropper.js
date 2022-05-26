import 'bootstrap/dist/css/bootstrap.css';
import React, {Component,Root} from 'react';
import img from "../form_img1png.png";

import { useEffect, useRef, useState } from 'react';
import { Annotorious } from '@recogito/annotorious';

import '@recogito/annotorious/dist/annotorious.min.css';

function FileUploadPage() {

  // Ref to the image DOM element
  const imgEl = useRef();

  // The current Annotorious instance
  const [ anno, setAnno ] = useState();

  // Current drawing tool name
  const [ tool, setTool ] = useState('rect');

  // Init Annotorious when the component
  // mounts, and keep the current 'anno'
  // instance in the application state
  useEffect(() => {
    let annotorious = null;

    if (imgEl.current) {
      // Init
      annotorious = new Annotorious({
        image: imgEl.current
      });

      // Attach event handlers here
      annotorious.on('createAnnotation', annotation => {
        console.log('created', annotation);
      });

      annotorious.on('updateAnnotation', (annotation, previous) => {
        console.log('updated', annotation, previous);
      });

      annotorious.on('deleteAnnotation', annotation => {
        console.log('deleted', annotation);
      });
    }

    // Keep current Annotorious instance in state
    setAnno(annotorious);

    // Cleanup: destroy current instance
    return () => annotorious.destroy();
  }, []);

  // Toggles current tool + button label
  const toggleTool = () => {
    if (tool === 'rect') {
      setTool('polygon');
      anno.setDrawingTool('polygon');
    } else {
      setTool('rect');
      anno.setDrawingTool('rect');
    }
  }

  return (
    <div>
      <div>
        <button
          onClick={toggleTool}>
            { tool === 'rect' ? 'RECTANGLE' : 'POLYGON' }
        </button>
      </div>

      <img 
        ref={imgEl} 
        src={img}
        width="100%"
        alt="Hallstatt Town Square" />
        
    </div>
  );
}

export default FileUploadPage;
// import { red } from '@material-ui/core/colors';
// import React from 'preact/compat';

// const HelloWorldWidget = props => {
//   // We'll be using 'highlighting' as body purpose for 
//   // this type of widget
//   const currentHighlight = props.annotation ? 
//     props.annotation.bodies.find(b => b.purpose === 'highlighting') : null;

//   // This function handles body updates as the user presses buttons
//   const setHighlightBody = value => () => {
//     props.onUpsertBody(currentHighlight, { value, purpose: 'highlighting' });
//   }

//   return (
//     <div className="helloworld-widget">
//       { [ 'red', 'green', 'blue' ].map(color => 
//         <button 
//           key={color}
//           className={currentHighlight?.value === color ? 'selected' : red}
//           style={{ backgroundColor: color }}
//           onClick={setHighlightBody(color)} />
//       )}
//     </div>
//   )

// }

// export default HelloWorldWidget;



  