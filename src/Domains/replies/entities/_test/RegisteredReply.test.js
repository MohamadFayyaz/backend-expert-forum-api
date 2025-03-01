const RegisteredReply = require('../RegisteredReply');

describe('RegisteredReply entities', () => {
  it('should throw error when payload not contain needed property', () => {
    // Arrange
    const payload = {
      content: 'A reply',
      owner: 'user-123',
    };

    // Action & Assert
    expect(() => new RegisteredReply(payload)).toThrowError('ADDED_REPLY.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload does not meet data type requirements', () => {
    // Arrange
    const payload = {
      id: 'reply-123',
      content: 'A reply',
      owner: 123,
    };

    // Action & Assert
    expect(() => new RegisteredReply(payload)).toThrowError('ADDED_REPLY.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create RegisteredReply entities correctly', () => {
    // Arrange
    const payload = {
      id: 'reply-123',
      content: 'A reply',
      owner: 'user-123',
    };

    // Action
    const registeredReply = new RegisteredReply(payload);

    // Assert
    expect(registeredReply).toBeInstanceOf(RegisteredReply);
    expect(registeredReply.id).toEqual(payload.id);
    expect(registeredReply.content).toEqual(payload.content);
    expect(registeredReply.owner).toEqual(payload.owner);
  });
});