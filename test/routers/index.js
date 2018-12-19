const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");
const nock = require("nock");
const helper = require("../../app/helpers/index");

const quoteFixture = require("../fixtures/quote.json");

const expect = chai.expect;

chai.use(chaiHttp);

describe("general API router", () => {
  let response;

  before("stub http request", () => {
    nock("http://quotes.stormconsultancy.co.uk").persist()
      .get(/\/random.json/).reply(200, quoteFixture);

    const stub = sinon.stub(helper, "replace_random_entries");
    stub.onCall(0).returns(quoteFixture.quote.split(/\s+/));
  });

  before("perform GET request", (done) => {

    chai.request("localhost:3000")
      .get("/")
      .end((err, res) => {
        response = res;

        done();
      });
  });

  it("response should not be 200", () => {
    expect(response).to.have.status(200);
  });

  it("response should include stubbed quote API call", () => {
    expect(response.res.text).to.include(quoteFixture.quote);
  });
});
