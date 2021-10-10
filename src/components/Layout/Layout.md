Basic Example
```jsx
import { Button, Layout, Title } from '@nurvus/ui';
import AddIcon from '@material-ui/icons/Add';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import LockOpenIcon from '@material-ui/icons/LockOpen';

<Layout>
  <Title level={ 3 }>Layers</Title>
  <Button>
    <AddIcon />
  </Button>
</Layout>
```

Horizontal Example
```jsx
import { Button, Layout, Title } from '@nurvus/ui';
import AddIcon from '@material-ui/icons/Add';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import LockOpenIcon from '@material-ui/icons/LockOpen';

<Layout display="flex" alignItems="center">
  <Title level={ 3 }>Layers</Title>
  <Button>
    <AddIcon />
  </Button>
</Layout>
```

