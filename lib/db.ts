export async function fetchProperties() {
  // TODO: replace with real DB call
  return [
    {
      id: '1',
      title: 'شقة فاخرة في التجمع الخامس',
      price: 3500000,
      area: 180,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60'
    },
    {
      id: '2',
      title: 'فيلا حديثة في الشيخ زايد',
      price: 6500000,
      area: 320,
      image: 'https://images.unsplash.com/photo-1600585154786-3d3e4cbf1c62?auto=format&fit=crop&w=800&q=60'
    }
  ];
}
