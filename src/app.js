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
      newName: "",
      newPriority: ""
    },
    methods:{
      addToList: function(){
        this.listItems.push({name: this.newName, priority: this.newPriority})
        this.newName = ""
        this.newPriority = ""
      }
    },
  });
});
