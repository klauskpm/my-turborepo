import { setupWorker, RequestHandler, SetupWorkerApi } from 'msw';

let browserWorker: SetupWorkerApi;

export const createBrowserWorker = (handlers: RequestHandler[]) => {
  browserWorker = setupWorker(...handlers);
  return browserWorker;
};

export const getBrowserWorker = (): SetupWorkerApi => {
  return browserWorker;
};

export const startBrowserWorker = (handlers: RequestHandler[]) => {
  if (browserWorker) {
    console.warn('Worker has started already.');
    return;
  }

  const worker = createBrowserWorker(handlers);
  worker.start();
};
