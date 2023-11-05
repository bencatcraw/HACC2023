import { useState } from 'react';

// eslint-disable-next-line import/no-mutable-exports
export let currentLanguage = useState('English');

export function changeLanguage(newLanguage) {
  currentLanguage = newLanguage;
}
