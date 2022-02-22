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
                <div class="row pt-4 pb-3">
                  <div class="col-3 pe-0">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <!-- <div v-for="(value, name, index) in object">
                      利用v-for特性取出object的鍵與值 -->
                      <option selected>選擇檔案類型</option>
                      <option
                        value="1"
                        v-for="(value, name) in file.data"
                        :key="name"
                      >
                        {{ name }}
                      </option>
                    </select>
                  </div>
                  <div class="col-3 pe-0">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      v-model="ERProle"
                      @change="decide()"
                    >
                      <option selected value="">選擇ERP對應管理</option>
                      <option
                        :value="name"
                        v-for="(value, name) in selectERP"
                        :key="name"
                      >
                        {{ name }}
                      </option>
                    </select>
                  </div>
                  <div class="col-3">
                    <button class="btn btn btn-info">
                      <i class="fa-solid fa-plus fs-5 pe-1"></i>新增ERP對應管理
                    </button>
                  </div>
                </div>
                <!-- 選擇表格模型 -->
                <div class="row">
                  <div class="col-2 pe-0">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>選擇表格模型</option>
                      <option
                        value="1"
                        v-for="(value, index) in table"
                        :key="index"
                      >
                        {{ value.table_version }}
                      </option>
                    </select>
                  </div>
                  <div class="col-2 pe-0">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>選擇單元模型</option>
                      <option
                        value="1"
                        v-for="(value, index) in table"
                        :key="index"
                      >
                        {{ value.cell_type_version }}
                      </option>
                    </select>
                  </div>
                  <div class="col-2">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>選擇關聯模型</option>
                      <option
                        value="1"
                        v-for="(value, index) in table"
                        :key="index"
                      >
                        {{ value.relation_version }}
                      </option>
                    </select>
                  </div>
                  <div class="col-4 ps-0 pb-3">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="重新命名此版本模型名稱"
                      aria-label="default input example"

                    />
                  </div>
                </div>
                <!-- select2 -->
                <div class="row justify-content-start ms-auto mt-3 mb-4" v-for="item in table" :key="item" >
                  <span class="col-1 my-auto" style="width:5%"><input class="form-check-input pe-0" type="checkbox" name="" id=""></span>
                  <div class="col-10 border pb-2 pt-1">
                    <div class="col-3 me-5 fs-5  d-inline-block"><p class="mb-0 pt-1 pb-1">{{item.field}}</p></div>
                      <select
                        class="js-example-basic-multiple form-select  d-inline"
                        ref="jsexample"
                        multiple="multiple"
                        style="width:70%"
                      >
                        <option
                        value="1"
                        v-for="(value, index) in table"
                        :key="index"
                      >
                        {{ value.fieldvalue[0] }}
                      </option>
                        
                      </select>
                    
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
import $ from "jquery";
export default {
  data() {
    return {
      file: [],
      selectERP: {},
      ERProle: "",
      table: "",
      resetName:""
    };
  },
  methods: {
    //   ajax取得資料
    getList() {
      // upload_file_option(API)
      this.axios
        .get("http://localhost:3000/upload_file_option")
        .then((response) => {
          console.log(response.data);
          this.file = response.data;
        });
      // get_key_value_mapping
      this.axios
        .get("http://localhost:3000/get_key_value_mapping")
        .then((response) => {
          console.log(response.data);
          this.selectERP = response.data.data;
        });
    },
    // 判斷configuration_PRL or TOMMY
    decide() {
      // PRL
      if (this.ERProle == "") {
        this.table = "";
      } else if (this.ERProle == "configuration_PRL") {
        this.table = this.selectERP.configuration_PRL;
      } //TOMMY
      else {
        this.table = this.selectERP.confiuration_TOMMY;
      }
      $(document).ready(function () {
      $(".js-example-basic-multiple").select2({
        tags: true,
      });
    });
    },
  },
  mounted() {
    //   ajax取得資料
    this.getList();
    //select用法
    $(document).ready(function () {
      $(".js-example-basic-multiple").select2({
        tags: true,
      });
    });
  },
};
</script>
