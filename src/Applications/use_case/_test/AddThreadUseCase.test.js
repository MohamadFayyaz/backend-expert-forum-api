const AddThreadUseCase = require('../AddThreadUseCase');
const RegisterThread = require('../../../Domains/threads/entities/RegisterThread');
const RegisteredThread = require('../../../Domains/threads/entities/RegisteredThread');
const ThreadRepository = require('../../../Domains/threads/ThreadRepository');

describe('AddThreadUseCase', () => {
  it('should orchestrating the add thread action correctly', async () => {
    // Arrange
    const useCasePayload = {
      title: 'A thread',
      body: 'A long thread',
    };

    const mockRegisteredThread = new RegisteredThread({
      id: 'thread-123',
      title: 'A thread',
      owner: 'user-123',
    });

    /** creating dependency of use case */
    const mockThreadRepository = new ThreadRepository();

    /** mocking needed function */
    mockThreadRepository.addThread = jest.fn(() => Promise.resolve(mockRegisteredThread));

    /** creating use case instance */
    const addThreadUseCase = new AddThreadUseCase({
      threadRepository: mockThreadRepository,
    });

    // Action
    const registeredThread = await addThreadUseCase.execute('user-123', useCasePayload);

    // Assert
    expect(registeredThread).toStrictEqual(new RegisteredThread({
      id: 'thread-123',
      title: 'A thread',
      owner: 'user-123',
    }));

    expect(mockThreadRepository.addThread).toBeCalledWith('user-123', new RegisterThread({
      title: useCasePayload.title,
      body: useCasePayload.body,
    }));
  });
});