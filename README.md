# Sampis App

Sampis App adalah aplikasi web yang dibangun menggunakan React.js untuk frontend dan Node.js dengan Hapi framework untuk backend.

## Teknologi yang Digunakan

### Frontend
- React.js
- Vite
- TailwindCSS
- React Router DOM
- Axios
- React Leaflet (untuk peta)
- TensorFlow.js
- Dan lainnya

### Backend
- Node.js
- Hapi Framework
- MongoDB dengan Mongoose
- JWT untuk autentikasi
- Cloudinary untuk penyimpanan gambar
- Dan lainnya

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:
- Node.js (versi 14 atau lebih tinggi)
- npm (biasanya terinstal bersama Node.js)
- MongoDB (untuk database)

## Instalasi

### 1. Clone Repository
```bash
git clone [URL_REPOSITORY]
cd sampis-apps
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Buat file `.env` di folder backend dengan konfigurasi berikut:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sampis
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

Buat file `.env` di folder frontend dengan konfigurasi berikut:
```env
VITE_API_URL=http://localhost:5000
```

## Menjalankan Aplikasi

### 1. Menjalankan Backend
```bash
cd backend
npm run dev
```
Backend akan berjalan di `http://localhost:5000`

### 2. Menjalankan Frontend
```bash
cd frontend
npm run dev
```
Frontend akan berjalan di `http://localhost:5173`
