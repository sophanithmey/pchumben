import { StorageError } from '../../core/errors/app-error';

export interface StorageService {
  getItem<T>(key: string, defaultValue: T): T;
  setItem<T>(key: string, value: T): void;
  removeItem(key: string): void;
  clear(): void;
}

export class LocalStorageService implements StorageService {
  getItem<T>(key: string, defaultValue: T): T {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) {
        return defaultValue;
      }
      return JSON.parse(raw) as T;
    } catch {
      return defaultValue;
    }
  }

  setItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      throw new StorageError(
        error instanceof Error ? error.message : 'Failed to write to localStorage',
      );
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {
      // ignore
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch {
      // ignore
    }
  }
}

export const appStorage = new LocalStorageService();
