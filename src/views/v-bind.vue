<template>
  <div class="v-bind">
    <!--Lệnh này v-bind cho phép chúng ta liên kết một thuộc tính HTML với dữ liệu trong phiên bản Vue. 
        Điều này giúp dễ dàng thay đổi giá trị thuộc tính một cách linh hoạt.
    <div v-bind:[attribute]="[Vue data]"></div>
    attribute: thuộc tính 
    Vue data: giá trị
    -->
    <!--Giá src trị thuộc tính của <img>thẻ được lấy từ thuộc tính dữ liệu phiên bản Vue 'url':-->
    <!--Liên kết CSS-->
    <img v-bind:src="url" />
    <!--Liên kết CSS-->
    <!--Kích thước phông chữ phụ thuộc vào 'size' thuộc tính dữ liệu Vue.-->
    <div v-bind:style="{ fontSize: size1 }">Text example</div>
    <!--Giá trị số kích thước phông chữ được lưu trữ 'size' thuộc tính dữ liệu Vue.-->
    <div v-bind:style="{ fontSize: size2 + 'px' }">Text example</div>
    <!--Thuộc tính CSS fontSize được gọi là 'font-size'.-->
    <div v-bind:style="{ 'font-size': size3 + 'px' }">Text example</div>
    <!--Màu nền phụ thuộc vào giá trị thuộc tính dữ liệu 'bgVal' bên trong phiên bản Vue.-->
    <div v-bind:style="{ backgroundColor: 'hsl(' + bgVal + ',80%,80%)' }">
      Lưu ý màu nền trên thẻ div này.
    </div>
    <div
      v-bind:style="{
        backgroundColor: isImportant ? 'lightcoral' : 'lightgray',
      }"
    >
      Tầm quan trọng dựa trên màu nền
    </div>
    <!--Bind class-->
    <!--Tên classđược lấy từ thuộc tính dữ liệu Vue 'className':-->
    <div v-bind:class="className">liên kết thuộc tính bằng class</div>
    <!--Giá trị của v-bind:classcũng có thể là một đối tượng, trong đó tên lớp sẽ chỉ có hiệu lực nếu nó được đặt thành 'true':-->
    <div v-bind:class="{ myClass1: true }">
      Tầm quan trọng được hình dung bằng màu nền
    </div>
    <div v-bind:class="{ myClass2: isImportant }">
      Importance visualized by background color
    </div>
    <!-- Bind ID-->
    <p v-bind:id="idtheP">v-bind ID</p>
    <!--Viết tắt của ' v-bind:' chỉ đơn giản là ' :'.-->
    <div :class="{ myClass: isImportant }">viết tắt của v-bind</div>
    <button v-on:click="showAlert()">click MY</button>
  </div>
</template>

<script>
// quản lý trạng thái các sự kiện
export default {
  data() {
    return {
      //Liên kết CSS
      url: "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-dep-85.jpg",
      size1: "28px",
      size2: 30,
      size3: 32,
      bgVal: 180,
      isImportant: true,
      //Bind class
      className: "impClass",
      //Bind ID
      idtheP: "paragraph1",
      //Viết tắt của ' v-bind:' chỉ đơn giản là ' :'.
    };
  },
  methods: {
    showAlert() {
      alert("hello Nguyễn Mạnh Dũng");
    },
  },
};
</script>
<style>
/**Bind class */
.impClass {
  background-color: black;
}
.myClass {
  background-color: lightcoral;
}
/**Bind ID */
#paragraph1 {
  color: green;
}
</style>
