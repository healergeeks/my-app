<template>
  <div class="hello">
    <!-- {{ biến }} biến cần phải Để trong {{ }} thì mới lấy được giá trị, còn nếu để trong{ } nó chỉ tương là text in luôn biến ra -->
    <h1>{{ msg }}</h1>
    <h2>{{ message }}</h2>
    <!--v-on dùng để lắng nghe các sự kiện tự người dùng 
    click để thực hiện hành động khi phần tử được nhấp vào.
    input để thực hiện hành động khi phần tử nhận được dữ liệu đầu vào, chẳng hạn như thao tác nhấn phím bên trong trường văn bản.
    mousemove để thực hiện hành động khi con trỏ chuột di chuyển qua một phần tử.-->
    <button v-on:click="demso()">click</button>
    <h2>đếm {{ counter }}</h2>
    <h1>{{ sayHello }}</h1>
    <!--Lệnh này v-html được sử dụng để chèn thẻ HTML và văn bản vào một phần tử.
    Nếu bạn cố gắng xuất các thẻ HTML bằng cách sử dụng phép nội suy văn bản (sử dụng dấu ngoặc nhọn {{ }}), 
    kết quả sẽ chỉ là một chuỗi văn bản. Xem ví dụ trên.-->
    <h1 v-html="sayHello"></h1>
  </div>
</template>

<script>
// quản lý trạng thái các sự kiện
export default {
  name: "HelloWorld",
  //props chúng ta có thể truyền dữ liệu đến các thành phần thông qua các thuộc tính tùy chỉnh cho thẻ thành phần.
  props: {
    msg: String,
  },
  // data toàn bộ dữ liệu của file được lưu ở này này
  data() {
    return {
      message: "hello",
      counter: 0,
      sayHello: '<p style="color: red">Hello Dũng đẹp trai</p>',
    };
  },
  // methods định các cái hàm của file được đinh nghĩa .
  methods: {
    demso() {
      this.counter = ++this.counter;
    },
  },
};
</script>
<!--
v-bind	Kết nối một thuộc tính trong thẻ HTML với một biến dữ liệu bên trong phiên bản Vue.
v-if	Tạo các thẻ HTML tùy thuộc vào một điều kiện. Chỉ thị v-else-ifvà v-elseđược sử dụng cùng với v-ifchỉ thị.
v-show	Chỉ định xem một phần tử HTML có hiển thị hay không tùy thuộc vào một điều kiện.
v-for	Tạo danh sách các thẻ dựa trên một mảng trong phiên bản Vue bằng vòng lặp for.
v-on	Kết nối một sự kiện trên thẻ HTML với biểu thức JavaScript hoặc phương thức phiên bản Vue. Chúng tôi cũng có thể xác định cụ thể hơn cách trang của chúng tôi sẽ phản ứng với một sự kiện nhất định bằng cách sử dụng công cụ sửa đổi sự kiện .
v-model	Được sử dụng trong các biểu mẫu HTML với các thẻ như <form>và <input>. <button>Tạo liên kết hai chiều giữa phần tử đầu vào và thuộc tính dữ liệu phiên bản Vue
-->
