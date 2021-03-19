const appOne = Vue.createApp({
    data() {
        return {
            principal: 1000000,
            interestRate: 1,
            term: 12,
            processAmount: 0,
            sumInterest: 0,
            items: []
        }
    },
    methods: {
        calculate() {
            this.item = []
            this.sumInterest = 0
            this.processAmount = this.principal
            for (let i = 1; i <= this.term; i++) {
                num = Math.round(this.processAmount * (this.interestRate / 100))
                this.sumInterest += num
                this.items.push([i, this.processAmount, num, num + this.processAmount])
                this.processAmount = num + this.processAmount
            }
            this.items.push(['-', '-', this.sumInterest, '-'])
        },
        clear() {
            this.items = []
        }
    }
})

appOne.mount('#app1')

const appTwo = Vue.createApp({
    data() {
        return {
            principal: 10000000,
            interestRate: 4,
            term: 30,
            display: 20,
            items: []
        }
    },
    methods: {
        calculate() {
            termMonth = this.term * 12
            this.item = []
            processAmount_one = this.principal
            processAmount_two = this.principal
            for (let i = 1; i <= this.display; i++) {
                // 元利均等返済
                interestPayment = processAmount_one * ((this.interestRate / 100) / 12)
                interestPayment_one = Math.round(interestPayment)
                paymentPerMonth = (processAmount_one * ((this.interestRate / 100) / 12) * Math.pow((1 + ((this.interestRate / 100) / 12)), termMonth)) / (Math.pow((1 + ((this.interestRate / 100) / 12)), termMonth) - 1)
                paymentPerMonth_one = Math.round(paymentPerMonth)
                principalPayment_one = paymentPerMonth_one - interestPayment_one

                // 元金均等返済
                principalPayment_two = Math.round(processAmount_two / termMonth)
                interestPayment_two = Math.round(processAmount_two *  ((this.interestRate / 100) / 12))
                paymentPerMonth_two = principalPayment_two + interestPayment_two

                this.items.push([i + 'ヶ月目', processAmount_one, principalPayment_one, interestPayment_one, paymentPerMonth_one, processAmount_one - principalPayment_one, '', processAmount_two, principalPayment_two, interestPayment_two, paymentPerMonth_two, processAmount_two - principalPayment_two])
                processAmount_one = processAmount_one - principalPayment_one
                processAmount_two = processAmount_two - principalPayment_two
            }
        },
        clear() {
            this.items = []
        }
    }
})

appTwo.mount('#app2')
