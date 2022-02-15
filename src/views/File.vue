<template>
  <div class="File">
    <div class="container border">
      <div class="row py-3 border-bottom">
        <div class="col text-end text-secondary">
          account1@com.tw<i class="bi bi-info-circle-fill ms-2"></i>
        </div>
      </div>
      <div class="row justify-content-around mt-4">
        <div class="col-3 px-0">
          <p class="fs-4 mb-2">選擇廠商</p>
          <select
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Selet Manufacturer</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-3 px-0">
          <p class="fs-4 mb-1 text-end">選擇檔案類型</p>
          <select
            class="form-select form-select-lg mb-3 ms-auto"
            aria-label=".form-select-lg example"
          >
            <option selected>Select File type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center mb-4" ref="select_frame">
        <div class="col-9 border" style="height: 300px">
          <div class="d-flex justify-content-center align-items-center h-100">
            <label for="file" class="btn btn-outline-secondary" v-if="status">
              <input
                ref="fileUp"
                type="file"
                id="file"
                class="d-none"
                @change="clickUp()"
              />檔案上傳
            </label>

            <div v-else v-for="item in file" :key="item">{{ item }}</div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-11 d-md-flex justify-content-md-end">
          <button
            type="button"
            class="btn btn-outline-secondary btn-sm"
            style="font-size: 4px"
          >
            <p class="my-0" style="font-size: 4px">(Super user)</p>
            下一步
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg ms-2">
            下一步
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
      file: [],
      status: true,
    };
  },
  watch: {
    file: {
      handler: function () {
        this.status = false;
      },
      deep: true,
    },
  },
  methods: {
    //按下檔案上傳
    clickUp() {
      console.log(this.$refs.fileUp.files);
      this.file.splice(0, 1, this.$refs.fileUp.files[0].name);
      this.status = false;
    },
  },
  mounted() {
    this.$refs.select_frame.ondragleave = (e) => {
      e.preventDefault(); //阻止離開時的瀏覽器預設行為
    };
    this.$refs.select_frame.ondrop = (e) => {
      e.preventDefault(); //阻止拖放後的瀏覽器預設行為
      const data = e.dataTransfer.files; // 獲取檔案物件
      if (data.length < 1) {
        alert("請拖入檔案");
      }
      console.log(data);
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        console.log(e.dataTransfer.files[i]);
        this.file.splice(0, 1, data[i].name);
      }
    };
    this.$refs.select_frame.ondragenter = (e) => {
      e.preventDefault(); //阻止拖入時的瀏覽器預設行為
      this.$refs.select_frame.border = "2px dashed red";
    };
    this.$refs.select_frame.ondragover = (e) => {
      e.preventDefault(); //阻止拖來拖去的瀏覽器預設行為
    };
  },
};
</script>

<style scoped>
select {
  width: 75%;
}
</style>
