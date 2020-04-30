import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CookieService {

    /**
     * Sets value in cookie dictionary
     * @param {string} key   Dictionary key
     * @param {string} value Dictionary value to set
     */
    public SetValue(key: string, value: string): void {
        window.localStorage.setItem(key, value);
    }

    /**
     * Retrieves value from cookie dictionary
     * @param  {string} key Key to get value from
     * @return {string}     Value corresponding to given key. Empty string if null.
     */
    public GetValue(key: string) : string {
        let item = window.localStorage.getItem(key);
        if (item == null) {
            return "";
        }
        return item;
    }

    /**
     * Removes entry from cookie dictionary
     * @param  {string}  key Key of entry to remove
     * @return {boolean}     True if successfully removed, false if didn't exist
     */
    public RemoveValue(key: string): boolean {
        let item = window.localStorage.getItem(key);
        if (item == null) {
            return false;
        }
        window.localStorage.removeItem(key);
        return true;
    }
}