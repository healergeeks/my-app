<template>
  <div class="computedViewS">
    <!--Trong Vue.js, mọi giá trị dữ liệu đều có thể được xuất ra bằng dấu ngoặc đơn.
    Tuy nhiên, điều này có thể lưu trữ các phép tính nhỏ vì nó bị giới hạn ở một biểu thức JavaScript duy nhất
    và các mẫu đó cũng chỉ quan tâm đến việc hiển thị dữ liệu cho người dùng và
    không thực hiện bất kỳ phép tính logic nào. Để tránh giới hạn này của một biểu thức đơn lẻ và
    có nhiều mẫu khai báo hơn, chúng tôi sử dụng Computed Properties của Vue.js.
    Giá trị được tính toán tuân theo cùng một phép nội suy cũ, nhưng logic tính toán
    được xác định bằng JavaScript.
  -->
    <h1>Methods</h1>
    <!-- khi nhấn thì a tăng thêm 1-->
    <button v-on:click="a++">Add to A method</button> <br />
    <button v-on:click="b++">Add to B method</button>
    <!-- và A được chuyền vào hàm addToAmethod và hiển thị-->
    <p>Age + A = {{ addToAmethod() }}</p>
    <p>Age + B = {{ addToBmethod() }}</p>
    <h1>Computed Properties</h1>
    <button v-on:click="c++">Add to A computed</button> <br />
    <button v-on:click="d++">Add to B computed</button>
    <p>Age + C = {{ addToAcomputed }}</p>
    <p>Age + D = {{ addToBcomputed }}</p>
    <!-- khi gọi đến computed không gọi được giống như gọi hàm addToBcomputed() vì nó là thuộc tính tính toán-->
  </div>
</template>
<!--khi nhấn vào nút Add to A method thì tất cả các phương thức đều được gọi nó gọi cả 
  phương thức addToBmethod tương tự ngược lại khi nhấn vào Add to B method-->
<!--khi nhấn Add to A computed chỉ thuộc tính được tính toán addToAcompute dđược gọi 
  bởi vìcác thuộc tính được tính toán chỉ được thực thi khi một phần phụ thuộc đã thay đổi. 
  Và vì tôi không nhấn nút "Thêm vào B" và giá trị thuộc tính tuổi của B không thay đổi nên 
  không có lý do gì để gọi và thực thi thuộc tính được tính toán addToBcomputed. -->
<!-- đó là sự khác nhau giữa method & computed
do đó dùng computed để tích kiệm thời gian chạy -->
<script>
export default {
  data() {
    return {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      age: 20,
    };
  },
  methods: {
    addToAmethod: function () {
      //console.log hiển thị trên cái táp console
      console.log("addToAmethod");
      return this.a + this.age;
    },
    addToBmethod: function () {
      console.log("addToBmethod");
      return this.b + this.age;
    },
  },
  computed: {
    addToAcomputed: function () {
      console.log("addToAcomputed");
      return this.c + this.age;
    },
    addToBcomputed: function () {
      console.log("addToBcomputed");
      return this.d + this.age;
    },
  },
};
</script>
