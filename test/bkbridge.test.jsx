import React from 'react';
import { expect } from 'code';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Bkbridge from '../src/bkbridge';

configure({ adapter: new Adapter() });

describe('Render Corner in background of page', () => {

    let renderedBkBridge;

    beforeEach(() => {
        const tabs = [
            { route: "", component: () => <div>Test Children</div> }
        ];
        renderedBkBridge = shallow(<Bkbridge tabs={tabs}>Test Children</Bkbridge>);
    });

    it('index shall be rendered as div', () => {
        expect(renderedBkBridge.type()).to.be.equal('div');
    })

    it('index shall have corrent children', () => {
        expect(renderedBkBridge.prop('children')).to.be.equal('Test Children');
    })

}) 