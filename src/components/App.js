import { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import TextEditor from './textEditor'
function App() {

  const [html, setHtml] = useLocalStorage('html')
  const [css, setCss] = useLocalStorage('css')
  const [js, setJs] = useLocalStorage('js')

  const [result, setResult] = useState('');
  useEffect(() => {
    setResult(`<html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>`)
  }, [html, css, js])

  return (
    <div>
      <div className="App">
        <TextEditor mode="xml" language="html" value={html} onChange={setHtml}></TextEditor>
        <TextEditor mode="css" language="css" value={css} onChange={setCss}></TextEditor>
        <TextEditor mode="javascript" language="js" value={js} onChange={setJs}></TextEditor>
      </div>
      <div className="Output">
      <iframe
          srcDoc={result}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
