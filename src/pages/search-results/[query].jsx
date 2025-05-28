import { useEffect, useState } from 'react';
import SearchResultsHeader from '../../components/search-results/SearchResultsHeader';
import SearchResultsMain from '../../components/search-results/SearchResultsMain';
import { getSearchResults } from '../../utilities/getData';
import { useParams } from 'react-router';

export default function searchResultsPage() {

    const [data, setData] = useState(null);

    const params = useParams();
    const searchInput = params.query;

    useEffect(() => {

        getSearchResults(searchInput)
        .then(data => {
            setData(data.results);
            //console.log(data.results);
        })
    }, [searchInput]);

    return (
        <>
            <SearchResultsHeader />
            {data &&
            <SearchResultsMain data={data} searchInput={searchInput} />}
        </>
    )
}