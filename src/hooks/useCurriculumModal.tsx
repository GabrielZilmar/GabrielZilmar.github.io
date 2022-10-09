import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

type ModalState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const initialState: ModalState = {
  isOpen: false,
  open: () => void {},
  close: () => void {},
};

const CurriculumModalContext = createContext<ModalState>(initialState);

const CurriculumModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<ModalState>(initialState);

  const open = (): void => {
    setState({ ...state, isOpen: true });
  };

  const close = (): void => {
    setState({ ...state, isOpen: false });
  };

  return (
    <CurriculumModalContext.Provider
      value={{
        ...state,
        open,
        close,
      }}
    >
      {children}
    </CurriculumModalContext.Provider>
  );
};

export default CurriculumModalProvider;

export const useCurriculumModal = () => useContext(CurriculumModalContext);
