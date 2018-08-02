declare namespace sun {
    namespace print {
        class CustomMediaSizeName extends javax.print.attribute.standard.MediaSizeName {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: float, arg3: float)
            public getChoiceName(): string
            public getStandardMedia(): javax.print.attribute.standard.MediaSizeName
            public static findMedia(arg0: javax.print.attribute.standard.Media[], arg1: float, arg2: float, arg3: int): javax.print.attribute.standard.MediaSizeName
            public getSuperEnumTable(): javax.print.attribute.standard.Media[]
            protected getStringTable(): java.lang.String[]
            protected getEnumValueTable(): javax.print.attribute.EnumSyntax[]
            public static class: java.lang.Class<any>
        }
    }
}