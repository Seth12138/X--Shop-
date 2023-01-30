<template>
	<view>
		<view @click="navigator(item.id)" class="news-item" v-for="item in list" :key="item.id">
			<image src="https://tse4-mm.cn.bing.net/th/id/OIP-C.SA1hv4prOzTen3YUSA7R1QHaEL?w=321&h=180&c=7&r=0&o=5&pid=1.7"></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间：{{item.add_time | formatDate}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>		
	</view>
</template>

<script>
	export default {
		props: ['list'],
		data() {
			return {
				
			};
		},
		filters: {
			formatDate(date) {
				const nDate = new Date(date)
				const year = nDate.getFullYear()
				const month = nDate.getMonth()
				const day = nDate.getDay()
				return year+'-'+month+'-'+day
				
			}
		},
		methods: {
			navigator(id) {
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.news-item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid #535353;
		image{
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}
		.right {
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.tit {
				font-size: 30rpx;
			}
			.info {
				font-size: 24rpx;
				text:nth-child(2){
					margin-left: 30rpx;
				}
			}
		}
	}
</style>