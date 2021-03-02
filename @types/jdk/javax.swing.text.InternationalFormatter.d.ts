declare namespace javax {
  namespace swing {
    namespace text {

      class InternationalFormatter extends javax.swing.text.DefaultFormatter {
        public constructor()
        public constructor(arg0: java.text.Format)
        public setFormat(arg0: java.text.Format): void
        public getFormat(): java.text.Format
        public setMinimum(arg0: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>): void
        public getMinimum(): java.lang.Comparable<unknown>
        public setMaximum(arg0: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>): void
        public getMaximum(): java.lang.Comparable<unknown>
        public install(arg0: javax.swing.JFormattedTextField): void
        public valueToString(arg0: java.lang.Object | any): java.lang.String
        public stringToValue(arg0: java.lang.String | string): java.lang.Object
        public getFields(arg0: number | java.lang.Integer): java.text.Format$Field[]
        public clone(): java.lang.Object
        protected getActions(): javax.swing.Action[]
        stringToValue(arg0: java.lang.String | string, arg1: java.text.Format): java.lang.Object
        isValidValue(arg0: java.lang.Object | any, arg1: boolean | java.lang.Boolean): boolean
        getAttributes(arg0: number | java.lang.Integer): java.util.Map<java.text.AttributedCharacterIterator$Attribute,java.lang.Object>
        getAttributeStart(arg0: java.text.AttributedCharacterIterator$Attribute): number
        getIterator(): java.text.AttributedCharacterIterator
        updateMaskIfNecessary(): void
        updateMask(): void
        getLiteralCountTo(arg0: number | java.lang.Integer): number
        isLiteral(arg0: number | java.lang.Integer): boolean
        getLiteral(arg0: number | java.lang.Integer): string
        isNavigatable(arg0: number | java.lang.Integer): boolean
        updateValue(arg0: java.lang.Object | any): void
        replace(arg0: javax.swing.text.DocumentFilter$FilterBypass, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.lang.String | string, arg4: javax.swing.text.AttributeSet): void
        canReplace(arg0: javax.swing.text.DefaultFormatter$ReplaceHolder): boolean
        replace(arg0: javax.swing.text.DefaultFormatter$ReplaceHolder): boolean
        getBufferedChar(arg0: number | java.lang.Integer): string
        isValidMask(): boolean
        isLiteral(arg0: java.util.Map<unknown,unknown>): boolean
        canIncrement(arg0: java.lang.Object | any, arg1: number | java.lang.Integer): boolean
        selectField(arg0: java.lang.Object | any, arg1: number | java.lang.Integer): void
        getAdjustField(arg0: number | java.lang.Integer, arg1: java.util.Map<unknown,unknown>): java.lang.Object
        adjustValue(arg0: java.lang.Object | any, arg1: java.util.Map<unknown,unknown>, arg2: java.lang.Object | any, arg3: number | java.lang.Integer): java.lang.Object
        getSupportsIncrement(): boolean
        resetValue(arg0: java.lang.Object | any): void
        getReplaceHolder(arg0: javax.swing.text.DocumentFilter$FilterBypass, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.lang.String | string, arg4: javax.swing.text.AttributeSet): javax.swing.text.DefaultFormatter$ReplaceHolder
        static access$000(arg0: javax.swing.text.InternationalFormatter): javax.swing.JFormattedTextField
        static access$100(arg0: javax.swing.text.InternationalFormatter): javax.swing.JFormattedTextField
        static access$200(arg0: javax.swing.text.InternationalFormatter): javax.swing.JFormattedTextField
        static access$300(arg0: javax.swing.text.InternationalFormatter): void
      }

    }
  }
}
