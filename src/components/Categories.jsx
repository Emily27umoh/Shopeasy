const categories = [
  { name: 'Fashion', icon: '👗' },
  { name: 'Electronics', icon: '💻' },
  { name: 'Home & Living', icon: '🛋️' },
  { name: 'Beauty', icon: '💄' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Bags', icon: '👜' },
  { name: 'Shoes', icon: '👟' },
  { name: 'Gifts', icon: '🎁' },
]

function Categories() {
  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Shop by Category</h2>

      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="bg-blue-50 hover:bg-green-50 rounded-xl py-4 flex flex-col items-center gap-2"
          >
            <span className="text-3xl">{cat.icon}</span>
            <span className="text-xs font-medium">{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Categories