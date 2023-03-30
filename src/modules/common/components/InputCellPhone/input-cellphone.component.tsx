import { FC, forwardRef, useState, ChangeEvent } from 'react'

import { Controller } from 'react-hook-form'
import { validations } from '@/modules/common/utils'

import { Text } from '@/modules/common/components/'
import { COUNTRIES } from '@/modules/common/constants'

import {
  InputStyled,
  InputSelectStyled,
  DivInputs,
  Label,
  LabelTitle,
  HelperText,
} from './input-cellphone.style'
import { InputCellPhoneProps } from './input-cellphone.props'

export const InputCellPhone: FC<InputCellPhoneProps> = forwardRef<
  HTMLInputElement,
  InputCellPhoneProps
>(
  (
    { helperText, error = false, control, name, defaultValue, label, rules },
    ref
  ) => {
    const [country, setCountry] = useState(COUNTRIES[0])
    return (
      <Controller
        rules={{
          ...rules,
          validate: {
            ...rules.validate,
            numberCellPhone: (number: string) =>
              validations.isValidNumberCellPhone(number, country.phoneCode),
          },
        }}
        control={control}
        name={name!}
        defaultValue={defaultValue}
        render={({ field }) => {
          const [isFocus, setIsFocus] = useState(false)
          const onBlur = () => {
            if (field.onBlur) {
              field?.onBlur()
            }
            setIsFocus(false)
          }
          const onFocus = () => {
            setIsFocus(true)
          }
          return (
            <Label>
              <LabelTitle $isFocus={isFocus} $field={field} $error={error}>
                {label}
              </LabelTitle>

              <DivInputs>
                <Controller
                  control={control}
                  name={'countryCode'}
                  defaultValue='CO'
                  render={({ field }) => {
                    return (
                      <InputSelectStyled
                        {...field}
                        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                          field.onChange(event)
                          setCountry(
                            COUNTRIES.find(
                              (country) => country.code === event.target.value
                            )!
                          )
                        }}
                      >
                        {COUNTRIES.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag}
                          </option>
                        ))}
                      </InputSelectStyled>
                    )
                  }}
                />
                <Text className='absolute left-24'>+{country.phoneCode}</Text>
                <InputStyled
                  {...field}
                  placeholder={label}
                  ref={ref}
                  onBlur={onBlur}
                  onFocus={onFocus}
                />
              </DivInputs>

              {Boolean(helperText) && error && (
                <HelperText>{helperText}</HelperText>
              )}
            </Label>
          )
        }}
      />
    )
  }
)
InputCellPhone.displayName = 'InputCellPhone'
