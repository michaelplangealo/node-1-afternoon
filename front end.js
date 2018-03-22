// REACT COMPONENT - FRONT END


var id = 4;


axios.post("/api/animals", { name: this.state.animal }).then(res => { });

<input type=text onChange={this.changeAnimal}></input>





// PARAMS     *accessed from backend as   req.params.id              something you add on to the end of the URL, they are iD's
http://localhost:3000/api/animals/
http://facebook.com/friends/42

// QUERY            *accessed from backened as req.query.id   has a question mark

http://facebook.com/coworkers/?number=id


// BODY         *ACCESED FROM BACKENED AS req.body.key
http://facebook.com/addProfile

// DELETE
applicationCache.delete("/api/animals/:index")

