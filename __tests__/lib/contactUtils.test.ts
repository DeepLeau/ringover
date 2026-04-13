// ─────────────────────────────────────────────────────────────────────────────
// Prérequis : extraire getInitials et formatSubtitle de ContactList.tsx vers
// src/lib/contactUtils.ts et les exporter nommément.
// ─────────────────────────────────────────────────────────────────────────────
import { getInitials, formatSubtitle } from '@/lib/contactUtils'

describe('getInitials', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should return "?" when fullName is empty or whitespace-only', () => {
    // Arrange
    const empty = ''
    const whitespace = '   '

    // Act + Assert
    expect(getInitials(empty)).toBe('?')
    expect(getInitials(whitespace)).toBe('?')
  })

  it('should return uppercased first letter when fullName has a single word', () => {
    // Arrange
    const input = 'alice'

    // Act
    const result = getInitials(input)

    // Assert
    expect(result).toBe('A')
  })

  it('should return initials of first two words when fullName has multiple words', () => {
    // Arrange
    const two = 'Marie Dupont'
    const three = 'Jean Pierre Durand'

    // Act + Assert
    expect(getInitials(two)).toBe('MD')
    expect(getInitials(three)).toBe('JP')
  })

  it('should handle multiple spaces between words and return correct two-letter initials', () => {
    // Arrange
    const input = 'Anne   Petit'

    // Act
    const result = getInitials(input)

    // Assert
    expect(result).toBe('AP')
  })
})

describe('formatSubtitle', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should join jobTitle and company with " · " when both are non-empty', () => {
    // Arrange
    const jobTitle = 'Directrice Commerciale'
    const company = 'Acme France'

    // Act
    const result = formatSubtitle(jobTitle, company)

    // Assert
    expect(result).toBe('Directrice Commerciale · Acme France')
  })

  it('should return only the non-empty part when one argument is empty', () => {
    // Arrange / Act / Assert
    expect(formatSubtitle('Head of Sales', '')).toBe('Head of Sales')
    expect(formatSubtitle('', 'DataPro')).toBe('DataPro')
  })

  it('should return empty string when both jobTitle and company are empty', () => {
    // Arrange
    const jobTitle = ''
    const company = ''

    // Act
    const result = formatSubtitle(jobTitle, company)

    // Assert
    expect(result).toBe('')
  })

  it('should trim whitespace before joining parts', () => {
    // Arrange
    const jobTitle = ' Consultant senior '
    const company = ' Stratégie & Co '

    // Act
    const result = formatSubtitle(jobTitle, company)

    // Assert
    expect(result).toBe('Consultant senior · Stratégie & Co')
  })
})
