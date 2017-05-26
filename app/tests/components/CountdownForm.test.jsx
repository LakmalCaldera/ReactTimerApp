var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
      expect(CountdownForm).toExist();
  });

  it('should call onSetCoundown if valid seconds entered', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  describe('Invalid seconds entered', () => {

    it('should not call if no text entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

    it('should not call if alphabets(abc) text entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = 'abc';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

    it('should not call if alphanumberic(abc123) text entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = 'abc123';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

    it('should not call if alphanumberic(123abc) text entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '123abc';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
  })


});
