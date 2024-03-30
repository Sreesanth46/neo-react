import { Dropdown } from '../lib/components/DropDown';
import { DataGrid } from '../lib/main';
import { Show } from '../lib/main';

const people = [
  {
    id: 1,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member'
  },
  {
    id: 2,
    name: 'Courtney Henry',
    title: 'Designer',
    email: 'courtney.henry@example.com',
    role: 'Admin'
  },
  {
    id: 3,
    name: 'Tom Cook',
    title: 'Director of Product',
    email: 'tom.cook@example.com',
    role: 'Member'
  },
  {
    id: 4,
    name: 'Whitney Francis',
    title: 'Copywriter',
    email: 'whitney.francis@example.com',
    role: 'Admin'
  },
  {
    id: 5,
    name: 'Leonard Krasner',
    title: 'Senior Designer',
    email: 'leonard.krasner@example.com',
    role: 'Owner'
  },
  {
    id: 6,
    name: 'Floyd Miles',
    title: 'Principal Designer',
    email: 'floyd.miles@example.com',
    role: 'Member'
  }
];

function App() {
  return (
    <div className="p-6">
      <Show>
        <Show.When isTrue={false}>Hello it is true</Show.When>
        <Show.Else>Not true</Show.Else>
      </Show>
      <DataGrid rows={people} />

      <Dropdown>
        <Dropdown.Button>Solution</Dropdown.Button>
        <Dropdown.List>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.List>
        <Dropdown.Footer>Simple footer</Dropdown.Footer>
      </Dropdown>
    </div>
  );
}

export default App;
