import * as React from 'react';
import * as CSSModules from 'react-css-modules';

import {
	Page,
	Toolbar,
	// Dropdown,
	ToolButton,
	ToolDropdown,
	ToolListItem,
} from './components';

import * as SVG from './svg'

const crossTool = { value: 'cross', label: 'Cross' };

const toolsLines = [
	{ value: 'trend-line',       label: <ToolListItem icon={ SVG.ToolLine }>Trend Line</ToolListItem> },
	{ value: 'trend-angle',      label: <ToolListItem icon={ SVG.ToolTrendAngle }>Trend Angle</ToolListItem> },
	{ value: 'horizontal-line',  label: <ToolListItem icon={ SVG.ToolHorizontalLine }>Horizontal Line</ToolListItem> },
	{ value: 'horizontal-ray',   label: <ToolListItem icon={ SVG.ToolHorizontalRay }>Horizontal Ray</ToolListItem> },
	{ value: 'vertical-line',    label: <ToolListItem icon={ SVG.ToolVerticalLine }>Vertical Line</ToolListItem> },
	{ value: 'arrow',            label: <ToolListItem icon={ SVG.ToolArrow }>Arrow</ToolListItem> },
	{ value: 'ray',              label: <ToolListItem icon={ SVG.ToolRay }>Ray</ToolListItem> },
	{ value: 'extended',         label: <ToolListItem icon={ SVG.ToolExtended }>Extended</ToolListItem> },
	{ value: 'parallel-channel', label: <ToolListItem icon={ SVG.ToolParallelChannel }>Parallel Channel</ToolListItem> },
];

export default () => (
	<Page>
		<Toolbar>
		
			<ToolButton active={ true }><SVG.ToolCross /></ToolButton>

			<ToolDropdown items={ toolsLines }><SVG.ToolLine /></ToolDropdown>

			<ToolButton><SVG.ToolFork /></ToolButton>

			<ToolButton><SVG.ToolText /></ToolButton>

			<ToolButton><SVG.ToolShape /></ToolButton>

			<ToolButton><SVG.ToolBrush /></ToolButton>

		</Toolbar>
	</Page>
);
