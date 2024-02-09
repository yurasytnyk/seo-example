import { Metadata } from "next";

import prisma from "@/lib/prisma";
import { Header } from "@/components/header/header";
import { NoProducts } from "@/components/no-products/no-products";
import { ProductsList } from "@/components/products-list/products-list";

interface Props {
  searchParams: {
    query?: string;
  };
}

export async function generateMetadata({ searchParams }: any): Promise<Metadata> {
  const disableRobots = Object.keys(searchParams).length === 0;

  return {
    robots: {
      index: disableRobots,
      follow: disableRobots,
    },
  };
}

export default async function Home({ searchParams }: Props) {
  const query = searchParams?.query || "";
  const products = await prisma.product.findMany({
    where: {
      ...(query ? { name: { contains: query } } : {})
    }
  });

  return (
    <main>
      <Header />

      <section className="container my-6 grid grid-cols-4 gap-4">
        {products.length ? (
          products.map((product) => <ProductsList key={product.id} product={product} />)
        ) : (
          <NoProducts />
        )}
      </section>
    </main>
  );
}
