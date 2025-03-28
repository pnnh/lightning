import styles from './basex.module.scss'
import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasexPage() {
    const [source, setSource] = React.useState('');
    const [output, setOutput] = React.useState('');

    const encodeBase64 = () => {
        if (!source) {
            return;
        }
        setOutput(btoa(source));
    }

    return <div className={styles.basexPage}>
        <h1>Base系列</h1>
        <textarea placeholder={'输入文本'} value={source}
                  onChange={(event) => setSource(event.target.value)}/>
        <Button variant="contained" size={'small'} onClick={encodeBase64}>Base64编码</Button>
        <textarea placeholder={'输出文本'} value={output}/>
    </div>
}
