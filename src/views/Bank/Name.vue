<template>
	<div class="home flex w-full">
		<Sidebar v-if="true" class="flex-none min-h-screen bg-indigo-900"	/>
		<div class="flex-grow bg-gray-100 p-6 overflow-x-hidden">
			<Navbar user="Administrator" />
			<ContentTitle title="Operation" description="Bank Name" />
			<div class="mt-8 w-full rounded bg-indigo-900 p-4">
				<div class="flex gap-4">
					<input class="flex-grow rounded py-2 px-4" type="text" name="search" placeholder="Cari dari nama">
					<select class="rounded py-2 px-4" name="nama-bank">
						<option>Pilih Nama Bank</option>
					</select>
					<button class="flex-none rounded py-2 px-8 bg-purple-500 text-white cursor-pointer hover:bg-purple-300">Search</button>
				</div>
			</div>
			<ContentTable 
				class="w-full overflow-x-auto bg-indigo-900 px-6 py-8 shadow rounded"
				:title="tableItem.title" :total="tableItem.total" :headers="tableItem.header" :lists="tableItem.lists" />
		</div>
	</div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import ContentTitle from '@/components/ContentTitle.vue'
import ContentTable from '@/components/ContentTable.vue'

export default {
  name: 'BankName',
  components: {
    Sidebar,
    Navbar,
    ContentTitle,
    ContentTable,
  },
  data() {
	return {
		tableItem: {
		title: 'Daftar Nasabah Bank',
		total: 325,
		header: [
			{ value: 'Nama Nasabah' },
			{ value: 'Nama Bank' },
			{ value: 'Nomor Rekening' },
			{ value: 'Tanggal Pembuatan' },
			{ value: 'KCP/KGU' },
			{ value: 'Alamat' },
			{ value: 'Aksi' },
		],
		lists: [ 
				[ 
					{ key : 'nama-nasabah', value: 'Darussallam' },
					{ key : 'nama-bank', value: 'BCA (Bank Central Asia)' },
					{ key : 'nomor-rekening', value: '32812917317921973' },
					{ key : 'tanggal-pembuatan', value: '12 Februari 2020' },
					{ key : 'kcp-kgu', value: 'KCP Gunung Puteri, Bogor' },
					{ key : 'alamat', value: 'transyogi, cibubur, jatimsempurna, bekasi, jawa barat 17435' },
					{ key : 'aksi', value: 'Detail' },
				],
				[ 
					{ key : 'nama-nasabah', value: 'Darussallam' },
					{ key : 'nama-bank', value: 'BCA (Bank Central Asia)' },
					{ key : 'nomor-rekening', value: '32812917317921973' },
					{ key : 'tanggal-pembuatan', value: '12 Februari 2020' },
					{ key : 'kcp-kgu', value: 'KCP Gunung Puteri, Bogor' },
					{ key : 'alamat', value: 'transyogi, cibubur, jatimsempurna, bekasi, jawa barat 17435' },
					{ key : 'aksi', value: 'Detail' },
				],
				[ 
					{ key : 'nama-nasabah', value: 'Darussallam' },
					{ key : 'nama-bank', value: 'BCA (Bank Central Asia)' },
					{ key : 'nomor-rekening', value: '32812917317921973' },
					{ key : 'tanggal-pembuatan', value: '12 Februari 2020' },
					{ key : 'kcp-kgu', value: 'KCP Gunung Puteri, Bogor' },
					{ key : 'alamat', value: 'transyogi, cibubur, jatimsempurna, bekasi, jawa barat 17435' },
					{ key : 'aksi', value: 'Detail' },
				],
			]
		}
	}
  }
}
</script>