// Home
fetch("https://batikita.herokuapp.com/index.php/batik/all")
  .then((Response) => Response.json())
  .then((data) => {
    // console.log(data);
    for (var i = 0; i < 15; i++) {
      document.getElementById("tampil").innerHTML += `<div class="col-lg-4">
      <div class="single-listing mb-30">
          <div class="list-img">
              <img width="200" height="200" src="${data.hasil[i].link_batik}" alt=""/>
          </div>
          <div class="list-caption">
              <button class="lihat btn3 list-btn3" id="lihat" data-id="${data.hasil[i].id}">Detail</button>
                  <h3>${data.hasil[i].nama_batik} </h3>
                  <p class="demo-1">${data.hasil[i].makna_batik}</p>
                      <div class="list-footer">
                          <ul><li>${data.hasil[i].daerah_batik}</li></ul>
                      </div>
          </div>
      </div>
      </div>`;
    }
    const btnLihat = document.querySelectorAll(".lihat");
    btnLihat.forEach((e) => {
      // console.log(e);
      e.addEventListener("click", () => {
        const id = parseInt(e.getAttribute("data-id"));
        console.log(id);
        const detail = data.hasil.find((v) => v.id === id);
        Swal.fire({
          title: detail.nama_batik,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          html: "Makna Batik = " + detail.makna_batik + "</br>" + "Asal Batik = " + detail.daerah_batik + "</br>" + "Harga Terendah = Rp " + detail.harga_rendah + "</br>" + "Harga Tertinggi = Rp " + detail.harga_tinggi,
          imageUrl: detail.link_batik,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
          customClass: "swal-wide",
        });
      });
    });
  });

// Search
document.querySelector("#kiriminput").addEventListener("click", () => {
  var Kata = document.querySelector("#katainput").value;
  fetch("https://batikita.herokuapp.com/index.php/batik/" + Kata)
    .then((Response) => Response.json())
    .then((data) => {
      // console.log(data);
      if (data.hasil.length === 0) {
        Swal.fire({
          icon: "error",
          title: `Pencarian Batik "${Kata}"`,
          html: "Maaf Batik Yang Anda Cari Tidak Ditemukan",
          customClass: "swal-text",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "index.html";
          }
        });
      } else {
        document.querySelector("#katakeluar").innerHTML = "";
        document.querySelector("#katakeluar").innerHTML += `
        <div class="container">  
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-tittle text-center mb-80">
                        <span>Hasil Pencarian</span>
                        <h2>Batik "${Kata}" </h2>
                    </div>
                </div>
                <div class="listing-details-area">
                    <div class="container">
                        <div class="row" id="katakeluar1"></div>
                    </div>
                </div>
            </div>
        </div>`;
        for (var i = 0; i < 10; i++) {
          document.getElementById("katakeluar1").innerHTML += `
            <div class="col-lg-4">
                <div class="single-listing mb-30">
                    <div class="list-img">
                        <img width="200" height="200" src="${data.hasil[i].link_batik}" alt=""/>
                    </div>
                    <div class="list-caption">
                        <button class="lihat btn3 list-btn3" id="lihat" data-id="${data.hasil[i].id}">Open</button>
                            <h3>${data.hasil[i].nama_batik} </h3>
                            <p class="demo-1">${data.hasil[i].makna_batik}</p>
                                <div class="list-footer">
                                    <ul><li>${data.hasil[i].daerah_batik}</li></ul>
                                </div>
                    </div>
                </div>
            </div>`;
          const pics = document.querySelectorAll("img");
          pics.forEach((pic) => {
            pic.addEventListener("error", () => {
              pic.src = "assets/img/hero/not-found.png";
            });
          });
        }
      }
      const btnLihat = document.querySelectorAll(".lihat");
      btnLihat.forEach((e) => {
        // console.log(e);
        e.addEventListener("click", () => {
          const id = parseInt(e.getAttribute("data-id"));
          console.log(id);
          const detail = data.hasil.find((v) => v.id === id);
          Swal.fire({
            title: detail.nama_batik,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
            html: "Makna Batik = " + detail.makna_batik + "</br>" + "Asal Batik = " + detail.daerah_batik + "</br>" + "Harga Terendah = Rp " + detail.harga_rendah + "</br>" + "Harga Tertinggi = Rp " + detail.harga_tinggi,
            imageUrl: detail.link_batik,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: detail.nama_batik,
            customClass: "swal-wide",
          });
          const pics = document.querySelectorAll("img");
          pics.forEach((pic) => {
            pic.addEventListener("error", () => {
              pic.src = "assets/img/hero/not-found.png";
            });
          });
        });
      });
    });
});

// Populer
fetch("https://batikita.herokuapp.com/index.php/batik/popular")
  .then((Response) => Response.json())
  .then((data) => {
    // console.log(data);
    for (var i = 0; i < 30; i++) {
      document.getElementById("tampil_pop").innerHTML += `<div class="col-lg-4">
      <div class="single-listing mb-30">
          <div class="list-img">
              <img width="200" height="200" src="${data.hasil[i].link_batik}" alt=""/>
          </div>
          <div class="list-caption">
              <button class="lihat btn3 list-btn3" id="lihat" data-id="${data.hasil[i].id}">Open</button>
                  <h3>${data.hasil[i].nama_batik} </h3>
                  <p class="demo-1">${data.hasil[i].makna_batik}</p>
                      <div class="list-footer">
                          <ul><li>${data.hasil[i].daerah_batik}</li></ul>
                      </div>
          </div>
      </div>
      </div>`;
    }
    const btnLihat = document.querySelectorAll(".lihat");
    btnLihat.forEach((e) => {
      // console.log(e);
      e.addEventListener("click", () => {
        const id = parseInt(e.getAttribute("data-id"));
        console.log(id);
        const detail = data.hasil.find((v) => v.id === id);
        Swal.fire({
          title: detail.nama_batik,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          html: "Makna Batik = " + detail.makna_batik + "</br>" + "Asal Batik = " + detail.daerah_batik + "</br>" + "Harga Terendah = Rp " + detail.harga_rendah + "</br>" + "Harga Tertinggi = Rp " + detail.harga_tinggi,
          imageUrl: detail.link_batik,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
          customClass: "swal-wide",
        });
      });
    });
  });
