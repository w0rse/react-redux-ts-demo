import * as React from 'react';
import { connect } from 'react-redux';
import { TOOLS_NAMES } from './constants';

import {
	Page,
	Toolbar,
} from './components';

import {
	ToolButtonContainer,
	ToolDropdownContainer,
} from './containers';

import * as SVG from './svg'

export default (props: any) => (
	<Page>
		<Toolbar>

			<ToolButtonContainer name={ TOOLS_NAMES.CROSS }><SVG.ToolCross /></ToolButtonContainer>

			<ToolDropdownContainer items={[
				{ name: TOOLS_NAMES.TREND_LINE,       icon: <SVG.ToolLine />,            label: 'Trend Line' },
				{ name: TOOLS_NAMES.TREND_ANGLE,      icon: <SVG.ToolTrendAngle />,      label: 'Trend Angle' },
				{ name: TOOLS_NAMES.HORIZONTAL_LINE,  icon: <SVG.ToolHorizontalLine />,  label: 'Horizontal Line' },
				{ name: TOOLS_NAMES.HORIZONTAL_RAY,   icon: <SVG.ToolHorizontalRay />,   label: 'Horizontal Ray' },
				{ name: TOOLS_NAMES.VERTICAL_LINE,    icon: <SVG.ToolVerticalLine />,    label: 'Vertical Line' },
				{ name: TOOLS_NAMES.ARROW,            icon: <SVG.ToolArrow />,           label: 'Arrow' },
				{ name: TOOLS_NAMES.RAY,              icon: <SVG.ToolRay />,             label: 'Ray' },
				{ name: TOOLS_NAMES.EXTENDED,         icon: <SVG.ToolExtended />,        label: 'Extended' },
				{ name: TOOLS_NAMES.PARALLEL_CHANNEL, icon: <SVG.ToolParallelChannel />, label: 'Parallel Channel' },
			]} />

			<ToolButtonContainer name={ TOOLS_NAMES.FORK }><SVG.ToolFork /></ToolButtonContainer>

			<ToolButtonContainer name={ TOOLS_NAMES.TEXT }><SVG.ToolText /></ToolButtonContainer>

			<ToolButtonContainer name={ TOOLS_NAMES.SHAPE }><SVG.ToolShape /></ToolButtonContainer>

			<ToolButtonContainer name={ TOOLS_NAMES.BRUSH }><SVG.ToolBrush /></ToolButtonContainer>

		</Toolbar>
	</Page>
);
