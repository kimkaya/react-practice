import { Component } from "react";
import { Table } from "reactstrap";

class TableEx extends Component {
    render(){
        return(
            <Table bordered striped hover >
                <thead>
                    <tr>
                        <th>
                            number
                        </th>

                        <th>
                            book name
                        </th>

                        <th>
                            price
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>

                        <td>
                            react start2
                        </td>

                        <td>
                            $1000
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">
                            2
                        </th>

                        <td>
                            react start2
                        </td>

                        <td>
                            $2000
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">
                            3
                        </th>

                        <td>
                            react start3
                        </td>

                        <td>
                            $3000
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">
                            4
                        </th>

                        <td>
                            react start4
                        </td>

                        <td>
                            $4000
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default TableEx;
