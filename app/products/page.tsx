export default function ProductsPage() {
    const products = [
      { id: 1, name: 'placeholder product', price: '$99' },
      { id: 2, name: 'another placeholder', price: '$199' },
    ];
  
    return (
      <div>
        <h1>Products</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th><th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  