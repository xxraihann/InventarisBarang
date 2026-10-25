export default function ItemList({ items, onDelete, onToggleCondition }) {
  if (items.length === 0) return <div className="empty-state"><div className="empty-icon">▤</div><h3>Belum ada data Barang</h3><p>Tambahkan barang baru atau ubah kata pencarian.</p></div>;

  return <div className="table-wrap"><table><thead><tr><th>BARANG</th><th>KATEGORI</th><th>STOK</th><th>KONDISI</th><th>AKSI</th></tr></thead><tbody>
    {items.map((item) => <tr key={item.id}>
      <td><div className="item-cell"><div className="item-avatar">{item.name.slice(0, 1).toUpperCase()}</div><div><strong>{item.name}</strong><small>{item.code}</small></div></div></td>
      <td><span className="category-tag">{item.category}</span></td>
      <td><span className={Number(item.stock) <= 3 ? 'stock low' : 'stock'}>{item.stock} unit</span></td>
      <td><button type="button" className={`condition-tag ${item.condition === 'Baik' ? 'good' : 'repair'}`} onClick={() => onToggleCondition(item.id)} title="Klik untuk mengubah kondisi">{item.condition}</button></td>
      <td><button type="button" className="delete-button" onClick={() => onDelete(item.id)} aria-label={`Hapus ${item.name}`} title="Hapus barang">⌫</button></td>
    </tr>)}
  </tbody></table></div>;
}
