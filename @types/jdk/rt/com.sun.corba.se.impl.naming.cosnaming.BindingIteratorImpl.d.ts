declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace naming {
                        namespace cosnaming {
                            abstract class BindingIteratorImpl extends org.omg.CosNaming.BindingIteratorPOA {
                                protected orb: org.omg.CORBA.ORB
                                public constructor(arg0: org.omg.CORBA.ORB)
                                public next_one(arg0: org.omg.CosNaming.BindingHolder): boolean
                                public next_n(arg0: int, arg1: org.omg.CosNaming.BindingListHolder): boolean
                                public list(arg0: int, arg1: org.omg.CosNaming.BindingListHolder): boolean
                                public destroy(): void
                                protected abstract NextOne(arg0: org.omg.CosNaming.BindingHolder): boolean
                                protected abstract Destroy(): void
                                protected abstract RemainingElements(): int
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}