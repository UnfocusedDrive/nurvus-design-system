```jsx
import { Button, ButtonGroup } from '@nurvus/ui';
import { Button as UIButton, ButtonGroup as UIButtonGroup, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import LockOpenIcon from '@material-ui/icons/LockOpen';

<div>
  <ButtonGroup>
    <Button><AddIcon /></Button>
    <Button><FileCopyIcon /></Button>
  </ButtonGroup>
  <UIButtonGroup>
    <UIButton><AddIcon /></UIButton>
    <UIButton><FileCopyIcon /></UIButton>
  </UIButtonGroup>
</div>
```

```jsx
import { Button, ButtonGroup } from '@nurvus/ui';
<Button>I am Button</Button>
```