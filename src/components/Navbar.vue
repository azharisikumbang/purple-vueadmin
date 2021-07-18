<template>
	<div class="w-full rounded bg-indigo-900 p-4">
		<div class="flex justify-end gap-4">
			<div class="text-white hover:text-purple-300 cursor-pointer">
				<font-awesome-icon icon="bell" />
			</div>
			<div class="text-white hover:text-purple-300 cursor-pointer">{{ user }}</div>
			<div class="cursor-pointer rounded-full w-8 h-8 bg-gray-400">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['user', 'avatar']
	}
</script>