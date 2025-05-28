export default function findDateAndTime(showingsArray, cinemaName) {

    const dateAndTime = showingsArray.filter(showing => {
        if (showing.cinemaDocs[0].name === cinemaName) {
            return true;
        } else {
            return false;
        }
    });

    return dateAndTime;
}