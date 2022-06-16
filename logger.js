/**
 * Time logger
 */
module.exports = {
    /**
     * Start time logger 
     */
    start: function () {
        console.log(`****** START TIME ****** ${Date.now()}`);
    },
    /**
     * End time logger
     */
    end: function () {
        console.log(`****** END TIME ****** ${Date.now()}`);
    },
    /**
     * Running this function within log limits.
     * @param {*} fn 
     */
    run: function (fn) {
        if (typeof fn === 'function') {
            this.start();
            fn();
            this.end();
        }
    }
}