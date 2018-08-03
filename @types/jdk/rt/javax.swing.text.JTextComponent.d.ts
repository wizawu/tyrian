declare namespace javax {
    namespace swing {
        namespace text {
            abstract class JTextComponent extends javax.swing.JComponent implements javax.swing.Scrollable , javax.accessibility.Accessible {
                public static readonly FOCUS_ACCELERATOR_KEY: string
                public static readonly DEFAULT_KEYMAP: string
                public constructor()
                public getUI(): javax.swing.plaf.TextUI
                public setUI(arg0: javax.swing.plaf.TextUI): void
                public updateUI(): void
                public addCaretListener(arg0: javax.swing.event.CaretListener | javax.swing.event.CaretListener$$Lambda): void
                public removeCaretListener(arg0: javax.swing.event.CaretListener | javax.swing.event.CaretListener$$Lambda): void
                public getCaretListeners(): javax.swing.event.CaretListener[]
                protected fireCaretUpdate(arg0: javax.swing.event.CaretEvent): void
                public setDocument(arg0: javax.swing.text.Document): void
                public getDocument(): javax.swing.text.Document
                public setComponentOrientation(arg0: java.awt.ComponentOrientation): void
                public getActions(): javax.swing.Action[]
                public setMargin(arg0: java.awt.Insets): void
                public getMargin(): java.awt.Insets
                public setNavigationFilter(arg0: javax.swing.text.NavigationFilter): void
                public getNavigationFilter(): javax.swing.text.NavigationFilter
                public getCaret(): javax.swing.text.Caret
                public setCaret(arg0: javax.swing.text.Caret): void
                public getHighlighter(): javax.swing.text.Highlighter
                public setHighlighter(arg0: javax.swing.text.Highlighter): void
                public setKeymap(arg0: javax.swing.text.Keymap): void
                public setDragEnabled(arg0: boolean): void
                public getDragEnabled(): boolean
                public setDropMode(arg0: javax.swing.DropMode): void
                public getDropMode(): javax.swing.DropMode
                public getDropLocation(): javax.swing.text.JTextComponent$DropLocation
                public getKeymap(): javax.swing.text.Keymap
                public static addKeymap(arg0: java.lang.String | string, arg1: javax.swing.text.Keymap): javax.swing.text.Keymap
                public static removeKeymap(arg0: java.lang.String | string): javax.swing.text.Keymap
                public static getKeymap(arg0: java.lang.String | string): javax.swing.text.Keymap
                public static loadKeymap(arg0: javax.swing.text.Keymap, arg1: javax.swing.text.JTextComponent$KeyBinding[], arg2: javax.swing.Action[]): void
                public getCaretColor(): java.awt.Color
                public setCaretColor(arg0: java.awt.Color): void
                public getSelectionColor(): java.awt.Color
                public setSelectionColor(arg0: java.awt.Color): void
                public getSelectedTextColor(): java.awt.Color
                public setSelectedTextColor(arg0: java.awt.Color): void
                public getDisabledTextColor(): java.awt.Color
                public setDisabledTextColor(arg0: java.awt.Color): void
                public replaceSelection(arg0: java.lang.String | string): void
                public getText(arg0: int, arg1: int): string
                public modelToView(arg0: int): java.awt.Rectangle
                public viewToModel(arg0: java.awt.Point): int
                public cut(): void
                public copy(): void
                public paste(): void
                public moveCaretPosition(arg0: int): void
                public setFocusAccelerator(arg0: char): void
                public getFocusAccelerator(): char
                public read(arg0: java.io.Reader, arg1: java.lang.Object): void
                public write(arg0: java.io.Writer): void
                public removeNotify(): void
                public setCaretPosition(arg0: int): void
                public getCaretPosition(): int
                public setText(arg0: java.lang.String | string): void
                public getText(): string
                public getSelectedText(): string
                public isEditable(): boolean
                public setEditable(arg0: boolean): void
                public getSelectionStart(): int
                public setSelectionStart(arg0: int): void
                public getSelectionEnd(): int
                public setSelectionEnd(arg0: int): void
                public select(arg0: int, arg1: int): void
                public selectAll(): void
                public getToolTipText(arg0: java.awt.event.MouseEvent): string
                public getPreferredScrollableViewportSize(): java.awt.Dimension
                public getScrollableUnitIncrement(arg0: java.awt.Rectangle, arg1: int, arg2: int): int
                public getScrollableBlockIncrement(arg0: java.awt.Rectangle, arg1: int, arg2: int): int
                public getScrollableTracksViewportWidth(): boolean
                public getScrollableTracksViewportHeight(): boolean
                public print(): boolean
                public print(arg0: java.text.MessageFormat, arg1: java.text.MessageFormat): boolean
                public print(arg0: java.text.MessageFormat, arg1: java.text.MessageFormat, arg2: boolean, arg3: javax.print.PrintService, arg4: javax.print.attribute.PrintRequestAttributeSet, arg5: boolean): boolean
                public getPrintable(arg0: java.text.MessageFormat, arg1: java.text.MessageFormat): java.awt.print.Printable
                public getAccessibleContext(): javax.accessibility.AccessibleContext
                protected paramString(): string
                protected processInputMethodEvent(arg0: java.awt.event.InputMethodEvent): void
                public getInputMethodRequests(): java.awt.im.InputMethodRequests
                public addInputMethodListener(arg0: java.awt.event.InputMethodListener): void
                protected saveComposedText(arg0: int): boolean
                protected restoreComposedText(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}