<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view 
			@click="leftClickHandle(index,item.id)"
			:class="active===index?'active':''"
			v-for="(item,index) in cates" 
			:key="item.id">{{item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in secondData" :key="item.id">
				<img @click="previewImg" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.eobcaRBLGX9VwjFdw4ZRUwHaE9?w=265&h=180&c=7&r=0&o=5&pid=1.7">
				<text>{{item.title}}</text>
			</view>
			<text  v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: '',
				secondData: []
			}
		},
		methods: {
			async getPicsCate () {
				const res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				this.cates = res.data.message
				this.leftClickHandle(0,this.cates[0].id)
			},
			async leftClickHandle (index,id) {
				this.active = index
				// 获取右侧数据
				const res = await this.$myRequest({
					url: '/api/getimages/'+id
				})
				this.secondData = res.data.message
			},
			previewImg() {
				const urls = this.secondData.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					urls
				})
			}
		},
		onLoad() {
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
page {
	height: 100%;
}
	.pics{
		height: 100%;
		display: flex;
		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active {
				background: #535353;
				color: white;
			}
		}
		.right {
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;
			.item {
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text {
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
