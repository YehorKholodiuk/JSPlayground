import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

function highlightWithLineNumbers(input, language) {
  return highlight(input, language)
      .split('\n')
      .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
      .join('\n');
}

function App() {
  const [code, setCode] = React.useState(
      `  function add(a, b) {\n  return a + b;\n} \n\n  console.log(add(2, 3))`
  );

  const onRun = () => {
     //eslint-disable-next-line no-eval
    eval(code);
  };

  return (
      <>
        <Editor
            className={'codeEditor'}
            onChange={e => setCode(e.target.value)}
            value={code}
            onValueChange={code => setCode(code)}
            highlight={(code) => highlightWithLineNumbers(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 20,
            }}
        />

        <button onClick={onRun} className='runButton'>Run</button>
      </>
  );
}

export default App;
