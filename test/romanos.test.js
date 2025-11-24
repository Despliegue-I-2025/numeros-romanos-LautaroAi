const { romanToArabic, arabicToRoman, parseArabicToDecimal, convertDecimalToArabic } = require('../romanos');

describe('Conversión de Números Romanos a Arábigos', () => {
    describe('romanToArabic function', () => {
        test('Convierte números romanos individuales a números decimales correctamente', () => {
            expect(romanToArabic('I')).toBe(1);
            expect(romanToArabic('V')).toBe(5);
            expect(romanToArabic('X')).toBe(10);
            expect(romanToArabic('L')).toBe(50);
            expect(romanToArabic('C')).toBe(100);
            expect(romanToArabic('D')).toBe(500);
            expect(romanToArabic('M')).toBe(1000);
        });

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
        });

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
        });

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
        });

         test('Maneja correctamente el máximo número romano válido', () => {
            expect(romanToArabic('MMMCMXCIX')).toBe(3999);
        });

        test('Retorna null para números romanos con sintaxis inválida', () => {
            expect(romanToArabic('IIII')).toBeNull();
            expect(romanToArabic('VV')).toBeNull();
            expect(romanToArabic('XXXX')).toBeNull();
            expect(romanToArabic('LL')).toBeNull();
            expect(romanToArabic('CCCC')).toBeNull();
            expect(romanToArabic('DD')).toBeNull();
            expect(romanToArabic('MMMM')).toBeNull();
        });

        test('Retorna null para entradas no válidas', () => {
            expect(romanToArabic('ABC')).toBeNull();
            expect(romanToArabic('')).toBeNull();
            expect(romanToArabic(null)).toBeNull();
            expect(romanToArabic(undefined)).toBeNull();
        });
    });
});

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

// Los siguientes tests tienen menor complejidad, ya que utilizan el mapa de conversión directamente.
describe('Conversión de dígitos decimales a arábigos', () => {
  test('convertDecimalToArabic convierte correctamente', () => {
    expect(convertDecimalToArabic(5)).toBe('٥');
    expect(convertDecimalToArabic(67)).toBe('٦٧');
    expect(convertDecimalToArabic(109)).toBe('١٠٩');
    expect(convertDecimalToArabic(248)).toBe('٢٤٨');
    expect(convertDecimalToArabic(490)).toBe('٤٩٠');
    expect(convertDecimalToArabic(743)).toBe('٧٤٣');
    expect(convertDecimalToArabic(885)).toBe('٨٨٥');
    expect(convertDecimalToArabic(1457)).toBe('١٤٥٧');
    expect(convertDecimalToArabic(2110)).toBe('٢١١٠');
    expect(convertDecimalToArabic(3499)).toBe('٣٤٩٩');
  });

  test('parseArabicToDecimal analiza y convierte a número decimal correctamente', () => {
    expect(parseArabicToDecimal('٣')).toBe(3);
    expect(parseArabicToDecimal('٣٩')).toBe(39);
    expect(parseArabicToDecimal('٩٥')).toBe(95);
    expect(parseArabicToDecimal('٢٦٧')).toBe(267);
    expect(parseArabicToDecimal('٣٩٢')).toBe(392);
    expect(parseArabicToDecimal('٧٥٨')).toBe(758);
    expect(parseArabicToDecimal('٩٢١')).toBe(921);
    expect(parseArabicToDecimal('١٥٤٠')).toBe(1540);
    expect(parseArabicToDecimal('٢٢٠٩')).toBe(2209);
    expect(parseArabicToDecimal('٣٣١٣')).toBe(3313);
  });

  test('parseArabicToDecimal retorna NaN para entradas inválidas', () => {
    expect(parseArabicToDecimal('ABC')).toBeNaN();
    expect(parseArabicToDecimal('')).toBeNaN();
    expect(parseArabicToDecimal('null')).toBeNaN();
    expect(parseArabicToDecimal('undefined')).toBeNaN();
  });
});
