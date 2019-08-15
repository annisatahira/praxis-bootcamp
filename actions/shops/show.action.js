const Shop = require("../../models/shop.model")

class ShowShop {
    constructor(id) {
        this.id = id
    }

    async exec() {
        try {
            let query = await Shop.findOne({
                _id: this.id
            }).exec()

            return query
        } catch (err) {
            throw err
        }
    }
}

module.exports = ShowShop