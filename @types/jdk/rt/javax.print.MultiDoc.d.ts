declare namespace javax {
    namespace print {
        interface MultiDoc {
            getDoc(): javax.print.Doc
            next(): javax.print.MultiDoc
        }
    }
}