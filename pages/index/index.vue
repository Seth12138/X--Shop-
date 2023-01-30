<template>
	<view class="home">
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in navs" :key='index' @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品区 -->
		<view class="hot-goods">
			<view class="tit">
				推荐商品
			</view>
			<goods-list @goodsItemClick='goGoodsDetail' :goods="goods"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [
					{
						icon: 'iconfont icon-ziyuan',
						title: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					},
				]
			}
		},
		onLoad() {
			this.getSwipers() 
			this.getHotGoods()
		},
		components: {"goods-list":goodsList},
		methods: {
			// 获取轮番图的数据
			async getSwipers () {
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				})
				this.swipers = res.data.message	
			},
			// 获取热门商品列表数据
			async getHotGoods () {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=1'
				})
				this.goods = res.data.message
			},
			// 导航点击的处理函数
			navItemClick (url) {
				uni.navigateTo({
					url
				})
			},
			// 导航到商品详情页
			goGoodsDetail (id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 750rpx;
			}
		}
		.nav {
			display: flex;
			.nav-item {
				width: 25%;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					background: #535353;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
					border: 2px solid #000000;
					box-shadow: 1px 1px 5px;
					box-shadow: 8px 5px 2px 1px rgba(0, 0, 255, .2);
				}
				.icon-tupian {
					font-size: 45rpx;
				}
			}
			text {
				font-size: 30rpx;
			}
		}
		.hot-goods {
			background: #eee;
			overflow: hidden;
			margin-top: 10px;
			.tit {
				height: 50px;
				line-height: 50px;
				// color: #535353;
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7px 0;
			}	
		}
	}
</style>
