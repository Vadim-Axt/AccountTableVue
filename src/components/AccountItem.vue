<template>
  <div class="account-item" :class="{ 'is-saved': account.isSaved }">
    <div class="inputs-group">
      <input
          v-model="localData.name"
          :disabled="account.isSaved"
          placeholder="Имя"
          :class="{ 'input-error': errors.name }"
      />
      <input
          v-model="localData.phoneNumber"
          :disabled="account.isSaved"
          placeholder="Телефон"
          maxlength="15"
          type="tel"
          value="+7"
          inputmode="numeric"
          :class="{ 'input-error': errors.phoneNumber }"
      />
      <select v-model="localData.role" :disabled="account.isSaved">
        <option value="default">Default</option>
        <option value="admin">Admin</option>
      </select>
    </div>

    <div class="actions-group">
      <button class="btn btn-select" @click="handleSelect" :disabled="account.isSaved">
        Select
      </button>
      <button class="btn btn-edit" @click="handleEdit" :disabled="!account.isSaved">
        Edit
      </button>
      <button class="btn btn-delete" @click="handleDelete()">
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useStore } from '../store/account.store.ts';
import type {Account} from "../types/account.types.ts";

const props = defineProps<{
  account: Account;
}>();

const store = useStore();

const localData = ref({
  name: props.account.name,
  phoneNumber: props.account.phoneNumber,
  role: props.account.role,
});

const errors = ref({
  name: false,
  phoneNumber: false,
});

// Синхронизация, если данные изменились извне
watch(() => props.account, (newVal) => {
  localData.value.name = newVal.name;
  localData.value.phoneNumber = newVal.phoneNumber;
  localData.value.role = newVal.role;
}, { deep: true });

const validate = () => {
  let isValid = true;
  errors.value.name = false;
  errors.value.phoneNumber = false;

  const nameRegex = /^[A-Za-zА-Яа-яёЁ\s-]+$/
  const phoneRegex = /^(\+7|8)[\s-]?\(?(\d{3})\)?[\s-]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/

  if (localData.value.name.trim().length < 2 && !nameRegex.test(localData.value.name)) {
    errors.value.name = true;
    isValid = false;
  }

  if (!phoneRegex.test(localData.value.phoneNumber)) {
    errors.value.phoneNumber = true;
    isValid = false;
  }

  return isValid;
};


const handleSelect = () => {
  if (validate()) {
    store.updateAccount(props.account.id, {
      name: localData.value.name,
      phoneNumber: localData.value.phoneNumber,
      role: localData.value.role,
      isSaved: true,
    });
  }
};

const handleEdit = () => {
  store.updateAccount(props.account.id, { isSaved: false });
};

const handleDelete = () => {
  store.removeAccount(props.account.id);
};
</script>

<style scoped>
.account-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: opacity 0.3s;
  gap: 16px;
}
.account-item.is-saved {
  background-color: #f3f4f6;
  opacity: 0.9;
}
.inputs-group {
  display: flex;
  gap: 12px;
  flex: 1;
}
input, select {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
  flex: 1;
}
input:disabled, select:disabled {
  background-color: #e5e7eb;
  color: #6b7280;
  cursor: not-allowed;
}
.input-error {
  border-color: #ef4444;
  background-color: #fef2f2;
}
.actions-group {
  display: flex;
  gap: 8px;
}
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 14px;
  color: white;
}
.btn:disabled {
  background-color: #c2cbd7 !important;
  cursor: default;
}
.btn-select {
  background-color: #10b981;
}
.btn-select:hover:not(:disabled) {
  background-color: #059669;
}
.btn-edit {
  background-color: #3b82f6;
}
.btn-edit:hover:not(:disabled) {
  background-color: #2563eb;
}
.btn-delete {
  background-color: #ef4444;
}
.btn-delete:hover:not(:disabled) {
  background-color: #dc2626;
}
</style>