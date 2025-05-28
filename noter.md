Fremgangsmåde til biografside

lav en db med en biograf og en film i mongodb
lav et array over sæderne, som angiver, om de er tomme eller optagede

forbind til db via react appen

hvordan skal data struktureres?
find ud af hvordan du kan patche ind i sædearrayet og booke plads

lav to biografer som spiller den samme film på forskellige tidspunkter

struktur: 
lav film collection
lav biograf collection

referere til mongo id'er på tværs af collections

movies

_id     title       tmdb_id


cinemas
_id     name        location        seats
                                    44


showings
_id     movie_id    theater_id      datetime


users
_id     full_name   email           bookings


booking
_id     showing_id  seat_index         tickekts    user_id
                    [4, 5, 6]          number


når jeg vælger film og tidspunkt skal jeg hente alle bookinger det matcher tid, film og bio og bruge det til at vise frie og optagede sæder




sæder:
selected: checked
available: unchecked
reserveret: disabled (der er en pseudo-selector til disabled)
