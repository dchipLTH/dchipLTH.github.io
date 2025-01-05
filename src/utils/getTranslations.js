
export function getTranslations( url ) {
    const pathParts = url.split('/');
    const lang = pathParts[1] || 'sv'; // Default to 'sv' if no language is specified
    const page = pathParts[2] || 'home'; // Default to 'home' if no page is specified

    // Set the appropriate translations based on the language
    const translations = lang === 'en' ? 'en' : 'sv';

    return lang, page, translations;
};