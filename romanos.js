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
      arabic: convertDecimalToArabic(arabicNumber)
      });
  }

  return res.json({ arabic: convertDecimalToArabic(arabicNumber)});
});

// Arabigos a Romanos
app.get('/a2r', (req, res) => {
  const arabicNumber = parseDecimalToArabic(req.query.arabic);
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

const decimalToArabicMap = {
  '0': '٠',
  '1': '١',
  '2': '٢',
  '3': '٣',
  '4': '٤',
  '5': '٥',
  '6': '٦',
  '7': '٧',
  '8': '٨',
  '9': '٩'
};

const arabicToDecimalMap = {
  '٠': '0',
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9'
};
function convertDecimalToArabic(num) {
  return num.toString().split('').map(digit => decimalToArabicMap[digit]).join('');
}

// Está un poco confuso, capaz debí haberle puesto d2a para no confundir utilizando mismas inciales y nombres largos
function parseDecimalToArabic(decimalToArabicString) {
  if (!decimalToArabicString || typeof decimalToArabicString !== 'string') return NaN;

  const arabicToDecimalString = decimalToArabicString.split('').map(char => arabicToDecimalMap[char] || char).join('');
  return parseInt(arabicToDecimalString, 10);
}

function romanToArabic(roman) {
  if (!roman || typeof roman !== 'string') return null;

  const romanString = roman.toUpperCase();
  let result = 0;
  let i = 0; 

  for (let j = 0; j < romanSymbols.length; j++) {
    const symbol = romanSymbols[j];
    const value = arabicValues[j];
    while (romanString.startsWith(symbol, i)) {
      result += value;
      i += symbol.length;
    } 
  }
  return result;
}

function arabicToRoman(arabic) {
  if (!Number.isInteger(arabic) || arabic <= 0 || arabic >= 4000) return null;

  let result = '';
  let num = arabic; 

  for (let i = 0; i < romanSymbols.length; i++) {
    const value = arabicValues[i];
    const symbol = romanSymbols[i];
    while (num >= value) {
      result += symbol;
      num -= value;
    } 
  }
  return result;
}

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor romanos-arabicos escuchando en el puerto ${PORT}`);
  });
}

module.exports = { app, romanToArabic, arabicToRoman, parseDecimalToArabic, convertDecimalToArabic };
