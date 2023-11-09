import styled from 'styled-components';
import { ArrowIcon } from './icons/arrow-icon';
import { useState } from 'react';
import { useFilter } from '@/hooks/useFilter';
import { PriorityTypes } from '@/types/priority-types';

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        font-family: inherit;
        font-size: 14px;
        cursor: pointer;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        color: var(--text-dark);
        border: none;
        background: transparent;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
`;

const PriorityFilter = styled.ul`
    position: absolute;
    width: 176px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
    padding: 12px 16px;
    z-index: 999;
    list-style: none;

    top: 100%;

    li {
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }
`;

export function FilterByPriority() {
    const [isOpen, setIsOpen] = useState(false);
    const { setPriority } = useFilter();

    const handleOpen = () => {
        setIsOpen(prev => !prev);
    };

    const handleUpdateByPriority = (value: PriorityTypes) => {
        setPriority(value);
        setIsOpen(false)
    };
    return (
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon />
            </button>
            {isOpen && (
                <PriorityFilter>
                    <li
                        onClick={() =>
                            handleUpdateByPriority(PriorityTypes.NEWS)
                        }
                    >
                        Novidades
                    </li>
                    <li
                        onClick={() =>
                            handleUpdateByPriority(PriorityTypes.BIGGEST_PRICE)
                        }
                    >
                        Preço: Maior - menor
                    </li>
                    <li
                        onClick={() =>
                            handleUpdateByPriority(PriorityTypes.MINOR_PRICE)
                        }
                    >
                        Preço: Menor - maior
                    </li>
                    <li
                        onClick={() =>
                            handleUpdateByPriority(PriorityTypes.POPULARITY)
                        }
                    >
                        Mais Vendidos
                    </li>
                </PriorityFilter>
            )}
        </FilterContainer>
    );
}
