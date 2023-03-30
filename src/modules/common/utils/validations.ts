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

export const isValidNumberCellPhone = (
  phone: string,
  code: string
): string | undefined => {
  const phoneNumber = parsePhoneNumber(`+${code}${phone}`)
  return phoneNumber && phoneNumber.isValid()
    ? undefined
    : 'Número de teléfono inválido'
}
