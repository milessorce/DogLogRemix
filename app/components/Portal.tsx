import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import usePortal from '../hooks/usePortal';

interface PortalProps {
  id: string;
  children: React.ReactNode;
}

/**
 * @example
 * <Portal id="modal">
 *   <p>Thinking with portals</p>
 * </Portal>
 */
const Portal = ({ id, children }: PortalProps) => {
  const target = usePortal(id);
  return createPortal(
    children,
    target
  );
};

export default Portal;
