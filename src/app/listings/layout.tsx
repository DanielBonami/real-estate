// app/listings/layout.tsx
export const metadata = {
    title: 'Listings | DreamHome',
    description: 'Browse available real estate listings on DreamHome.',
  };
  
  export default function ListingsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
  }  
  