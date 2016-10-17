import * as React from 'react';
import { connect } from 'react-redux';
import { TOOLS_NAMES } from './model';

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
	{ value: TOOLS_NAMES.TREND_LINE,       icon: <SVG.ToolLine />,            label: 'Trend Line' },
	{ value: TOOLS_NAMES.TREND_ANGLE,      icon: <SVG.ToolTrendAngle />,      label: 'Trend Angle' },
	{ value: TOOLS_NAMES.HORIZONTAL_LINE,  icon: <SVG.ToolHorizontalLine />,  label: 'Horizontal Line' },
	{ value: TOOLS_NAMES.HORIZONTAL_RAY,   icon: <SVG.ToolHorizontalRay />,   label: 'Horizontal Ray' },
	{ value: TOOLS_NAMES.VERTICAL_LINE,    icon: <SVG.ToolVerticalLine />,    label: 'Vertical Line' },
	{ value: TOOLS_NAMES.ARROW,            icon: <SVG.ToolArrow />,           label: 'Arrow' },
	{ value: TOOLS_NAMES.RAY,              icon: <SVG.ToolRay />,             label: 'Ray' },
	{ value: TOOLS_NAMES.EXTENDED,         icon: <SVG.ToolExtended />,        label: 'Extended' },
	{ value: TOOLS_NAMES.PARALLEL_CHANNEL, icon: <SVG.ToolParallelChannel />, label: 'Parallel Channel' },
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
