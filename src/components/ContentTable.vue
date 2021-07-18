<template>
	<div class="mt-4 max-w-full text-white">
		<div class="text-xl mb-4">{{ title }}</div>
		<table class="w-full divide-y divide-gray-200 mb-4 overflow-x-auto">
			<thead>
				<tr>
					<th 
						v-for="(header, index) in headers"
						:key="index"
						class="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
					>
						{{ header.value }}
					</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200">
				<tr 
					v-for="(list, index) in lists"
					:key="index"
				>
					<td 
						v-for="(item, listNumber) in list"
						:key="listNumber"
						class="text-white px-4 py-4 whitespace-nowrap">
						{{ item.value  }}
					</td>
				</tr>
			</tbody>
		</table>
		<div class="mb-4 flex justify-content">
			<div class="text-sm text-gray-500">
				Showing <span class="text-white"></span> from <span class="text-white"> {{ total }}</span> Entry
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'lists', 'headers', 'total']
	}
</script>