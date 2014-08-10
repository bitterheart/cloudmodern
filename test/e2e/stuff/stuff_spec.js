beforeEach(function() {
	browsser.get('http://viralpatel.net/blogs/angularjs-introduction-hello-world-tutorial/');
	//  browser.get('http://127.0.0.1:9000/');
});

it('should find title element', function() {
	//  browser.get('app/index.html');

  browser.debugger();

  element(by.binding('user.name'));
});

