import { createWorker } from './browser';

async function initMocks() {
  if (typeof window !== 'undefined') {
    const worker = createWorker();
    worker.start()
  }
}

initMocks()

export {}
