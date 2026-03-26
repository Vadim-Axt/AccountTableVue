import { defineStore } from 'pinia'
import type { Account } from "../types/account.types.ts";
import {ref} from "vue";


export const useStore = defineStore('account', () => {
    const accounts = ref<Account[]>([])

    const addEmptyAccount = () => {
        accounts.value.push({
            id: crypto.randomUUID(),
            name: '',
            phoneNumber: '',
            role: 'default',
            isSaved: false
        })
    }
    const updateAccount = (id: string, updateData:Partial<Account>)=> {
        const index = accounts.value.findIndex((acc)=> acc.id === id)
        if ( index !== -1 ) {
            accounts.value[index] = { ...accounts.value[index], ...updateData }
        }
    }

    const removeAccount = (id: string) => {
        accounts.value.filter((acc)=> acc.id !== id)
    }



    return {
        accounts,
        addEmptyAccount,
        updateAccount,
        removeAccount
    }
})
