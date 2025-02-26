const RegisterComment = require('../RegisterComment');

describe('RegisterComment entities', () => {
  it('should throw error when payload not contain needed property', () => {
    // Arrange
    const payload = {};

    // Action & Assert
    expect(() => new RegisterComment(payload)).toThrowError('NEW_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload does not meet data type requirements', () => {
    // Arrange
    const payload = { content: 123 };

    // Action & Assert
    expect(() => new RegisterComment(payload)).toThrowError('NEW_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create RegisterComment entities correctly', () => {
    // Arrange
    const payload = { content: 'a comment' };

    // Action
    const registerComment = new RegisterComment(payload);

    // Assert
    expect(registerComment).toBeInstanceOf(RegisterComment);
    expect(registerComment.content).toEqual(payload.content);
  });
});