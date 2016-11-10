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

import * as SVG from './svg';

export function App(props: any) {
	return (
		<Page>
			<Toolbar>

				<ToolButtonContainer name={ TOOLS.CROSS }><SVG.ToolCross /></ToolButtonContainer>

				<ToolDropdownContainer items={[
					{ icon: <SVG.ToolLine />,            label: 'Trend Line',       name: TOOLS.LINE_TREND            },
					{ icon: <SVG.ToolTrendAngle />,      label: 'Trend Angle',      name: TOOLS.LINE_TREND_ANGLE      },
					{ icon: <SVG.ToolHorizontalLine />,  label: 'Horizontal Line',  name: TOOLS.LINE_HORIZONTAL       },
					{ icon: <SVG.ToolHorizontalRay />,   label: 'Horizontal Ray',   name: TOOLS.LINE_HORIZONTAL_RAY   },
					{ icon: <SVG.ToolVerticalLine />,    label: 'Vertical Line',    name: TOOLS.LINE_VERTICAL         },
					{ icon: <SVG.ToolArrow />,           label: 'Arrow',            name: TOOLS.LINE_ARROW            },
					{ icon: <SVG.ToolRay />,             label: 'Ray',              name: TOOLS.LINE_RAY              },
					{ icon: <SVG.ToolExtended />,        label: 'Extended',         name: TOOLS.LINE_EXTENDED         },
					{ icon: <SVG.ToolParallelChannel />, label: 'Parallel Channel', name: TOOLS.LINE_PARALLEL_CHANNEL },
				]} />

				<ToolButtonContainer name={ TOOLS.FORK }><SVG.ToolFork /></ToolButtonContainer>

				<ToolButtonContainer name={ TOOLS.TEXT }><SVG.ToolText /></ToolButtonContainer>

				<ToolButtonContainer name={ TOOLS.SHAPE }><SVG.ToolShape /></ToolButtonContainer>

				<ToolButtonContainer name={ TOOLS.BRUSH }><SVG.ToolBrush /></ToolButtonContainer>

			</Toolbar>
		</Page>
	);
};
