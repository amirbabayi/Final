import React from 'react';
import {MemoryRouter, Route} from 'react-router';
import {Link} from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    data: {
        marginTop: 10
    },

});

export default function PaginationLink() {
    const classes = useStyles();
    return (
        <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
            <Route>
                {({location}) => {
                    const query = new URLSearchParams(location.search);
                    const page = parseInt(query.get('page') || '1', 6);
                    return (
                        <Pagination
                            page={page}
                            size={"small"}
                            className={classes.data}
                            count={6}
                            renderItem={(item) => (
                                <PaginationItem
                                    component={Link}
                                    to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                                    {...item}
                                />
                            )}
                        />
                    );
                }}
            </Route>
        </MemoryRouter>
    );
}
