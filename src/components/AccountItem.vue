<script setup lang="ts">

</script>

<template>
  <div class="account-item">
    <div class="inputs">
      <input type="text" class="name-inp inp" placeholder="Name">
      <input type="number" class="number-inp inp" placeholder="Number">
      <input type="text" class="role-inp inp" placeholder="Role">
    </div>
    <div class="buttons">
      <button class="select-btn btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <g fill="none" stroke="black" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8 12.5l3 3l5-6"/>
          <circle cx="12" cy="12" r="10"/>
        </g>
        </svg>
      </button>
      <button class="edit-btn btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621"/>
            <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"/>
          </g>
        </svg>
      </button>
      <button class="trash-btn btn">
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

    </div>
  </div>
</template>

<style scoped>
.account-item {
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 100px;
  margin-top: 10px;
  width: 70vw;
  border-radius: 20px;
}
.inputs {
  width: 80%;
}
.inp {
  height: 60px;
  width: 30%;
  border: none;
  outline: none;
  background: transparent;
  color: #000000 !important;
  font-size: 20px;
  padding-left: 20px;
  transition: .2s;
}
.inp::placeholder {
  font-size: 18px;
  color: black;
  opacity: .6;
}
.inp:not(:first-child) {
  border-left: 2px solid gray;
}
.inp:hover {
  background: #eeeeee;
}
.inp:last-child {
  border-right: 2px solid gray;
}
.buttons {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  border: gray solid 2px;
  border-radius: 50%;
  transition: .2s;
}
.btn:hover > svg > g {
  stroke: #e7e7e7;
}
.btn:hover > svg > path {
  stroke: #e7e7e7;
}
.trash-btn:hover {
  background-color: #ff2929;
  border: #8d0000 solid 2px;
}
.edit-btn:hover {
  background-color: #4353ff;
  border: #131c7c solid 2px;
}
.select-btn:hover > svg > g {
  stroke: white;
}
.select-btn:hover {
  background-color: rgba(1, 136, 0, 0.84);
  border: #2d7c13 solid 2px;
}
</style>