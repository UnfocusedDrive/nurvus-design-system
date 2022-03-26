import React from 'react';
export default class Table extends React.Component {


  getRows() {
    const{ data } = this.props;


    return data.map(row => {

      return (
        <tr>
          <td>
            { row.id }
          </td>
          </tr>
      );
    });

  }

  render() {
    return (
      <table>
        <tbody>
        { this.getRows() }

          </tbody>
      </table>
    );
  }
}