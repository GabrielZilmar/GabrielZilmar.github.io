import { DownloaderCurriculumParams } from "~/utils/types";

export default class Downloader {
  static curriculum({ language = "pt-br" }: DownloaderCurriculumParams): void {
    const curriculumPath = `/public/assets/pdfs/${language}-curriculum.pdf`;

    let curriculumLink = document.createElement(
      "curriculum"
    ) as HTMLAnchorElement | null;

    if (curriculumLink) {
      curriculumLink.href = curriculumPath;
      curriculumLink.download = `${language}-curriculum.pdf`;
      curriculumLink.click();
    }
  }
}
