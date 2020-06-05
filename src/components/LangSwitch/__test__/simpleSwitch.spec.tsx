import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { getLocale, setLocale } from 'umi';
import SimpleSwitch from '../simpleSwitch';

Enzyme.configure({ adapter: new Adapter() });

describe('simpleLangSwitch', () => {
  const locales: [string, string] = ['zh-CN', 'en-US'];
  const btn = shallow(<SimpleSwitch locales={locales} />);

  // test('default lang is zh-CN', () => {
  //   expect(getLocale()).toEqual('zh-CN');
  // });

  test('default btn text is English', () => {
    expect(btn.text()).toEqual('English');
  });
});
