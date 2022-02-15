<template>
  <div class="about">
    <div class="container border w-25">
      <div class="row mt-5">
        <div class="col d-flex justify-content-center">
          <div class="input-group mb-3 w-75">
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-person-lines-fill"></i
            ></span>
            <input
              type="text"
              class="form-control text-center ps-0"
              placeholder="(輸入帳號)"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="account"
              :class="{ 'is-invalid': accountStatus }"
            />
            <div class="invalid-feedback text-center">
              Please choose a account.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <div class="input-group mb-2 w-75">
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-pencil-fill"></i
            ></span>
            <input
              type="text"
              class="form-control text-center ps-0"
              placeholder="(輸入密碼)"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="password"
              :class="{ 'is-invalid': passwordStatus }"
            />
            <div class="invalid-feedback text-center">
              Please choose a password.
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center my-4">
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="login()"
          >
            登入
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
      accountStatus: false,
      passwordStatus: false,
    };
  },
  methods: {
    login() {
      if (!this.account) {
        this.accountStatus = true;
      }
      if (!this.password) {
        this.passwordStatus = true;
      }
      if (this.account && this.password) {
        this.account = "";
        this.password = "";
      }
    },
  },
  watch: {
    account() {
      this.accountStatus = false;
    },
    password() {
      this.passwordStatus = false;
    },
  },
};
</script>
