import * as React from 'react';
import { TOOLS } from './constants';

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

			<ToolButtonContainer name={ TOOLS.CROSS }><SVG.ToolCross /></ToolButtonContainer>

			<ToolDropdownContainer items={[
				{ name: TOOLS.TREND_LINE,       icon: <SVG.ToolLine />,            label: 'Trend Line' },
				{ name: TOOLS.TREND_ANGLE,      icon: <SVG.ToolTrendAngle />,      label: 'Trend Angle' },
				{ name: TOOLS.HORIZONTAL_LINE,  icon: <SVG.ToolHorizontalLine />,  label: 'Horizontal Line' },
				{ name: TOOLS.HORIZONTAL_RAY,   icon: <SVG.ToolHorizontalRay />,   label: 'Horizontal Ray' },
				{ name: TOOLS.VERTICAL_LINE,    icon: <SVG.ToolVerticalLine />,    label: 'Vertical Line' },
				{ name: TOOLS.ARROW,            icon: <SVG.ToolArrow />,           label: 'Arrow' },
				{ name: TOOLS.RAY,              icon: <SVG.ToolRay />,             label: 'Ray' },
				{ name: TOOLS.EXTENDED,         icon: <SVG.ToolExtended />,        label: 'Extended' },
				{ name: TOOLS.PARALLEL_CHANNEL, icon: <SVG.ToolParallelChannel />, label: 'Parallel Channel' },
			]} />

			<ToolButtonContainer name={ TOOLS.FORK }><SVG.ToolFork /></ToolButtonContainer>

			<ToolButtonContainer name={ TOOLS.TEXT }><SVG.ToolText /></ToolButtonContainer>

			<ToolButtonContainer name={ TOOLS.SHAPE }><SVG.ToolShape /></ToolButtonContainer>

			<ToolButtonContainer name={ TOOLS.BRUSH }><SVG.ToolBrush /></ToolButtonContainer>

		</Toolbar>
	</Page>
);
