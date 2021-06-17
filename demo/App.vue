<template>
	<div>
		<h1>MyComponent</h1>
		<MyComponent :hello="hello"> </MyComponent>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue-demi'
// import MyComponent from '../src/components/MyComponent.vue' // work
import MyComponent from '../dist/my-component.es.js' // error
// import '../dist/style.css'

export default defineComponent({
	components: {
		MyComponent,
	},
	setup() {
		const hello = ref('World')

		return {
			hello,
		}
	},
})
</script>
