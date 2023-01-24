declare namespace javax {
  namespace swing {
    namespace text {
      abstract class JTextComponent
        extends javax.swing.JComponent
        implements javax.swing.Scrollable, javax.accessibility.Accessible
      {
        public static readonly FOCUS_ACCELERATOR_KEY: java.lang.String
        public static readonly DEFAULT_KEYMAP: java.lang.String
        public constructor()
        public getUI(): javax.swing.plaf.TextUI
        public setUI(arg0: javax.swing.plaf.TextUI): void
        public updateUI(): void
        public addCaretListener(arg0: javax.swing.event.CaretListener | javax.swing.event.CaretListener$$lambda): void
        public removeCaretListener(
          arg0: javax.swing.event.CaretListener | javax.swing.event.CaretListener$$lambda
        ): void
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
        public setDragEnabled(arg0: boolean | java.lang.Boolean): void
        public getDragEnabled(): boolean
        public setDropMode(arg0: javax.swing.DropMode): void
        public getDropMode(): javax.swing.DropMode
        dropLocationForPoint(arg0: java.awt.Point): javax.swing.text.JTextComponent$DropLocation
        setDropLocation(
          arg0: javax.swing.TransferHandler$DropLocation,
          arg1: java.lang.Object | any,
          arg2: boolean | java.lang.Boolean
        ): java.lang.Object
        public getDropLocation(): javax.swing.text.JTextComponent$DropLocation
        updateInputMap(arg0: javax.swing.text.Keymap, arg1: javax.swing.text.Keymap): void
        public getKeymap(): javax.swing.text.Keymap
        public static addKeymap(arg0: java.lang.String | string, arg1: javax.swing.text.Keymap): javax.swing.text.Keymap
        public static removeKeymap(arg0: java.lang.String | string): javax.swing.text.Keymap
        public static getKeymap(arg0: java.lang.String | string): javax.swing.text.Keymap
        public static loadKeymap(
          arg0: javax.swing.text.Keymap,
          arg1: javax.swing.text.JTextComponent$KeyBinding[],
          arg2: javax.swing.Action[]
        ): void
        public getCaretColor(): java.awt.Color
        public setCaretColor(arg0: java.awt.Color): void
        public getSelectionColor(): java.awt.Color
        public setSelectionColor(arg0: java.awt.Color): void
        public getSelectedTextColor(): java.awt.Color
        public setSelectedTextColor(arg0: java.awt.Color): void
        public getDisabledTextColor(): java.awt.Color
        public setDisabledTextColor(arg0: java.awt.Color): void
        public replaceSelection(arg0: java.lang.String | string): void
        public getText(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
        public modelToView(arg0: number | java.lang.Integer): java.awt.Rectangle
        public modelToView2D(arg0: number | java.lang.Integer): java.awt.geom.Rectangle2D
        public viewToModel(arg0: java.awt.Point): number
        public viewToModel2D(arg0: java.awt.geom.Point2D): number
        public cut(): void
        public copy(): void
        public paste(): void
        public moveCaretPosition(arg0: number | java.lang.Integer): void
        public setFocusAccelerator(arg0: string | java.lang.Character): void
        public getFocusAccelerator(): string
        public read(arg0: java.io.Reader, arg1: java.lang.Object | any): void
        public write(arg0: java.io.Writer): void
        public removeNotify(): void
        public setCaretPosition(arg0: number | java.lang.Integer): void
        public getCaretPosition(): number
        public setText(arg0: java.lang.String | string): void
        public getText(): java.lang.String
        public getSelectedText(): java.lang.String
        public isEditable(): boolean
        public setEditable(arg0: boolean | java.lang.Boolean): void
        public getSelectionStart(): number
        public setSelectionStart(arg0: number | java.lang.Integer): void
        public getSelectionEnd(): number
        public setSelectionEnd(arg0: number | java.lang.Integer): void
        public select(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public selectAll(): void
        public getToolTipText(arg0: java.awt.event.MouseEvent): java.lang.String
        public getPreferredScrollableViewportSize(): java.awt.Dimension
        public getScrollableUnitIncrement(
          arg0: java.awt.Rectangle,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        public getScrollableBlockIncrement(
          arg0: java.awt.Rectangle,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        public getScrollableTracksViewportWidth(): boolean
        public getScrollableTracksViewportHeight(): boolean
        public print(): boolean
        public print(arg0: java.text.MessageFormat, arg1: java.text.MessageFormat): boolean
        public print(
          arg0: java.text.MessageFormat,
          arg1: java.text.MessageFormat,
          arg2: boolean | java.lang.Boolean,
          arg3: javax.print.PrintService,
          arg4: javax.print.attribute.PrintRequestAttributeSet,
          arg5: boolean | java.lang.Boolean
        ): boolean
        public getPrintable(arg0: java.text.MessageFormat, arg1: java.text.MessageFormat): java.awt.print.Printable
        public getAccessibleContext(): javax.accessibility.AccessibleContext
        protected paramString(): java.lang.String
        static getFocusedComponent(): javax.swing.text.JTextComponent
        protected processInputMethodEvent(arg0: java.awt.event.InputMethodEvent): void
        public getInputMethodRequests(): java.awt.im.InputMethodRequests
        public addInputMethodListener(arg0: java.awt.event.InputMethodListener): void
        protected saveComposedText(arg0: number | java.lang.Integer): boolean
        protected restoreComposedText(): void
        composedTextExists(): boolean
        public getUI(): javax.swing.plaf.ComponentUI
      }
    }
  }
}
