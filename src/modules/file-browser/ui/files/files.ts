/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2024 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import './files.less';
import { UIGroup } from 'jodit/core/ui';

export class FileBrowserFiles extends UIGroup {
	override className(): string {
		return 'FileBrowserFiles';
	}
}
