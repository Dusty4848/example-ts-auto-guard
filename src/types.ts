export type Company = {
  companyName: string
  companyAddress: string
  companyOwner: string
  paymentMethod: PaymentMethod
}

export type User = {
  userName: string
  userAddress: string
  paymentMethod: PaymentMethod
}

export type PaymentMethod = PaymentMethodCard | PaymentMethodSepa

export type PaymentMethodCard = {
  type: 'card'
  cardExp: string
}

export type PaymentMethodSepa = {
  type: 'sepa'
  iban: string
  bankName: string
  bic: string
  consent: boolean
}
