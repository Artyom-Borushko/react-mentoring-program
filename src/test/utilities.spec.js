import {filter, searchSubstring} from "../utilities/utilities";
import {listOfMoviesMock} from "../data/moviesListMock";


describe("Utilities tests", () => {

    describe("Search functionality tests", () => {
        it("searchResult finds one entry", () => {
            const searchResult = searchSubstring(listOfMoviesMock, 'Pulp', 'title');
            expect(searchResult).toEqual([listOfMoviesMock[0]]);
        });

        it("searchResult finds multiple entries", () => {
            const searchResult = searchSubstring(listOfMoviesMock, 'ion', 'title');
            expect(searchResult).toEqual([listOfMoviesMock[0], listOfMoviesMock[4]]);
        });

        it("searchResult finds one entry case insensitive", () => {
            const searchResult = searchSubstring(listOfMoviesMock, 'RhApSodY', 'title');
            expect(searchResult).toEqual([listOfMoviesMock[1]]);
        });
    });

    describe("Filter functionality tests", () => {
        it("filter finds one entry", () => {
            const filterResult = filter(listOfMoviesMock, 'documentary', 'relevantGenres');
            expect(filterResult).toEqual([listOfMoviesMock[1]]);
        });

        it("filter finds multiple entries", () => {
            const filterResult = filter(listOfMoviesMock, 'oscar', 'relevantGenres');
            expect(filterResult).toEqual([listOfMoviesMock[2], listOfMoviesMock[5]]);
        });

        it("filter with 'all' filter criteria returns all entries", () => {
            const filterResult = filter(listOfMoviesMock, 'all', 'relevantGenres');
            expect(filterResult).toEqual(listOfMoviesMock);
        });
    });

});
