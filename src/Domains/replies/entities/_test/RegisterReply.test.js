const RegisterReply = require('../RegisterReply');

describe('RegisterReply entities', () => {
  it('should throw error when payload not contain needed property', () => {
    // Arrange
    const payload = {};

    // Action & Assert
    expect(() => new RegisterReply(payload)).toThrowError('NEW_REPLY.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload does not meet data type requirements', () => {
    // Arrange
    const payload = { content: 123 };

    // Action & Assert
    expect(() => new RegisterReply(payload)).toThrowError('NEW_REPLY.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create RegisterReply entities correctly', () => {
    // Arrange
    const payload = { content: 'a reply' };

    // Action
    const registerReply = new RegisterReply(payload);

    // Assert
    expect(registerReply).toBeInstanceOf(RegisterReply);
    expect(registerReply.content).toEqual(payload.content);
  });
});