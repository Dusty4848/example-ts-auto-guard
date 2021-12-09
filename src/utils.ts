import { Company, PaymentMethod, User } from './types'

export const getCustomers = (): (Company | User)[] => {
  return [
    {
      companyName: 'QuickSpace',
      companyOwner: 'Iris Watson',
      companyAddress: 'Fort Dodge GA 20783',
      paymentMethod: {
        iban: 'DE4242424242424242',
        bankName: 'Direct Bank',
        bic: '121212',
        type: 'sepa',
        consent: true
      }
    },
    {
      companyName: 'Tourish',
      companyOwner: 'Calista Wise',
      companyAddress: 'Santa Rosa MN 98804',
      paymentMethod: {
        cardExp: '01/23',
        type: 'card'
      }
    },
    {
      userName: 'IronMerc',
      userAddress: 'Weirton IN 93479',
      paymentMethod: {
        cardExp: '08/23',
        type: 'card'
      }
    },
    {
      companyName: 'SwipeWire',
      companyOwner: 'Hiroko Potter',
      companyAddress: 'Frederick Nebraska 20620',
      paymentMethod: {
        cardExp: '02/24',
        type: 'card'
      }
    },
    {
      userName: 'FatalDestiny',
      userAddress: 'Rolling Hills Georgia 92358',
      paymentMethod: {
        iban: 'DE111111111111111',
        bankName: 'IHK Bank',
        bic: '22222222',
        type: 'sepa',
        consent: true
      }
    },
    {
      companyName: 'My Society',
      sponsors: ['amazon', 'stripe']
    }
  ] as (Company | User)[]
}

export const processInvoicePrivat = (customer: User) => {
  console.log(
    `----USER----\nUsername: ${customer.userName} \nAddress: ${customer.userAddress} PaymentMethod: ${customer.paymentMethod.type}\n\n`
  )

  return
}

export const processInvoiceBusiness = (customer: Company) => {
  console.log(
    `----COMPANY----\nOwner: ${customer.companyOwner} \nCompany Name: ${customer.companyName} \nAddress: ${customer.companyAddress} PaymentMethod: ${customer.paymentMethod.type}\n\n`
  )

  return
}
