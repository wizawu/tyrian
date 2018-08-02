declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        interface RepositoryIdUtility {
                            NO_TYPE_INFO: int
                            SINGLE_REP_TYPE_INFO: int
                            PARTIAL_LIST_TYPE_INFO: int
                            isChunkedEncoding(arg0: int): boolean
                            isCodeBasePresent(arg0: int): boolean
                            getTypeInfo(arg0: int): int
                            getStandardRMIChunkedNoRepStrId(): int
                            getCodeBaseRMIChunkedNoRepStrId(): int
                            getStandardRMIChunkedId(): int
                            getCodeBaseRMIChunkedId(): int
                            getStandardRMIUnchunkedId(): int
                            getCodeBaseRMIUnchunkedId(): int
                            getStandardRMIUnchunkedNoRepStrId(): int
                            getCodeBaseRMIUnchunkedNoRepStrId(): int
                        }
                    }
                }
            }
        }
    }
}