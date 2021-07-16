import { useRef, useEffect } from 'react';

function createRootElement(id: string) {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

function addRootElement(rootElem: Element) {
  document.body.insertBefore(
    rootElem,
    document.body.firstElementChild
  );
}

function usePortal(id: string) {
  const rootElemRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const existingParent = document.querySelector(`#${ id }`);
    const parentElem = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElem);
    }

    parentElem.appendChild(rootElemRef.current);

    return () => {
      rootElemRef.current.remove();
      if (!parentElem.childElementCount) {
        parentElem.remove();
      }
    };
  }, [ id ]);

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  }

  return getRootElem();
}

export default usePortal;
