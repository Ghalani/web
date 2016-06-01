import Ember from 'ember';

export default Ember.Component.extend({
  age: 30,
  actions: {
      pressed: function() {
          this.$("#test").fadeIn("slow");
      }
  },
  didInsertElement: function() {
    console.log("sldksjdkjsdkjsdkds");
    alert("shdsjdhjhsd");
    this.$("#nav2").fadeOut("slow");
  }
});
