/*  Assignment 
- overdraft 
- transfer between banks 
- airtime, data, utilities
- unique identity 
- interest
- transaction history 
- cashnback 
- spend and save 
*/ 

class Bank {
    private balance: number = 100

    credit(val:number) {
        this.balance += val
    }
    
    get balance
}