//Libraries
import React, { Component } from 'react';
import $ from 'jquery';

/**
 * Functional React component, renders sidebar containing menu components.
 * @function {object} props - { links }, { sidebarClick } callback for click event.
 * @return {JSX.Element} - Rendered sidebar.
 */
class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		if (this.props.sidebarClick()) {
			$('#sidebarWrapper').removeClass('sidebar-wrapper--open');
		}
	}
	updateOrientation(orientation) {
		if (orientation === 'landscape') {
			$('#sidebar').addClass('sidebar--landscape');
		} else {
			$('#sidebar').removeClass('sidebar--landscape');
		}
	}
	render() {
		const { height, orientation, links, sidebarOpen } = this.props;
		let classList = 'sidebar-wrapper';

		if (sidebarOpen) {
			classList += ' sidebar-wrapper--open';
		}
		this.updateOrientation(orientation);

		return (
			<div id="sidebarWrapper" className={classList} style={{ height: height }} onClick={this.handleClick}>
				<div />
				<div id="sidebar" className="sidebar">
					{links}
				</div>
			</div>
		);
	}
}

export default Sidebar;
