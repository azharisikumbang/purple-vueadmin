<template>
  <div class="home flex w-full">
    <Sidebar class="flex-none min-h-screen bg-indigo-900"	/>
    <Content class="flex-grow bg-gray-100" />
  </div>
</template>

<script>

// import NavBar from '@/components/NavBar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'Networking',
  components: {
    // NavBar,
    Sidebar,
    Content,
  }
}
</script>
