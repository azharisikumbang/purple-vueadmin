<template>
	<div class="home flex w-full">
		<Sidebar v-if="true" class="flex-none min-h-screen bg-indigo-900"	/>
		<div class="flex-grow bg-gray-100 p-6 overflow-x-hidden">
			<Navbar user="Administrator" />
			<ContentTitle title="Dashbord" description="Selamat Datang" />
			<div class="bg-white mt-6 p-6">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p class="italic mt-2">
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				</p>
			</div>
		</div>
	</div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import ContentTitle from '@/components/ContentTitle.vue'

export default {
  name: 'BankName',
  components: {
    Sidebar,
    Navbar,
    ContentTitle,
  }
}
</script>