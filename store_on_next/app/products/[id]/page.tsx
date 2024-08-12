export default function Products({ params }: { params: { id: string } }) {
  return <div>Product {params.id}</div>;
}
