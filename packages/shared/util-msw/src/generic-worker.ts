import { RequestHandler } from 'msw';
import { startBrowserWorker } from "./browser-worker";


export const startWorker = (handlers: RequestHandler[]) => {
  if (typeof window !== 'undefined') {
    startBrowserWorker(handlers);
  }
};
