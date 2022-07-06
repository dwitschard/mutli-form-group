import {Validators} from '@angular/forms';

export const maxDefaultTextLength = Validators.maxLength(45);
export const minDefaultTextLength = Validators.minLength(3);

export const maxShortTextLength = Validators.maxLength(25);
