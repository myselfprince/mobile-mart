

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required:true},
    slug: {type: String, required:true, unique: true},
    desc: {type: String, required:true},
    img: {type: String, required:true},
    category: {type: String, required:true},
    size: {type: String},
    color: {type: String},
    price: {type: String, required:true},
    availableQty: {type: Number, required:true},
   
}, {timestamps:true});

// mongoose.models = {}
// export default mongoose.model("Product", ProductSchema)

// const User = mongoose.models.product || mongoose.model("product", productSchema);

// export default User;

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);