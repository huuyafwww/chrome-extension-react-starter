import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import '@styles'; // import style files
import Main from '@components'; // import Main component

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <Main />;
    }
}

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('app')
);
