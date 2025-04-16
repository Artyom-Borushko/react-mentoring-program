import './sortControl.css';
import OptionsSelector from "../../../shared/OptionsSelector";
import {moviesSortDropdownOptions} from "../../../../data/dropdownsOptions";

export default function SortControl({selectedSortOption, sortControlHandler}) {

    return (
        <div className={'sort-control-wrapper'}>

            <label>Sort by</label>
            <p>{selectedSortOption}</p>
            <OptionsSelector
                dropdownOptions={moviesSortDropdownOptions}
                onDropdownSelection={sortControlHandler}
                controlImageSrc={'images/icons/redTriangleDown.png'}
                controlSource={'movies-sort'}
            >
            </OptionsSelector>
        </div>
    );
}
