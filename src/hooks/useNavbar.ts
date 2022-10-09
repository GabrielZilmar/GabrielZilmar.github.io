import { useCurriculumModal } from "~/hooks/useCurriculumModal";

type LanguageOptions = "en-us" | "pt-br";

const useNavbarOptions = () => {
  const { open } = useCurriculumModal();

  const openCurriculum = (language: LanguageOptions): void => {
    const curriculumChoice = {
      "en-us": () => {
        window.open(
          "/assets/pdfs/en-us-curriculum.pdf",
          "_blank",
          "noreferrer"
        );
      },
      "pt-br": () => {
        window.open(
          "/assets/pdfs/pt-br-curriculum.pdf",
          "_blank",
          "noreferrer"
        );
      },
    };

    curriculumChoice[language]();
  };

  const downloadCurriculum = (): void => {};

  const scrollToElementById = (id: string): void => {
    const curriculumId = "curriculum";
    if (id === curriculumId) {
      return open();
    }

    const element = document.getElementById(id);
    const navbarElement = document.getElementById("navbar");

    if (!element || !navbarElement) {
      return;
    }

    const headerHeight = navbarElement.offsetHeight;
    const elementPosition = element.offsetTop - headerHeight;

    setTimeout(() => {
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }, 100);
  };

  return {
    openCurriculum,
    downloadCurriculum,
    scrollToElementById,
  };
};

export default useNavbarOptions;
