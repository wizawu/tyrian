declare namespace javax {
    namespace naming {
        class LinkException extends javax.naming.NamingException {
            protected linkResolvedName: javax.naming.Name
            protected linkResolvedObj: java.lang.Object
            protected linkRemainingName: javax.naming.Name
            protected linkExplanation: string
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public getLinkResolvedName(): javax.naming.Name
            public getLinkRemainingName(): javax.naming.Name
            public getLinkResolvedObj(): java.lang.Object
            public getLinkExplanation(): string
            public setLinkExplanation(arg0: java.lang.String | string): void
            public setLinkResolvedName(arg0: javax.naming.Name): void
            public setLinkRemainingName(arg0: javax.naming.Name): void
            public setLinkResolvedObj(arg0: java.lang.Object): void
            public toString(): string
            public toString(arg0: boolean): string
            public static class: java.lang.Class<any>
        }
    }
}