describe("Geocoded method access", function() {
  var geocoded = new Geocoded();

  it ("Geocoded has getCoordinates method", function() {
    expect(geocoded.getCoordinates).toBeDefined();
  });
  it ("Geocoded has getLatitude method", function() {
    expect(geocoded.getLatitude).toBeDefined();
  });
  it ("Geocoded has getLongitude method", function() {
    expect(geocoded.getLongitude).toBeDefined();
  });
  it ("Geocoded has getBounds method", function() {
    expect(geocoded.getBounds).toBeDefined();
  });
  it ("Geocoded has getStreetNumber method", function() {
    expect(geocoded.getStreetNumber).toBeDefined();
  });
  it ("Geocoded has getStreetName method", function() {
    expect(geocoded.getStreetName).toBeDefined();
  });
  it ("Geocoded has getCity method", function() {
    expect(geocoded.getCity).toBeDefined();
  });
  it ("Geocoded has getZipcode method", function() {
    expect(geocoded.getZipcode).toBeDefined();
  });
  it ("Geocoded has getCityDistrict method", function() {
    expect(geocoded.getCityDistrict).toBeDefined();
  });
  it ("Geocoded has getCounty method", function() {
    expect(geocoded.getCounty).toBeDefined();
  });
  it ("Geocoded has getCountyCode method", function() {
    expect(geocoded.getCountyCode).toBeDefined();
  });
  it ("Geocoded has getRegion method", function() {
    expect(geocoded.getRegion).toBeDefined();
  });
});

describe("Geocoded returns data properly", function() {
  var geocoded = new Geocoded();
  geocoded.latitude = 38.8978378;
  geocoded.longitude = -77.0365123;
  geocoded.streetNumber = "1600";
  geocoded.streetName = "Pennsylvania Avenue Northwest";

  it ("Geocoded returns proper coordinates", function() {
    var expectedCoordinates = [38.8978378, -77.0365123];
    expect(geocoded.getCoordinates()).toEqual(expectedCoordinates);
  });

  it ("Geocoded returns latitude/longitude individually", function() {
    expect(geocoded.getLatitude()).toEqual(38.8978378);
    expect(geocoded.getLongitude()).toEqual(-77.0365123);
  });

  it ("Geocoded returns proper Street Number", function() {
    expect(geocoded.getStreetNumber()).toEqual("1600");
  });

  it ("Geocoded returns proper Street Name", function() {
    expect(geocoded.getStreetName()).toEqual("Pennsylvania Avenue Northwest");
  });

});