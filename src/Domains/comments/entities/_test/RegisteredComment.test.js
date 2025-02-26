const RegisteredComment = require('../RegisteredComment');

describe('RegisteredComment entities', () => {
  it('should throw error when payload not contain needed property', () => {
    // Arrange
    const payload = {
      content: 'A comment',
      owner: 'user-123',
    };

    // Action & Assert
    expect(() => new RegisteredComment(payload)).toThrowError('ADDED_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload does not meet data type requirements', () => {
    // Arrange
    const payload = {
      id: 'comment-123',
      content: 'A comment',
      owner: 123,
    };

    // Action & Assert
    expect(() => new RegisteredComment(payload)).toThrowError('ADDED_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create RegisteredComment entities correctly', () => {
    // Arrange
    const payload = {
      id: 'comment-123',
      content: 'A comment',
      owner: 'user-123',
    };

    // Action
    const registeredComment = new RegisteredComment(payload);

    // Assert
    expect(registeredComment).toBeInstanceOf(RegisteredComment);
    expect(registeredComment.id).toEqual(payload.id);
    expect(registeredComment.content).toEqual(payload.content);
    expect(registeredComment.owner).toEqual(payload.owner);
  });
});