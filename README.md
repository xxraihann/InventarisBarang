# Inventaris Barang Frontend

Project React + Vite untuk tugas React Dasar.

## Menjalankan project

1. Pastikan Node.js sudah terpasang.
2. Buka folder project ini di VS Code.
3. Buka Terminal di VS Code, lalu jalankan:

   ```bash
   npm install
   npm run dev
   ```

4. Buka alamat yang ditampilkan Vite, biasanya http://localhost:5173.

## Fitur

- Dashboard ringkasan inventaris
- Tambah barang melalui controlled form
- Daftar barang dengan `.map()` dan `key` unik
- Pencarian nama/kode dan filter kategori
- Ubah kondisi barang dan hapus barang
- Pesan conditional rendering saat daftar kosong
- Lima component terpisah di `src/components/`

## Catatan

Saat ini data disimpan di React state sehingga akan kembali ke data awal ketika halaman dimuat ulang. Penyimpanan permanen dan backend/API dapat ditambahkan pada tahap berikutnya.
