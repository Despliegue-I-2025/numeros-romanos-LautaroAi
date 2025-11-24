const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Romanos a Arabigos
app.get('/r2a', (req, res) => {
  const romanNumeral = req.query.roman;
  if (!romanNumeral) {
    return res.status(400).json({ error: 'Parametro roman requerido.' });
  }

  const arabicNumber = romanToArabic(romanNumeral);
  if (arabicNumber === null) {
    return res.status(400).json({ error: 'Numero romano invalido.' });
  }

  if (arabicNumber <= 0 || arabicNumber >= 4000) {
    return res.status(400).json({
      error: 'Numero romano fuera de rango (1-3999).',
      arabic: arabicNumber
      });
  }

  return res.json({ arabic: arabicNumber });
});

// Arabigos a Romanos
app.get('/a2r', (req, res) => {
  const arabicNumber = parseInt(req.query.arabic, 10);
  if (isNaN(arabicNumber)) {
    return res.status(400).json({ error: 'Parametro arabic requerido.' });
  }

    if (arabicNumber <= 0 || arabicNumber >= 4000) {
    return res.status(422).json({ error: 'Numero arabico fuera de rango (1-3999).' });
  }

  const romanNumeral = arabicToRoman(arabicNumber);
  if (romanNumeral === null) {
    return res.status(400).json({ error: 'Numero arabico invalido.' });
  }

  return res.json({ roman: romanNumeral });
});

const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
const arabicValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function romanToArabic(romanString) {
  if (!romanString || typeof romanString !== 'string') return null;

  const roman = romanString.toUpperCase();
  let result = 0;
  let i = 0; 

  for (let j = 0; j < romanSymbols.length; j++) {
    const symbol = romanSymbols[j];
    const value = arabicValues[j];
    while (roman.startsWith(symbol, i)) {
      result += value;
      i += symbol.length;
    } 
  }
  return result;
}

function arabicToRoman(arabic) {
}

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor romanos-arabicos escuchando en el puerto ${PORT}`);
  });
}

module.exports = { app, romanToArabic, arabicToRoman };
