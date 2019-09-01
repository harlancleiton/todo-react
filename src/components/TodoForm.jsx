import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class TodoForm extends Component {
    render() {
        const {description, handleAdd, handleChange, handleSearch} = this.props;
        return (
            <div>
                <form noValidate style={{padding: 20}}>
                    <Grid container spacing={3} style={{padding: 20}}>
                        <Grid item xs={12} md={8} sm={10}>
                            <TextField
                                id="standard-name"
                                label="Name"
                                fullWidth
                                value={description}
                                onChange={handleChange}
                            />
                        </Grid>
                        {/*<Grid item xs={12} sm={3} md={2}>*/}
                        <Grid item xs={6} sm={1} md={1} style={{margin: 5}}>
                            <Button color={"primary"} variant={"contained"} onClick={handleAdd}>
                                Adicionar
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={1} md={1} style={{margin: 5}}>
                            <Button color={"primary"} variant={"contained"} onClick={handleSearch}>
                                Pesquisar
                            </Button>
                        </Grid>
                    </Grid>
                    {/*</Grid>*/}
                </form>
            </div>
        );
    }
}

export default TodoForm;
