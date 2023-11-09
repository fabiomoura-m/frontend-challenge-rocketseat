import type { Metadata } from 'next';
import { Saira } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { FilterContextProvider } from '@/contexts/filter-context';

const saira = Saira({
    weight: ['300', '400', '500', '600'],
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Capputeeno',
    description: 'E-commerce de venda de canecas e camisetas'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={saira.className}>
                <FilterContextProvider>
                    <Header />
                    {children}
                </FilterContextProvider>
            </body>
        </html>
    );
}
