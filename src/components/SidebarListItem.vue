<template>
	<div class="flex px-4 py-2 text-white cursor-pointer rounded hover:text-indigo-300" v-if="show">
		<div class="flex-none w-6">
			<font-awesome-icon  :icon="icon" />
		</div>
		<div v-if="children" class="flex-grow">
			<div class="flex justify-between" @click="children.show = !children.show">
				<div class="ml-2 w-32">{{ displayName }}</div>
				<div class="flex-grow w-16 text-right">
					<template v-if="children.show">&#9650;</template>
					<template v-else>&#9660;</template>
				</div>
			</div>
			<ul class="flex flex-col pt-2" v-show="children.show">
				<li v-for="child in children.items" :key="child.name" class="px-4 py-2 text-white cursor-pointer rounded hover:bg-indigo-500">
					<font-awesome-icon class="flex-grow w-16" :icon="child.icon" />
					<router-link :to="child.link" class="ml-2 flex-shrink w-64">{{ child.displayName }}</router-link>
				</li>
			</ul>
		</div>
		<div  class="flex-grow" v-else> 
			<router-link :to="to" class="ml-2 flex-shrink w-64">{{ displayName }}</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['name', 'displayName', 'to', 'icon', 'children', 'show']
	}
</script>