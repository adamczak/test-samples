describe("how to test a service", function() {
    var service;

    beforeEach(function() {
        module("sample");
        inject(function(sampleService) {
            service = sampleService;
        });
    })

    it("should return a number of words", function() {
        var actual = service.words(5);
        expect(actual.split(" ").length).toBe(5);
    });
});

describe("how to test a directive", function() {
    var elem
        ,scope
        ,compiled
        ,service;

    beforeEach(function() {
        module("sample");
    
        inject(function($rootScope, $compile) {
            compile = $compile;
            scope = $rootScope;
        });
    });

    var compileAndDigest = function(html) {
        elem = angular.element(html);
        compiled = compile(elem);
        compiled(scope);
        scope.$digest();
    };

    it("should do something...", function() {
        compileAndDigest("<div sample></div>")        
        //expect(elem.text()).toBe('sample');
    });

});

describe("how to test a filter", function() {
    var filter;
    beforeEach(function() {
        module("sample");
        inject(function(sampleFilter) {
            filter = sampleFilter;
        });
    });

    it("exists", function() {
        expect(filter).not.toBeNull();
    });

    it("should return an item", function() {
        expect(filter(['a'])).toBe('a');
    });
});