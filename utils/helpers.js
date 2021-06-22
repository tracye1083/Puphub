module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.8) {
      return `<span for="img" aria-label="dog">🐕</span>`;
    } else if (randomNum > 0.6) {
      return `<span for="img" aria-label="poodle">🐩</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="bone">🦴</span>`;
    } else if (randomNum > 0.2) {
      return `<span for="img" aria-label="paw">🐾</span>`;
    } else {
      return `<span for="img" aria-label="puppy">🐶</span>`;
    }
  },
};
