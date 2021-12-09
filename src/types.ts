/** @see {isCompany} ts-auto-guard:type-guard */
export type Company = {
  companyName: string
  companyAddress: string
  companyOwner: string
  paymentMethod: PaymentMethod
  test: string
}

/** @see {isUser} ts-auto-guard:type-guard */
export type User = {
  userName: string
  userAddress: string
  paymentMethod: PaymentMethod
}

export type Society = {
  companyName: string
  sponsors: string[]
}

/** @see {isPaymentMethod} ts-auto-guard:type-guard */
export type PaymentMethod = PaymentMethodCard | PaymentMethodSepa

/** @see {isPaymentMethodCard} ts-auto-guard:type-guard */
export type PaymentMethodCard = {
  type: 'card'
  cardExp: string
}

/** @see {isPaymentMethodSepa} ts-auto-guard:type-guard */
export type PaymentMethodSepa = {
  type: 'sepa'
  iban: string
  bankName: string
  bic: string
  consent: boolean
}
