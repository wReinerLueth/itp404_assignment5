import Ember from 'ember';

export default Ember.Component.extend({
    {{#each model.data.children as |val|}}
    <div class="sub">
        {{#if val.data.thumbnail}}
            <img src={{val.data.thumbnail}}/>
        {{else}}
            <img src="https://www.freeclipartnow.com/d/10429-1/hammer-wood-handle.jpg" height="96" width="96"/>
        {{/if}}
        <h4>{{val.data.title}}</h4>
        <p>Created: {{relative-time val.data.created}}</p>
        <p>Domain: {{val.data.domain}}</p>
        <p>Number of Comments: {{val.data.num_comments}}</p>
        <p>Ups: {{val.data.ups}}</p>
        <p>Downs: {{val.data.downs}}</p>
        <p>Score: {{val.data.score}}</p>
    </div>
{{/each}}
});
