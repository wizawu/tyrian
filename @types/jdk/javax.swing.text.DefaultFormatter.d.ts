declare namespace javax {
  namespace swing {
    namespace text {
      class DefaultFormatter
        extends javax.swing.JFormattedTextField$AbstractFormatter
        implements java.lang.Cloneable, java.io.Serializable
      {
        replaceHolder: javax.swing.text.DefaultFormatter$ReplaceHolder
        public constructor()
        public install(arg0: javax.swing.JFormattedTextField): void
        public setCommitsOnValidEdit(arg0: boolean | java.lang.Boolean): void
        public getCommitsOnValidEdit(): boolean
        public setOverwriteMode(arg0: boolean | java.lang.Boolean): void
        public getOverwriteMode(): boolean
        public setAllowsInvalid(arg0: boolean | java.lang.Boolean): void
        public getAllowsInvalid(): boolean
        public setValueClass(arg0: java.lang.Class<unknown>): void
        public getValueClass(): java.lang.Class<unknown>
        public stringToValue(arg0: java.lang.String | string): java.lang.Object
        public valueToString(arg0: java.lang.Object | any): java.lang.String
        protected getDocumentFilter(): javax.swing.text.DocumentFilter
        protected getNavigationFilter(): javax.swing.text.NavigationFilter
        public clone(): java.lang.Object
        positionCursorAtInitialLocation(): void
        getInitialVisualPosition(): number
        isNavigatable(arg0: number | java.lang.Integer): boolean
        isLegalInsertText(arg0: java.lang.String | string): boolean
        getReplaceString(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: java.lang.String | string
        ): java.lang.String
        isValidEdit(arg0: javax.swing.text.DefaultFormatter$ReplaceHolder): boolean
        commitEdit(): void
        updateValue(): void
        updateValue(arg0: java.lang.Object | any): void
        getNextCursorPosition(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        repositionCursor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        getNextVisualPositionFrom(
          arg0: javax.swing.text.JTextComponent,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.text.Position$Bias,
          arg3: number | java.lang.Integer,
          arg4: javax.swing.text.Position$Bias[]
        ): number
        canReplace(arg0: javax.swing.text.DefaultFormatter$ReplaceHolder): boolean
        replace(
          arg0: javax.swing.text.DocumentFilter$FilterBypass,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: java.lang.String | string,
          arg4: javax.swing.text.AttributeSet
        ): void
        replace(arg0: javax.swing.text.DefaultFormatter$ReplaceHolder): boolean
        setDot(
          arg0: javax.swing.text.NavigationFilter$FilterBypass,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.text.Position$Bias
        ): void
        moveDot(
          arg0: javax.swing.text.NavigationFilter$FilterBypass,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.text.Position$Bias
        ): void
        getReplaceHolder(
          arg0: javax.swing.text.DocumentFilter$FilterBypass,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: java.lang.String | string,
          arg4: javax.swing.text.AttributeSet
        ): javax.swing.text.DefaultFormatter$ReplaceHolder
        static access$000(arg0: javax.swing.text.DefaultFormatter): javax.swing.JFormattedTextField
        static access$100(arg0: javax.swing.text.DefaultFormatter): javax.swing.JFormattedTextField
        static access$200(arg0: javax.swing.text.DefaultFormatter): javax.swing.JFormattedTextField
        static access$300(arg0: javax.swing.text.DefaultFormatter): javax.swing.JFormattedTextField
        static access$400(arg0: javax.swing.text.DefaultFormatter): javax.swing.JFormattedTextField
      }
    }
  }
}
