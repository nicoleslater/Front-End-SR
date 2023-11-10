function Movie({}){

}

export default Movie;


function Movie (){


return (
    <tr>
      <td>
        {Movie.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      </tr>
    );
}