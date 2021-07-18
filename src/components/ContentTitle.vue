<template>
	<div class="mt-8 w-full">
		<div class="text-gray-800">
			<h3 class="text-2xl inline-block mr-4">{{ title }}</h3>
			<span class="border-l border-l-2 pl-4 py-4 text-gray-500">{{ description }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'description']
	}
</script>