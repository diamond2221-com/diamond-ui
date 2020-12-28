import Vue from 'vue'
import { DmButton } from './button'
import { ElementUIComponent, ElementUIComponentSize, ElementUIHorizontalAlignment } from './component'
import { ElDatePicker } from './date-picker'
import { DmInput } from './input'
import { ElPopover } from './popover'
import { ElTransfer } from './transfer'


export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of diamond-ui */
export const version: string

/**
 * Install all diamond-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(ElementUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** ElementUI component common definition */
export type Component = ElementUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = ElementUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = ElementUIHorizontalAlignment

/** Button Component */
export class Button extends DmButton {}

/** Input Component */
export class Input extends DmInput {}

/** Date Picker Component */
export class DatePicker extends ElDatePicker { }

/** Popover Component */
export class Popover extends ElPopover {}

/** Transfer Component */
export class Transfer extends ElTransfer {}
