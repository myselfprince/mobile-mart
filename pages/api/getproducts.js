import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"

const handler = async(req,res)=>{
    let products = await Product.find()

    let mobiles={}

    for(let item of products){
        if(item.title in mobiles){
            if(!mobiles[item.title].color.includes(item.color) && item.availableQty>0){
                mobiles[item.title].color.push(item.color)
            }
            if(!mobiles[item.title].size.includes(item.size) && item.availableQty>0){
                mobiles[item.title].size.push(item.size)
            }

        }
        else{
            mobiles[item.title] = JSON.parse(JSON.stringify(item))
            if(item.availableQty>0){
                mobiles[item.title].color = [item.color]
                mobiles[item.title].size = [item.size]
            }
        }
    }


    res.status(200).json({ mobiles })

}

export default connectDb(handler)
  