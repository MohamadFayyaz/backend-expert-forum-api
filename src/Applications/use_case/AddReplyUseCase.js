const RegisterReply = require('../../Domains/replies/entities/RegisterReply');

class AddReplyUseCase {
  constructor({
    replyRepository,
    commentRepository,
    threadRepository,
  }) {
    this._replyRepository = replyRepository;
    this._commentRepository = commentRepository;
    this._threadRepository = threadRepository;
  }

  async execute(userId, useCaseParams, useCasePayload) {
    const { threadId, commentId } = useCaseParams;
    await this._threadRepository.checkThreadAvailability(threadId);
    await this._commentRepository.checkCommentAvailability(commentId, threadId);

    const registerReply = new RegisterReply(useCasePayload);
    return this._replyRepository.addReply(userId, commentId, registerReply);
  }
}

module.exports = AddReplyUseCase;