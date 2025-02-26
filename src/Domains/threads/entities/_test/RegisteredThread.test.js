const RegisteredThread = require('../RegisteredThread');

describe('RegisteredThread entities', () => {
  it('should throw error when payload not contain needed property', () => {
    // Arrange
    const payload = {
      id: '123',
      title: 'A thread',
    };

    // Action & Assert
    expect(() => new RegisteredThread(payload)).toThrowError('ADDED_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload does not meet data type requirements', () => {
    // Arrange
    const payload = {
      id: '123',
      title: 'A thread',
      owner: 123,
    };

    // Action & Assert
    expect(() => new RegisteredThread(payload)).toThrowError('ADDED_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create RegisteredThread entities correctly', () => {
    // Arrange
    const payload = {
      id: '123',
      title: 'A thread',
      owner: 'thread-owner',
    };

    // Action
    const registeredThread = new RegisteredThread(payload);

    // Assert
    expect(registeredThread).toBeInstanceOf(RegisteredThread);
    expect(registeredThread.id).toEqual(payload.id);
    expect(registeredThread.title).toEqual(payload.title);
    expect(registeredThread.owner).toEqual(payload.owner);
  });
});