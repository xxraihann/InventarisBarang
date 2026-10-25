export default function SearchBar({ search, onSearch, category, onCategoryChange, categories }) {
  return <div className="toolbar"><label className="search-input"><span>⌕</span><input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Cari nama atau kode barang..." /></label><select className="category-select" value={category} onChange={(event) => onCategoryChange(event.target.value)} aria-label="Filter kategori">{categories.map((item) => <option key={item}>{item}</option>)}</select></div>;
}
