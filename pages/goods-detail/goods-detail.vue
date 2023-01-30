<template>
	<view class="goods-detail">
		<swiper indicator-dots>
			<swiper-item v-for="(item,index) in swipers" :key='index'>
				<image src="https://ts1.cn.mm.bing.net/th/id/R-C.e00aaf7b6997a57325f122dc873ee404?rik=mnYaMWBComgm2g&riu=http%3a%2f%2fimg1.mydrivers.com%2fimg%2f20181125%2fd2cfb7a9-78e2-4bb5-95e8-e153681a3b35.png&ehk=tOENvMKFSPczXBdzh2UROMel9t3%2bTy19Z%2fViD8ntDEw%3d&risl=&pid=ImgRaw&r=0"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>{{info.sell_price}}</text>
				<text>{{info.market_price}}</text>
			</view>
			<view class="goods-name">{{info.title}}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：{{info.goods_no}}</view>
			<view>库存：{{info.stock_quantity}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">{{content.title}}</view>
			<view class="content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>
		<view class="goods-nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				swipers: [],
				info: {},
				content: '',
				options: [{
						icon: 'headphones',
						text: '客服'
					}, {
						icon: 'shop',
						text: '店铺',
						info: 1,
						infoBackgroundColor:'#007aff',
						infoColor:"red"
					}, {
						icon: 'cart',
						text: '购物车',
						info: 2
					}],
					buttonGroup: [{
					  text: '加入购物车',
					  backgroundColor: '#ff0000',
					  color: '#fff'
					},
					{
					  text: '立即购买',
					  backgroundColor: '#ffa200',
					  color: '#fff'
					},
					]
			}
		},
		methods: {
			async getSwipers () {
				const res = await this.$myRequest({
					url: '/api/getthumimages/'+this.id
				})
				this.swipers = res.data.message
			},
			async getDetailInfo () {
				const res = await this.$myRequest({
					url: '/api/goods/getinfo/'+this.id
				})
				this.info = res.data.message[0]
			},
			async getDetailContent () {
				const res = await this.$myRequest({
					url: '/api/goods/getdesc/'+this.id
				})
				this.content = res.data.message[0].content
			},
			onClick (e) {
				uni.showToast({
				title: `点击${e.content.text}`,
				icon: 'none'
				})
			},
			buttonClick (e) {
			    console.log(e)
			    this.options[2].info++
			  }
			},
			onLoad(options) {
				this.id = options.id
				this.getSwipers()
				this.getDetailInfo()
				this.getDetailContent()
			}
	}
</script>

<style lang="scss">
	.goods-detail {
		swiper {
			height: 700rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.line {
			height: 10rpx;
			width: 750rpx;
			background: #eee;
		}
		.box1 {
			padding: 10px;
			.price {
				font-size: 35rpx;
				color: red;
				line-height: 80rpx;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}
			.goods-name{
				font-size: 32rpx;
				lighting-color: 60rpx;
			}
		}
		.box2 {
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}
		.box3 {
			padding-bottom: 50px;
			.tit{
				font-size: 32rpx;
				padding-left: 10px;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}
			.content {
				padding: 10px;
				font-size: 28rpx;
				color: #333;
				line-height: 50rpx;
				.gomeImgLoad {
					width: 750rpx;
					height: auto;
				}
			}
		}	
	}
	.goods-nav {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
