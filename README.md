Aplikasi To-Do List Full-Stack (Hono & Drizzle ORM)
Aplikasi To-Do List sederhana yang mengimplementasikan arsitektur Full-Stack menggunakan:

Backend: Hono (untuk routing API), PostgreSQL (Database), Drizzle ORM (untuk query database), JWT dan Cookie (untuk autentikasi).

Frontend: HTML, CSS, dan JavaScript murni (Vanilla JS) untuk interaksi.

🗄️ Struktur Proyek (Denah Rumah)
Proyek ini tersusun rapi seperti sebuah rumah. Berikut pembagian ruangnya:

Folder/File

Fungsi

Analogi

server.js

Titik masuk utama aplikasi (Backend API & Static File Server).

Pintu Utama & Resepsionis

db/

Berisi semua konfigurasi database (skema, koneksi, seed).

Gudang Data

public/

Berisi semua file HTML, CSS, dan JS yang dilihat pengguna (Frontend).

Tampilan Depan Rumah

public/index.html

Memeriksa status login dan mengarahkan ke halaman To-Do atau Login.

Pemeriksaan Keamanan Awal

public/login/index.html

Halaman login.

Ruang Tamu (Pintu Masuk)

public/register/index.html

Halaman pendaftaran user baru.

Meja Registrasi

public/todos/index.html

Halaman utama To-Do List yang memerlukan autentikasi.

Ruang Kerja Utama

.env

Menyimpan kredensial penting (DATABASE_URL, JWT_SECRET).

Kunci Rahasia

🛠️ Persiapan dan Instalasi (Membangun Pondasi)
Ikuti langkah-langkah ini untuk menjalankan aplikasi:

1. Kebutuhan Dasar
Pastikan Anda telah menginstal Node.js dan npm (atau yarn/pnpm).

2. File Kunci
Pastikan file konfigurasi berikut sudah terisi:

.env: Harus berisi DATABASE_URL (koneksi PostgreSQL Anda) dan JWT_SECRET (kunci rahasia untuk menandatangani token sesi).

3. Instalasi Dependensi
Jalankan perintah berikut di terminal:

npm install

4. Migrasi Database (Menyiapkan Kamar)
Setelah DATABASE_URL diatur, buat skema users dan todos di database Anda:

npm run db:migrate

5. Seeding Database (Mengisi Perabotan)
Opsional, Anda dapat mengisi data pengguna dummy dan Todo untuk pengujian:

npm run db:seed

Akun dummy yang dibuat adalah Username: andi, Password: password123.

🚀 Cara Menjalankan Aplikasi (Membuka Pintu)
Jalankan perintah berikut untuk memulai server Hono:

npm start

Aplikasi akan berjalan di http://localhost:3000 (atau port yang dikonfigurasi).

💡 Alur Kerja Utama (Cara Tamu Bergerak)
Akses Awal (/): Pengguna diarahkan ke public/index.html, yang langsung memeriksa /api/me.

Autentikasi:

Jika terautentikasi (memiliki cookie token valid), pengguna diarahkan ke /todos/.

Jika tidak, pengguna diarahkan ke /login/.

To-Do List (/todos/): Halaman ini memuat daftar Todo dari /api/todos dan memungkinkan pengguna menambah Todo baru. Logika Logout juga berada di sini, mengirimkan permintaan POST ke /api/logout untuk menghapus cookie sesi.

✍️ Tentang Dokumentasi Ini
Dokumentasi README ini disusun oleh Gemini, sebuah Large Language Model dari Google, berdasarkan analisis dan perbaikan pada kode-kode yang disediakan.
Source : https://gemini.google.com/

Thank Gemini 🤗🤗
