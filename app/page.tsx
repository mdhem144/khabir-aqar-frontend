import { fetchProperties } from '@/lib/db';
import PropertyCard from '@/components/PropertyCard';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const properties = await fetchProperties();
  return (
    <main className="container mx-auto py-8 space-y-6">
      <h1 className="text-3xl font-bold">العقارات المميزة</h1>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </section>
    </main>
  );
}
