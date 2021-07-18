<template>
	<div>
		<SidebarLogo />
		<ul class="w-full flex flex-col p-4 overflow-y-auto">
			<li 
				v-for="item in menu" 
				:key="item.name">
				<SidebarListItem 
					:name="item.name"
					:displayName="item.displayName"
					:to="item.link"
					:icon="item.icon"
					:children="item.children"
					:show="item.show"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
	import SidebarLogo from '@/components/SidebarLogo.vue'
	import SidebarListItem from '@/components/SidebarListItem.vue'

	export default {
		components: {
			SidebarLogo,
			SidebarListItem,
		},
		data() {
			return {
				menu: [
					{ name: 'dashboard', displayName: 'Dashboard', link: '/dashboard' , icon: 'home', children: false, show: true},
					{ name: 'networking', displayName: 'Networking', link: '/networking' , icon: 'share-alt', children: false, show: true},
					{ name: 'location-base-service', displayName: 'Location Base Service', link: '/bank/name', icon: 'map-marker', children: false, show: true},
					{ name: 'add-operation', displayName: 'Add Operation', link: '', icon: 'plus-circle', show: true, 
						hchildren: {
							items: [
								{ name: 'device', displayName: 'Device', link: '', icon: 'home', show: true, children: false },
								{ name: 'Identity', displayName: 'identity', link: '', icon: 'home', show: true, children: false },
								{ name: 'Bank', displayName: 'bank', link: '', icon: 'home', show: true, children: false },
								{ name: 'Imigration', displayName: 'imigration', link: '', icon: 'home', show: true, children: false },
							],
							show: false
						}
					},
					{ name: 'social-media', displayName: 'Social Media', link: '', icon: 'home', show: true, 
						children: {
							items: [
								{ name: 'find-by-name', displayName: 'Find By Name', link: '', icon: 'home', show: true, children: false },
								{ name: 'find-by-number', displayName: 'Find By Number', link: '', icon: 'home', show: true, children: false },
							],
							show: false
						}
					},
					{ name: 'image-forensic', displayName: 'Image Forensic', link: '', icon: 'home', children: false, show: true},
					{ name: 'vehicle', displayName: 'Vehicle', link: '', icon: 'home', children: false, show: true},
					{ name: 'ip-forensic', displayName: 'IP Forensic', link: '', icon: 'home', children: false, show: true},
					{ name: 'cctv', displayName: 'CCTV', link: '', icon: 'home', children: false, show: true},
					{ name: 'about', displayName: 'About', link: '', icon: 'home', children: false, show: true},
				]				
			}
		}
	}
</script>
