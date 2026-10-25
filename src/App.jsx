import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import ItemForm from './components/ItemForm.jsx';
import SearchBar from './components/SearchBar.jsx';
import ItemList from './components/ItemList.jsx';

const initialItems = [
  { id: 1, code: 'BRG-001', name: 'Laptop Lenovo ThinkPad', category: 'Elektronik', stock: 8, condition: 'Baik' },
  { id: 2, code: 'BRG-002', name: 'Monitor Dell 24 inci', category: 'Elektronik', stock: 4, condition: 'Baik' },
  { id: 3, code: 'BRG-003', name: 'Kursi Kerja Ergonomis', category: 'Furnitur', stock: 2, condition: 'Perlu Perbaikan' },
  { id: 4, code: 'BRG-004', name: 'Buku Catatan A5', category: 'Alat Tulis', stock: 25, condition: 'Baik' },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Semua kategori');

  const categories = ['Semua kategori', ...new Set(items.map((item) => item.category))];
  const filteredItems = useMemo(() => items.filter((item) => {
    const term = search.toLowerCase();
    const matchesSearch = item.name.toLowerCase().includes(term) || item.code.toLowerCase().includes(term);
    const matchesCategory = category === 'Semua kategori' || item.category === category;
    return matchesSearch && matchesCategory;
  }), [items, search, category]);

  function addItem(newItem) {
    setItems((current) => [{ ...newItem, id: Date.now() }, ...current]);
  }

  function deleteItem(id) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  function toggleCondition(id) {
    setItems((current) => current.map((item) => item.id === id
      ? { ...item, condition: item.condition === 'Baik' ? 'Perlu Perbaikan' : 'Baik' }
      : item));
  }

  const totalStock = items.reduce((sum, item) => sum + Number(item.stock), 0);
  const lowStock = items.filter((item) => Number(item.stock) <= 3).length;
  const needsRepair = items.filter((item) => item.condition !== 'Baik').length;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-mark">IB</div>
        <div className="brand-name">Inventaris<span>Barang</span></div>
        <div className="side-label">MENU UTAMA</div>
        <div className="nav-item active"><span>▦</span> Dashboard</div>
        <div className="nav-item"><span>□</span> Data Barang</div>
        <div className="nav-item"><span>◷</span> Riwayat</div>
        <div className="sidebar-bottom"><div className="avatar">A</div><div><strong>Administrator</strong><small>Pengelola inventaris</small></div></div>
      </aside>

      <main className="main-content">
        <Header />
        <section className="welcome-row">
          <div><p className="eyebrow">RINGKASAN INVENTARIS</p><h1>Dashboard Inventaris</h1><p className="muted">Pantau dan kelola barang inventaris dalam satu tempat.</p></div>
          <div className="date-chip">◷ <span>{new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
        </section>

        <section className="summary-grid">
          <SummaryCard label="Jenis Barang" value={items.length} detail="Barang terdaftar" icon="▤" tone="blue" />
          <SummaryCard label="Total Stok" value={totalStock} detail="Unit barang tersedia" icon="▦" tone="purple" />
          <SummaryCard label="Stok Menipis" value={lowStock} detail="Barang dengan stok ≤ 3" icon="⚑" tone="orange" />
          <SummaryCard label="Perlu Perbaikan" value={needsRepair} detail="Barang perlu diperiksa" icon="⚒" tone="green" />
        </section>

        <section className="content-grid">
          <div className="panel form-panel"><div className="panel-heading"><div><h2>Tambah Barang</h2><p>Masukkan informasi barang baru.</p></div><span className="heading-icon">＋</span></div><ItemForm onAdd={addItem} items={items} /></div>
          <div className="panel list-panel"><div className="panel-heading list-heading"><div><h2>Daftar Barang</h2><p>Data inventaris yang tercatat saat ini.</p></div><span className="count-pill">{items.length} barang</span></div>
            <SearchBar search={search} onSearch={setSearch} category={category} onCategoryChange={setCategory} categories={categories} />
            <ItemList items={filteredItems} onDelete={deleteItem} onToggleCondition={toggleCondition} />
          </div>
        </section>
        <footer>Inventaris Barang <span>•</span> Project React Dasar</footer>
      </main>
    </div>
  );
}
