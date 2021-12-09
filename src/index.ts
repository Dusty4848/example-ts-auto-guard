import { Company, User } from './types'
import { isCompany, isUser } from './types.guard'
import {
  getCustomers,
  processInvoiceBusiness,
  processInvoicePrivat
} from './utils'
;(function processInvoices() {
  const customers = getCustomers()

  customers.forEach((customer) => {
    if (isCompany(customer)) {
      processInvoiceBusiness(customer)
    } else if (isUser(customer)) {
      processInvoicePrivat(customer)
    } else {
      console.error('Unknown Customer', customer)
    }
  })
})()
