import * as React from 'react';
import * as CSSModules from 'react-css-modules';

import {
	Page,
	Toolbar,
	ToolButton,
	ToolDropdown,
} from './components';

import * as SVG from './svg'

const crossTool = { value: 'cross', label: 'Cross' };

const toolsLines = [
	{ value: 'trend-line',       icon: <SVG.ToolLine />,            label: 'Trend Line' },
	{ value: 'trend-angle',      icon: <SVG.ToolTrendAngle />,      label: 'Trend Angle' },
	{ value: 'horizontal-line',  icon: <SVG.ToolHorizontalLine />,  label: 'Horizontal Line' },
	{ value: 'horizontal-ray',   icon: <SVG.ToolHorizontalRay />,   label: 'Horizontal Ray' },
	{ value: 'vertical-line',    icon: <SVG.ToolVerticalLine />,    label: 'Vertical Line' },
	{ value: 'arrow',            icon: <SVG.ToolArrow />,           label: 'Arrow' },
	{ value: 'ray',              icon: <SVG.ToolRay />,             label: 'Ray' },
	{ value: 'extended',         icon: <SVG.ToolExtended />,        label: 'Extended' },
	{ value: 'parallel-channel', icon: <SVG.ToolParallelChannel />, label: 'Parallel Channel' },
];

export default () => (
	<Page>
		<Toolbar>
		
			<ToolButton isActive={ true }><SVG.ToolCross /></ToolButton>

			<ToolDropdown items={ toolsLines } />

			<ToolButton><SVG.ToolFork /></ToolButton>

			<ToolButton><SVG.ToolText /></ToolButton>

			<ToolButton><SVG.ToolShape /></ToolButton>

			<ToolButton><SVG.ToolBrush /></ToolButton>

		</Toolbar>
	</Page>
);
