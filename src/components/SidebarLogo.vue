<template>
	<div class="p-6">
		<div class="flex gap-2">
			<div class="flex-none p-2">
				<img class="w-8 h-8" :src="logo">
			</div>
			<div class="flex-grow">
				<div class="text-white text-xl">VUEAPP</div>
				<div class="text-gray-300 text-xs">today is today</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Logo from '@/assets/logo.png'

	export default {
		data() {
			return {
				logo: Logo
			}
		}
	}
</script>