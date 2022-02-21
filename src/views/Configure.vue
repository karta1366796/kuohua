<template>
  <div class="configure">
    <div class="container border">
      <div class="row border py-3 border-bottom-0 bg-secondary">
        <div class="col text-end text-white">
          account1@com.tw<i class="bi bi-info-circle-fill ms-2"></i>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col pb-3">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active border rounded-0 text-danger"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                ERP對應管理
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link border rounded-0 text-dark"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                表頭字典維護
              </button>
            </li>
            <button
              type="button"
              class="btn btn-outline-secondary ms-auto h-50"
            >
              回列表
            </button>
          </ul>
          <div class="tab-content border border-top-0" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div class="container">
                <!-- 選擇檔案類型 -->
                <div class="row py-4">
                  <div class="col-3 pe-0">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>選擇檔案類型</option>
                      <option value="1" v-for="item in file[0]" :key="item">
                        {{ item }}
                      </option>
                    </select>
                  </div>
                  <div class="col-3 pe-0">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>選擇ERP對應管理</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-3">
                    <button class="btn btn btn-info">
                      <i class="fa-solid fa-plus fs-5 pe-1"></i>新增ERP對應管理
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: [],
    };
  },
  methods: {
    //   ajax取得資料
    getList() {
      this.axios
        .get("http://localhost:3000/upload_file_option")
        .then((response) => {
          console.log(response.data);
          this.file.push(response.data.data);
        });
    },
  },
  mounted() {
    //   ajax取得資料
    this.getList();
  },
};
</script>
