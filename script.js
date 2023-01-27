function generateQRCode() {
  let name = document.getElementById("name").value;
  var radio = document.querySelector('input[name="time"]:checked'); 
  let nummedic = document.getElementById("num").value;
  let dropdown = document.getElementById("dropdown").value;
  let numday = document.getElementById("numday").value;
  var array =  $("input[name='day']:checked").map(function(){
        return this.value;
      }).get()

  console.log(name)
  console.log(radio.value)
  console.log(nummedic)
  console.log(dropdown)
  console.log(numday)
  console.log(array)
  
  if (name && radio && nummedic && dropdown != "" && numday && array) {
      let fusion = nummedic + " " + dropdown;
      const data = { 
        name: name, 
        time: radio.value,
        timeday: array,
        medic: fusion,
        numday: numday
      };
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";

      new QRCode(qrcodeContainer, {
        text: JSON.stringify(data),
        //ห้ามเปลี่ยนขนาดลดลงเนื่องจากข้อมูลมีจำนวนมากต้องใช้ขนาดที่เหมาะสม
        width: 350,
        height: 350,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : 3
    });

      
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
      alert("กรุณากรอกข้อมูลทุกอย่างให้ครบ!!");
    }
}