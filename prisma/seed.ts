import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const productData: Prisma.ProductCreateInput[] = [
  {
    name: "Winter Sweater",
    price: 60.0,
    star: 3,
    tag: "sale",
    image:
      "https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Denim Dresses",
    price: 70.7,
    star: 4,
    tag: "out of stock",
    image:
      "https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Empire Waist Dresses",
    price: 90.0,
    star: 5,
    tag: "new",
    image:
      "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Pinafore Dresses",
    price: 60.0,
    star: 5,
    tag: "new",
    image:
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Vintage Pinafore Dress",
    price: 84.0,
    star: 5,
    tag: "sale",
    image:
      "https://content2.rozetka.com.ua/goods/images/big/350158455.jpg",
  },
  {
    name: "Martin Black Dress",
    price: 70.9,
    star: 5,
    tag: "sale",
    image:
      "https://cdn-img.prettylittlething.com/2/0/b/f/20bf613769d11f84592c7f290f9c10aaca50d345_CLQ3250_1.JPG?imwidth=300",
  },
  {
    name: "Linen pinafore dress",
    price: 70.0,
    star: 3,
    tag: "new",
    image:
      "https://content.rozetka.com.ua/goods/images/big/376939852.jpg",
  },
  {
    name: "Pinafore Mini Dress",
    price: 90.0,
    star: 5,
    tag: "new",
    image: "https://www.lulus.com/images/product/xlarge/9585181_1968196.jpg?w=375&hdpi=1",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const p of productData) {
    const product = await prisma.product.create({
      data: p,
    });
    console.log(`Created user with id: ${product.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
