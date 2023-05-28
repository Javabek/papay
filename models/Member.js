const Definer = require("../lib/mistake");
const MemberModel = require("../schema/member.model")

class Member {
    constructor(){
        this.memberModel = MemberModel;
    }

    async signupData(input){
        try {
            const new_member = this.memberModel(input);

            try {
                const result = await new_member.save();
            } catch (mongo_err) {
                throw new Error(Definer.auth_err1)
            }


            result.mb_password = "";

            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = Member;