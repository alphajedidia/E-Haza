import {StorageProvider} from "../provider";

 class Local_storageSevice implements StorageProvider {
    getItem(key: string): string | null {
        return localStorage.getItem(key);
    }
    removeItem(key: string): void {
        return localStorage.removeItem(key)
    }
    setItem(key: string, value: string): void {
        return localStorage.setItem(key, value);
    }
}

export const localStorageService = new Local_storageSevice();