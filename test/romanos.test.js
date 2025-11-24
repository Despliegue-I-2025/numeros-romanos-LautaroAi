const { romanToArabic, arabicToRoman, parseDecimalToArabic, convertDecimalToArabic } = require('../romanos');

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

        test('Convierte símbolos romanos compuestos a números decimales correctamente', () => {
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