declare namespace javax {
  namespace swing {
    namespace text {

      class DefaultEditorKit extends javax.swing.text.EditorKit {

        public static readonly EndOfLineStringProperty: java.lang.String
        public static readonly insertContentAction: java.lang.String
        public static readonly insertBreakAction: java.lang.String
        public static readonly insertTabAction: java.lang.String
        public static readonly deletePrevCharAction: java.lang.String
        public static readonly deleteNextCharAction: java.lang.String
        public static readonly deleteNextWordAction: java.lang.String
        public static readonly deletePrevWordAction: java.lang.String
        public static readonly readOnlyAction: java.lang.String
        public static readonly writableAction: java.lang.String
        public static readonly cutAction: java.lang.String
        public static readonly copyAction: java.lang.String
        public static readonly pasteAction: java.lang.String
        public static readonly beepAction: java.lang.String
        public static readonly pageUpAction: java.lang.String
        public static readonly pageDownAction: java.lang.String
        static readonly selectionPageUpAction: java.lang.String
        static readonly selectionPageDownAction: java.lang.String
        static readonly selectionPageLeftAction: java.lang.String
        static readonly selectionPageRightAction: java.lang.String
        public static readonly forwardAction: java.lang.String
        public static readonly backwardAction: java.lang.String
        public static readonly selectionForwardAction: java.lang.String
        public static readonly selectionBackwardAction: java.lang.String
        public static readonly upAction: java.lang.String
        public static readonly downAction: java.lang.String
        public static readonly selectionUpAction: java.lang.String
        public static readonly selectionDownAction: java.lang.String
        public static readonly beginWordAction: java.lang.String
        public static readonly endWordAction: java.lang.String
        public static readonly selectionBeginWordAction: java.lang.String
        public static readonly selectionEndWordAction: java.lang.String
        public static readonly previousWordAction: java.lang.String
        public static readonly nextWordAction: java.lang.String
        public static readonly selectionPreviousWordAction: java.lang.String
        public static readonly selectionNextWordAction: java.lang.String
        public static readonly beginLineAction: java.lang.String
        public static readonly endLineAction: java.lang.String
        public static readonly selectionBeginLineAction: java.lang.String
        public static readonly selectionEndLineAction: java.lang.String
        public static readonly beginParagraphAction: java.lang.String
        public static readonly endParagraphAction: java.lang.String
        public static readonly selectionBeginParagraphAction: java.lang.String
        public static readonly selectionEndParagraphAction: java.lang.String
        public static readonly beginAction: java.lang.String
        public static readonly endAction: java.lang.String
        public static readonly selectionBeginAction: java.lang.String
        public static readonly selectionEndAction: java.lang.String
        public static readonly selectWordAction: java.lang.String
        public static readonly selectLineAction: java.lang.String
        public static readonly selectParagraphAction: java.lang.String
        public static readonly selectAllAction: java.lang.String
        static readonly unselectAction: java.lang.String
        static readonly toggleComponentOrientationAction: java.lang.String
        public static readonly defaultKeyTypedAction: java.lang.String
        public constructor()
        public getContentType(): java.lang.String
        public getViewFactory(): javax.swing.text.ViewFactory
        public getActions(): javax.swing.Action[]
        public createCaret(): javax.swing.text.Caret
        public createDefaultDocument(): javax.swing.text.Document
        public read(arg0: java.io.InputStream, arg1: javax.swing.text.Document, arg2: int): void
        public write(arg0: java.io.OutputStream, arg1: javax.swing.text.Document, arg2: int, arg3: int): void
        getInputAttributes(): javax.swing.text.MutableAttributeSet
        public read(arg0: java.io.Reader, arg1: javax.swing.text.Document, arg2: int): void
        public write(arg0: java.io.Writer, arg1: javax.swing.text.Document, arg2: int, arg3: int): void
      }

    }
  }
}
