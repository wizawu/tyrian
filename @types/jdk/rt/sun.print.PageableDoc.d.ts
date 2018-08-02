declare namespace sun {
    namespace print {
        class PageableDoc implements javax.print.Doc {
            public constructor(arg0: java.awt.print.Pageable)
            public getDocFlavor(): javax.print.DocFlavor
            public getAttributes(): javax.print.attribute.DocAttributeSet
            public getPrintData(): java.lang.Object
            public getReaderForText(): java.io.Reader
            public getStreamForBytes(): java.io.InputStream
            public static class: java.lang.Class<any>
        }
    }
}