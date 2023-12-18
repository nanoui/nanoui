# nanoui

# Docs
[nanoui](https://www.unpkg.com/nanoui/storybook-static/index.html)

# Install
```javascript
npm i nanoui
```

# Usage
```javascript
import { Button } from 'nanoui'
```

# Demo
```javascript
import React from 'react';
import { Button, SimpleButton } from 'nanoui';

export default function App() {
  let color1 = '#730707';
  return (
    <div>
      <Button
        backgroundColor={color1}
        label="Button"
        onClick={function noRefCheck() {}}
        primary
      />
      <SimpleButton>Hello</SimpleButton>
    </div>
  );
}

```