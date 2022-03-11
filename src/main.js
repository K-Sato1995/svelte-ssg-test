const { default: ClientComponent } =  require('./clientOutput.js')


const app = new ClientComponent({
	target: document.body,
	hydrate: true,
	props: {
		textHello: 'world'
	}
});


exports.default = app;