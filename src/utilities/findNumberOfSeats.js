export default function findNumberOfSeats(showingsArray, cinemaName) {
    
    const numberOfSeats = showingsArray.find(showing => {
        if (showing.cinemaDocs[0].name === cinemaName) {
            return true;
        } else {
            return false;
        }
    }).cinemaDocs[0].seats;
    //console.log(numberOfSeats);

    return numberOfSeats;
}