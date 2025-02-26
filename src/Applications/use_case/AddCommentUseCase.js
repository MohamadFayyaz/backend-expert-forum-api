const RegisterComment = require('../../Domains/comments/entities/RegisterComment');

class AddCommentUseCase {
  constructor({
    commentRepository,
    threadRepository,
  }) {
    this._commentRepository = commentRepository;
    this._threadRepository = threadRepository;
  }

  async execute(userId, threadId, useCasePayload) {
    await this._threadRepository.checkThreadAvailability(threadId);
    const registerComment = new RegisterComment(useCasePayload);
    return this._commentRepository.addComment(userId, threadId, registerComment);
  }
}

module.exports = AddCommentUseCase;