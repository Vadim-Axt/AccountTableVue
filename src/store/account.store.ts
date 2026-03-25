import { defineStore } from 'pinia'
import type { Account } from "../types/account.types.ts";
import {ref} from "vue";


export const store = defineStore('account', () => {
    const accounts: Account[] = ref<Account[]>([])
    const selectedAccount: Account = ref<Account | null>(null)

    return {
        accounts,
        selectedAccount,
    }
})