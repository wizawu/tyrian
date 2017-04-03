declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkAction {
                ac: javax.accessibility.AccessibleContext
                acc_action: javax.accessibility.AccessibleAction
                acc_ext_component: javax.accessibility.AccessibleExtendedComponent
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public do_action(arg0: int): boolean
                public get_n_actions(): int
                public get_description(arg0: int): java.lang.String
                public setDescription(arg0: int, arg1: java.lang.String): boolean
                public get_name(arg0: int): java.lang.String
                public getLocalizedName(arg0: int): java.lang.String
                public get_keybinding(arg0: int): java.lang.String
            }
            class AtkComponent {
                ac: javax.accessibility.AccessibleContext
                acc_component: javax.accessibility.AccessibleComponent
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public contains(arg0: int, arg1: int, arg2: int): boolean
                public get_accessible_at_point(arg0: int, arg1: int, arg2: int): javax.accessibility.AccessibleContext
                public grab_focus(): boolean
                public get_position(arg0: int): java.awt.Point
                public set_extents(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): java.awt.Rectangle
                public get_extents(): java.awt.Rectangle
                public get_layer(): int
            }
            interface AtkCoordType {
                SCREEN: int
                WINDOW: int
            }
            class AtkEditableText extends org.GNOME.Accessibility.AtkText {
                acc_edt_text: javax.accessibility.AccessibleEditableText
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public set_text_contents(arg0: java.lang.String): void
                public insert_text(arg0: java.lang.String, arg1: int): void
                public copy_text(arg0: int, arg1: int): void
                public cut_text(arg0: int, arg1: int): void
                public delete_text(arg0: int, arg1: int): void
                public paste_text(arg0: int): void
                public setRunAttributes(arg0: javax.swing.text.AttributeSet, arg1: int, arg2: int): boolean
            }
            class AtkHyperlink {
                acc_hyperlink: javax.accessibility.AccessibleHyperlink
                public constructor(arg0: javax.accessibility.AccessibleHyperlink)
                public get_uri(arg0: int): java.lang.String
                public get_object(arg0: int): java.lang.Object
                public get_end_index(): int
                public get_start_index(): int
                public is_valid(): boolean
                public get_n_anchors(): int
            }
            class AtkHypertext extends org.GNOME.Accessibility.AtkText {
                acc_hyper_text: javax.accessibility.AccessibleHypertext
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public get_link(arg0: int): org.GNOME.Accessibility.AtkHyperlink
                public get_n_links(): int
                public get_link_index(arg0: int): int
            }
            class AtkImage {
                ac: javax.accessibility.AccessibleContext
                acc_icons: javax.accessibility.AccessibleIcon[]
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public get_image_position(arg0: int): java.awt.Point
                public get_image_description(): java.lang.String
                public get_image_size(): java.awt.Dimension
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
                public string: java.lang.String
                public keycode: int
                public timestamp: int
                public constructor(arg0: java.awt.event.KeyEvent)
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
                ac: javax.accessibility.AccessibleContext
                acc_selection: javax.accessibility.AccessibleSelection
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public add_selection(arg0: int): boolean
                public clear_selection(): boolean
                public ref_selection(arg0: int): javax.accessibility.Accessible
                public get_selection_count(): int
                public is_child_selected(arg0: int): boolean
                public remove_selection(arg0: int): boolean
                public select_all_selection(): boolean
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
                ac: javax.accessibility.AccessibleContext
                acc_table: javax.accessibility.AccessibleTable
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public ref_at(arg0: int, arg1: int): javax.accessibility.AccessibleContext
                public get_column_at_index(arg0: int): int
                public get_row_at_index(arg0: int): int
                public get_n_columns(): int
                public get_n_rows(): int
                public get_column_extent_at(arg0: int, arg1: int): int
                public get_row_extent_at(arg0: int, arg1: int): int
                public get_caption(): javax.accessibility.AccessibleContext
                public setCaption(arg0: javax.accessibility.Accessible): void
                public get_column_description(arg0: int): java.lang.String
                public setColumnDescription(arg0: int, arg1: java.lang.String): void
                public get_row_description(arg0: int): java.lang.String
                public setRowDescription(arg0: int, arg1: java.lang.String): void
                public get_column_header(arg0: int): javax.accessibility.AccessibleContext
                public setColumnHeader(arg0: int, arg1: javax.accessibility.AccessibleTable): void
                public get_row_header(arg0: int): javax.accessibility.AccessibleContext
                public setRowHeader(arg0: int, arg1: javax.accessibility.AccessibleTable): void
                public get_summary(): javax.accessibility.AccessibleContext
                public setSummary(arg0: javax.accessibility.Accessible): void
                public get_selected_columns(): int[]
                public get_selected_rows(): int[]
                public is_column_selected(arg0: int): boolean
                public is_row_selected(arg0: int): boolean
                public is_selected(arg0: int, arg1: int): boolean
                public addColumnSelection(arg0: int): boolean
                public addRowSelection(arg0: int): boolean
                public remove_column_selection(arg0: int): boolean
                public remove_row_selection(arg0: int): boolean
            }
            class AtkTableCell extends org.GNOME.Accessibility.AtkTable {
                ac: javax.accessibility.AccessibleContext
                acc_table_cell: javax.accessibility.AccessibleExtendedTable
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public getTable(): javax.accessibility.AccessibleTable
                public getPosition(arg0: int, arg1: int): boolean
                public getRowColumnSpan(arg0: int, arg1: int, arg2: int, arg3: int): boolean
                public getRowSpan(): int
                public getColumnSpan(): int
            }
            class AtkText {
                ac: javax.accessibility.AccessibleContext
                acc_text: javax.accessibility.AccessibleText
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public get_text(arg0: int, arg1: int): java.lang.String
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
                ac: javax.accessibility.AccessibleContext
                acc_value: javax.accessibility.AccessibleValue
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public get_current_value(): java.lang.Number
                public getMaximumValue(): double
                public getMinimumValue(): double
                public setValue(arg0: java.lang.Number): void
                public getIncrement(): double
            }
            class AtkWrapper {
                static accessibilityEnabled: boolean
                winAdapter: java.awt.event.WindowAdapter
                componentAdapter: java.awt.event.ComponentAdapter
                globalListener: java.awt.event.AWTEventListener
                static oldSourceContext: javax.accessibility.AccessibleContext
                static savedSourceContext: javax.accessibility.AccessibleContext
                static oldPaneContext: javax.accessibility.AccessibleContext
                toolkit: java.awt.Toolkit
                static propertyChangeListener: java.beans.PropertyChangeListener
                public static isToplevel(arg0: java.lang.Object): boolean
                static dispatchFocusEvent(arg0: java.lang.Object): void
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
                public static printLog(arg0: java.lang.String): void
                public constructor()
                public static main(arg0: java.lang.String[]): void
            }
            class GNOMEKeyMapping {
                public static getKey(arg0: java.awt.event.KeyEvent): org.GNOME.Accessibility.GNOMEKeyMapping$GNOMEKeyInfo
            }
            
        }
        
    }
    
}
