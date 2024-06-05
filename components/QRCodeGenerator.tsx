import React, { useState, ChangeEvent } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [isScanned, setIsScanned] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const enteredText = e.target.value;
    setText(enteredText);
    setIsScanned(false); // Reset the scanned state when new text is entered
  };

  const handleQRCodeScan = () => {
    // Add any logic you need after the QR code is scanned
    // For now, let's just set the isScanned state to true
    setIsScanned(true);
  };

  return (
    <div id='qrcode' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h2 className='text-[60px] font-bold text-gray-50'>QR CODE ☑️</h2>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="e.g. KX-3276"
        style={{
          marginBottom: '10px',
          padding: '8px',
          fontSize: '16px',
          border: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          outline: 'none',
          borderRadius: '8px',
        }}
      />
      {text && (
        <div style={{ border: '5px solid white', padding: '5px', borderRadius: '5px', marginTop: '20px' }}>
          <QRCode value={text} onClick={handleQRCodeScan} />
        </div>
      )}
      {isScanned && (
        <div style={{ marginTop: '20px', color: 'white', fontSize: '18px' }}>
          You have 10Ls for the week!
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
