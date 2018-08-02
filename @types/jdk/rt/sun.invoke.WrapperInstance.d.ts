declare namespace sun {
    namespace invoke {
        interface WrapperInstance {
            getWrapperInstanceTarget(): java.lang.invoke.MethodHandle
            getWrapperInstanceType(): java.lang.Class<any>
        }
    }
}