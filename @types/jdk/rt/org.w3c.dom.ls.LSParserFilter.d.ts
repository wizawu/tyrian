declare namespace org {
    namespace w3c {
        namespace dom {
            namespace ls {
interface LSParserFilter {
    FILTER_ACCEPT: short
    FILTER_REJECT: short
    FILTER_SKIP: short
    FILTER_INTERRUPT: short
    startElement(arg0: org.w3c.dom.Element): short
    acceptNode(arg0: org.w3c.dom.Node): short
    getWhatToShow(): int
}

            }
        }
    }
}