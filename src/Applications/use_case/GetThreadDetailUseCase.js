const CommentDetail = require('../../Domains/comments/entities/CommentDetail');
const ThreadDetail = require('../../Domains/threads/entities/ThreadDetail');

class GetThreadDetailUseCase {
  constructor({
    threadRepository,
    commentRepository,
  }) {
    this._threadRepository = threadRepository;
    this._commentRepository = commentRepository;
  }

  async execute(threadId) {
    const threadDetail = await this._threadRepository.getThreadById(threadId);
    const threadComments = await this._commentRepository.getCommentsByThreadId(threadId);

    threadDetail.comments = threadComments.map((comment) => new CommentDetail({
      id: comment.id,
      content: comment.content,
      date: comment.date,
      username: comment.username,
      is_delete: comment.is_delete,
    }));

    return new ThreadDetail(threadDetail);
  }
}

module.exports = GetThreadDetailUseCase;