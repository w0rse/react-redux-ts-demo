import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

import { TOOLS } from '../../constants';
import { ToolButton, IToolButtonProps } from './';

const renderer = TestUtils.createRenderer();

function setup({ isActive = false }: { isActive?: boolean }) {
	const props: IToolButtonProps = {
		name: TOOLS.CROSS,
		isActive: isActive,
		onClick: jest.fn(),
	};

	renderer.render(<ToolButton { ...props } />);

	return {
		el: renderer.getRenderOutput(),
		props
	};
}

describe('Components', () => {

	describe('<ToolButton />', () => {

		it('Should render correctly', () => {
			const { el, props } = setup({});
			const className = el.props.className;

			expect(el.type).toBe('div');
			expect(className.indexOf('button')).not.toBe(-1);
			expect(className.indexOf('isActive')).toBe(-1);
		});

		it('Should render active state', () => {
			const { el, props } = setup({ isActive: true });

			expect(el.props.className.indexOf('isActive')).not.toBe(-1);
		});

	});

});
