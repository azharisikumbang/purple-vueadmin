<template>
	<div class="p-8">
		<!-- navbar -->
		
		<!-- main-content -->
		
		<!-- search bar -->
		<div class="mt-8 w-full rounded bg-indigo-900 p-4">
			<div class="flex gap-4">
				<input class="flex-grow rounded py-2 px-4" type="text" name="search" placeholder="Cari dari nama">
				<button class="flex-none rounded py-2 px-8 bg-purple-500 text-white cursor-pointer hover:bg-purple-300">Search</button>
			</div>
		</div>
		<!-- Social media -->
		<div class="mt-8 w-full">
			<div class="flex gap-4">
				<div class="flex-grow">
					<div class="grid grid-flow-col grid-cols-10 gap-4">
						<div class="grid grid-cols-2 h-10 grid-flow-col gap-0 bg-indigo-900 rounded p-2">
							<div class="text-white text-center">F</div>
							<div>
								<input class="w-6 h-6" type="checkbox" name="social">
							</div>
						</div>
						<div class="grid grid-cols-2 h-10 grid-flow-col gap-0 bg-indigo-900 rounded p-2">
							<div class="text-white text-center">T</div>
							<div>
								<input class="w-6 h-6" type="checkbox" name="social">
							</div>
						</div>
						<div class="grid grid-cols-2 h-10 grid-flow-col gap-0 bg-indigo-900 rounded p-2">
							<div class="text-white text-center">X</div>
							<div>
								<input class="w-6 h-6" type="checkbox" name="social">
							</div>
						</div>
						<div class="grid grid-cols-2 h-10 grid-flow-col gap-0 bg-indigo-900 rounded p-2">
							<div class="text-white text-center">W</div>
							<div>
								<input class="w-6 h-6" type="checkbox" name="social">
							</div>
						</div>
						<div class="grid grid-cols-2 h-10 grid-flow-col gap-0 bg-indigo-900 rounded p-2">
							<div class="text-white text-center">A</div>
							<div>
								<input class="w-6 h-6" type="checkbox" name="social">
							</div>
						</div>
					</div>
				</div>
				<div class="flex-none">
					<button class="flex-none rounded py-2 px-8 bg-purple-500 text-white cursor-pointer hover:bg-purple-300">Export</button>
				</div>
			</div>
		</div>

		<!-- grid item -->
		<div class="mt-16 w-full">
			<div class="grid grid-cols-4 grid-rows-2 gap-6">
				<div
					v-for="(item, index) in items" :key="index" 
					class="bg-indigo-900 rounded-lg p-4 relative shadow">
					<div class="absolute w-12 h-12 z-10 bg-white shadow rounded-full -top-4 -left-4"></div>
					<div class="text-gray-300 text-right mb-4">{{ item.date }}</div>
					<div class="text-white mb-4 uppercase">{{ item.title }}</div>
					<div class="flex justify-between">
						<div class="text-purple-300">Lihat postingan asli</div>
						<div class="text-white">...</div>
					</div>
				</div>
				<div
					class="text-center">
					<div class="mt-16">
						<button class="w-12 h-12 bg-purple-300 rounded-full">+</button>
						<span class="ml-4">Lihat Lebih Banyak</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{ date: '13 Juli 2012', title: 'PONPES DARUSSALAM MARTAPURA' },
				{ date: '13 Juli 2012', title: 'PKSD DARUSSALAM' },
				{ date: '13 Juli 2012', title: 'PM DARUSSALAM' },
				{ date: '13 Juli 2012', title: 'PM DARUSSALAM' },
				{ date: '13 Juli 2012', title: 'DARUSSALAM PUBLISHER' },
				{ date: '13 Juli 2012', title: 'DARUSSALAM PUBLISHER' },
				{ date: '13 Juli 2012', title: 'PONPES DARUSSALAM MARTAPURA' },
			]
		}
	}
	}
</script>