import { defineStore } from 'pinia'
import type { Account } from "../types/account.types.ts";
import {ref} from "vue";


export const useStore = defineStore('account', () => {
    const accounts = ref<Account[]>([
        //{ id: '1', name: 'John Doe', phoneNumber: '+79152824440', role: 'admin', isSaved: true },
       // { id: '2', name: 'Jane Smith', phoneNumber: '098-765-4321', role: 'default', isSaved: true },
        //{ id: '3', name: 'Bob Johnson', phoneNumber: '555-123-4567', role: 'default', isSaved: true }
    ])
    const selectedAccount = ref<Account | null>(null)

    const loadFromLocalStorage = () => {
        try {
            const saved = localStorage.getItem("accounts");
            if (saved) {
                const parsed = JSON.parse(saved)
                if(Array.isArray(parsed)) {
                    accounts.value = parsed
                }
            }
        }catch(error){
            console.error(error)
        }
    }

    const saveToLocalStorage = () => {
        try {
            localStorage.setItem('accounts', JSON.stringify(accounts.value))
        }
        catch (error) {
            console.error(error)
        }
    }

    const addAccount = (account: Account) => {
        accounts.value.push(account)
        saveToLocalStorage()
    }

    const addEmptyAccount = () => {
        const newAccount: Account = {
            id: Date.now().toString(),
            name: '',
            phoneNumber: '',
            role: 'default',
            isSaved: false,
        }
        accounts.value.unshift(newAccount)
        saveToLocalStorage()
    }

    const updateAccount = (id: string, updates: Partial<Account>) => {
        const account = accounts.value.find(acc => acc.id === id)
        if (account) {
            Object.assign(account, updates)
        }
        saveToLocalStorage()
    }


    const removeAccount = (id: string) => {
        const index = accounts.value.findIndex(acc => acc.id === id)
        if (index !== -1) {
            accounts.value.splice(index, 1)
            console.log('Account removed:', id)
            if (selectedAccount.value && selectedAccount.value.id === id) {
                selectedAccount.value = null
            }
        } else {
            console.log('Account not found:', id)
        }
        saveToLocalStorage()
    }

    const selectAccount = (account: Account) => {
        selectedAccount.value = account
        saveToLocalStorage()
    }

    loadFromLocalStorage()

    return {
        accounts,
        selectedAccount,
        addAccount,
        addEmptyAccount,
        updateAccount,
        removeAccount,
        selectAccount,
        loadFromLocalStorage,
        saveToLocalStorage,
    }
})