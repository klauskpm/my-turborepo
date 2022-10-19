import { goalsHandlers } from '@goal/data-access';
import { surveysHandlers } from "@survey/data-access";

export const handlers = [
  ...surveysHandlers,
  ...goalsHandlers
];
