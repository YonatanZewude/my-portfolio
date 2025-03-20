import React from "react";
import "../styles/_cv.scss";
import cvImage from "../assets/images/Yonatan_Zewude_CV.png";

const CV: React.FC = () => {
  const openPrintDialog = () => {
    const button = document.getElementById("printButton");
    if (button) button.style.display = "none"; // Dölj knappen innan utskrift

    setTimeout(() => {
      window.print(); // Öppna utskriftsdialogen
      if (button) button.style.display = "block"; // Visa knappen igen efter utskrift
    }, 100);
  };

  const saveAsPDF = () => {
    const element = document.getElementById("cv-content");
    if (!element) return;
  
    // Använd html2canvas och jsPDF från window
    (window as any).html2canvas(element, {
      scale: 1, // Högre upplösning för bättre kvalitet
      useCORS: true, // Stöd för externa bilder
      backgroundColor: "#FFFFFF", // Säkerställer vit bakgrund
      scrollX: 1, // Förhindrar skrollning
      scrollY: 0,
      windowWidth: element.scrollWidth, // Matchar storleken exakt
      windowHeight: element.scrollHeight
    }).then((canvas: HTMLCanvasElement) => {
      const imgData = canvas.toDataURL("image/png");
  
      // Definiera A4 storlek exakt
      const pdf = new (window as any).jspdf.jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });
  
      const imgWidth = 210; // A4 bredd i mm
      const pageHeight = 297; // A4 höjd i mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      let y = 0;
      while (y < imgHeight) {
        pdf.addImage(imgData, "PNG", 0, y * -1, imgWidth, imgHeight);
        y += pageHeight;
        if (y < imgHeight) {
          pdf.addPage();
        }
      }
  
      pdf.save("Yonatan_Zewude_CV.pdf");
    });
  };
  
  return (
    <div className="cv-page">
      <div className="container">
        <h2>My CV</h2>

        {/* 📌 Elementet som ska sparas som PDF */}
        <div id="cv-content">
          <img src={cvImage} alt="Yonatan Zewude CV" className="cv-image" />
        </div>

        {/* 🔘 Knapp för att skriva ut PDF */}
        <button id="printButton" onClick={openPrintDialog}>Print </button>

        {/* 📥 Knapp för att ladda ner PDF */}
        <button id="download-pdf" onClick={saveAsPDF}>Download as PDF</button>
      </div>
    </div>
  );
};

export default CV;
