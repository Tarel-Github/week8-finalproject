const VoteRepository = require("../repositories/vote.repository");

class VoteService {
    voteRepository = new VoteRepository();

    createVote = async (title, choice1Name, choice2Name, endTime) => {
        const createVote = await this.voteRepository.createVote(title, choice1Name, choice2Name, endTime);
        return createVote
    }

    findAllVote = async () => {
        const findAllVote = await this.voteRepository.findAllVote();
        return findAllVote
    }

    findMyVote = async (userId) => {
        const findMyVote = await this.voteRepository.findMyVote(userId);
        return findMyVote
    }

    deleteVote = async (userId, choiceId) => {
        const deleteVote = await this.voteRepository.deleteVote(userId, choiceId);
        return deleteVote
    }

    vote = async (userId, choiceId, voteData) => {
        let vote
        if(vote ===1){
            vote = await this.voteRepository.vote_1(userId, choiceId, voteData);
        }else{
            vote = await this.voteRepository.vote_2(userId, choiceId, voteData);
        }       
        return vote;
    }


}

module.exports = VoteService;