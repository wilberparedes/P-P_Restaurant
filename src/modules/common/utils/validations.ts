import { parsePhoneNumber } from 'libphonenumber-js'

export const isValidEmail = (email: string): boolean => {
  const match = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )

  return !!match
}

export const isEmail = (email: string): string | undefined => {
  return isValidEmail(email) ? undefined : 'El correo no parece ser válido'
}

export const onlyNumbers = (number: string): boolean => {
  const match = String(number).match(/^[0-9]+$/)
  return !!match
}

export const isOnlyNumber = (number: string): string | undefined => {
  return onlyNumbers(number) ? undefined : 'Ingrese solo números'
}

export const hasLetterAndNumber = (text: string): string | undefined => {
  const expresión_regular = new RegExp(
    '^(?=(?:.*[a-z]){1})(?=(?:.*(\\d))){1}',
    'g'
  )
  const match = String(text).match(expresión_regular)
  return !match
    ? 'La contraseña debe tener mínimo una letra y mínimo un número'
    : undefined
}

export const isValidNumberCellPhone = (
  phone: string,
  code: string
): string | undefined => {
  const phoneNumber = parsePhoneNumber(`+${code}${phone}`)
  return phoneNumber && phoneNumber.isValid()
    ? undefined
    : 'Número de teléfono inválido'
}
