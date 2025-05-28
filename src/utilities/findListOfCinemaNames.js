export default function getListOfCinemaNames(array) {

    const filteredArray = array.map(element => {
        return (
            element.cinemaDocs[0].name
        );
    });

    const uniqueCinemaNames = new Set(filteredArray);
    const listOfUniqueCinemaNames = [...uniqueCinemaNames];

    return listOfUniqueCinemaNames;    
}