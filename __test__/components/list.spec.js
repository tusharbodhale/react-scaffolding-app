import React from 'react'
import {shallow} from 'enzyme'
import List from '../../app/components/list'

describe('[Components] - List', () => {

	test('should render correctly', () => {

		const node = shallow(<List/>)
		expect(node.find('.list').exists()).toEqual(true)
	})

})
