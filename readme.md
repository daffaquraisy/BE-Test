# Beberapa point untuk test yang akan diberikan

0. Sebelum mengerjakan semua soal dengan sendiri, tanya kan setiap masalah masalah ini ke chatgpt, jadi nanti ada jawaban versi chatgpt dan ada jawaban versi diri mu

1. Refactore function yang bernama refactoreMe1 dan refactoreMe2 (wajib memakai query native) menjadi jauh lebih mudah di baca, datasset nya sudah di sediakan di folder files

2. Buat endpoint berbasis websocket untuk memfecth data dari api https://livethreatmap.radware.com/api/map/attacks?limit=10 yang mana dia akan memfetch 3 menit sekali (tulis code mu di callmeWebSocket function)

3. Store data data yang ada di https://livethreatmap.radware.com/api/map/attacks?limit=10 ke dalam database postgres, lalu buatkan 1 endpoint sederhana untuk mendaptkan berapa jumlah "destinationCountry" yang di serang beberapa type dan "sourcecountry" yang menyerang dengan beberapa type
   dan wajib mempunyai response dengan bentuk seperti ini :
   (tulis code mu di getData function, pake query native)

```
{
  success:true,
  statusCode:200,
  data:{
    label:["val","val","val"]
    total:[200,200,200]
  }
}
```

4. Terapkan redis caching pada saat memfetch endpoint yang kamu buat di point nomor 3

5. Buatkan aku middleware authentikasi jwt untuk memprotect api, serta buatkan juga middleware untuk membatasi endpoint lain berdasarkan role user, contoh :
   walaupun si user mempunyai token yang valid, tapi tidak mempunyai role yang valid, dia tidak akan bisa membuka beberapa endpoint.

6. Buatkan unit test untuk mentest si endpoint berjalan dengan baik.

7. Push hasil test ini di github mu
