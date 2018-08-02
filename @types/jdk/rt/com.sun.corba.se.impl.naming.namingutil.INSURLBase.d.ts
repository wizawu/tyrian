declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace naming {
                        namespace namingutil {
                            abstract class INSURLBase implements com.sun.corba.se.impl.naming.namingutil.INSURL {
                                protected rirFlag: boolean
                                protected theEndpointInfo: java.util.ArrayList
                                protected theKeyString: string
                                protected theStringifiedName: string
                                public constructor()
                                public getRIRFlag(): boolean
                                public getEndpointInfo(): java.util.List
                                public getKeyString(): string
                                public getStringifiedName(): string
                                public isCorbanameURL(): boolean
                                public dPrint(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}