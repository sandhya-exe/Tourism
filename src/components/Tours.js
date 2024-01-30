import Card from "./Card";
function Tours({tours , removeTour}) {
// Tours k andar 7 cards honge
return(
    <div className="container">
        <div>
      <h2 className="title"> Tourism Planning</h2>
        </div>
        <div className="cards">
            {
                // using map to return all the card at once ...less code
                tours.map( (tour) => {
                    return <Card key={tour.id}{...tour} removeTour = {removeTour}></Card>
                })
            }
        </div>
    </div>
)
}

export default Tours;