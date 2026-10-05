import { khCommon } from './common';
import { khFeatures } from './features';

export const khDictionary = {
  ...khCommon,
  ...khFeatures,
};

export type TranslationKey = keyof typeof khDictionary;
