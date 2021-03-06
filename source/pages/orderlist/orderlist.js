// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import {
  ShopApi
} from "../../apis/shop.api.js";
                                
class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({list:[]});
  }
  onMyShow() {
    var that = this;
    var shopapi=new ShopApi();
    shopapi.orderlist({},(list)=>{
      for(var i=0;i<list.length;i++){
        list[i].amount = parseFloat(list[i].amount);
        list[i].expressfee = parseFloat(list[i].expressfee);
      }
      this.Base.setMyData({list});
    });
  }
  gotoMenu(){
    wx.navigateTo({
      url: '/pages/shopchoose/shopchoose',
    })
  
  }
  todetails(e){
    var id=e.currentTarget.id;
    var shop_id = e.currentTarget.dataset.shop_id;


    console.log(id+"2222"+shop_id+"55555")
    //return;
   wx.navigateTo({
     url: '/pages/orderwaiting/orderwaiting?id=' + id+'&shop_id='+shop_id,
   })
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.gotoMenu = content.gotoMenu; 
body.todetails = content.todetails; 
Page(body)