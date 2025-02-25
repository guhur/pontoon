import { getSimplePreview } from './fluent';

/**
 * Return an optimized version of a given translation content.
 *
 * @param {string} translation The content to optimized.
 * @param {string} format The format of the file of the concerned entity.
 * @returns {string} If the format is Fluent ('ftl'), return a simplified
 * version of the translation. Otherwise, return the original translation.
 */
export function getOptimizedContent(
  translation: string | null | undefined,
  format: string,
): string {
  if (!translation) {
    return '';
  }
  if (format === 'ftl') {
    return getSimplePreview(translation);
  }
  return translation;
}
