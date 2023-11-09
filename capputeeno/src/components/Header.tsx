'use client';

import styled from 'styled-components';
import { Saira_Stencil_One } from 'next/font/google';
import { PrimaryInput, PrimaryInputWSearchIcon } from './primary-input';
import { CartControl } from './cart-control';
import { useFilter } from '@/hooks/useFilter';

const sairaStence = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
});

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    >div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`;

const Logo = styled.a`
    color: var(--logo-color);
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
`;

export function Header() {
    const {search, setSearch} = useFilter()
    
    return (
        <TagHeader>
            <Logo className={sairaStence.className}>capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon value={search} handleChange={setSearch} placeholder='Procurando por algo específico?' />
                <CartControl/>
            </div>
        </TagHeader>
    );
}
