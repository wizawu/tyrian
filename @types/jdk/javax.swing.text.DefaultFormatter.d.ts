declare namespace javax {
  namespace swing {
    namespace text {

      class DefaultFormatter extends javax.swing.JFormattedTextField$AbstractFormatter implements java.lang.Cloneable, java.io.Serializable {
        replaceHolder: javax.swing.text.DefaultFormatter$ReplaceHolder
        public constructor()
        public install(arg0: javax.swing.JFormattedTextField): void
        public setCommitsOnValidEdit(arg0: boolean): void
        public getCommitsOnValidEdit(): boolean
        public setOverwriteMode(arg0: boolean): void
        public getOverwriteMode(): boolean
        public setAllowsInvalid(arg0: boolean): void
        public getAllowsInvalid(): boolean
        public setValueClass(arg0: java.lang.Class<unknown>): void
        public getValueClass(): java.lang.Class<unknown>
        public stringToValue(arg0: java.lang.String): java.lang.Object
        public valueToString(arg0: java.lang.Object): java.lang.String
        protected getDocumentFilter(): javax.swing.text.DocumentFilter
        protected getNavigationFilter(): javax.swing.text.NavigationFilter
        public clone(): java.lang.Object
        positionCursorAtInitialLocation(): void
        getInitialVisualPosition(): int
        isNavigatable(arg0: int): boolean
        isLegalInsertText(arg0: java.lang.String): boolean
        getReplaceString(arg0: int, arg1: int, arg2: java.lang.String): java.lang.String
        isValidEdit(arg0: javax.swing.text.DefaultFormatter$ReplaceHolder): boolean
        commitEdit(): void
        updateValue(): void
        updateValue(arg0: java.lang.Object): void
        getNextCursorPosition(arg0: int, arg1: int): int
        repositionCursor(arg0: int, arg1: int): void
        getNextVisualPositionFrom(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: javax.swing.text.Position$Bias, arg3: int, arg4: javax.swing.text.Position$Bias[]): int
        canReplace(arg0: javax.swing.text.DefaultFormatter$ReplaceHolder): boolean
        replace(arg0: javax.swing.text.DocumentFilter$FilterBypass, arg1: int, arg2: int, arg3: java.lang.String, arg4: javax.swing.text.AttributeSet): void
        replace(arg0: javax.swing.text.DefaultFormatter$ReplaceHolder): boolean
        setDot(arg0: javax.swing.text.NavigationFilter$FilterBypass, arg1: int, arg2: javax.swing.text.Position$Bias): void
        moveDot(arg0: javax.swing.text.NavigationFilter$FilterBypass, arg1: int, arg2: javax.swing.text.Position$Bias): void
        getReplaceHolder(arg0: javax.swing.text.DocumentFilter$FilterBypass, arg1: int, arg2: int, arg3: java.lang.String, arg4: javax.swing.text.AttributeSet): javax.swing.text.DefaultFormatter$ReplaceHolder
        static access$000(arg0: javax.swing.text.DefaultFormatter): javax.swing.JFormattedTextField
        static access$100(arg0: javax.swing.text.DefaultFormatter): javax.swing.JFormattedTextField
        static access$200(arg0: javax.swing.text.DefaultFormatter): javax.swing.JFormattedTextField
        static access$300(arg0: javax.swing.text.DefaultFormatter): javax.swing.JFormattedTextField
        static access$400(arg0: javax.swing.text.DefaultFormatter): javax.swing.JFormattedTextField
      }

    }
  }
}
