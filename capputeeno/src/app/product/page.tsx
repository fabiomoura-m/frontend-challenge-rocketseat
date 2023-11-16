'use client';

import { BackButton } from '@/components/back-button';
import { DefaultPageLayout } from '@/components/default-page-layout';
import { ShopBagIcon } from '@/components/icons/shopping-bag-icon';
import { useProduct } from '@/hooks/useProduct';
import { formatPrice } from '@/utils/formatPrice';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    section {
        display: flex;
        width: 100%;
        gap: 32px;
        margin-top: 24px;

        img {
            max-width: 640px;
            width: 50%;
        }

        > div {
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            button {
                border-radius: 4px;
                background: #115d8c;
                mix-blend-mode: multiply;
                color: var(--shapes-light);
                border: none;
                cursor: pointer;
                padding: 10px 0;
                text-align: center;
                font-weight: 500;
                font-size: 16px;
                line-height: 150%;
                text-transform: uppercase;

                display: flex;
                justify-content: center;
                align-items: center;
                gap: 12px;
            }


        }
    }
`;

const ProductInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    h2 {
        font-size: 32px;
        font-weight: 300;
        line-height: 150%;
        color: var(--text-dark-2);
        margin-top: 12px;
    }

    span:nth-of-type(2) {
        font-size: 20px;
        font-weight: 600;
        line-height: 150%;
        color: var(--shapes-dark);
        margin-bottom: 24px;
    }

    p {
        font-weight: 400;
        color: var(--text-dark-2);
        font-size: 12px;
        line-height: 150%;
    }

    div {
        margin-top: 24px;
        h3 {
            font-size: 16px;
            font-weight: 500;
            line-height: 150%;
            color: var(--text-dark);
            text-transform: uppercase;
        }

        p {
            font-weight: 400;
            color: var(--text-dark-2);
            font-size: 14px;
            line-height: 150%;
        }
    }
`;

export default function Products({
    searchParams
}: {
    searchParams: { id: string };
}) {
    const { data } = useProduct(searchParams.id);

    return (
        <DefaultPageLayout>
            <Container>
                <BackButton navigate="/" />
                <section>
                    <Image
                        src={data?.image_url}
                        alt=""
                        width={640}
                        height={580}
                    />
                    <div>
                        <ProductInfo>
                            <span>{data?.category}</span>
                            <h2>{data?.name}</h2>
                            <span>
                                {formatPrice(data?.price_in_cents ?? 0)}
                            </span>
                            <p>
                                *Frete de R$40,00 para todo o Brasil. Grátis
                                para compras acima de R$900,00.
                            </p>
                            <div>
                                <h3>Descrição</h3>
                                <p>{data?.description}</p>
                            </div>
                        </ProductInfo>
                        <button>
                            <ShopBagIcon />
                            Adicionar ao carrinho
                        </button>
                    </div>
                </section>
            </Container>
        </DefaultPageLayout>
    );
}
