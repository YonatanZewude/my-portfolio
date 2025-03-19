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
      scale: 2, // För bättre upplösning
      useCORS: true // Om externa bilder används
    }).then((canvas: HTMLCanvasElement) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new (window as any).jspdf.jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      const imgWidth = 210; // A4 bredd i mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
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
        <button id="printButton" onClick={openPrintDialog}>Skriv ut</button>

        {/* 📥 Knapp för att ladda ner PDF */}
        <button id="download-pdf" onClick={saveAsPDF}>Ladda ner som PDF</button>
      </div>
    </div>
  );
};

export default CV;
