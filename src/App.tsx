import { useState } from 'react';
import { Button, IconButton, DialogActions, DialogContent } from 'ui';
import { IconStar } from 'ui/icons';

function App() {
  const [text, setText] = useState('Hello world!');
  return (
    <main
      style={{
        display: 'grid',
        placeItems: 'center',
        minHeight: '100vh',
      }}
    >
      {' '}
      <Button variant='secondary' onClick={() => setText(text + '!')}>
        {text}
      </Button>
      <Button variant='primary' onClick={() => setText(text + '!')}>
        {text}
      </Button>
    </main>
  );
}
export default App;
