import { renderHook } from '@testing-library/react-hooks/dom';
import { useResponsiveText } from '../..';

describe('useResponsiveText', () => {
  it('should be defined', () => {
    expect(useResponsiveText).toBeDefined();
  });

  it('should render', () => {
    const { result } = renderHook(() => useResponsiveText());
    expect(result.error).toBeUndefined();
  });
});
