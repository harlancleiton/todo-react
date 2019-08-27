import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class TodoForm extends Component {
    render() {
        const { description, handleAdd, handleChange } = this.props;
        return (
            <div>
                <form noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={10} sm={9}>
                            <TextField
                                id="standard-name"
                                label="Name"
                                fullWidth
                                value={description}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <Button color={"primary"} variant={"contained"} onClick={handleAdd}>
                                Adicionar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}

export default TodoForm;
