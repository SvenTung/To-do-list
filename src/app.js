import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      listItems:[
        {name: "Laundry", priority: "Low"},
        {name: "Homework", priority: "Low"},
        {name: "Gaming", priority: "High"}
      ],
      newItem:{
        name: "",
        priority: null
      }
    },
    methods:{
      addToList: function(){
        this.listItems.push(this.newItem)
        this.newItem = {
          name: "",
          priority: null
        }
      }
    },
  });
});
