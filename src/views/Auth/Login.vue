<template>
	<div class="flex justify-center items-center bg-gray-100 h-screen">
		<div class="w-96">
			<div v-if="error" class="mb-6 w-full">
				<div class="flex justify-content rounded-lg shadow bg-red-300 text-red-800 p-4">
					<div>Username atau password salah, silahkan coba lagi.</div>
					<div class="p-2 w-12 text-right cursor-pointer" @click="error = false">X</div>
				</div>
			</div>
			<div class="bg-indigo-900 rounded-lg shadow-lg">
				<div class="px-6 py-8">
					<h3 class="mb-8 text-center text-white text-2xl">Silahkan Login</h3>
					<div class="mb-4">
						<input class="w-full rounded bg-gray-300 px-6 py-4 focus:outline-none focus:ring focus:border-indigo-500 focus:bg-white" type="text" name="username" placeholder="type username..." v-model="username">
					</div>
					<div class="mb-4">
						<input class="w-full rounded bg-gray-300 px-6 py-4 focus:outline-none focus:ring focus:border-indigo-500 focus:bg-white" type="password" name="password" placeholder="type password..." v-model="password">
					</div>
					<div class="mb-4">
						<button class="rounded uppercase text-white font-bold bg-indigo-500 w-full py-4 px-6 hover:bg-indigo-600" @click="login">Masuk</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				error: false,
				username: "admin",
				password: "12345"
			}
		},
		methods: {
			login() {
				if (this.username == 'admin' 
					&& this.password == '12345') {
					this.error = false
					return this.$router.push('/dashboard') 
				}

				this.error = true				
			}
		}
	}
</script>