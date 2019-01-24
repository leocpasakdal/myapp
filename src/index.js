import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';

const Index = () => <div className={styles.main}>Hello React!</div>;

ReactDOM.render(<Index />, document.getElementById('index'));
