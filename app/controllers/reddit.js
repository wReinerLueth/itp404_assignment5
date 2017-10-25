import Ember from 'ember';

export default Ember.Controller.extend({
    reddit: Ember.inject.service(),
    actions: {
        reddit(subreddit, jQueryEvent){
            this.get('reddit').findAllForSubreddit(subreddit);
        }
    }
});
