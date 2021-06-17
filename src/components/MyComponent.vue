<template>
	<h3>{{ name }} Hello: {{ hello }}</h3>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi'

export default defineComponent({
	props: {
		hello: String,
	},
	setup(props) {
		const name = ref('My Demi Component')
		return {
			name,
		}
	},
})
</script>
