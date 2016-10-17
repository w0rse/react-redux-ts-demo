import * as React from 'react';
import { connect } from 'react-redux';

import {
	Page,
	Toolbar,
} from './components';

import {
	CrossToolButton,
	ForkToolButton,
	TextToolButton,
	ShapeToolButton,
	BrushToolButton,
	LinesToolsDropdown,
} from './containers';

import * as SVG from './svg'


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


export default (props: any) => (
	<Page>
		<Toolbar>

			<CrossToolButton><SVG.ToolCross /></CrossToolButton>

			<LinesToolsDropdown items={ toolsLines } />

			<ForkToolButton><SVG.ToolFork /></ForkToolButton>

			<TextToolButton><SVG.ToolText /></TextToolButton>

			<ShapeToolButton><SVG.ToolShape /></ShapeToolButton>

			<BrushToolButton><SVG.ToolBrush /></BrushToolButton>

		</Toolbar>
	</Page>
);
