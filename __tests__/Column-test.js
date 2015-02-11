jest.dontMock('../dist/components/Column.js');

var React = require('react/addons');
var Column = require('../dist/components/Column.js')(React);
var TestUtils = React.addons.TestUtils;

describe('Column', function () {
  describe('element type', function () {
    it('should be a div', function () {
      var el = TestUtils.renderIntoDocument(
        <Column />
      );

      expect(el['_renderedComponent']['_tag']).toEqual('div');
    });
  });

  describe('element class name', function () {
    it('should have xs column class', function () {
      var el = TestUtils.renderIntoDocument(
        <Column extraSmall={ 1 } />
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-xs-1');
    });

    it('should have small column class', function () {
      var el = TestUtils.renderIntoDocument(
        <Column small={ 1 } />
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-sm-1');
    });

    it('should have medium column class', function () {
      var el = TestUtils.renderIntoDocument(
        <Column medium={ 1 } />
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-md-1');
    });

    it('should have large column class', function () {
      var el = TestUtils.renderIntoDocument(
        <Column large={ 1 } />
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-lg-1');
    });

    it ('should have custom class name', function () {
      var el = TestUtils.renderIntoDocument(
        <Column large={ 1 }
                className={ 'some-class' } />
      );

      expect(el['_renderedComponent']['props']['className'].indexOf('some-class') >= 0).toEqual(true);
    });
  });

  describe('offset', function () {
    it('should have xs offset class', function () {
      var el = TestUtils.renderIntoDocument(
        <Column extraSmallOffset={ 1 } />
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-xs-offset-1');
    });

    it('should have small offset class', function () {
      var el = TestUtils.renderIntoDocument(
        <Column smallOffset={ 1 } />
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-sm-offset-1');
    });

    it('should have medium offset class', function () {
      var el = TestUtils.renderIntoDocument(
        <Column mediumOffset={ 1 } />
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-md-offset-1');
    });

    it('should have large offset class', function () {
      var el = TestUtils.renderIntoDocument(
        <Column largeOffset={ 1 } />
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-lg-offset-1');
    });
  });

  describe('identical column numbers', function () {
    it('should ignore sm', function () {
      var el = TestUtils.renderIntoDocument(
        <Column extraSmall={ 1 }
                small={ 1 } />
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-xs-1');
    });

    it('should ignore md', function () {
      var el = TestUtils.renderIntoDocument(
        <Column small={ 1 }
                medium={ 1 } />
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-sm-1');
    });

    it('should ignore lg', function () {
      var el = TestUtils.renderIntoDocument(
        <Column medium={ 1 }
                large={ 1 } />
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-md-1');
    });

    it('should ignore sm, md, lg', function () {
      var el = TestUtils.renderIntoDocument(
        <Column extraSmall={ 1 }
                small={ 1 }
                medium={ 1 }
                large={ 1 } />
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-xs-1');
    });
  });

  describe('identical offset numbers', function () {
    it('should ignore sm-offset', function () {
      var el = TestUtils.renderIntoDocument(
        <Column extraSmallOffset={ 1 }
                smallOffset={ 1 }/>
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-xs-offset-1');
    });

    it('should ignore md-offset', function () {
      var el = TestUtils.renderIntoDocument(
        <Column smallOffset={ 1 }
                mediumOffset={ 1 }/>
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-sm-offset-1');
    });

    it('should ignore lg-offset', function () {
      var el = TestUtils.renderIntoDocument(
        <Column mediumOffset={ 1 }
                largeOffset={ 1 }/>
      );

      expect(el['_renderedComponent']['props']['className'].trim()).toEqual('col-md-offset-1');
    });
  });
});
