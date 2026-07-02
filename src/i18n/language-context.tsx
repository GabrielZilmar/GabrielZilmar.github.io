import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Language, SITE_CONTENT } from "~/i18n/content";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  content: (typeof SITE_CONTENT)[Language];
};

const STORAGE_KEY = "site-language";

const initialState: LanguageContextValue = {
  language: "en-us",
  setLanguage: () => void {},
  toggleLanguage: () => void {},
  content: SITE_CONTENT["en-us"],
};

const LanguageContext = createContext<LanguageContextValue>(initialState);

const normalizeLanguage = (value: string | null): Language | null => {
  if (value === "en-us" || value === "pt-br") {
    return value;
  }

  return null;
};

const LanguageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en-us");

  useEffect(() => {
    const storedLanguage = normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));
    if (storedLanguage) {
      setLanguageState(storedLanguage);
      return;
    }

    if (window.navigator.language.toLowerCase().startsWith("pt")) {
      setLanguageState("pt-br");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "pt-br" ? "pt-BR" : "en";
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  };

  const toggleLanguage = () => {
    setLanguageState((currentLanguage) =>
      currentLanguage === "en-us" ? "pt-br" : "en-us"
    );
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      content: SITE_CONTENT[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export default LanguageProvider;

export const useLanguage = () => useContext(LanguageContext);
