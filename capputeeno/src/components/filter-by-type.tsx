import { useFilter } from '@/hooks/useFilter';
import { FilterType } from '@/types/filter-types';
import styled from 'styled-components';

interface FilterItemProps {
    selected: boolean;
}

interface FilterByTypeProps {}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;

    
`;

const FilterItem = styled.li<FilterItemProps>`
    color: var(--text-dark);
    font-size: 12px;
    font-family: inherit;
    font-weight: ${props => (props.selected ? '600' : '400')};
    line-height: 22px; /* 137.5% */
    text-transform: uppercase;
    cursor: pointer;

    border-bottom: ${props =>
        props.selected ? '4px solid var(--orange-low)' : ''};

        @media (min-width: ${props=>props.theme.desktopBreakpoint}){
            font-size: 16px;
        }
`;

export function FilterByType() {
    const { type, setType } = useFilter();

    const handleChangeByType = (value: FilterType) => {
        setType(value);
    };

    return (
        <FilterList>
            <FilterItem
                selected={type === FilterType.ALL}
                onClick={() => handleChangeByType(FilterType.ALL)}
            >
                Todos os produtos
            </FilterItem>
            <FilterItem
                selected={type === FilterType.SHIRT}
                onClick={() => handleChangeByType(FilterType.SHIRT)}
            >
                Camisetas
            </FilterItem>
            <FilterItem
                selected={type === FilterType.MUG}
                onClick={() => handleChangeByType(FilterType.MUG)}
            >
                Canecas
            </FilterItem>
        </FilterList>
    );
}
