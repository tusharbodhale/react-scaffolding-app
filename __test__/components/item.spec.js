import React from 'react'
import {shallow} from 'enzyme'
import Item from '../../app/components/item'

describe('[Components] - Item', () => {

	test('should render correctly', () => {

		const node = shallow(<Item/>)
		expect(node.find('.item').exists()).toEqual(true)
	})

})
