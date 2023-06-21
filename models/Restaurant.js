const assert = require("assert");
const MemberModel = require ("../schema/member.model");
const Definer = require("../lib/mistake");

class Restaurant {
    constructor(){
        this.memberModel = MemberModel
    }

async getAllRestaurantsData (){
    try {
        const result = await this.memberModel.find({
            mb_type : "RESTAURANT"
        }).exec();

        assert.ok(result , Definer.general_err1);
        return result;
    } catch (error) {
        throw error
    }
}
}

module.exports = Restaurant;