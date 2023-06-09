import { englishCode, spanishCode, czechCode } from './LanguageCodes';

interface linkType {
  linkId?: string;
  type: string;
  urlSlug: string;
}

export function getAboutUsLink(language: string): string {
    return !language || language.toLowerCase() === englishCode.toLowerCase()
        ? `about-us`
        : language.toLowerCase() === spanishCode.toLowerCase()
        ? `acerca-de`
        : language.toLowerCase() === czechCode.toLowerCase()
        ? `o-n�s`
        : '';
}


export function resolveContentLink(
  link: linkType,
  language: string = englishCode
): string {
  let resultLink;
  switch (link.type) {
    case 'about_us':
      resultLink = `${link.urlSlug}`;
      break;

    case 'fact_about_us':
      resultLink = `${getAboutUsLink(language)}`;
      break;

    case 'article':
      resultLink = `articles/${link.linkId}`;
      break;

    case 'brewer':
      resultLink = `brewers/${link.urlSlug}`;
      break;

    case 'cafe':
      resultLink = 'cafes';
      break;

    case 'coffee':
      resultLink = `coffees/${link.urlSlug}`;
      break;

    case 'office':
      resultLink = 'contacts';
      break;

    case 'home':
      resultLink = '';
      break;

    default:
      resultLink = '';
      break;
  }

  return `/${language}/${resultLink}`.toLowerCase();
}
