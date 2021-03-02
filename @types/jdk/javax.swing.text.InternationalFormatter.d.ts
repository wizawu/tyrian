declare namespace javax {
  namespace swing {
    namespace text {

      class InternationalFormatter extends javax.swing.text.DefaultFormatter {
        public constructor()
        public constructor(arg0: java.text.Format)
        public setFormat(arg0: java.text.Format): void
        public getFormat(): java.text.Format
        public setMinimum(arg0: java.lang.Comparable<unknown>): void
        public getMinimum(): java.lang.Comparable<unknown>
        public setMaximum(arg0: java.lang.Comparable<unknown>): void
        public getMaximum(): java.lang.Comparable<unknown>
        public install(arg0: javax.swing.JFormattedTextField): void
        public valueToString(arg0: java.lang.Object): java.lang.String
        public stringToValue(arg0: java.lang.String): java.lang.Object
        public getFields(arg0: int): java.text.Format$Field[]
        public clone(): java.lang.Object
        protected getActions(): javax.swing.Action[]
        stringToValue(arg0: java.lang.String, arg1: java.text.Format): java.lang.Object
        isValidValue(arg0: java.lang.Object, arg1: boolean): boolean
        getAttributes(arg0: int): java.util.Map<java.text.AttributedCharacterIterator$Attribute,java.lang.Object>
        getAttributeStart(arg0: java.text.AttributedCharacterIterator$Attribute): int
        getIterator(): java.text.AttributedCharacterIterator
        updateMaskIfNecessary(): void
        updateMask(): void
        getLiteralCountTo(arg0: int): int
        isLiteral(arg0: int): boolean
        getLiteral(arg0: int): char
        isNavigatable(arg0: int): boolean
        updateValue(arg0: java.lang.Object): void
        replace(arg0: javax.swing.text.DocumentFilter$FilterBypass, arg1: int, arg2: int, arg3: java.lang.String, arg4: javax.swing.text.AttributeSet): void
        canReplace(arg0: javax.swing.text.DefaultFormatter$ReplaceHolder): boolean
        replace(arg0: javax.swing.text.DefaultFormatter$ReplaceHolder): boolean
        getBufferedChar(arg0: int): char
        isValidMask(): boolean
        isLiteral(arg0: java.util.Map<unknown,unknown>): boolean
        canIncrement(arg0: java.lang.Object, arg1: int): boolean
        selectField(arg0: java.lang.Object, arg1: int): void
        getAdjustField(arg0: int, arg1: java.util.Map<unknown,unknown>): java.lang.Object
        adjustValue(arg0: java.lang.Object, arg1: java.util.Map<unknown,unknown>, arg2: java.lang.Object, arg3: int): java.lang.Object
        getSupportsIncrement(): boolean
        resetValue(arg0: java.lang.Object): void
        getReplaceHolder(arg0: javax.swing.text.DocumentFilter$FilterBypass, arg1: int, arg2: int, arg3: java.lang.String, arg4: javax.swing.text.AttributeSet): javax.swing.text.DefaultFormatter$ReplaceHolder
        static access$000(arg0: javax.swing.text.InternationalFormatter): javax.swing.JFormattedTextField
        static access$100(arg0: javax.swing.text.InternationalFormatter): javax.swing.JFormattedTextField
        static access$200(arg0: javax.swing.text.InternationalFormatter): javax.swing.JFormattedTextField
        static access$300(arg0: javax.swing.text.InternationalFormatter): void
      }

    }
  }
}
