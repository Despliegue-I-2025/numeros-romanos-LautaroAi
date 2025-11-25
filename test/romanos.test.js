const { romanToArabic, arabicToRoman, arabicToDecimal, decimalToArabic } = require('../romanos');

// Números romanos a arábigos
describe('romanToArabic function', () => {
    test('Convierte números romanos individuales a números decimales correctamente', () => {
        expect(romanToArabic('I')).toBe(1);
        expect(romanToArabic('V')).toBe(5);
        expect(romanToArabic('X')).toBe(10);
        expect(romanToArabic('L')).toBe(50);
        expect(romanToArabic('C')).toBe(100);
        expect(romanToArabic('D')).toBe(500);
        expect(romanToArabic('M')).toBe(1000);
    })
    test('Convierte números romanos compuestos a números decimales correctamente', () => {
        expect(romanToArabic('III')).toBe(3);
        expect(romanToArabic('VI')).toBe(6);
        expect(romanToArabic('IX')).toBe(9);
        expect(romanToArabic('XL')).toBe(40);
        expect(romanToArabic('XC')).toBe(90);
        expect(romanToArabic('CL')).toBe(150);
        expect(romanToArabic('CC')).toBe(200);
        expect(romanToArabic('CD')).toBe(400);
        expect(romanToArabic('DL')).toBe(550);
        expect(romanToArabic('CM')).toBe(900);
        expect(romanToArabic('MD')).toBe(1500);
    })
    test('convierte números romanos complejos a números decimales correctamente', () => {
        expect(romanToArabic('XIV')).toBe(14);
        expect(romanToArabic('XVIII')).toBe(18);
        expect(romanToArabic('XXIV')).toBe(24);
        expect(romanToArabic('XLVI')).toBe(46);
        expect(romanToArabic('CCXXV')).toBe(225);
        expect(romanToArabic('DLXVII')).toBe(567);
        expect(romanToArabic('DCLXXXIV')).toBe(684);
        expect(romanToArabic('MDCCLIX')).toBe(1759);
        expect(romanToArabic('MMXLVIII')).toBe(2048);
        expect(romanToArabic('MMMDCLXVI')).toBe(3666);
    })
    test('Maneja correctamente la conversión de letras minúsculas', () => {
        expect(romanToArabic('xii')).toBe(12);
        expect(romanToArabic('xvi')).toBe(16);
        expect(romanToArabic('xxix')).toBe(29);
        expect(romanToArabic('xxxvii')).toBe(37);
        expect(romanToArabic('xlvi')).toBe(46);
        expect(romanToArabic('lxxiii')).toBe(73);
        expect(romanToArabic('xci')).toBe(91);
        expect(romanToArabic('ccclxv')).toBe(365);
        expect(romanToArabic('dccxlvi')).toBe(746);
        expect(romanToArabic('MMCLX')).toBe(2160);
    })
     test('Maneja correctamente el máximo número romano válido', () => {
        expect(romanToArabic('MMMCMXCIX')).toBe(3999);
    })
    test('Retorna null para números romanos con sintaxis inválida', () => {
        expect(romanToArabic('IIII')).toBeNull();
        expect(romanToArabic('VV')).toBeNull();
        expect(romanToArabic('XXXX')).toBeNull();
        expect(romanToArabic('LL')).toBeNull();
        expect(romanToArabic('CCCC')).toBeNull();
        expect(romanToArabic('DD')).toBeNull();
        expect(romanToArabic('MMMM')).toBeNull();
    })
    test('Retorna null para entradas no válidas', () => {
        expect(romanToArabic('ABC')).toBeNull();
        expect(romanToArabic('')).toBeNull();
        expect(romanToArabic(null)).toBeNull();
        expect(romanToArabic(undefined)).toBeNull();
    });
});

// Números arábigos a romanos
describe('arabicToRoman function', () => {
    test('Convierte números decimales a números romanos correctamente', () => {
        expect(arabicToRoman(1)).toBe('I');
        expect(arabicToRoman(5)).toBe('V');
        expect(arabicToRoman(10)).toBe('X');
        expect(arabicToRoman(50)).toBe('L');
        expect(arabicToRoman(100)).toBe('C');
        expect(arabicToRoman(500)).toBe('D');
        expect(arabicToRoman(1000)).toBe('M');
    });

    test('Convierte números decimales compuestos a números romanos correctamente', () => {
        expect(arabicToRoman(2)).toBe('II');
        expect(arabicToRoman(9)).toBe('IX');
        expect(arabicToRoman(15)).toBe('XV');
        expect(arabicToRoman(55)).toBe('LV');
        expect(arabicToRoman(60)).toBe('LX');
        expect(arabicToRoman(105)).toBe('CV');
        expect(arabicToRoman(400)).toBe('CD');
        expect(arabicToRoman(600)).toBe('DC');
        expect(arabicToRoman(1100)).toBe('MC');
        expect(arabicToRoman(2000)).toBe('MM');
    });

    test('Convierte números decimales complejos a números romanos correctamente', () => {
        expect(arabicToRoman(13)).toBe('XIII');
        expect(arabicToRoman(39)).toBe('XXXIX');
        expect(arabicToRoman(42)).toBe('XLII');
        expect(arabicToRoman(77)).toBe('LXXVII');
        expect(arabicToRoman(91)).toBe('XCI');
        expect(arabicToRoman(345)).toBe('CCCXLV');
        expect(arabicToRoman(851)).toBe('DCCCLI');
        expect(arabicToRoman(1896)).toBe('MDCCCXCVI');
        expect(arabicToRoman(2025)).toBe('MMXXV');
        expect(arabicToRoman(3802)).toBe('MMMDCCCII');
    });

    test('Maneja correctamente el máximo número válido', () => {
        expect(arabicToRoman(3999)).toBe('MMMCMXCIX');
    });

    test('retorna null para valores no enteros', () => {
        expect(arabicToRoman(3.14)).toBeNull();
        expect(arabicToRoman(99.82)).toBeNull();
        expect(arabicToRoman(204.99)).toBeNull();
    });

    test('Retorna null para números fuera de rango', () => {
        expect(arabicToRoman(0)).toBeNull();
        expect(arabicToRoman(-1)).toBeNull();
        expect(arabicToRoman(-100)).toBeNull();
        expect(arabicToRoman(4000)).toBeNull();
        expect(arabicToRoman(5000)).toBeNull();
    });
});

// Números decimales a arábigos y viceversa
describe('Conversión de dígitos decimales a arábigos', () => {
  test('decimalToArabic convierte correctamente', () => {
    expect(decimalToArabic(5)).toBe('٥');
    expect(decimalToArabic(67)).toBe('٦٧');
    expect(decimalToArabic(109)).toBe('١٠٩');
    expect(decimalToArabic(248)).toBe('٢٤٨');
    expect(decimalToArabic(490)).toBe('٤٩٠');
    expect(decimalToArabic(743)).toBe('٧٤٣');
    expect(decimalToArabic(885)).toBe('٨٨٥');
    expect(decimalToArabic(1457)).toBe('١٤٥٧');
    expect(decimalToArabic(2110)).toBe('٢١١٠');
    expect(decimalToArabic(3499)).toBe('٣٤٩٩');
  });

  test('arabicToDecimal analiza y convierte a número decimal correctamente', () => {
    expect(arabicToDecimal('٣')).toBe(3);
    expect(arabicToDecimal('٣٩')).toBe(39);
    expect(arabicToDecimal('٩٥')).toBe(95);
    expect(arabicToDecimal('٢٦٧')).toBe(267);
    expect(arabicToDecimal('٣٩٢')).toBe(392);
    expect(arabicToDecimal('٧٥٨')).toBe(758);
    expect(arabicToDecimal('٩٢١')).toBe(921);
    expect(arabicToDecimal('١٥٤٠')).toBe(1540);
    expect(arabicToDecimal('٢٢٠٩')).toBe(2209);
    expect(arabicToDecimal('٣٣١٣')).toBe(3313);
  });

  test('arabicToDecimal retorna NaN para entradas inválidas', () => {
    expect(arabicToDecimal('ABC')).toBeNaN();
    expect(arabicToDecimal('')).toBeNaN();
    expect(arabicToDecimal('null')).toBeNaN();
    expect(arabicToDecimal('undefined')).toBeNaN();
  });
});


// Integración completa de las funciones de conversión
describe('Integración de funciones de conversión completa', () => {
  const testCases = [
    { roman: 'I', decimal: 1  , arabic: '١' },              
    { roman: 'XVIII', decimal: 18  , arabic: '١٨' },         
    { roman: 'CC', decimal: 200  , arabic: '٢٠٠' },           
    { roman: 'CCCLV', decimal: 355  , arabic: '٣٥٥' },        
    { roman: 'DCCCXLIII', decimal: 843  , arabic: '٨٤٣' },    
    { roman: 'MCCXXXIX', decimal: 1239  , arabic: '١٢٣٩' },    
    { roman: 'MDCXLV', decimal: 1645  , arabic: '١٦٤٥' },      
    { roman: 'MDCCCXLII', decimal: 1842  , arabic: '١٨٤٢' },   
    { roman: 'MMCDLXXXI', decimal: 2481  , arabic: '٢٤٨١' },   
    { roman: 'MMCMX', decimal: 2910  , arabic: '٢٩١٠' },       
    { roman: 'MMMCCLIV', decimal: 3254  , arabic: '٣٢٥٤' },    
    { roman: 'MMMCMXCIX', decimal: 3999  , arabic: '٣٩٩٩' }    
  ];

  testCases.forEach(({ roman, decimal, arabic }) => {
    test(`Convierte ${roman} a ${decimal} a ${arabic} y viceversa correctamente`, () => {
      // De romano a decimal
      const toDecimal = romanToArabic(roman); // puede resultar confuso por el nombre de la función
      expect(toDecimal).toBe(decimal);

      // De decimal a arábigo
      const toArabic = decimalToArabic(toDecimal);
      expect(toArabic).toBe(arabic);

      // De arábigo a decimal
      const fromDecimal = arabicToDecimal(arabic)
      expect(fromDecimal).toBe(decimal);

      // De decimal a romano
      const toRoman = arabicToRoman(fromDecimal);
      expect(toRoman).toBe(roman);

      expect(romanToArabic(toRoman)).toBe(decimal);
      expect(decimalToArabic(romanToArabic(toRoman))).toBe(arabic);
      expect(arabicToDecimal(decimalToArabic(decimal))).toBe(decimal);
      expect(arabicToRoman(arabicToDecimal(toArabic))).toBe(roman);
    });
  });
});