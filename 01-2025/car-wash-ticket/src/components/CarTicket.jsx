import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export const CarTicket = () => {
  const [licensePlate, setLicensePlate] = useState("");
  const [qrData, setQrData] = useState("");

  const generateQR = (event) => {
    event.preventDefault();

    const ticketData = {
      licensePlate,
      timestamp: new Date().toISOString(),
    };

    setQrData(JSON.stringify(ticketData));
  };

  return (
    <main>
      <h1>Ticket de lavado</h1>
      <form onSubmit={generateQR}>
        <input
          type="text"
          placeholder="Introduce tu número de matrícula"
          id="car-license"
          name="car-license"
          value={licensePlate}
          onChange={(event) => setLicensePlate(event.target.value)}
        />

        <button type="submit">Generar Ticket</button>
      </form>

      {qrData && <QRCodeSVG value={qrData} size={200} />}
    </main>
  );
};
