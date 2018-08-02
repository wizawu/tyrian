declare namespace javax {
    namespace swing {
        namespace text {
            class MaskFormatter extends javax.swing.text.DefaultFormatter {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public setMask(arg0: java.lang.String | string): void
                public getMask(): string
                public setValidCharacters(arg0: java.lang.String | string): void
                public getValidCharacters(): string
                public setInvalidCharacters(arg0: java.lang.String | string): void
                public getInvalidCharacters(): string
                public setPlaceholder(arg0: java.lang.String | string): void
                public getPlaceholder(): string
                public setPlaceholderCharacter(arg0: char): void
                public getPlaceholderCharacter(): char
                public setValueContainsLiteralCharacters(arg0: boolean): void
                public getValueContainsLiteralCharacters(): boolean
                public stringToValue(arg0: java.lang.String | string): java.lang.Object
                public valueToString(arg0: java.lang.Object): string
                public install(arg0: javax.swing.JFormattedTextField): void
                public static class: java.lang.Class<any>
            }
        }
    }
}