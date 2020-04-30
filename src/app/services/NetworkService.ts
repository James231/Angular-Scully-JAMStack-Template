import { Injectable } from "@angular/core";

export enum HttpMethod {
    POST,
    PUT,
    PATCH,
    DELETE
}

/**
 * Callback interface for responses without a body.
 */
export interface ResponseHandler {
    (status: number): void;
}

/**
 * Callback interface for responses with a JSON body parsed into the given type.
 * @type                     type          Response object to parse from JSON.
 */
interface ResultHandler<T> {
    (status: number, result: T): void;
}

@Injectable({providedIn: 'root'})
export class NetworkService {

    // For requests involving empty or json inputs and outputs only (no forms or plaintext)

    readonly baseDomain: string = "https://api.github.com";

    // Note: Generics don't have to be provided, in this case T and U are empty types so don't read/write body content.

    /**
     * [GetRequest description]
     * @type                     type          Response object to parse from JSON.
     * @param {string}           path          Endpoint Uri (excluding base domain).
     * @param {ResponseHandler}  respHandler   (Optional) Callback to handle status code. Use if result doesn't include body.
     * @param {ResultHandler<U>} resultHandler (Optional) Callback to handle status code and object parsed from response body JSON.
     */
    public GetRequest<T>(path: string, respHandler?: ResponseHandler, resultHandler?: ResultHandler<T>): void {
        fetch(this.GetFullPath(path)).then((response) => {
            let status = response.status;
            if (respHandler != null) {
                respHandler(status);
            }
            if (status == 200) {
                if (resultHandler != null) {
                    response.json().then(function (json) {
                        var responseObj : T = json as unknown as T;
                        resultHandler(status, responseObj);
                    });
                }
            }
        })
    }

    /**
     * Sends a HTTP request
     * @type                     type          Request object to send as JSON.
     * @type                     type          Response object to parse from JSON.
     * @param {HttpMethod}       method        HTTP Method to use.
     * @param {string}           path          Endpoint Uri (excluding base domain).
     * @param {T}                jsonObj       (Optional) Data object to encode in body.
     * @param {ResponseHandler}  respHandler   (Optional) Callback to handle status code. Use if result doesn't include body.
     * @param {ResultHandler<U>} resultHandler (Optional) Callback to handle status code and object parsed from response body JSON.
     */
    public SendRequest<T,U>(method: HttpMethod, path: string, jsonObj: T, respHandler?: ResponseHandler, resultHandler?: ResultHandler<U>): void {
        if (jsonObj != null) {
            let bodyContent = JSON.stringify(jsonObj);
            this.requestWithBody(method, this.GetFullPath(path), bodyContent)
                .then((response) => {
                    let status = response.status;
                    if (respHandler != null) {
                        respHandler(status);
                    }
                    if (status == 200) {
                        if (resultHandler != null) {
                            response.json().then(function (json) {
                                var responseObj : U = json as unknown as U;
                                resultHandler(status, responseObj);
                            });
                        }
                    }
                }); 
        } else {
            this.requestWithoutBody(method, this.GetFullPath(path))
                .then((response) => {
                    let status = response.status;
                    if (respHandler != null) {
                        respHandler(status);
                    }
                    if (status == 200) {
                        if (resultHandler != null) {
                            response.json().then(function (json) {
                                var responseObj : U = json as unknown as U;
                                resultHandler(status, responseObj);
                            });
                        }
                    }
                }); 
        }
    }

    /**
     * Handler which executes on every response before request specific callbacks.
     * @param  {number}  status Response Status Code
     * @return {boolean}        True if handled by this handler
     */
    public BaseHandler(status: number): boolean {
        switch (status) {
            /* Add default responses here, for example;
            case "502":
                // 502 error
                dialogs.alert("An unexpected problem ocurred.");
                return true;
                break;
            */
        }
        return false;
    }

    public GetFullPath(path: string): string {
        if (path[0] == '/') {
            return this.baseDomain + path;
        }
        return this.baseDomain + '/' + path;
    }

    public async requestWithBody(method: HttpMethod, fullUri: string, bodyContent: string) {
        const response = await fetch(fullUri, {
            method: this.methodToString(method),
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: bodyContent
        });
        return response;
    }

    public async requestWithoutBody(method: HttpMethod, fullUri: string) {
        const response = await fetch(fullUri, {
            method: this.methodToString(method),
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        });
        return response;
    }

    public methodToString(method: HttpMethod): string {
        switch(method) { 
            case HttpMethod.POST: { 
                return 'POST';
                break; 
            }
            case HttpMethod.PUT: { 
                return 'PUT';
                break; 
            }
            case HttpMethod.PATCH: { 
                return 'PATCH';
                break; 
            }
            case HttpMethod.DELETE: { 
                return 'DELETE';
                break; 
            }
        }
        return "GET";
    }
}