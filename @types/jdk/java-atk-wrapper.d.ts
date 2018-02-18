declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkAction$ActionRunner implements java.lang.Runnable {
                public constructor(arg0: org.GNOME.Accessibility.AtkAction, arg1: javax.accessibility.AccessibleAction, arg2: int)
                public run(): void
                public static class: java.lang.Class<any>
            }
            class AtkAction$ActionRunner$$Lambda implements java.lang.Runnable {
                public constructor(arg0: org.GNOME.Accessibility.AtkAction, arg1: javax.accessibility.AccessibleAction, arg2: int)
            }
            class AtkAction {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public do_action(arg0: int): boolean
                public get_n_actions(): int
                public get_description(arg0: int): string
                public setDescription(arg0: int, arg1: string): boolean
                public get_name(arg0: int): string
                public getLocalizedName(arg0: int): string
                public get_keybinding(arg0: int): string
                public static class: java.lang.Class<any>
            }
            class AtkComponent {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public contains(arg0: int, arg1: int, arg2: int): boolean
                public get_accessible_at_point(arg0: int, arg1: int, arg2: int): javax.accessibility.AccessibleContext
                public grab_focus(): boolean
                public get_position(arg0: int): java.awt.Point
                public set_extents(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): java.awt.Rectangle
                public get_extents(): java.awt.Rectangle
                public get_layer(): int
                public static class: java.lang.Class<any>
            }
            interface AtkCoordType {
                SCREEN: int
                WINDOW: int
            }
            class AtkEditableText extends org.GNOME.Accessibility.AtkText {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public set_text_contents(arg0: string): void
                public insert_text(arg0: string, arg1: int): void
                public copy_text(arg0: int, arg1: int): void
                public cut_text(arg0: int, arg1: int): void
                public delete_text(arg0: int, arg1: int): void
                public paste_text(arg0: int): void
                public setRunAttributes(arg0: javax.swing.text.AttributeSet, arg1: int, arg2: int): boolean
                public static class: java.lang.Class<any>
            }
            class AtkHyperlink {
                public constructor(arg0: javax.accessibility.AccessibleHyperlink)
                public get_uri(arg0: int): string
                public get_object(arg0: int): java.lang.Object
                public get_end_index(): int
                public get_start_index(): int
                public is_valid(): boolean
                public get_n_anchors(): int
                public static class: java.lang.Class<any>
            }
            class AtkHypertext extends org.GNOME.Accessibility.AtkText {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public get_link(arg0: int): org.GNOME.Accessibility.AtkHyperlink
                public get_n_links(): int
                public get_link_index(arg0: int): int
                public static class: java.lang.Class<any>
            }
            class AtkImage {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public get_image_position(arg0: int): java.awt.Point
                public get_image_description(): string
                public get_image_size(): java.awt.Dimension
                public static class: java.lang.Class<any>
            }
            class AtkKeyEvent {
                public static ATK_KEY_EVENT_PRESSED: int
                public static ATK_KEY_EVENT_RELEASED: int
                public type: int
                public isShiftKeyDown: boolean
                public isCtrlKeyDown: boolean
                public isAltKeyDown: boolean
                public isMetaKeyDown: boolean
                public keyval: int
                public string: string
                public keycode: int
                public timestamp: int
                public constructor(arg0: java.awt.event.KeyEvent)
                public static class: java.lang.Class<any>
            }
            interface AtkLayer {
                INVALID: int
                BACKGROUND: int
                CANVAS: int
                WIDGET: int
                MDI: int
                POPUP: int
                OVERLAY: int
                WINDOW: int
            }
            class AtkSelection {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public add_selection(arg0: int): boolean
                public clear_selection(): boolean
                public ref_selection(arg0: int): javax.accessibility.Accessible
                public get_selection_count(): int
                public is_child_selected(arg0: int): boolean
                public remove_selection(arg0: int): boolean
                public select_all_selection(): boolean
                public static class: java.lang.Class<any>
            }
            interface AtkSignal {
                TEXT_CARET_MOVED: int
                TEXT_PROPERTY_CHANGED_INSERT: int
                TEXT_PROPERTY_CHANGED_DELETE: int
                TEXT_PROPERTY_CHANGED_REPLACE: int
                OBJECT_CHILDREN_CHANGED_ADD: int
                OBJECT_CHILDREN_CHANGED_REMOVE: int
                OBJECT_ACTIVE_DESCENDANT_CHANGED: int
                OBJECT_SELECTION_CHANGED: int
                OBJECT_VISIBLE_DATA_CHANGED: int
                OBJECT_PROPERTY_CHANGE_ACCESSIBLE_ACTIONS: int
                OBJECT_PROPERTY_CHANGE_ACCESSIBLE_VALUE: int
                OBJECT_PROPERTY_CHANGE_ACCESSIBLE_DESCRIPTION: int
                OBJECT_PROPERTY_CHANGE_ACCESSIBLE_NAME: int
                OBJECT_PROPERTY_CHANGE_ACCESSIBLE_HYPERTEXT_OFFSET: int
                OBJECT_PROPERTY_CHANGE_ACCESSIBLE_TABLE_CAPTION: int
                OBJECT_PROPERTY_CHANGE_ACCESSIBLE_TABLE_SUMMARY: int
                OBJECT_PROPERTY_CHANGE_ACCESSIBLE_TABLE_COLUMN_HEADER: int
                OBJECT_PROPERTY_CHANGE_ACCESSIBLE_TABLE_COLUMN_DESCRIPTION: int
                OBJECT_PROPERTY_CHANGE_ACCESSIBLE_TABLE_ROW_HEADER: int
                OBJECT_PROPERTY_CHANGE_ACCESSIBLE_TABLE_ROW_DESCRIPTION: int
                TABLE_MODEL_CHANGED: int
                TEXT_PROPERTY_CHANGED: int
            }
            class AtkTable {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public ref_at(arg0: int, arg1: int): javax.accessibility.AccessibleContext
                public get_column_at_index(arg0: int): int
                public get_row_at_index(arg0: int): int
                public get_n_columns(): int
                public get_n_rows(): int
                public get_column_extent_at(arg0: int, arg1: int): int
                public get_row_extent_at(arg0: int, arg1: int): int
                public get_caption(): javax.accessibility.AccessibleContext
                public setCaption(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
                public get_column_description(arg0: int): string
                public setColumnDescription(arg0: int, arg1: string): void
                public get_row_description(arg0: int): string
                public setRowDescription(arg0: int, arg1: string): void
                public get_column_header(arg0: int): javax.accessibility.AccessibleContext
                public setColumnHeader(arg0: int, arg1: javax.accessibility.AccessibleTable): void
                public get_row_header(arg0: int): javax.accessibility.AccessibleContext
                public setRowHeader(arg0: int, arg1: javax.accessibility.AccessibleTable): void
                public get_summary(): javax.accessibility.AccessibleContext
                public setSummary(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
                public get_selected_columns(): int[]
                public get_selected_rows(): int[]
                public is_column_selected(arg0: int): boolean
                public is_row_selected(arg0: int): boolean
                public is_selected(arg0: int, arg1: int): boolean
                public addColumnSelection(arg0: int): boolean
                public addRowSelection(arg0: int): boolean
                public remove_column_selection(arg0: int): boolean
                public remove_row_selection(arg0: int): boolean
                public static class: java.lang.Class<any>
            }
            class AtkTableCell extends org.GNOME.Accessibility.AtkTable {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public getTable(): javax.accessibility.AccessibleTable
                public getPosition(arg0: int, arg1: int): boolean
                public getRowColumnSpan(arg0: int, arg1: int, arg2: int, arg3: int): boolean
                public getRowSpan(): int
                public getColumnSpan(): int
                public static class: java.lang.Class<any>
            }
            class AtkText$StringSequence {
                public str: string
                public start_offset: int
                public end_offset: int
                public constructor(arg0: org.GNOME.Accessibility.AtkText, arg1: string, arg2: int, arg3: int)
                public static class: java.lang.Class<any>
            }
            class AtkText {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public get_text(arg0: int, arg1: int): string
                public get_character_at_offset(arg0: int): char
                public get_text_at_offset(arg0: int, arg1: int): org.GNOME.Accessibility.AtkText$StringSequence
                public get_caret_offset(): int
                public get_character_extents(arg0: int, arg1: int): java.awt.Rectangle
                public get_character_count(): int
                public get_offset_at_point(arg0: int, arg1: int, arg2: int): int
                public get_range_extents(arg0: int, arg1: int, arg2: int): java.awt.Rectangle
                public get_n_selections(): int
                public get_selection(): org.GNOME.Accessibility.AtkText$StringSequence
                public add_selection(arg0: int, arg1: int): boolean
                public remove_selection(arg0: int): boolean
                public set_selection(arg0: int, arg1: int, arg2: int): boolean
                public set_caret_offset(arg0: int): boolean
                public static class: java.lang.Class<any>
            }
            interface AtkTextBoundary {
                CHAR: int
                WORD_START: int
                WORD_END: int
                SENTENCE_START: int
                SENTENCE_END: int
                LINE_START: int
                LINE_END: int
            }
            interface AtkTextGranularity {
                CHAR: int
                WORD: int
                SENTENCE: int
                LINE: int
                PARAGRAPH: int
            }
            class AtkValue {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public get_current_value(): java.lang.Number
                public getMaximumValue(): double
                public getMinimumValue(): double
                public setValue(arg0: java.lang.Number): void
                public getIncrement(): double
                public static class: java.lang.Class<any>
            }
            class AtkWrapper$1 extends java.awt.event.WindowAdapter {
                public windowActivated(arg0: java.awt.event.WindowEvent): void
                public windowDeactivated(arg0: java.awt.event.WindowEvent): void
                public windowStateChanged(arg0: java.awt.event.WindowEvent): void
                public windowDeiconified(arg0: java.awt.event.WindowEvent): void
                public windowIconified(arg0: java.awt.event.WindowEvent): void
                public windowOpened(arg0: java.awt.event.WindowEvent): void
                public windowClosed(arg0: java.awt.event.WindowEvent): void
                public windowClosing(arg0: java.awt.event.WindowEvent): void
                public windowGainedFocus(arg0: java.awt.event.WindowEvent): void
                public windowLostFocus(arg0: java.awt.event.WindowEvent): void
                public static class: java.lang.Class<any>
            }
            class AtkWrapper$2 extends java.awt.event.ComponentAdapter {
                public componentResized(arg0: java.awt.event.ComponentEvent): void
                public componentMoved(arg0: java.awt.event.ComponentEvent): void
                public componentShown(arg0: java.awt.event.ComponentEvent): void
                public componentHidden(arg0: java.awt.event.ComponentEvent): void
                public static class: java.lang.Class<any>
            }
            class AtkWrapper$3 implements java.awt.event.AWTEventListener {
                public eventDispatched(arg0: java.awt.AWTEvent): void
                public static class: java.lang.Class<any>
            }
            class AtkWrapper$4 implements java.beans.PropertyChangeListener {
                public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                public static class: java.lang.Class<any>
            }
            class AtkWrapper$5 extends java.awt.EventQueue {
                public dispatchEvent(arg0: java.awt.AWTEvent): void
                public static class: java.lang.Class<any>
            }
            class AtkWrapper {
                public static isToplevel(arg0: java.lang.Object): boolean
                public static registerPropertyChangeListener(arg0: javax.accessibility.AccessibleContext): void
                public static initNativeLibrary(): boolean
                public static loadAtkBridge(): void
                public static focusNotify(arg0: javax.accessibility.AccessibleContext): void
                public static windowOpen(arg0: javax.accessibility.AccessibleContext, arg1: boolean): void
                public static windowClose(arg0: javax.accessibility.AccessibleContext, arg1: boolean): void
                public static windowMinimize(arg0: javax.accessibility.AccessibleContext): void
                public static windowMaximize(arg0: javax.accessibility.AccessibleContext): void
                public static windowRestore(arg0: javax.accessibility.AccessibleContext): void
                public static windowActivate(arg0: javax.accessibility.AccessibleContext): void
                public static windowDeactivate(arg0: javax.accessibility.AccessibleContext): void
                public static windowStateChange(arg0: javax.accessibility.AccessibleContext): void
                public static emitSignal(arg0: javax.accessibility.AccessibleContext, arg1: int, arg2: java.lang.Object[]): void
                public static objectStateChange(arg0: javax.accessibility.AccessibleContext, arg1: java.lang.Object, arg2: boolean): void
                public static componentAdded(arg0: javax.accessibility.AccessibleContext): void
                public static componentRemoved(arg0: javax.accessibility.AccessibleContext): void
                public static boundsChanged(arg0: javax.accessibility.AccessibleContext): void
                public static dispatchKeyEvent(arg0: org.GNOME.Accessibility.AtkKeyEvent): boolean
                public static printLog(arg0: string): void
                public constructor()
                public static main(arg0: java.lang.String[]): void
                public static class: java.lang.Class<any>
            }
            class GNOMEKeyMapping$GNOMEKeyInfo {
                public constructor(arg0: int, arg1: string)
                public getGdkKeyCode(): int
                public getGdkKeyString(): string
                public static class: java.lang.Class<any>
            }
            class GNOMEKeyMapping {
                public static getKey(arg0: java.awt.event.KeyEvent): org.GNOME.Accessibility.GNOMEKeyMapping$GNOMEKeyInfo
                public static class: java.lang.Class<any>
            }
        }
    }
}
