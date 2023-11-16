import styled from 'styled-components';
import { BackIcon } from './icons/back-icon';
import { useRouter } from 'next/navigation';


const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: transparent;
    cursor: pointer;
    border: none;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    color: var(--text-secondary);
`;

interface BtnProps {
    navigate: string;
}

export function BackButton({ navigate }: BtnProps) {
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navigate);
    };

    return (
        <Button onClick={handleNavigate}>
            <BackIcon />
            Voltar
        </Button>
    );
}
