declare namespace javax {
  namespace swing {
    namespace text {
      class DefaultStyledDocument extends javax.swing.text.AbstractDocument implements javax.swing.text.StyledDocument {
        public static readonly BUFFER_SIZE_DEFAULT: int
        protected buffer: javax.swing.text.DefaultStyledDocument$ElementBuffer
        public constructor(arg0: javax.swing.text.AbstractDocument$Content, arg1: javax.swing.text.StyleContext)
        public constructor(arg0: javax.swing.text.StyleContext)
        public constructor()
        public getDefaultRootElement(): javax.swing.text.Element
        protected create(arg0: javax.swing.text.DefaultStyledDocument$ElementSpec[]): void
        protected insert(
          arg0: number | java.lang.Integer,
          arg1: javax.swing.text.DefaultStyledDocument$ElementSpec[]
        ): void
        public removeElement(arg0: javax.swing.text.Element): void
        public addStyle(arg0: java.lang.String | string, arg1: javax.swing.text.Style): javax.swing.text.Style
        public removeStyle(arg0: java.lang.String | string): void
        public getStyle(arg0: java.lang.String | string): javax.swing.text.Style
        public getStyleNames(): java.util.Enumeration<unknown>
        public setLogicalStyle(arg0: number | java.lang.Integer, arg1: javax.swing.text.Style): void
        public getLogicalStyle(arg0: number | java.lang.Integer): javax.swing.text.Style
        public setCharacterAttributes(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.text.AttributeSet,
          arg3: boolean | java.lang.Boolean
        ): void
        public setParagraphAttributes(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.text.AttributeSet,
          arg3: boolean | java.lang.Boolean
        ): void
        public getParagraphElement(arg0: number | java.lang.Integer): javax.swing.text.Element
        public getCharacterElement(arg0: number | java.lang.Integer): javax.swing.text.Element
        protected insertUpdate(
          arg0: javax.swing.text.AbstractDocument$DefaultDocumentEvent,
          arg1: javax.swing.text.AttributeSet
        ): void
        createSpecsForInsertAfterNewline(
          arg0: javax.swing.text.Element,
          arg1: javax.swing.text.Element,
          arg2: javax.swing.text.AttributeSet,
          arg3: java.util.Vector<javax.swing.text.DefaultStyledDocument$ElementSpec>,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer
        ): number
        protected removeUpdate(arg0: javax.swing.text.AbstractDocument$DefaultDocumentEvent): void
        protected createDefaultRoot(): javax.swing.text.AbstractDocument$AbstractElement
        public getForeground(arg0: javax.swing.text.AttributeSet): java.awt.Color
        public getBackground(arg0: javax.swing.text.AttributeSet): java.awt.Color
        public getFont(arg0: javax.swing.text.AttributeSet): java.awt.Font
        protected styleChanged(arg0: javax.swing.text.Style): void
        public addDocumentListener(arg0: javax.swing.event.DocumentListener): void
        public removeDocumentListener(arg0: javax.swing.event.DocumentListener): void
        createStyleChangeListener(): javax.swing.event.ChangeListener
        createStyleContextChangeListener(): javax.swing.event.ChangeListener
        updateStylesListeningTo(): void
      }
    }
  }
}
