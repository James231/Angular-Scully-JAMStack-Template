import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UtilitiesService {

    /**
     * Returns true if input string is in a valid email format. False otherwise.
     */
    public IsEmailValid(x: string): boolean {
        const regexp = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
        return regexp.test(x);
    }

    /**
     * Returns true if a string is in a valid link format. False otherwise.
     */
    public IsLinkValid (link: string): boolean {
        if (!((link.substring(0, 7) == "http://") || (link.substring(0, 8) == "https://"))) {
            return false;
        }
        return true;
    }

    /**
     * Returns true if a string is in a valid price format. False otherwise.
     */
    public IsPriceValid (price: string): boolean {
        if (price == null) {
            return false;
        }
        const regexp = new RegExp("^\\d+(.\\d{1,2})?$");
        if (!regexp.test(price)) {
            return false;
        }
        var number = +price;
        if (number < 0.01) {
            return false;
        }
        return true;
    }
}