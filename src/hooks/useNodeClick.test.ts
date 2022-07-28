import useNodeClick from './useNodeClick';

const mockPresentAlert = jest.fn();
jest.mock('@ionic/react', () => ({
  useIonAlert: () => [mockPresentAlert]
}));

describe('useNodeClick', () => {
  it('should call ionic alert on click', () => {
    const onNodeClick = useNodeClick();
    onNodeClick({ id: 'node-test', position: { x: 0, y: 0 }, data: {} });

    expect(mockPresentAlert).toBeCalled();
  });
});
