/**
 * Format the original date.
 *
 * @param {string} originalDate Article created date.
 *
 * @return {string} Date in the right format.
 */
export const formatDate = (originalDate) => {
  const date = new Date(Date.parse(originalDate));
  return date.toDateString();
};
