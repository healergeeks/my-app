<template>
  <!--Lệnh v-on cho phép chúng ta thực hiện các hành động dựa trên các sự kiện được chỉ định.
  các sự kiện được chỉ định là các sự kiện nằm trong các thẻ-->
  <div class="v-on">
    <!--Sử dụng v-on:clickđể thực hiện hành động khi phần tử được nhấp vào.-->
    <button v-on:click="showAlert()">click My</button><br /><br />
    <!--Ở đây chúng ta chỉ viết ' @' thay vì ' v-on':-->
    <p>{{ "Input events occured: " + inpCount }}</p>
    <!--Sử dụng v-on:mousemoveđể thực hiện hành động khi con trỏ chuột di chuyển qua một phần tử.-->
    <div
      class="container"
      @mousemove="handleMouseMove"
      @mouseleave="hover = false"
    >
      <p>Hover here</p>
    </div>
    <div v-if="hover">
      <h1>
        Mouse position is at {{ mousePosition.x }}|
        {{ mousePosition.y }}
      </h1>
    </div>
    <!--chỉ chạy phương thức trong lần đầu tiên xảy ra sự kiện 'nhấp chuột'.-->
    <button v-on:click.once="createAlert">Create Alert</button><br />
    <input
      v-on:keyup.enter="key1"
      v-on:keyup.esc="key2"
      v-on:keyup.space="key3"
      v-on:keyup.delete="key4"
    />
    <br />
    <input
      v-on:keyup.alt.enter="key5"
      v-on:keyup.shift.up="key6"
      v-on:keyup.ctrl.a="key7"
    />
    <h3>
      {{ sampleText }}
    </h3>
  </div>
</template>

<script>
/**import { reactive } from "vue"; là một dòng mã sử dụng trong framework Vue.js để nhập hàm reactive từ thư viện Vue.
 * reactive là một hàm giúp tạo ra một đối tượng có khả năng theo dõi các thay đổi
 * của các thuộc tính bên trong nó. Khi bất kỳ thuộc tính nào của đối tượng này thay đổi,
 * Vue.js sẽ tự động cập nhật giao diện người dùng để phản ánh sự thay đổi đó mà không cần phải làm thủ công.
 */
import { reactive } from "vue";
export default {
  data() {
    return {
      mousePosition: reactive({
        x: 0,
        y: 0,
      }),
      hover: false,
      sampleText: "",
    };
  },
  methods: {
    showAlert() {
      alert("chào bạn đến với 10");
    },
    handleMouseMove(event) {
      this.hover = true;
      this.mousePosition.x = event.clientX;
      this.mousePosition.y = event.clientY;
    },
    createAlert() {
      alert("Alert created from button click");
    },
    key1: function () {
      this.sampleText = "Bây giờ bạn đã nhấn phím Enter";
    },
    key2: function () {
      this.sampleText = "Bây giờ bạn đã nhấn phím Escape";
    },
    key3: function () {
      this.sampleText = "Bây giờ bạn đã nhấn phím Space";
    },
    key4: function () {
      this.sampleText = "Bây giờ bạn đã nhấn phím Xóa hoặc Xóa lùi";
    },
    key5: function () {
      this.sampleText = "Bây giờ bạn đã nhấn phím Alt + Enter";
    },
    key6: function () {
      this.sampleText = "Bây giờ bạn nhấn phím Shift + Up";
    },
    key7: function () {
      this.sampleText = "Bây giờ bạn nhấn phím Ctrl + A";
    },
  },
};
</script>

<style>
#app span {
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
}
.container {
  background-color: #083b88;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100vh;
}
</style>
<!--Công cụ sửa đổi sự kiện Vue.js: dùng cho v-on 
.stop : Việc lan truyền sự kiện click sẽ dừng lại.
.prevent : Điều này được sử dụng để ngăn chặn việc tải lại trang web.
.self : Điều này được sử dụng để yêu cầu phần tử kích hoạt sự kiện nếu phần tử đích là chính nó.
.capture : Cái này được sử dụng để xử lý sự kiện của phần tử bên trong trước khi phần tử bên trong xử lý nó.
.once : Điều này được sử dụng để kích hoạt sự kiện một lần.
.passive : Điều này được sử dụng cho các sự kiện chạm để cải thiện hiệu suất.

Các công cụ sửa đổi khóa sau có sẵn trong Vue.js: lắng nghe sự kiện từ bàn phím
.enter: Nó chụp phím enter
.tab: Nó chụp phím tab
.delete: Nó ghi lại cả hai phím “Xóa” và “Xóa lùi”
.esc: Nó bắt phím thoát
.space: Nó chụp phím thanh dấu cách
.up: Nó chụp phím mũi tên lên
.down: Nó chụp phím mũi tên xuống
.left: Nó chụp phím mũi tên trái
.right: Nó chụp phím mũi tên phải
-->
