'use strict'

/*
 *  否定の条件の確認
 */

const isMobile = (customer) => customer.type === 5
const isSet = (customer) => customer.type === 3 || customer.type === 4
const isInactiveSet = (customer) => isSet(customer) && customer.status === 'IN'
const isActiveSet = (customer) => isSet(customer) && customer.status !== 'IN'

const check = (customer) => {
    if (isMobile(customer) || isInactiveSet(customer)) {
    } else {
        console.log(`else: ${JSON.stringify(customer)}`)
    }
    if (!isMobile(customer) && ((customer.type !== 3 && customer.type !== 4) || customer.status !== 'IN')) {
        console.log(`hitei1: ${JSON.stringify(customer)}`)
    }
    if (!isMobile(customer) && customer.type !== 3 && customer.type !== 4 || customer.status !== 'IN') {
        console.log(`hitei2: ${JSON.stringify(customer)}`)
    }
}

const customer01 = { type: 1, status: 'AC' }
check(customer01) // else hitei1 hitei2
const customer02 = { type: 1, status: 'SU' }
check(customer02) // else hitei1 hitei2
const customer03 = { type: 1, status: 'IN' }
check(customer03) // else hitei1 hitei2
const customer04 = { type: 2, status: 'AC' }
check(customer04) // else hitei1 hitei2
const customer05 = { type: 2, status: 'SU' }
check(customer05) // else hitei1 hitei2
const customer06 = { type: 2, status: 'IN' }
check(customer06) // else hitei1 hitei2
const customer07 = { type: 3, status: 'AC' }
check(customer07) // else hitei1 hitei2
const customer08 = { type: 3, status: 'SU' }
check(customer08)  // else hitei1 hitei2
const customer09 = { type: 3, status: 'IN' } 
check(customer09)
const customer10 = { type: 4, status: 'AC' }
check(customer10) // else hitei1 hitei2
const customer11 = { type: 4, status: 'SU' }
check(customer11) // else hitei1 hitei2
const customer12 = { type: 4, status: 'IN' } 
check(customer12)
const customer13 = { type: 5, status: 'AC' }
check(customer13) // hitei2
const customer14 = { type: 5, status: 'SU' }
check(customer14) // hitei2
const customer15 = { type: 5, status: 'IN' } 
check(customer15)

// else は hitei1 の条件と同じ