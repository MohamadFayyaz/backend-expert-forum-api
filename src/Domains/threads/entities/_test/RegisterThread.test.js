const RegisterThread = require('../RegisterThread');

describe('RegisterThread entities', () => {
  it('should throw error when payload not contain needed property', () => {
    // Arrange
    const payload = {
      title: 'A thread',
    };

    // Action & Assert
    expect(() => new RegisterThread(payload)).toThrowError('NEW_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload does not meet data type requirements', () => {
    // Arrange
    const payload = {
      title: 'A thread',
      body: 4321,
    };

    // Action & Assert
    expect(() => new RegisterThread(payload)).toThrowError('NEW_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create RegisterThread entities correctly', () => {
    // Arrange
    const payload = {
      title: 'A thread',
      body: 'A long thread',
    };

    // Action
    const registerThread = new RegisterThread(payload);

    // Assert
    expect(registerThread).toBeInstanceOf(RegisterThread);
    expect(registerThread.title).toEqual(payload.title);
    expect(registerThread.body).toEqual(payload.body);
  });
});