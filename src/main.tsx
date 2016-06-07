import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface AppProps {
    message: string
};

const App = ({message} : AppProps) => <div>{message}</div>;

ReactDOM.render(<App message="Hello world again? Ayyyyy lmao" />, document.getElementById('root'));