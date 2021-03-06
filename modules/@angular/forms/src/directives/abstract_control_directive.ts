/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Observable} from '../facade/async';
import {unimplemented} from '../facade/exceptions';
import {isPresent} from '../facade/lang';
import {AbstractControl} from '../model';



/**
 * Base class for control directives.
 *
 * Only used internally in the forms module.
 *
 * @experimental
 */
export abstract class AbstractControlDirective {
  get control(): AbstractControl { return unimplemented(); }

  get value(): any { return isPresent(this.control) ? this.control.value : null; }

  get valid(): boolean { return isPresent(this.control) ? this.control.valid : null; }

  get errors(): {[key: string]: any} {
    return isPresent(this.control) ? this.control.errors : null;
  }

  get pristine(): boolean { return isPresent(this.control) ? this.control.pristine : null; }

  get dirty(): boolean { return isPresent(this.control) ? this.control.dirty : null; }

  get touched(): boolean { return isPresent(this.control) ? this.control.touched : null; }

  get untouched(): boolean { return isPresent(this.control) ? this.control.untouched : null; }

  get statusChanges(): Observable<any> {
    return isPresent(this.control) ? this.control.statusChanges : null;
  }

  get valueChanges(): Observable<any> {
    return isPresent(this.control) ? this.control.valueChanges : null;
  }

  get path(): string[] { return null; }

  reset(value: any = undefined): void {
    if (isPresent(this.control)) this.control.reset(value);
  }
}
