```jsx
import { Menu } from '@nurvus/ui';

// const initialPath = [0];
const initialPath = [0, 0, 0];
const items = [
  {
    label: 'Item 1',
    items: [
      {
        label: 'Sub 1',
        items: [
          {
            label: 'Sub Item 1'
          },
          {
            label: 'Sub Item 2'
          }
        ]
      },
      {
        label: 'Sub 2'
      }
    ]
  },
  {
    label: 'Item 2'
  }
];

const MyApp = ({initialPath}) => {
  const [activePath, setActivePath] = React.useState(initialPath);

  console.log(activePath);

  return (
    <Menu
      activePath={ activePath }
      items={ items }
      onClick={ (e, path) => setActivePath(path) }
    />
  );
}
<MyApp initialPath={ initialPath } />
```