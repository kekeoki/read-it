/**
 * Created by sammy on 4/11/17.
 */
const should = require("should");
const helper = require("../../app_api/helpers/ctrl.helpers");
describe('CTRL Helpers', () => {

    describe('Scraping - Get Image from Site', function() {
        //scraping can take a lot of time.
        this.timeout(5000);

        it('should be possible to get an image', function(done) {
            helper.getPageImg("https://www.google.com///")
            .then(resp => {
                should.exist(resp);
                console.log(resp);
                done();
            })
            .catch(err => {
                done(err);
            });
        });
    });
});