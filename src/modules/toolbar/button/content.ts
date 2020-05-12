import {
	IControlTypeContent,
	IToolbarButton,
	IViewBased,
	Nullable
} from '../../../types';
import { UIButton } from '../../../core/ui/button';
import { isString } from '../../../core/helpers/checker';
import { Dom } from '../../../core/dom';

export class ToolbarContent<T extends IViewBased = IViewBased> extends UIButton
	implements IToolbarButton {
	/** @override */
	update() {
		const content = this.control.getContent(this.j, this.control, this);
		Dom.detach(this.container)
		this.container.appendChild(isString(content) ? this.j.create.fromHTML(content) : content);
		super.update();
	}

	/** @override */
	protected createContainer(): HTMLElement {
		return this.j.c.span(this.componentName);
	}

	constructor(
		jodit: T,
		readonly control: IControlTypeContent,
		readonly target: Nullable<HTMLElement> = null
	) {
		super(jodit);
	}
}