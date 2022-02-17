<template>
  <div class="Position">
    <div class="container border">
      <div class="row">
        <div class="col">
          <nav class="mt-4">
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active border-bottom"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                表格偵測校正
              </button>
              <button
                class="nav-link border-bottom"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                單元格偵測校正
              </button>
              <button
                class="nav-link border-bottom"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                configure
              </button>
              <div class="d-flex align-items-center ms-auto">
                account1@com.tw<i class="bi bi-info-circle-fill ms-2"></i>
              </div>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div
                class="container border border-top-0 mb-3"
                style="height: 500px"
              >
                <div class="row justify-content-center">
                  <div class="col mx-2 mt-3 border px-0" style="height: 470px">
                    <img
                      src="https://picsum.photos/200/220?grayscale"
                      class="w-100"
                      alt=""
                      ref="img"
                    />
                  </div>
                  <div
                    class="col mx-2 mt-3 border"
                    style="height: 470px; overflow-y: scroll"
                  >
                    <!-- 框選衣服正反面(若無則打叉) -->
                    <div class="row">
                      <div class="col mt-2 ms-1">
                        框選衣服正反面(若無則打叉)
                      </div>
                      <div class="row mt-2 align-items-end">
                        <div
                          class="col-4 border ms-3 d-flex align-items-center justify-content-center position-relative"
                          style="height: 180px"
                        >
                          <div
                            class="position-absolute top-0 end-0 btn"
                            @click="remove1"
                          >
                            X
                          </div>
                          <p class="my-auto" v-if="status1">正面</p>
                          <img class="w-100" v-else :src="imgsrc1" alt="" />
                        </div>
                        <div
                          class="col-4 border mx-2 d-flex align-items-center justify-content-center position-relative"
                          style="height: 180px"
                        >
                          <div
                            class="position-absolute top-0 end-0 btn"
                            @click="remove2()"
                          >
                            X
                          </div>
                          <p class="my-auto" v-if="status2">反面</p>
                          <img class="w-100" v-else :src="imgsrc2" alt="" />
                        </div>
                        <div class="col-3">
                          <button
                            type="button"
                            class="btn btn-outline-secondary btn-sm"
                            @click="saveImg()"
                          >
                            儲存
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- 選擇已被辨識出的表格 -->
                    <div class="row mt-2 align-items-end">
                      <div class="col-10 ms-1 mt-2">選擇已被辨識出的表格</div>
                      <div class="col-1 text-end">
                        <i class="fa-solid fa-plus fs-5 fw-bolder"></i>
                      </div>
                      <div class="col mt-1">
                        <select
                          class="form-select ms-1"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <!-- 表格的座標位置(編輯左邊紅色框線 -->
                    <div class="row">
                      <div class="col-12 mt-3 ms-1">
                        表格的座標位置(編輯左邊紅色框線)
                      </div>
                      <div class="col-11 border ms-3 p-3 mt-1">
                        <p>左上pixel值座標:(,)</p>
                        <p>右上pixel值座標:(,)</p>
                        <p>左下pixel值座標:(,)</p>
                        <p class="mb-0">右下pixel值座標:(,)</p>
                      </div>
                    </div>
                    <!-- 選擇表格中的單元格 -->
                    <div class="row mt-2 align-items-end">
                      <div class="col-10 ms-1 mt-2">選擇表格中的單元格</div>
                      <div class="col-1 text-end">
                        <i class="fa-solid fa-plus fs-5 fw-bolder"></i>
                      </div>
                      <div class="col mt-1">
                        <select
                          class="form-select ms-1"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <!-- 顯示內容 -->
                    <div class="row mt-2 mb-3">
                      <div class="col-12 ms-1">顯示內容</div>
                      <div class="col-11 border ms-3" style="height: 250px">
                        1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
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
import Cropper from "cropperjs";
export default {
  data() {
    return {
      cropperImg: "",
      cropper: "",
      imgName: "",
      imgsrc1: "",
      imgsrc2: "",
      status1: true,
      status2: true,
    };
  },
  mounted() {
    this.initCropper();
  },
  methods: {
    initCropper() {
      let cropper = new Cropper(this.$refs.img, {
        viewMode: 1,
        aspectRatio: 16 / 16,
      });
      this.cropper = cropper;
    },
    saveImg() {
      this.cropper.getCroppedCanvas();
      this.cropper.getCroppedCanvas({
        width: 160,
        height: 90,
        minWidth: 256,
        minHeight: 256,
        maxWidth: 4096,
        maxHeight: 4096,
        fillColor: "#fff",
        imageSmoothingEnabled: false,
        imageSmoothingQuality: "high",
      });

      if (this.status1) {
        this.imgsrc1 = this.cropper.getCroppedCanvas().toDataURL();
        this.status1 = false;
      } else {
        this.imgsrc2 = this.cropper.getCroppedCanvas().toDataURL();
        this.status2 = false;
      }
    },
    remove1() {
      this.imgsrc1 = "";
      this.status1 = true;
    },
    remove2() {
      this.imgsrc2 = "";
      this.status2 = true;
    },
  },
};
</script>

<style scoped>
select {
  width: 94%;
}
</style>
