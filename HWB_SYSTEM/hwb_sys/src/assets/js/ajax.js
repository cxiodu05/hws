export default {
    /**
    * @param {string} url 
    * @returns {Promise<any>}
    */
    GET: function (url) {
        return (
            new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.timeout = 10000;
                xhr.open('GET', url, true);
                xhr.send();
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            resolve(xhr.response);
                        } else {
                            reject(xhr.status);
                        }
                    }
                };
                xhr.ontimeout = () => {
                    reject('请求超时');
                };
            })
        );
    },
    /**
    * @param {string} url 
    * @param {string} params 
    * @returns {Promise}
    */
    POST: function (url, params) {
        return (
            new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest;
                xhr.responseType = 'json';
                xhr.timeout = 10000;
                xhr.open('POST', url, true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.send(params);
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            resolve(xhr.response);
                        } else {
                            reject(xhr.status);
                        }
                    }
                };
                xhr.ontimeout = () => {
                    reject('请求超时');
                };
            })
        );
    },

    /**
     * @param {object} obj 
     * @returns {string}
     */
    parseParamString: function (obj) {
        let obj_props = [];
        for (let key in obj) {
            obj_props.push(`${key}=${obj[key]}`);
        }
        return obj_props.join('&');
    }
}


