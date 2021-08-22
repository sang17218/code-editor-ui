import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/xml/xml'

export default function TextEditor(props) {

    return (
        <div className="editor-div">
            <h1>{props.language}</h1>
        <CodeMirror
            className="code-mirror-wrapper"
            value = {props.value}
            options={{
                theme: 'material',
                lineNumbers: true,
                mode: props.mode,
                lineWrapping: true,
            }}
            onChange={(editor, data, value) => {
                console.log("changed value in ",props.mode, value)
                props.onChange(value)
            }}
        />
        </div>
    )
}