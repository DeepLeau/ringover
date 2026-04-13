describe('formatPhoneNumber', () => {
  it('should return empty string when input is empty', () => {
    // Arrange — entrée vide
    const input = ''

    // Act — appel direct de la fonction pure
    const result = formatPhoneNumber(input)

    // Assert — sortie exactement vide
    expect(result).toBe('')
  })

  it('should format short number with partial groups', () => {
    // Arrange — 3 chiffres (indicatif + 1 chiffre)
    const input = '336'

    // Act
    const result = formatPhoneNumber(input)

    // Assert — formatage partiel : +XX X
    expect(result).toBe('+33 6')
  })

  it('should format 9-digit number with three groups', () => {
    // Arrange — 9 chiffres : indicatif + 7 chiffres locaux
    const input = '336123456'

    // Act
    const result = formatPhoneNumber(input)

    // Assert — +XX X XX XX XX
    expect(result).toBe('+33 6 12 34 56')
  })

  it('should format 11-digit number completely', () => {
    // Arrange — 11 chiffres : indicatif + 9 chiffres locaux (cas Marie Dupont)
    const input = '33382457109'

    // Act
    const result = formatPhoneNumber(input)

    // Assert — formatage complet standard
    expect(result).toBe('+33 3 82 45 71 09')
  })

  it('should format 11-digit number for second contact', () => {
    // Arrange — autre 11 chiffres (cas Anne Petit)
    const input = '3382457109'

    // Act
    const result = formatPhoneNumber(input)

    // Assert — le dernier groupe peut avoir 1 chiffre si l'entrée le contient
    expect(result).toBe('+33 8 24 57 10 9')
  })

  it('should truncate at 11 digits when input is longer', () => {
    // Arrange — 12 chiffres (dépassement du maximum)
    const input = '333824571092'

    // Act
    const result = formatPhoneNumber(input)

    // Assert — les chiffres au-delà de l'index 11 sont ignorés
    expect(result).toBe('+33 3 82 45 71 09')
  })
})
