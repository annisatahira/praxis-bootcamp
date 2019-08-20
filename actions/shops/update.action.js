const Shop = require("../../models/shop.model")

class UpdateShop {
    constructor(id, updated_data) {
        this.id = id,
            this.name = updated_data.name,
            this.description = updated_data.description,
            this.owner = updated_data.owner,
            this.fresh = updated_data.fresh
    }

    async exec() {
        try {
            let data = {
                name: this.name,
                description: this.description,
                owner: this.owner
            }

            let opts = {
                new: this.fresh === "true" ? true : false
            }


            let query = await Shop.findOneAndUpdate({
                _id: this.id
            }, data, opts).exec()

            return query
        } catch (err) {
            throw err
        }
    }
}

module.exports = UpdateShop