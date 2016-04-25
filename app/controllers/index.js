import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createSubscription() {
      var email = this.get('userEmail');
      console.log("Creating subscription: "+ email);

      var subscription = this.store.createRecord('subscription', {
        email: email
      });
      //console.log("OUT: " + subscription.email);
      var self = this;
      subscription.save().then(function(){
        //self.transitionTo('about')
        self.render('subscription_success');
      });

    }
  }
});
