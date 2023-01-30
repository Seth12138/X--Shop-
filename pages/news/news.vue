<template>
	<view class="news">
		<news-item @itemClick="goDetail" :list="newList"></news-item>
	</view>
</template>

<script>
	import newsItem from "../../components/news-item/news-item.vue"
	export default {
		components: {"news-item": newsItem},
		data() {
			return {
				newList: [],
			}
		},
		methods: {
			async getNews () {
				const res = await this.$myRequest({
					url: '/api/getnewslist'
				})
				this.newList = res.data.message
			},
			goDetail (id) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id='+id
				})
			}
		},
		onLoad() {
			this.getNews()
		}
	}
</script>

<style lang="scss">
	
</style>
