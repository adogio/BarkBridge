import React from 'react';
import { expect } from 'code';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Bkbridge from '../src/bkbridge';

configure({ adapter: new Adapter() });

describe('Render Corner in background of page', () => {

    let renderedBkBridge;

    beforeEach(() => {
        renderedBkBridge = shallow(<Bkbridge>Test Children</Bkbridge>);
    });

    it('card shall be rendered as div', () => {
        expect(renderedBkBridge.type()).to.be.equal('div');
    })

    it('card shall have corrent children', () => {
        expect(renderedBkBridge.prop('children')).to.be.equal('Test Children');
    })

    it('card shall have correct style', () => {
        expect(renderedBkBridge.prop('style').height).to.be.equal('25vh');
        expect(renderedBkBridge.prop('style').position).to.be.equal('absolute');
    })

}) 