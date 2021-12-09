/*
 * Generated type guards for "types.ts".
 * WARNING: Do not manually change this file.
 */
import {
  Company,
  User,
  PaymentMethod,
  PaymentMethodCard,
  PaymentMethodSepa
} from './types'

export function isCompany(obj: any, _argumentName?: string): obj is Company {
  return (
    ((obj !== null && typeof obj === 'object') || typeof obj === 'function') &&
    typeof obj.companyName === 'string' &&
    typeof obj.companyAddress === 'string' &&
    typeof obj.companyOwner === 'string' &&
    (isPaymentMethod(obj.paymentMethod) as boolean)
  )
}

export function isUser(obj: any, _argumentName?: string): obj is User {
  return (
    ((obj !== null && typeof obj === 'object') || typeof obj === 'function') &&
    typeof obj.userName === 'string' &&
    typeof obj.userAddress === 'string' &&
    (isPaymentMethod(obj.paymentMethod) as boolean)
  )
}

export function isPaymentMethod(
  obj: any,
  _argumentName?: string
): obj is PaymentMethod {
  return (
    (isPaymentMethodCard(obj) as boolean) ||
    (isPaymentMethodSepa(obj) as boolean)
  )
}

export function isPaymentMethodCard(
  obj: any,
  _argumentName?: string
): obj is PaymentMethodCard {
  return (
    ((obj !== null && typeof obj === 'object') || typeof obj === 'function') &&
    obj.type === 'card' &&
    typeof obj.cardExp === 'string'
  )
}

export function isPaymentMethodSepa(
  obj: any,
  _argumentName?: string
): obj is PaymentMethodSepa {
  return (
    ((obj !== null && typeof obj === 'object') || typeof obj === 'function') &&
    obj.type === 'sepa' &&
    typeof obj.iban === 'string' &&
    typeof obj.bankName === 'string' &&
    typeof obj.bic === 'string' &&
    typeof obj.consent === 'boolean'
  )
}
