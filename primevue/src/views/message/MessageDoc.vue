<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<pre v-code.script>
<code>
import Message from 'primevue/message';

</code></pre>

				<h5>Getting Started</h5>
				<p>Message component requires a content to display.</p>
<pre v-code>
<code>
&lt;Message&gt;Welcome to PrimeVue&lt;/Message&gt;

</code></pre>

                <p>Multiple messages can be displayed using the standard v-for directive.</p>

<pre v-code>
<code><template v-pre>
&lt;Message v-for="msg of messages" :severity="msg.severity" :key="msg.content"&gt;{{msg.content}}&lt;/Message&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
data() {
	return {
		messages: [
			{severity: 'info', content: 'Dynamic Info Message'},
			{severity: 'success', content: 'Dynamic Success Message'},
			{severity: 'warn', content: 'Dynamic Warning Message'}
		]
	}
}

</code></pre>

				<h5>Severities</h5>
				<p>There are four possible values for the severity of a message. Default one is "info".</p>

				<ul>
					<li>success</li>
					<li>info</li>
					<li>warn</li>
					<li>error</li>
				</ul>

				<h5>Closable</h5>
				<p>Messages are closable by default resulting in a close icon being displayed on top right corner. In order to disable closable messages, set <i>closable</i> to false.</p>
<pre v-code>
<code>
&lt;Message severity="success" :closable="false"&gt;Order Submitted&lt;/Message&gt;

</code></pre>

				<h5>Sticky</h5>
				<p>Messages are sticky by default, if you require them to be cleared automatically, disable <i>sticky</i> property and optionally configure the <i>life</i> property to specify how long the message
                should be displayed which is 3000 ms by default.</p>
<pre v-code>
<code>
&lt;Message severity="warn" :life="5000" :sticky="false"&gt;This message will hide in 5 seconds.&lt;/Message&gt;

</code></pre>

				<h5>Inline Message Component</h5>
<pre v-code.script>
<code>
import InlineMessage from 'primevue/inlinemessage';

</code></pre>

				<p>InlineMessage component is useful in cases where a single message needs to be displayed related to an element such as forms. It has one property, <i>severity</i> of the message.</p>
<pre v-code>
<code>
&lt;InputText placeholder="Username" class="p-invalid" /&gt;
&lt;InlineMessage&gt;Field is required&lt;/InlineMessage&gt;

</code></pre>


				<h5>Properties of Message</h5>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>severity</td>
                                <td>string</td>
                                <td>info</td>
                                <td>Severity level of the message.</td>
                            </tr>
                            <tr>
                                <td>closable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether the message can be closed manually using the close icon.</td>
                            </tr>
                            <tr>
                                <td>sticky</td>
                                <td>element</td>
                                <td>null</td>
                                <td>When enabled, message is not removed automatically.</td>
                            </tr>
                            <tr>
                                <td>life</td>
                                <td>number</td>
                                <td>3000</td>
                                <td>Delay in milliseconds to close the message automatically.</td>
                            </tr>
						</tbody>
					</table>
				</div>

                <h5>Properties of ValidationMessage</h5>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>severity</td>
                                <td>string</td>
                                <td>info</td>
                                <td>Severity level of the message.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Styling</h5>
				<p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>

                <strong>Message</strong>
                <div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>p-messages</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-messages-info</td>
                                <td>Container element when displaying info messages.</td>
                            </tr>
                            <tr>
                                <td>p-messages-warn</td>
                                <td>Container element when displaying warning messages.</td>
                            </tr>
                            <tr>
                                <td>p-messages-error</td>
                                <td>Container element when displaying error messages.</td>
                            </tr>
                            <tr>
                                <td>p-messages-success</td>
                                <td>Container element when displaying success messages.</td>
                            </tr>
                            <tr>
                                <td>p-messages-close</td>
                                <td>Close icon.</td>
                            </tr>
                            <tr>
                                <td>p-messages-icon</td>
                                <td>Severity icon.</td>
                            </tr>
                            <tr>
                                <td>p-messages-text</td>
                                <td>Content of a message.</td>
                            </tr>
						</tbody>
					</table>
				</div>

                <strong>InlineMessage</strong>
                <div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>p-inline-message</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-inline-message-info</td>
                                <td>Container element when displaying info messages.</td>
                            </tr>
                            <tr>
                                <td>p-inline-message-warn</td>
                                <td>Container element when displaying warning messages.</td>
                            </tr>
                            <tr>
                                <td>p-inline-message-error</td>
                                <td>Container element when displaying error messages.</td>
                            </tr>
                            <tr>
                                <td>p-inline-message-success</td>
                                <td>Container element when displaying success messages.</td>
                            </tr>
                            <tr>
                                <td>p-inline-message-icon</td>
                                <td>Severity icon.</td>
                            </tr>
                           <tr>
                                <td>p-inline-message-text</td>
                                <td>Content of a message.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/message" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<pre v-code>
<code><template v-pre>
&lt;h5&gt;Severities&lt;/h5&gt;
&lt;Message severity="success"&gt;Success Message Content&lt;/Message&gt;
&lt;Message severity="info"&gt;Info Message Content&lt;/Message&gt;
&lt;Message severity="warn"&gt;Warning Message Content&lt;/Message&gt;
&lt;Message severity="error"&gt;Error Message Content&lt;/Message&gt;

&lt;h5&gt;Dynamic&lt;/h5&gt;
&lt;Button label="Show" @click="addMessages()" /&gt;
&lt;transition-group name="p-message" tag="div"&gt;
    &lt;Message v-for="msg of messages" :severity="msg.severity" :key="msg.content"&gt;{{msg.content}}&lt;/Message&gt;
&lt;/transition-group&gt;

&lt;h5&gt;Auto Dismiss&lt;/h5&gt;
&lt;Message severity="warn" :life="3000" :sticky="false"&gt;This message will hide in 3 seconds.&lt;/Message&gt;

&lt;h5&gt;Validation Message&lt;/h5&gt;
&lt;div class="p-formgroup-inline" style="margin-bottom:.5rem"&gt;
    &lt;label for="username" class="p-sr-only"&gt;Username&lt;/label&gt;
    &lt;InputText id="username" placeholder="Username" class="p-invalid" /&gt;
    &lt;InlineMessage&gt;Username is required&lt;/InlineMessage&gt;
&lt;/div&gt;
&lt;div class="p-formgroup-inline"&gt;
    &lt;label for="email" class="p-sr-only"&gt;email&lt;/label&gt;
    &lt;InputText id="email" placeholder="Email" class="p-invalid" /&gt;
    &lt;InlineMessage /&gt;
&lt;/div&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
export default {
	data() {
		return {
			messages: [],
			count: 0
		}
	},
	methods: {
		addMessages() {
			this.messages = [
				{severity: 'info', content: 'Dynamic Info Message'},
				{severity: 'success', content: 'Dynamic Success Message'},
				{severity: 'warn', content: 'Dynamic Warning Message'}
			]
		}
	}
}

</code></pre>

<pre v-code.css>
<code>
button.p-button {
	margin-right: .5rem;
}

.p-inputtext {
	margin-right: .25rem;
}

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>