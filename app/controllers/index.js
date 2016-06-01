import Ember from 'ember';
import Validator from 'npm:validator';

export default Ember.Controller.extend({
  errors: DS.Errors.create(),
  userEmail: '',
  actions: {
    createSubscription() {
      if (this.validate()) {
        var email = this.get('userEmail');
        console.log("Creating subscription: "+ email);
        var subscription = this.store.createRecord('subscription', {
          email: email
        });
        //console.log("OUT: " + subscription.email);
        var self = this;
        subscription.save().then(function(){
          self.transitionTo('welcome');
          //self.render('subscription_success');
        }).catch((adapterError) => {
          console.log(adapterError); // instance of DS.AdapterError
        });
      }
    }
  },

  validate: function(){
    this.set('errors', DS.Errors.create());
    if (Validator.isNull(this.get('userEmail'))) {
      this.get('errors').add('title', "can't be empty");
    }

    if (!Validator.isEmail(this.get('userEmail'))) {
      this.get('errors').add('title', "not valid email");
    }

    return this.get('errors.isEmpty');
  },
  didInsertElement: function() {
    alert("shdsjdhjhsd");
    this.$("#nav2").fadeOut("slow");
  }
});
