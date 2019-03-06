import React, { Component } from 'react';
import './App.css';
import { VTable } from './components/Table/Table';
import InputsDemo from './demo/InputsDemo';
import TableWithWidgetDemo from './demo/TableWithWidgetDemo';
import TabsPanelDemo from './demo/TabsPanelDemo';
import VLoadProgressTaskDemo from './demo/VLoadProgressTaskDemo';
import ColorPickerDemo from './demo/ColorPickerDemo';
import NotificationToastDemo from './demo/NotificationToastDemo';

class App extends Component {
  render() {
    const data = [
      { name: 'Carlos', lastname: 'Chao', age: 28 },
      { name: 'Name1', lastname: 'Lastname1', age: 27 },
      { name: 'Name2', lastname: 'Lastname2', age: 25 },
      { name: 'Name3', lastname: 'Lastname3', age: 23 },
      { name: 'Name4', lastname: 'Lastname4', age: 19 },
      { name: 'Name5', lastname: 'Lastname5', age: 45 },
      { name: 'Name6', lastname: 'Lastname6', age: 33 },
      { name: 'Name7', lastname: 'Lastname7', age: 21 },
      { name: 'Name7', lastname: 'Lastname7', age: 44 },
      { name: 'Name7', lastname: 'Lastname7', age: 89 },
      { name: 'Name7', lastname: 'Lastname7', age: 11 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 },
      { name: 'Name7', lastname: 'Lastname7', age: 12 }
    ];

    // validator example
    const nameValidation = (value: string) => {
      return value.length > 5;
    };

    return (
      <React.Fragment>
        <VTable
          edit={{ columns: ['name'], validation: { name: nameValidation } }}
          columns={['name', 'lastname']}
          columns_name={{ name: 'mi nombre' }}
          reordering={true}
          sortable={{ columns: ['name'], onSort: this.onSort }}
          contextual={{
            columns: ['name'],
            default_actions: ['copy', 'paste', 'export'],
            actions: [
              {
                icon: 'export',
                action: (item: any) => console.log(item),
                text: 'Action Input'
              }
            ]
          }}
          data={data}
          enableColumnResizing={true}
          enableRowHeader={true}
          enableRowResizing={true}
          columnWidths={[200]}
          numFrozenRows={2}
          numFrozenColumns={1}
        />
        <InputsDemo />
        <TabsPanelDemo />
        <TableWithWidgetDemo />

        <br />
        <ColorPickerDemo />

        <VLoadProgressTaskDemo />
        <NotificationToastDemo />
      </React.Fragment>
    );
  }

  handleChangeTabMenu = (data: any) => {
    console.log(data);
  };

  onSort = (index: number, order: string) => {
    console.log(index);
    console.log(order);
  };
}

export default App;
