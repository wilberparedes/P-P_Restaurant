import { FC, forwardRef, useState } from 'react'

import { Controller } from 'react-hook-form'

import { InputTypes } from '@/modules/common/constants'

import { InputProps } from './input.props'
import {
  BoxFile,
  FlexCenter,
  HelperText,
  IconCamera,
  ImgPreview,
} from './input.style'
import {
  Divider,
  DivRelative,
  IconCalendar,
  IconPassword,
  InputSelectStyled,
  InputStyled,
  Label,
  LabelTitle,
} from './input.style'

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      helperText,
      error = false,
      control,
      name,
      defaultValue,
      label,
      rules,
      options = [],
      ...props
    },
    ref
  ) => {
    const [isShow, setIsShow] = useState<boolean>(false)
    return (
      <Controller
        {...props}
        rules={rules}
        control={control}
        name={name!}
        defaultValue={defaultValue}
        render={({ field }) => {
          const [isFocus, setIsFocus] = useState<boolean>(false)
          const [imgData, setImgData] = useState<string | ArrayBuffer | null>(
            null
          )

          const onBlur = () => {
            if (field.onBlur) {
              field?.onBlur()
            }
            setIsFocus(false)
          }
          const onFocus = () => {
            setIsFocus(true)
          }

          const onChangePicture = (e: any) => {
            field.onChange(e)
            if (e.target.files[0]) {
              const reader = new FileReader()
              reader.addEventListener('load', () => {
                setImgData(reader.result)
              })
              reader.readAsDataURL(e.target.files[0])
            }
          }

          return (
            <Label>
              {label ? (
                <LabelTitle $isFocus={isFocus} $field={field} $error={error}>
                  {label}
                </LabelTitle>
              ) : (
                <Divider />
              )}

              <DivRelative>
                {props.type === InputTypes.SELECT ? (
                  <InputSelectStyled {...field} {...props}>
                    {options.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </InputSelectStyled>
                ) : props.type === InputTypes.FILE ? (
                  <FlexCenter>
                    <BoxFile>
                      {field?.value ? (
                        <ImgPreview src={imgData!} alt={field.name} />
                      ) : (
                        <IconCamera />
                      )}
                    </BoxFile>
                    <InputStyled
                      {...field}
                      {...props}
                      type={props.type}
                      ref={ref}
                      className='hidden'
                      onChange={onChangePicture}
                    />
                  </FlexCenter>
                ) : (
                  <InputStyled
                    {...field}
                    {...props}
                    type={isShow ? InputTypes.TEXT : props.type}
                    placeholder={label}
                    ref={ref}
                    onBlur={onBlur}
                    onFocus={onFocus}
                  />
                )}

                {props.type === InputTypes.PASSWORD && (
                  <IconPassword
                    $isShow={isShow}
                    onClick={() => setIsShow((state) => !state)}
                  />
                )}
                {props.type === InputTypes.DATE && <IconCalendar />}
              </DivRelative>
              {Boolean(helperText) && error && (
                <HelperText $error={error}>{helperText}</HelperText>
              )}
            </Label>
          )
        }}
      />
    )
  }
)
Input.displayName = 'Input'
