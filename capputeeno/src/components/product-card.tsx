import { formatPrice } from '@/utils/formatPrice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

interface ProductCardProps {
    image: string;
    title: string;
    price: number;
    id: string;
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    border-radius: 0 0 4px 4px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);

    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    img {
        border-radius: 4px 4px 0 0;
        object-fit: cover;
    }

    p {
        font-size: 14px;
        font-weight: 600;
        line-height: 150%;
        color: var(--shapes-dark);
    }

   > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 0;

        div {
            width: 228px;
            height: 1px;
            margin-block: 8px;
            background: var(--shapes);
        }
    }
`;

export function ProductCard(props: ProductCardProps) { 
    const price = formatPrice(props.price)
    const router = useRouter()

    const handleNavigate = () =>{
        router.push(`/product?id=${props.id}`)
    }

    return (
        <Card onClick={handleNavigate}>
            <Image src={props.image} alt="" width={256} height={232} />
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    );
}
