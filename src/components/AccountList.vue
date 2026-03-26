<template>
  <div class="list-wrapper" :class="{ 'is-centered-layout': store.accounts.length === 0 }">

    <button class="btn-add" @click="store.addEmptyAccount">
      +
    </button>

    <div v-if="store.accounts.length > 0" class="accounts-container">
      <AccountItem
          v-for="account in store.accounts"
          :key="account.id"
          :account="account"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from '../store/account.store.ts';
import AccountItem from './AccountItem.vue';

const store = useStore();
onMounted(() => {
  if (store.accounts.length === 0) {
    store.addEmptyAccount();
  }
});
</script>

<style scoped>
.list-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
}

.is-centered-layout {
  justify-content: center;
  align-items: center;
}

.btn-add {
  background-color: #6366f1;
  color: white;
  font-size: 24px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, background-color 0.2s;
}

.btn-add:hover {
  background-color: #4f46e5;
  transform: scale(1.05);
}

.accounts-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>