import React, { Component } from 'react';
import { getMovies } from '../fakeMovieService';
import { table } from 'react-bootstrap';


class Movies extends Component {
    state = {
        movies:getMovies()
    };

    handleDelete = (movie) => {
         const filter = this.state.movies.filter(m => m._id !== movie._id);
         this.setState({movies: filter});

    }
    
    render() { 
        return ( 
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th> </th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.movies.map(movie => (<tr key = {movie._id}>
                            <td>{movie.title} </td>
                            <td>{movie.genre.name}</td>
                            <td> {movie.numberInStock} </td>
                            <td> {movie.dailyRentalRate} </td>
                            <td> <button onClick = {() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button> </td>
                        </tr>))}
                        
                    </tbody>
                </table>
            </div>
        );
        
    }
}

 



export default Movies;
