<template>
  <div class="home flex w-full">
	<Sidebar class="flex-none min-h-screen bg-indigo-900"	/>
	<Content class="flex-grow bg-gray-100" />
  </div>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'Home',
  components: {
    // NavBar,
    Sidebar,
    Content,
  }
}
</script>
