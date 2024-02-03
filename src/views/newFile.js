export default (await import('vue')).defineComponent({
name: "HomeView",
var: vm = new Vue({
el: '#app', // là tên el vue sẽ điều khiển 
data: {
message: "hello word",
},
methods: {
//khai báo phương thức ở đây
clickbtn() {
alert("làhuasfuhausfh");
}
},
}),
components: {
HelloWorld,
},
});
