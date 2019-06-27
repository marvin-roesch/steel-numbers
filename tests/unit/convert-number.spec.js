import convert from '@/convert-number';

describe('convert-number', () => {
  it('maps digits to themselves', () => {
    for (let number = 1; number <= 16; number += 1) {
      expect(convert(number))
        .toEqual([number]);
    }
  });

  it('prepends factor for multiples of 16', () => {
    for (let factor = 2; factor < 16; factor += 1) {
      expect(convert(factor * 16))
        .toEqual([factor, 16]);
    }
  });

  it('prepends factor for multiples of 256', () => {
    for (let factor = 2; factor < 16; factor += 1) {
      expect(convert(factor * 256))
        .toEqual([factor, 256]);
    }
  });

  it('prepends factor for multiples of 4096', () => {
    for (let factor = 2; factor < 16; factor += 1) {
      expect(convert(factor * 4096))
        .toEqual([factor, 4096]);
    }
  });

  it('respects all base cases: 4096, 256, 16, 1', () => {
    expect(convert(4096 + 256 + 16 + 1))
      .toEqual([4096, 256, 16, 1]);
  });
});
