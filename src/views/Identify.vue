<template>
  <div class="container-fluid main">
    <div class="row mt-3 justify-content-center gy-3">
      <div class="col-12 col-md">
        <button type="button" class="btn btn-secondary btn-lg">回列表</button>
      </div>
      <div class="col-12 col-md-auto">
        <div class="d-flex justify-content-center align-items-center">
          <span class="px-2">選擇比對版本</span>
          <select
            class="form-select ms-2"
            aria-label="Default select example"
            style="width: 120px"
          >
            <option selected>Version1</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-secondary btn-lg">
          匯出成檔案
        </button>
      </div>
    </div>
    <div class="row mt-3 justify-content-center gy-3">
      <div class="col-12 col-md">
        <h4>Current Version</h4>
        <div class="col-12 border rounded">
          <div class="m-4">
            <img
              class="img-fluid img-thumbnail w-100"
              src="https://picsum.photos/430/280"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-md">
        <h4>Compare Version</h4>
        <div class="col-12 border rounded">
          <div class="m-4">
            <img
              class="img-fluid img-thumbnail w-100"
              src="https://picsum.photos/430/280"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3 mb-5">
      <div class="col">
        <div class="col border rounded pb-2">
          <h4 class="pt-2 px-2">header辨識結果</h4>
          <div class="col border rounded m-2">
            <div class="row my-md-5">
              <div
                class="col-12 col-md-6 d-flex justify-content-center align-items-center keyvalue"
              >
                <span>key value1</span>
                <input
                  class="form-control w-25 d-inline-block mx-2"
                  type="text"
                  placeholder="key1"
                  aria-label="default input example"
                />
                <input
                  class="form-control w-25 d-inline-block"
                  type="text"
                  placeholder="value1"
                  aria-label="default input example"
                />
              </div>
              <div
                class="col-12 col-md-6 d-flex justify-content-center align-items-center keyvalue"
              >
                <span>key value2</span
                ><input
                  class="form-control w-25 d-inline-block mx-2"
                  type="text"
                  placeholder="key2"
                  aria-label="default input example"
                />
                <input
                  class="form-control w-25 d-inline-block"
                  type="text"
                  placeholder="value2"
                  aria-label="default input example"
                />
              </div>
            </div>
            <div class="row my-md-5">
              <div
                class="col-12 col-md-6 d-flex justify-content-center align-items-center keyvalue"
              >
                <span>key value3</span>
                <input
                  class="form-control w-25 d-inline-block mx-2"
                  type="text"
                  placeholder="key3"
                  aria-label="default input example"
                />
                <input
                  class="form-control w-25 d-inline-block"
                  type="text"
                  placeholder="value3"
                  aria-label="default input example"
                />
              </div>
              <div
                class="col-12 col-md-6 d-flex justify-content-center align-items-center keyvalue"
              >
                <span>key value4</span
                ><input
                  class="form-control w-25 d-inline-block mx-2"
                  type="text"
                  placeholder="key4"
                  aria-label="default input example"
                />
                <input
                  class="form-control w-25 d-inline-block"
                  type="text"
                  placeholder="value4"
                  aria-label="default input example"
                />
              </div>
            </div>
          </div>
          <div class="col border rounded m-2 mt-4">
            <ul class="nav nav-tabs m-3" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  物料
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  POM
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  POM驗收
                </button>
              </li>
              <li class="nav-item ms-auto" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-plus text-success"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </button>
              </li>
            </ul>
            <div class="tab-content m-3 border rounded" id="myTabContent">
              <div
                class="tab-pane fade show active overflow-auto px-3"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="table-responsive">
                  <table
                    class="table table-hover table-borderless text-center align-middle mb-0"
                  >
                    <thead class="border-bottom">
                      <tr>
                        <th class="pt-3" scope="col">
                          是否<br />
                          移除
                        </th>
                        <th scope="col">
                          類別<svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2em"
                            height="2em"
                            fill="currentColor"
                            class="bi bi-x text-danger"
                            viewBox="0 1 16 16"
                          >
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </th>
                        <th scope="col">
                          IC#<svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2em"
                            height="2em"
                            fill="currentColor"
                            class="bi bi-x text-danger"
                            viewBox="0 1 16 16"
                          >
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </th>
                        <th scope="col">
                          BOM物料說明<svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2em"
                            height="2em"
                            fill="currentColor"
                            class="bi bi-x text-danger"
                            viewBox="0 1 16 16"
                          >
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </th>
                        <th scope="col">
                          物料<svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2em"
                            height="2em"
                            fill="currentColor"
                            class="bi bi-x text-danger"
                            viewBox="0 1 16 16"
                          >
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="white-space: nowrap" class="border-bottom">
                        <th scope="row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2em"
                            height="2em"
                            fill="currentColor"
                            class="bi bi-x text-danger"
                            viewBox="0 1 16 16"
                          >
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </th>
                        <td>ADDITIONAL FABRIC</td>
                        <td>100025561</td>
                        <td>
                          20/1X2 1X1 CIRCULAR RIB 100% COTTON-YARN DYED ART#
                          FXVF0680-S5T1 <br />
                          WEIGHTT
                        </td>
                        <td>999000139561</td>
                      </tr>
                      <tr class="border-bottom">
                        <th scope="row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2em"
                            height="2em"
                            fill="currentColor"
                            class="bi bi-x text-danger"
                            viewBox="0 1 16 16"
                          >
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </th>
                        <td></td>
                        <td>100025562</td>
                        <td>
                          20/1X2 1X1 CIRCULAR RIB 100% COTTON-YARN DYED ART#
                          FXVF0680-S5T1 <br />
                          WEIGHTT
                        </td>
                        <td>999000139561</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2em"
                            height="2em"
                            fill="currentColor"
                            class="bi bi-x text-danger"
                            viewBox="0 1 16 16"
                          >
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </th>
                        <td>ADDITIONAL FABRIC</td>
                        <td>100025561</td>
                        <td>
                          20/1X2 1X1 CIRCULAR RIB 100% COTTON-YARN DYED ART#
                          FXVF0680-S5T1 <br />
                          WEIGHTT
                        </td>
                        <td>999000139561</td>
                      </tr>
                    </tbody>
                  </table>
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
          <div class="col m-2 mt-5">
            <h4>建議可新增項目</h4>
          </div>
          <div class="col border rounded m-2">
            <div class="tab-content m-3 border rounded" id="myTabContent">
              <div
                class="tab-pane fade show active overflow-auto"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="table-responsive px-3">
                  <table
                    class="table table-hover table-borderless text-center align-middle mb-0"
                  >
                    <thead class="border-bottom">
                      <tr>
                        <th class="pt-3" scope="col">
                          是否<br />
                          移除
                        </th>
                        <th scope="col">類別</th>
                        <th scope="col">IC#</th>
                        <th scope="col">BOM物料說明</th>
                        <th scope="col">物料</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="white-space: nowrap">
                        <th scope="row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            fill="currentColor"
                            class="bi bi-check text-success"
                            viewBox="0 1 16 16"
                          >
                            <path
                              d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
                            />
                          </svg>
                        </th>
                        <td>LEBALS AND HANGTAGS</td>
                        <td>100000442</td>
                        <td>
                          FOE EAN 13-DIGITS UPC TICKET ART#:PFS1042314/EAN
                        </td>
                        <td>999000153617</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 768px) {
  .file {
    justify-content: center;
  }

  button {
    width: 100%;
  }

  .img-fluid {
    width: 100%;
  }
  .keyvalue {
    padding: 16px;
  }
}

@media (min-width: 768px) {
  .main {
    padding-left: 8%;
    padding-right: 8%;
  }
}
</style>
