'use client';
import Image from 'next/image';

interface Props {
  property: {
    id: string;
    title: string;
    price: number;
    area: number;
    image: string;
  };
}

export default function PropertyCard({ property }: Props) {
  return (
    <article className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      <Image
        src={property.image}
        alt={property.title}
        width={400}
        height={300}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 space-y-1">
        <h2 className="font-semibold">{property.title}</h2>
        <p className="text-sm">المساحة: {property.area} م²</p>
        <p className="text-primary-600 font-bold">{property.price.toLocaleString()} جنيه</p>
      </div>
    </article>
  );
}
