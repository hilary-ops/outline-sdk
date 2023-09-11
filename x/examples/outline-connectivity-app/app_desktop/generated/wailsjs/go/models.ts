export namespace shared_backend {
	
	export class Response {
	    result: string;
	    error: string;
	
	    static createFrom(source: any = {}) {
	        return new Response(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.result = source["result"];
	        this.error = source["error"];
	    }
	}

}

