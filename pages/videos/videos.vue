<template>
	<view>
		<view class="videos">
			<view class="pics">
				<iframe src="//player.bilibili.com/player.html?aid=96917394&bvid=BV1x7411Z7VA&cid=165462594&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
			</view>
			<view class="title">
				<text>不要做挑战1</text>
				<text>B站UP--小潮院长</text>
			</view>
			<view class="pics">
				<iframe src="//player.bilibili.com/player.html?aid=98404427&bvid=BV1SE411F7C1&cid=167984442&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
			</view>
			<view class="title">
				<text>不要做挑战2</text>
				<text>B站UP--小潮院长</text>
			</view><view class="pics">
				<iframe src="//player.bilibili.com/player.html?aid=99406294&bvid=BV1J7411C7Ty&cid=169679498&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
			</view>
			<view class="title">
				<text>不要做挑战3</text>
				<text>B站UP--小潮院长</text>
			</view><view class="pics">
				<iframe src="//player.bilibili.com/player.html?aid=925158251&bvid=BV1AT4y1G7e4&cid=176527777&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
			</view>
			<view class="title">
				<text>不要做挑战4</text>
				<text>B站UP--小潮院长</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	.pics{
		padding: 10rpx;
		iframe {
			width: 730rpx;
			height: 300rpx;
		}
	}
	.title{
		padding: 15rpx;
		font-size: 50rpx;
	
		border-bottom: 2px solid #eee;
		text:nth-child(2){
			font-size: 32rpx;
			margin-left: 200rpx;
		}
	}
</style>
