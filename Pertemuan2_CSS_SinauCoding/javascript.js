function buttonText_1() {
    var paragraf = document.getElementById("paragraf-1");
    var selengkapnyaText = document.getElementById("selengkapnya-1");
    var text = document.getElementById("button-paragraf");
  
    if (paragraf.style.display === "none") {
      paragraf.style.display = "inline";
      text.innerHTML = "Baca selengkapnya-1"; 
      selengkapnyaText.style.display = "none";
    } else {
      paragraf.style.display = "none";
      text.innerHTML = "Sembunyikan"; 
      selengkapnyaText.style.display = "inline";
    }
  }
  
  function buttonText_2() {
    var paragraf = document.getElementById("paragraf-2");
    var selengkapnyaText = document.getElementById("selengkapnya-2");
    var text = document.getElementById("button-paragraf");
  
    if (paragraf.style.display === "none") {
      paragraf.style.display = "inline";
      text.innerHTML = "Baca selengkapnya-2"; 
      selengkapnyaText.style.display = "none";
    } else {
      paragraf.style.display = "none";
      text.innerHTML = "Sembunyikan"; 
      selengkapnyaText.style.display = "inline";
    }
  }
  