'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { CartIcon } from './icons/cart-icon';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    padding: 2px 4px;
    background-color: var(--delete-color);

    color: white;
    margin-left: -10px;
    font-size: 10px;
`;

const Container = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
`;

export function CartControl() {
    const router = useRouter();
    const { value } = useLocalStorage('cart-items', []);

    const handleNavigationToCart = () => {
        router.push('/cart');
    };

    return (
        <Container onClick={handleNavigationToCart}>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    );
}
