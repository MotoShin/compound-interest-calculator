const app = Vue.createApp({
    data() {
        return {
            principal: 10000,
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
        }
    }
})

app.mount('#app')
