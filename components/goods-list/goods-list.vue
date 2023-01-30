<template>
	<view class="good-list">
		<view class="good-item" v-for="item in goods" :key="item.id" @click="navigator(item.id)">
			<image src="https://tse3-mm.cn.bing.net/th/id/OIP-C.7Hy8znZ01pyCwN8l6zDWVwHaHa?w=173&h=180&c=7&r=0&o=5&pid=1.7"></image>
			<view class="price">
				<text>￥{{item.sell_price}}</text>
				<text>￥{{item.market_price}}</text>
			</view>
			<view class="name">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['goods'],
		methods: {
			navigator (id) {
				this.$emit('goodsItemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.good-list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.good-item {
			background: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
			image{
				width: 80%;
				height: 150px;
				display: block;
				margin: auto;
			}
			.price {
				color: red;
				font-size: 36rpx;
				margin: 20rpx 0 5rpx 0;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}
			
			.name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>