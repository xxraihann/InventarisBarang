import { useState } from 'react';

const emptyForm = { name: '', category: 'Elektronik', stock: '1', condition: 'Baik' };

export default function ItemForm({ onAdd, items }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function submit(event) {
    event.preventDefault();
    if (!form.name.trim()) {
      setError('Nama barang wajib diisi.');
      return;
    }
    const nextNumber = items.reduce((max, item) => Math.max(max, Number(item.id)), 0) + 1;
    onAdd({ code: `BRG-${String(nextNumber).padStart(3, '0')}`, name: form.name.trim(), category: form.category, stock: Number(form.stock), condition: form.condition });
    setForm(emptyForm);
    setError('');
  }

  return <form className="item-form" onSubmit={submit}>
    <label>Nama Barang<input name="name" value={form.name} onChange={update} placeholder="Contoh: Keyboard Logitech" /></label>
    <label>Kategori<select name="category" value={form.category} onChange={update}><option>Elektronik</option><option>Furnitur</option><option>Alat Tulis</option><option>Peralatan</option><option>Lainnya</option></select></label>
    <div className="form-row"><label>Jumlah Stok<input name="stock" type="number" min="0" value={form.stock} onChange={update} /></label><label>Kondisi<select name="condition" value={form.condition} onChange={update}><option>Baik</option><option>Perlu Perbaikan</option></select></label></div>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="primary-button" type="submit">＋ Tambah Barang</button>
  </form>;
}
