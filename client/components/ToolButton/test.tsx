import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';

import { TOOLS } from '../../constants';
import { ToolButton, IToolButtonProps } from './';

const renderer: TestUtils.ShallowRenderer = TestUtils.createRenderer();

function setup({ isActive = false }: { isActive?: boolean }) {
	const props: IToolButtonProps = {
		isActive: isActive,
		name: TOOLS.CROSS,
		onClick: jest.fn(),
	};

	renderer.render(<ToolButton { ...props } />);

	return {
		el: renderer.getRenderOutput(),
		props,
	};
}

describe('Components', () => {

	describe('<ToolButton />', () => {

		it('Should render correctly', () => {
			const { el, props } = setup({});
			const className = el.props.className;

			expect(el.type).toBe('div');
			expect(className).toMatch(/button/);
			expect(className).not.toMatch(/isActive/);
		});

		it('Should render active state', () => {
			const { el, props } = setup({ isActive: true });

			expect(el.props.className).toMatch(/isActive/);
		});

	});

});
