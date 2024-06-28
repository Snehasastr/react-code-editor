import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeEditor = () => {
    const [code, setCode] = useState('');

    const handleCodeChange = (event) => {
        setCode(event.target.value);
    };

    return (
        <div className="code-editor-container">
            <textarea
                value={code}
                onChange={handleCodeChange}
                className="code-editor-textarea"
            />
            <SyntaxHighlighter language="javascript" style={prism}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeEditor;
