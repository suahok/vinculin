// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
   data: {
      statusBarHeight: 0
   },
   onLoad() {
      this.getSystemInfo()
   },
   async getSystemInfo() {
      const systemInfo = await wx.getSystemInfo()
      this.setData({
         statusBarHeight: systemInfo.statusBarHeight
      })
   }
})
