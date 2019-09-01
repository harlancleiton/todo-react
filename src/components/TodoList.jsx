import React, {Component} from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import {Check, Undo} from "@material-ui/icons";
import './TodoList.css';

class TodoList extends Component {
    render() {
        const {handleRemove, handleMakeDone, handleMakePending, list} = this.props;
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align={"left"}>Descrição</TableCell>
                            <TableCell align={"left"}>Status</TableCell>
                            <TableCell align={"left"}>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map(todo => (
                            <TableRow key={todo._id}>
                                <TableCell align={"left"} className={todo.done ? 'todoMake' : ''}>
                                    {todo.description}
                                </TableCell>
                                <TableCell align={"left"}>
                                    {todo.done ? 'Feito' : 'Pendente'}
                                </TableCell>
                                <TableCell>
                                    <IconButton color="secondary" onClick={() => handleRemove(todo)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                    {/*<IconButton color="primary" onClick={() => handleRemove(todo)}>*/}
                                    {/*    <Edit/>*/}
                                    {/*</IconButton>*/}
                                    <IconButton color="primary" onClick={() => handleMakeDone(todo)} hidden={todo.done}>
                                        <Check/>
                                    </IconButton>
                                    <IconButton color="primary" onClick={() => handleMakePending(todo)}
                                                hidden={!todo.done}>
                                        <Undo/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default TodoList;
