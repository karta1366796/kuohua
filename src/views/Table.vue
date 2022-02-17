<template>
  <div class="table">
    <div class="container border">
      <div class="row border-bottom p-1">
        <div class="col text-end text-secondary">
          account1@com.tw<i class="bi bi-info-circle-fill ms-2"></i>
        </div>
      </div>
      <div
        class="row justify-content-between align-items-center pt-5 px-3 pb-1"
      >
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            新增人員
          </button>
        </div>
        <div class="col text-end">選擇角色</div>
        <div class="col-auto">
          <select
            class="form-select d-inline"
            aria-label="Default select example"
            v-model="role"
          >
            <option selected value="">Select User</option>
            <option value="Admin">Admin</option>
            <option value="Super User">Super User</option>
            <option value="General User">General User</option>
          </select>
        </div>
      </div>
      <div class="row p-4">
        <div class="col border border-bottom-0 p-0">
          <table class="table table-striped table-hover align-middle mb-0">
            <thead>
              <tr>
                <th scope="col" class="ps-4" v-for="item in thead" :key="item">
                  {{ item }}
                </th>
              </tr>
            </thead>
            <tbody v-if="status">
              <tr v-for="item in mainArray" :key="item">
                <td class="ps-4">{{ item.account }}</td>
                <td class="ps-4">
                  <div v-for="role in item.role" :key="role">{{ role }}</div>
                  <!-- 抓到role(物件裡的陣列)需要在td裡包div -->
                </td>
                <td class="ps-4">{{ item.time }}</td>
                <td class="text-end">
                  <i
                    class="bi bi-pencil-square"
                    data-bs-toggle="modal"
                    data-bs-target="#edit"
                    role="button"
                    @click="Index(item)"
                  ></i>
                </td>
                <td>
                  <i
                    class="bi bi-trash-fill"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#remove"
                    @click="Index(item)"
                  ></i>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr v-for="item in filterArray" :key="item">
                <td class="ps-4">{{ item.account }}</td>
                <td class="ps-4">
                  <div v-for="role in item.role" :key="role">{{ role }}</div>
                  <!-- 抓到role(物件裡的陣列)需要在td裡包div -->
                </td>
                <td class="ps-4">{{ item.time }}</td>
                <td class="text-end">
                  <i
                    class="bi bi-pencil-square"
                    data-bs-toggle="modal"
                    data-bs-target="#edit"
                    role="button"
                    @click="Index(item)"
                  ></i>
                </td>
                <td>
                  <i
                    class="bi bi-trash-fill"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#remove"
                    @click="Index(item)"
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- 新增人員Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增人員</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-6">
              <p class="mb-1">角色</p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Admin"
                  id="flexCheckDefault"
                  v-model="cheakGroup"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Admin
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Super User"
                  id="flexCheckChecked"
                  v-model="cheakGroup"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Super User
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="General User"
                  id="flexCheckChecked"
                  v-model="cheakGroup"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  General User
                </label>
              </div>
            </div>
            <div class="col-6">
              <p class="mb-2">帳號</p>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="addAccount"
                  :class="{ 'is-invalid': disable || repeatName }"
                />
                <div class="invalid-feedback" v-if="disable">
                  帳號不能為空白.
                </div>
                <div class="invalid-feedback" v-else>帳號不能重複.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="clear()"
          >
            關閉
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="addList()"
            :disabled="disable || repeatName"
          >
            新增
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 編輯人員Modal -->
  <div
    class="modal fade"
    id="edit"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">編輯人員</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-6">
              <p class="mb-1">角色</p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Admin"
                  id="flexCheckDefault"
                  v-model="cheakGroup"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Admin
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Super User"
                  id="flexCheckChecked"
                  v-model="cheakGroup"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Super User
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="General User"
                  id="flexCheckChecked"
                  v-model="cheakGroup"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  General User
                </label>
              </div>
            </div>
            <div class="col-6">
              <p class="mb-2">帳號</p>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="editAccount"
                  :class="{ 'is-invalid': disable || repeateditName }"
                />
                <div class="invalid-feedback" v-if="disable">
                  帳號不能為空白.
                </div>
                <div class="invalid-feedback" v-else>帳號不能重複.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="clear()"
          >
            關閉
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="edit()"
          >
            新增
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 刪除人員modal -->
  <div
    class="modal fade"
    id="remove"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-body pb-2">
          <div class="container">
            <div class="row justify-content-center align-items-start">
              <div class="col-auto mt-1 mb-3">確定刪除嗎?</div>
              <div class="col-12 d-md-flex justify-content-md-end p-0">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm me-2"
                  @click="remove()"
                  data-bs-dismiss="modal"
                >
                  確定
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm"
                  data-bs-dismiss="modal"
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Table",
  components: {},
  data() {
    return {
      thead: ["帳號", "角色", "上次登入時間"],
      mainArray: [],
      addAccount: "",
      cheakGroup: [],
      index: "",
      editAccount: "",
      role: "",
      filterArray: [],
      status: true,
      disable: "true",
      data: "",
    };
  },
  computed: {
    //檢查新增人員有無重複帳號名稱
    repeatName() {
      {
        return this.mainArray
          .map(function (item) {
            return item.account;
          })
          .includes(this.addAccount);
      }
    },
    //檢查編輯人員有無重複帳號名稱
    repeateditName() {
      {
        return this.mainArray
          .map(function (item) {
            return item.account;
          })
          .includes(this.editAccount);
      }
    },
  },
  methods: {
    //axios取得資料
    getList() {
      this.axios.get("http://localhost:3000/data").then((response) => {
        console.log(response.data);
        this.mainArray = response.data;
      });
    },
    //新增人員
    addList() {
      var Today = new Date();
      const obj = {
        account: this.addAccount,
        //利用陣列方法sort對this.cheakGroup排序
        role: this.cheakGroup.sort(function (a, b) {
          return a.length - b.length;
        }),
        time: (this.data =
          Today.getFullYear() +
          " 年 " +
          Today.getMonth() +
          1 +
          " 月 " +
          Today.getDate() +
          " 日 " +
          Today.getHours() +
          " 時 " +
          Today.getMinutes() +
          " 分 "),
      };
      this.mainArray.push(obj);
      // 新增完清空
      this.clear();
      //初始化
      this.role = "";
    },
    //刪除編輯人員(取Index)
    Index(item) {
      //回傳的(item)是指點到的那筆物件{account: 'account2', role: Array(2), time: 'long time'}
      const mapAccount = this.mainArray.map(function (items) {
        //mapAccount是account所組成的陣列['account1', 'account2', 'account3', 'account4']
        return items.account;
      });
      this.index = mapAccount.indexOf(item.account);
    },
    //刪除人員(按下確定)
    remove() {
      this.mainArray.splice(this.index, 1);
      //初始化
      this.role = "";
    },
    //編輯人員
    edit() {
      const obj = {
        account: this.editAccount,
        //利用陣列方法sort對this.cheakGroup排序
        role: this.cheakGroup.sort(function (a, b) {
          return a.length - b.length;
        }),
        time: this.mainArray[this.index].time,
      };
      this.mainArray.splice(this.index, 1, obj);
      //編輯完清空
      this.clear();
    },
    //清空
    clear() {
      this.addAccount = "";
      this.editAccount = "";
      this.cheakGroup = [];
    },
  },
  mounted() {
    this.getList();
  },
  //監聽select改變的值
  watch: {
    //監聽role這個變數
    role(newValue) {
      console.log(newValue);
      if (newValue != "") {
        this.filterArray = this.mainArray.filter(function (item) {
          return item.role.includes(newValue);
        });
        this.status = false;
      } else {
        this.status = true;
      }

      console.log(this.filterArray);
    },
    //監聽addAccount,有變化解除is-invalid
    addAccount() {
      if (this.addAccount != "") this.disable = false;
      else {
        this.disable = true;
      }
    },
    editAccount() {
      if (this.editAccount != "") this.disable = false;
      else {
        this.disable = true;
      }
    },
  },
};
</script>
