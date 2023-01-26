function generateQRCode() {
  let name = document.getElementById("name").value;
  var radio = document.querySelector('input[name="time"]:checked'); 

  if(radio) console.log(radio.value);

  
  if (name && radio) {
      const data = { //ด้านหน้าคือหัวข้อที่อยู่ใน DB ด้านหลังคือค่าที่เราเชตไว้ดูด้านบน ^^^
        name: name.padEnd(20), 
        time: radio.value, 
        

      };
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";

      new QRCode(qrcodeContainer, JSON.stringify(data));

      
      let download = document.createElement("button");
      qrcodeContainer.appendChild(download);

      let download_link = document.createElement("a");
      download_link.setAttribute("download", "qr_code.png");
      download_link.innerHTML = `Download <i class="fa-solid fa-download"></i>`;

      download.appendChild(download_link);

      let qr_code_img = document.getElementById("qrcode");
      let qr_code_canvas = document.querySelector("canvas");

      if (qr_code_img.getAttribute("src") == null) {
        setTimeout(() => {
          download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
        }, 300);
      } else {
        setTimeout(() => {
          download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`);
        }, 300);
      }

      document.getElementById("qrcode-container").style.display = "block";
    } else {
      alert("Please enter a valid URL");
    }
}